import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { UsuarioService } from "../../services/usuario.service";
import { CarritoService } from "../../services/carrito.service";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  public listaProductos: any;
  public unidades: any = [];
  public usuario: any;
  constructor(private producto: ProductosService, private usuarioService: UsuarioService, private carritoService: CarritoService) {

  }

  ngOnInit(): void {
    this.listaProductos = this.producto.getProductos().subscribe(data => {
      this.listaProductos = data;
      console.log(this.listaProductos)
    });
    this.usuarioService.getUserLogged().subscribe(data => {
      this.usuario = data
    })

  }

  addCarrito(id_producto: number) {
    for (let i = 0; i < this.unidades.length; i++) {
      if (this.unidades[i].id == id_producto) {
        const productoCarro = {
          'id_producto': id_producto,
          'unidades': this.unidades[i].unidades,
          'carrito_id': this.usuario.carro
        }
        console.log(productoCarro);
        this.carritoService.insertarProductoCarrito(productoCarro).subscribe(data => {

        });

      }
    }
  }

  actualizaUnidades(event: any, id: number) {
    let existe = false;
    for (let i = 0; i < this.unidades.length; i++) {
      if (this.unidades[i].id == id) {
        this.unidades[i] = {
          'id': id,
          'unidades': event.target.value
        }
        existe = true;
      }
    }
    if (!existe) {
      this.unidades.push(
        {
          'id': id,
          'unidades': event.target.value
        });
    }
    console.log(this.unidades);
  }
}
