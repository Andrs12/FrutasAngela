import { Component } from '@angular/core';
import { UsuarioService } from "./services/usuario.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FrutasAngela';
  public logged = false;
  constructor(private service: UsuarioService,) {
  }

  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {
    const user = this.service.getToken()

    if (user == "") {
      this.logged = true;
      
    } else {
      this.logged = false;
    }

  }

   abrirModal() {
    console.log("HOLA")

}
}

