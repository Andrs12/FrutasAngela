import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { UsuarioService } from "../../services/usuario.service";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public listaProductos: any = [];
  constructor(private cookie: CookieService, private usuario: UsuarioService, private productoService: ProductosService) { }

  ngOnInit(): void {

    this.productoService.getProductos().subscribe(data => {
      this.listaProductos.push(data[data.length-1]);
      this.listaProductos.push(data[data.length-2]);
      this.listaProductos.push(data[data.length-3]);
      console.log(this.listaProductos)
    });
  }


}
