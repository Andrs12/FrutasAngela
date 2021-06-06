import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { IndexComponent } from "./components/index/index.component";
import { ListaProductosComponent } from "./components/lista-productos/lista-productos.component";
import { CarritoComponent } from "./components/carrito/carrito.component";
import { GestionProductosComponent } from "./components/gestion-productos/gestion-productos.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { VentasComponent } from "./components/ventas/ventas.component";
import { AjustesUsuarioComponent } from "./components/ajustes-usuario/ajustes-usuario.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "productos", component: ListaProductosComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "configuracionProductos", component: GestionProductosComponent },
  { path: "busqueda/:nombre", component: BusquedaComponent },
  { path: "ajustesUsuario", component: AjustesUsuarioComponent },
  { path: "ventas", component: VentasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
