import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DonacionComponent } from './pages/donacion/donacion.component';
import { InvolucrateComponent } from './pages/involucrate/involucrate.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { OrganizacionComponent } from './pages/organizacion/organizacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro/registro.component';
import { ControlComponent } from './pages/control/control.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditRolComponent } from './pages/edit-rol/edit-rol.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    InicioComponent,
    ContactoComponent,
    DonacionComponent,
    InvolucrateComponent,
    LoginComponent,
    NoticiasComponent,
    PoliticasComponent,
    PublicacionesComponent,
    OrganizacionComponent,
    RegistroComponent,
    ControlComponent,
    EditRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

