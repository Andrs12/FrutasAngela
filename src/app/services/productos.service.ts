import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import config from "../config"

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 

  }
  getProducto(id: number): Observable<any> {
    return this.http.get(config.api.url+'/api/productos/' + id);

  }

  getProductoNombre(nombre: string): Observable<any> {
    return this.http.get(config.api.url+'/api/productos/' + nombre);

  }
  getProductos(){
    return this.http.get(config.api.url+'/api/productos');
  }

  insertProducto(producto: any){
    return this.http.post(config.api.url+'/api/productos/', producto);
  }

  updateProducto(producto: any){
    return this.http.put(config.api.url+'/api/productos/', producto);
  }



}