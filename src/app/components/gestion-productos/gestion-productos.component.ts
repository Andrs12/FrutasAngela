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

  public tiposProducto: any;
  public productos: any;
  public productoNuevo = {
    nombre: "",
    descripcion: "",
    pvp_unidad: 0,
    stock: 0,
    imagen: "",
    tipo_producto: 0
  };
  public productoIdModificar = 0;
  public productoModificar = {
    nombre: "das",
    descripcion: "fsafa",
    pvp_unidad: 0,
    stock: 0,
    imagen: "",
    tipo_producto: 0
  };
  public productoIdEliminar = 0;

  constructor(private productoService: ProductosService, public usuario: UsuarioService) { }



  ngOnInit(): void {
    
    this.productoService.getProductoTipos().subscribe(data => {
      this.tiposProducto = data;
    });
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  public getRol() {
    this.usuario.getUserLogged().subscribe(data => {
      if (data.rol == 1) {
        return true;
      } else {
        return false;
      }
    });
    return false;
  }

  public addProducto() {
    console.log(this.productoNuevo);
    this.productoService.insertProducto(this.productoNuevo).subscribe(data => {
      alert("Producto Insertado")
    });
  }

  public modificarProducto() {
console.log(this.productoModificar)
this.productoService.updateProducto(this.productoModificar).subscribe(data => {

});
  }

  public cargarModificar() {
    console.log(this.productoIdModificar)
    this.productoService.getProducto(this.productoIdModificar).subscribe(data => {
      this.productoModificar = data[0];
      console.log(this.productoModificar)
    });

  }

  public eliminarProducto() {
    console.log(this.productoIdModificar)
    this.productoService.eliminarProducto(this.productoIdEliminar).subscribe(data => {

    });

  }
}
