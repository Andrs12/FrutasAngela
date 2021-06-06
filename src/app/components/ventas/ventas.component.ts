import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { UsuarioService } from '../../services/usuario.service';
import config from "../../config"

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private carritoService: CarritoService, private usuarioService: UsuarioService) { }
  public resumen: any
  ngOnInit(): void {
    const token = this.usuarioService.getToken();
    if (token != null) {
      this.usuarioService.getUserLogged().subscribe(data => {
        if (data.rol != 1) {
          alert("Tu usuario no tiene permiso para estar aqui")
          location.href = config.web.raiz;
        } else {
          this.carritoService.resumenVentas().subscribe(data => {
            this.resumen = data;
          });
        }
      });


    }


  }


}
