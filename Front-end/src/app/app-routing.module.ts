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

const routes: Routes = [
  {path:'donacion',component:DonacionComponent},
  {path:'login', component:LoginComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'publicaciones', component:PublicacionesComponent},
  {path:'involucrate', component:InvolucrateComponent},
  {path:'organizacion', component:OrganizacionComponent},
  {path:'politicas', component:PoliticasComponent},
  {path:'inicio', component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


