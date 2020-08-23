import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { AuthGuard } from './guards/auth.guard';
import { RegistroAtencionComponent } from './componentes/registro-atencion/registro-atencion.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login' ,component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'dashboard/registroAtencion', component: RegistroAtencionComponent,canActivate:[AuthGuard]},
  {path: 'perfil',component: PerfilComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
