import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionComponent } from './pages/donacion/donacion.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InvolucrateComponent } from './pages/involucrate/involucrate.component';
import { OrganizacionComponent } from './pages/organizacion/organizacion.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ControlComponent } from './pages/control/control.component';
import { AuthGuard } from './services/authorizationGuard/auth.guard';

const routes: Routes = [
  // {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'donacion',component:DonacionComponent, canActivate: [AuthGuard], data: { roles: ['usuarios'] }},
  // {path:'donacion',component:DonacionComponent},
  {path:'login', component:LoginComponent},
  {path:'contacto', component:ContactoComponent, canActivate: [AuthGuard], data: { roles: ['usuarios'] }},
  // {path:'contacto', component:ContactoComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'publicaciones', component:PublicacionesComponent},
  {path:'involucrate', component:InvolucrateComponent},
  {path:'organizacion', component:OrganizacionComponent},
  {path:'politicas', component:PoliticasComponent},
  {path:'inicio', component:InicioComponent},
  {path:'registro', component:RegistroComponent},
  {path:'control', component:ControlComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
  // {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


