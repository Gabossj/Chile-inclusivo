import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  private loginVisible: boolean = false;
  private registerVisible: boolean = false;
  private containerVisible: boolean = false;
  private lastBoxLoginVisible: boolean = false;
  private lastBoxRegisterVisible: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.widthPage();
  }

  widthPage() {
    if (window.innerWidth > 850) {
      this.lastBoxRegisterVisible = true;
      this.lastBoxLoginVisible = true;
    } else {
      this.lastBoxRegisterVisible = true;
      this.lastBoxLoginVisible = false;
      this.loginVisible = true;
      this.containerVisible = true;
      this.registerVisible = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.widthPage();
  }

  iniciarSesion() {
    if (window.innerWidth > 850) {
      this.loginVisible = true;
      this.containerVisible = false; // Ocultar el contenedor
      this.registerVisible = false;
      this.lastBoxLoginVisible = false;
    } else {
      this.loginVisible = true;
      this.containerVisible = false; // Ocultar el contenedor
      this.registerVisible = false;
      this.lastBoxRegisterVisible = true;
      this.lastBoxLoginVisible = false;
    }
  }
  
  register() {
    if (window.innerWidth > 850) {
      this.registerVisible = true;
      this.containerVisible = false; // Ocultar el contenedor
      this.loginVisible = false;
      this.lastBoxRegisterVisible = false;
      this.lastBoxLoginVisible = false;
    } else {
      this.registerVisible = true;
      this.containerVisible = false; // Ocultar el contenedor
      this.loginVisible = false;
      this.lastBoxRegisterVisible = false;
      this.lastBoxLoginVisible = false;
    }
  }
  
}
