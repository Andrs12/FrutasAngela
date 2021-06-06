import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import config from "../../config"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: UsuarioService) {
    this.email = "";
    this.password = "";
  }

  login() {
    const usuario = {
      email: this.email,
      contrasena: this.password
    }
    this.service.login(usuario).subscribe(data => {
      if (data.message == undefined) {
        this.service.setToken(data.token);
        location.href = config.web.raiz;
      } else {
        alert(data.message);
      }
    });
  }

  ngOnInit(): void {

  }

}
