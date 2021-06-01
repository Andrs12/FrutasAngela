import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private cookie: CookieService, private usuario: UsuarioService) { }

  ngOnInit(): void {
    console.log(this.usuario.getToken)
  }


}
