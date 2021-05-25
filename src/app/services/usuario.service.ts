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

  constructor(private http: HttpClient, private cookies: CookieService) { }


  getUsuario(id: number): Observable<any> {
    return this.http.get(config.api.url+'/api/usuarios/' + id);
  }
  getUsuarios(): Observable<any> {
    return this.http.get(config.api.url+'/api/usuarios/');
  }

  login(usuario: any): Observable<any> {
    return this.http.post(config.api.url+'/api/usuarios/login', usuario);
  }

  register(usuario: any): Observable<any> {
    console.log(usuario)
    return this.http.post(config.api.url+'/api/usuarios/register', usuario);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUserLogged() {
    var decoded = jwt_decode(this.cookies.get("token"));
    console.log(decoded);

    /* return ({
      nombre: decode.body.nombre,
      apellido1: decode.body.apellido1,
      apellido2: decode.body.apellido2,
      telefono: decode.body.telefono,
      email: decode.body.email,
      contrasena: decode.body.contrasena
    }); */
  } 
  
  logout(){
    this.cookies.delete("token");  }
}
