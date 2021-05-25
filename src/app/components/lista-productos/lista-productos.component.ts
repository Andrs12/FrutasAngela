import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  public listaProductos: any;
  constructor(private producto: ProductosService) {

  }

  ngOnInit(): void {
    this.listaProductos = this.producto.getProductos().subscribe(data => {
      this.listaProductos = data;
    });
  }

}
