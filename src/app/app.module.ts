import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AjustesUsuarioComponent } from './components/ajustes-usuario/ajustes-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ListaProductosComponent,
    CarritoComponent,
    GestionProductosComponent,
    BusquedaComponent,
    AjustesUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule,
    NgbModule
  ],
  providers: [UsuarioService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
