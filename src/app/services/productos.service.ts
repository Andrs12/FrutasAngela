import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, from } from 'rxjs';
import config from "../config"

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {

  }
  getProducto(id: number): Observable<any> {
    return this.http.get(config.api.url + '/api/productos/' + id);

  }

  getProductoNombre(nombre: string): Observable<any> {
    return this.http.get(config.api.url + '/api/productos/nombre/' + nombre);

  }
  getProductos(): Observable<any> {
    return this.http.get(config.api.url + '/api/productos');
  }

  getProductoTipos(): Observable<any> {
    return this.http.get(config.api.url + '/api/productos/tiposProducto');
  }

  insertProducto(producto: any): Observable<any> {
    return this.http.post(config.api.url + '/api/productos/', producto);
  }

  updateProducto(producto: any): Observable<any> {
    return this.http.put(config.api.url + '/api/productos/', producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(config.api.url + '/api/productos/' + id);
  }




}
