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
  public resultado: boolean = false;
  public listaProductos: any;
  public unidades: any = [];
  public usuario: any;
  public total: any = [];

  constructor(private route: ActivatedRoute, private producto: ProductosService, private usuarioService: UsuarioService, private carritoService: CarritoService) {

  }

  ngOnInit(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    
    this.listaProductos = this.producto.getProductoNombre(nombre+"").subscribe(data => {
      this.listaProductos = data;
      if(this.listaProductos[0] != undefined){
        this.resultado = true;
      }
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
          'unidades': parseFloat(this.unidades[i].unidades),
          'carrito_id': this.usuario.id_carrito
        }
        this.carritoService.insertarProductoCarrito(productoCarro).subscribe(data => {
        });
      }
    }
  }

  actualizaUnidades(event: any, id: number, pvp_undidad: number) {
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
    this.total[id] = event.target.value * pvp_undidad;
    this.total[id] = this.total[id].toFixed(2);
  }
}

