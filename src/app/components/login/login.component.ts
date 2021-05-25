import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: UsuarioService, private router: Router) {
    this.email = "";
    this.password = "";
  }

  login() {
    const usuario = {
      email: this.email,
      contrasena: this.password
    }
    var token
    this.service.login(usuario).subscribe(data => {
      this.service.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {

  }

}
