import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from "../../services/productos.service";
import { UsuarioService } from "../../services/usuario.service";
import { CarritoService } from "../../services/carrito.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public listaProductos: any;
  public unidades: any = [];
  public usuario: any;
  constructor(private route: ActivatedRoute, private producto: ProductosService, private usuarioService: UsuarioService, private carritoService: CarritoService) {

  }

  ngOnInit(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    
    this.listaProductos = this.producto.getProductoNombre(nombre+"").subscribe(data => {
      this.listaProductos = data;
    });
    this.usuarioService.getUserLogged().subscribe(data => {
      this.usuario = data
    })

  }

  addCarrito(id_producto: number) {
    for (let i = 0; i < this.unidades.length; i++) {
      if (this.unidades[i].ID == id_producto) {
        const productoCarro = {
          'ID_PRODUCTO': id_producto,
          'UNIDADES': this.unidades[i].UNIDADES,
          'CARRITO_ID': this.usuario.carro
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
          'ID': id,
          'UNIDADES': event.target.value
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
  }
}

