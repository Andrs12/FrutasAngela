import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { IndexComponent } from "./components/index/index.component";
import { ListaProductosComponent } from "./components/lista-productos/lista-productos.component";
const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "productos", component: ListaProductosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
