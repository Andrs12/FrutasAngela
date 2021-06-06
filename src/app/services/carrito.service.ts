import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, from } from 'rxjs';
import config from "../config"

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }



  getProductosCarrito(id: number): Observable<any> {
    return this.http.get(config.api.url + '/api/carrito/carritoProductos/' + id);
  }

  realizarCompra(productosCompra: any): Observable<any> {
    return this.http.post(config.api.url + '/api/carrito/comprar/', productosCompra);

  }

  insertarVenta(datosVenta: any): Observable<any> {
    return this.http.post(config.api.url + '/api/carrito/venta/', datosVenta);
  }

  insertarVentaProductos(productosVenta: any): Observable<any> {
    return this.http.post(config.api.url + '/api/carrito/ventaProducto/', productosVenta);
  }

  insertarProductoCarrito(productoCarrito: any): Observable<any> {
    return this.http.post(config.api.url + '/api/carrito/carritoProducto', productoCarrito);

  }

  eliminarProductoCarrito(id: number) {
    return this.http.delete(config.api.url + '/api/carrito/carritoProducto/' + id);

  }

  insertarCarrito(): Observable<any> {
    return this.http.post(config.api.url + '/api/carrito', null);
  }

  resumenVentas(): Observable<any> {
    return this.http.get(config.api.url + '/api/carrito/resumenVentas');
  }




}
