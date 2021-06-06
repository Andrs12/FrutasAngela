import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { UsuarioService } from "../../services/usuario.service";
import { FormsModule } from '@angular/forms';
import config from "../../config"
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
    imagen: "",
    tipo_producto: 0
  };
  public productoIdModificar = 0;
  public productoModificar = {
    nombre: "",
    descripcion: "",
    pvp_unidad: 0,
    imagen: "",
    tipo_producto: 0
  };
  public productoIdEliminar = 0;

  constructor(private productoService: ProductosService, public usuario: UsuarioService) { }



  ngOnInit(): void {
    const token = this.usuario.getToken();
    if (token != null) {
      this.usuario.getUserLogged().subscribe(data => {
        if (data.rol != 1) {
          alert("Tu usuario no tiene permiso para entrar aqui");
          location.href = config.web.raiz;
        } else {
          this.productoService.getProductoTipos().subscribe(data => {
            this.tiposProducto = data;
          });
          this.productoService.getProductos().subscribe(data => {
            this.productos = data;
          });
        }
      });
    }
  }

  public addProducto() {
    if (this.productoNuevo.nombre == "" || this.productoNuevo.pvp_unidad == 0 || this.productoNuevo.imagen == "") {
      alert("Rellene los campos: \n- Nombre \n- PVP Unidad \n- Imagen")
    } else {
      this.productoService.insertProducto(this.productoNuevo).subscribe(data => {
        alert(data.message);
      });
    }
  }

  public modificarProducto() {

    if (this.productoIdModificar == 0) {
      alert("Selecione un producto");
    } else {
      if (this.productoModificar.nombre == "" || this.productoModificar.pvp_unidad == 0 || this.productoModificar.imagen == "") {
        alert("Los campos: \n- Nombre \n- PVP Unidad \n- Imagen \nNo pueden estar vacios")

      } else {
        this.productoService.updateProducto(this.productoModificar).subscribe(data => {
          alert(data.message);
        });
      }

    }

  }

  public cargarModificar() {
    this.productoService.getProducto(this.productoIdModificar).subscribe(data => {
      this.productoModificar = data[0];
    });

  }

  public eliminarProducto() {
    if(this.productoIdEliminar ==0){
      alert("Selecione un producto a eliminar")
    } else {
   
      this.productoService.eliminarProducto(this.productoIdEliminar).subscribe(data => {
        alert(data.message);
  
      });
    }
    

  }
}
