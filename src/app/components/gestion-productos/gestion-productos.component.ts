import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { UsuarioService } from "../../services/usuario.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  public add = false;
  public update = false;
  public delete = false;

  constructor(private producto: ProductosService, public usuario: UsuarioService) { }

  public tiposProducto: any;
  public productos: any;

  ngOnInit(): void {
    this.producto.getProductoTipos().subscribe(data => {
      this.tiposProducto = data;
    });
    this.producto.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  public desplegar(valor: string) {
    switch (valor) {
      case "add":
        if (this.add) {
          this.add = false;
        } else {
          this.add = true;
        }
        break;
      case "update":
        if (this.update) {
          this.update = false;
        } else {
          this.update = true;
        }
        break;
      case "delete":
        if (this.delete) {
          this.delete = false;
        } else {
          this.delete = true;
        }
        break;
    }

  }

  public getRol() {
    this.usuario.getUserLogged().subscribe(data => {
      if ( data.rol == 1) {
        return true;
      } else {
        return false;
      }
    });
    return false;
  }

  public addProducto() {

  }
}
