import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from "../../services/productos.service";
import { BusquedaComponent } from "../busqueda/busqueda.component";
import config from "../../config"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public textoBusqueda = "";
  constructor(private productoServicio: ProductosService) { }

  ngOnInit(): void {
  }

  public buscar(texto: string) {
    location.href = config.web.raiz + "/busqueda/" + texto;
  }

}
