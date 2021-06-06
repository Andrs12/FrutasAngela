import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { CarritoService } from "../../services/carrito.service";

import config from "../../config"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public usuario = {
    nombre: "",
    contrasena: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: ""
  }
  public confirmarContrasena = "";

  constructor(private service: UsuarioService, private serviceCarrito: CarritoService) {

  }
  ngOnInit(): void {
  }

  registrar() {
    if (this.usuario.nombre == "" || this.usuario.contrasena == "" || this.confirmarContrasena == "" || this.usuario.email == "" || this.usuario.telefono == "") {
      alert("Rellene los campos obligatorios: \n- Nombre \n- Contraseña \n- Confirmar contraseña \n- Email  \n- Telefono");
    }
    else {
      if (this.usuario.contrasena == this.confirmarContrasena) {
        this.serviceCarrito.insertarCarrito().subscribe(data =>{
        });
        this.service.register(this.usuario).subscribe(data => {
          alert(data.message);

        });
      }
      else {
        alert("Las contraseñas no coinciden");

      }

    }

  }

}
