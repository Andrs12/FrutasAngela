import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import config from "../../config";
@Component({
  selector: 'app-ajustes-usuario',
  templateUrl: './ajustes-usuario.component.html',
  styleUrls: ['./ajustes-usuario.component.css']
})
export class AjustesUsuarioComponent implements OnInit {

  public nombre = "";
  public usuario = {
    id: 0,
    carro: "",
    rol: "",
    nombre: "",
    contrasena: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: ""
  }
  public direccionSelecionada: any = 0;
  public nuevaDireccion: any;
  public direcciones: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const token: string = this.usuarioService.getToken();
    if (token.length > 1) {
      this.usuarioService.getUserLogged().subscribe(data => {
        this.usuario = data;
        this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
          this.direcciones = dataDirecciones;

        });
      })
    }
    else {
      alert("Inicia sesion para configurar tu usuario");
      location.href = config.web.raiz;
    }


  }

  public guardar() {
    this.usuarioService.actualizar(this.usuario).subscribe(data => {

      this.usuarioService.login(this.usuario).subscribe(data => {
        this.usuarioService.setToken(data.token);

      });
    });

  }
  /* Direccion */
  public guardarDireccion() {
    const nuevaDireccion = {
      idUsuario: this.usuario.id,
      direccion: this.nuevaDireccion
    };
    this.usuarioService.insertarDireccion(nuevaDireccion).subscribe(data => {
      this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
        this.direcciones = dataDirecciones;

      });

    });
  }

  public eliminarDireccion() {
    this.usuarioService.eliminarDireccion(this.direccionSelecionada).subscribe(data => {
      this.usuarioService.getDirecciones(this.usuario.id).subscribe(dataDirecciones => {
        this.direcciones = dataDirecciones;

      });

    });
  }

}
