import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { CarritoService } from "../../services/carrito.service";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public usuario: any;
  public productosCarrito: any;
  public direcciones: any;
  public idDireccion: number = 0;
  public nuevaDireccion = "";
  public unidades: any = [];
  public total: any = [];

  constructor(private usuarioService: UsuarioService, private carritoService: CarritoService, private productoService: ProductosService) {

  }

  ngOnInit(): void {
    this.inicializar();

  }

  inicializar() {
    this.usuarioService.getUserLogged().subscribe(data => {
      this.usuario = data;
      this.carritoService.getProductosCarrito(data.id_carrito).subscribe(dataCarro => {
        this.productosCarrito = dataCarro;

        this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
          this.direcciones = dataDirecciones;
        });
      });
    });
  }

  public venta() {
    if (this.idDireccion == 0) {
      alert("Seleccione una direcion para continuar con la compra");
    } else {
      var direccion = {
        id_direccion: this.idDireccion,
        id_carrito: this.usuario.id_carrito
      }
      const venta = this.productosCarrito.concat(direccion);
      this.carritoService.insertarVenta(direccion).subscribe(data => {
        if (data.message = "true") {
          console.log(venta)
          this.carritoService.insertarVentaProductos(venta).subscribe(data => {
            alert("Venta realizada con exito, recibira su pedido de aqui a 5 días")
            this.carritoService.getProductosCarrito(this.usuario.id_carrito).subscribe(dataCarro => {
              this.productosCarrito = dataCarro;
            });
          });
        }
        else {
          alert("No se ha podido realizar su compra");
        }
      });
    }

  }

  eliminarProducto(id_producto: number) {
    this.carritoService.eliminarProductoCarrito(id_producto).subscribe(data => {
      this.carritoService.getProductosCarrito(this.usuario.id_carrito).subscribe(dataCarro => {
        this.productosCarrito = dataCarro;
      });
    });

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
    this.total[id] = (event.target.value * pvp_undidad).toFixed(2);
  }

  /* Direccion */

  public guardarDireccion() {
    const nuevaDireccion = {
      idUsuario: this.usuario.id,
      direccion: this.nuevaDireccion
    };
    this.usuarioService.insertarDireccion(nuevaDireccion).subscribe(data => {
      this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
        this.direcciones = dataDirecciones;

      });

    });
  }

  public eliminarDireccion() {
    this.usuarioService.eliminarDireccion(this.idDireccion).subscribe(data => {
      this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
        this.direcciones = dataDirecciones;

      });

    });
  }
}
