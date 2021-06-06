import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";
import config from "../config"
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies: CookieService) {
    const usuario = this.getUserLogged();

  }


  getUsuario(id: number): Observable<any> {
    return this.http.get(config.api.url + '/api/usuarios/' + id);
  }
  getUsuarios(): Observable<any> {
    return this.http.get(config.api.url + '/api/usuarios/');
  }

  login(usuario: any): Observable<any> {
    return this.http.post(config.api.url + '/api/usuarios/login', usuario);
  }

  register(usuario: any): Observable<any> {
    return this.http.post(config.api.url + '/api/usuarios/register', usuario);
  }

  getUserLogged(): Observable<any> {
    const token = {
      token: this.getToken()
    };
    return this.http.post(config.api.url + '/api/usuarios/descifrar', token);
  }

  getDirecciones(id: number): Observable<any> {
    return this.http.get(config.api.url + '/api/usuarios/direcciones/' + id);
  }

  insertarDireccion(direccion: any): Observable<any> {
    return this.http.post(config.api.url + '/api/usuarios/direcciones', direccion);
  }

  eliminarDireccion(idDireccion: any): Observable<any> {
    return this.http.delete(config.api.url + '/api/usuarios/direcciones/' + idDireccion);
  }

  actualizar(usuario: any): Observable<any> {
    return this.http.put(config.api.url + '/api/usuarios/', usuario);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  logout() {
    this.cookies.delete("token");
    location.reload();
  }
}
