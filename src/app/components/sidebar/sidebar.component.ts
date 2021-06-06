import { Component, ViewChild, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public usuario = {
    id: 0,
    nombre: "Usuario",
    rol: 0
  };
  public configuracionProducto = false;
  public rutas = {
    inicio: false,
    productos: false,
    gestionProductos: false,
    ventas: false
  }

  constructor(private service: UsuarioService, private modal: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.rutaActiva()

    if (this.service.getToken() != 'undefined' && this.service.getToken() != '') {
      this.service.getUserLogged().subscribe(data => {
        this.usuario = data;
        this.mostrar();
      });

    }


  }

  private mostrar() {
    if (this.usuario.rol == 1) {
      this.configuracionProducto = true;
    }
  }

  public rutaActiva() {
    setTimeout(() => {
      switch (this.router.url) {
        case "/":
          this.rutas.inicio = true;
          this.rutas.productos = false;
          this.rutas.gestionProductos = false;
          this.rutas.ventas = false;
          break;
        case "/productos":
          this.rutas.inicio = false;
          this.rutas.productos = true;
          this.rutas.gestionProductos = false;
          this.rutas.ventas = false;
          break;
        case "/configuracionProductos":
          this.rutas.inicio = false;
          this.rutas.productos = false;
          this.rutas.gestionProductos = true;
          this.rutas.ventas = false;
          break;
        case "/ventas":
          this.rutas.inicio = false;
          this.rutas.productos = false;
          this.rutas.gestionProductos = false;
          this.rutas.ventas = true;
          break;
      }
    }, 10);

  }

  public getloging() {
    if (this.service.getToken() == "" || this.service.getToken() == 'undefined') {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.service.logout();
  }

}
