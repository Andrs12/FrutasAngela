import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string

  constructor(private service: UsuarioService) {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.nombre = "";
    this.apellido1 = "";
    this.apellido2 = "";
    this.telefono = "";
  }
  ngOnInit(): void {
  }

  register() {
    const usuario = {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      email: this.email,
      telefono: this.telefono
    }

    this.service.register(usuario).subscribe(data => {
      this.service.setToken(data.token);
    });
  }
}
