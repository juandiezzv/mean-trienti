import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
//Servicios
import { AuthService } from './servicios/auth.service';
import { ClienteService } from './servicios/cliente.service';
import { AuthGuard } from './guards/auth.guard';
import { RegistroAtencionComponent } from './componentes/registro-atencion/registro-atencion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    DashboardComponent,
    RegistroAtencionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
