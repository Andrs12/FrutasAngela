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

  constructor(private usuarioService: UsuarioService, private carritoService: CarritoService, private productoService: ProductosService) {

  }

  ngOnInit(): void {
    this.inicializar();

  }
  async inicializar() {
    this.usuarioService.getUserLogged().subscribe(data => {
      this.usuario = data;
      this.carritoService.getProductosCarrito(data.carro).subscribe(dataCarro => {
        this.productosCarrito = dataCarro;
        console.log(this.productosCarrito);
        this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
          this.direcciones = dataDirecciones;

        });
      });
    });

  }

  public venta() {
    var direccion = {
      ID_Direccion: this.idDireccion,
      ID_Carrito: this.usuario.carro
    }
    const venta = this.productosCarrito.concat(direccion);
    this.carritoService.realizarCompra(venta).subscribe(data => {

    });
  }

  eliminarProducto(id_producto: number) {
    this.carritoService.eliminarProductoCarrito(id_producto).subscribe(data => {
      location.reload();

    });

  }
}
