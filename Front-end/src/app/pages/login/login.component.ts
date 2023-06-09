import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  private login!: HTMLElement;
  private registerF!: HTMLElement;
  private contenedor_login_register!: HTMLElement;
  private lastBox_login!: HTMLElement;
  private lastBox_register!: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.login = this.elementRef.nativeElement.querySelector('.login');
    this.registerF = this.elementRef.nativeElement.querySelector('.register');
    this.contenedor_login_register = this.elementRef.nativeElement.querySelector('.contenedor__login-register');
    this.lastBox_login = this.elementRef.nativeElement.querySelector('.lastBox-login');
    this.lastBox_register = this.elementRef.nativeElement.querySelector('.lastBox-register');
    this.widthPage();
  }

  widthPage() {
    if (window.innerWidth > 850){
        this.lastBox_register.style.display = "block";
        this.lastBox_login.style.display = "block";
    }else{
        this.lastBox_register.style.display = "block";
        this.lastBox_register.style.opacity = "1";
        this.lastBox_login.style.display = "none";
        this.login.style.display = "block";
        this.contenedor_login_register.style.left = "0px";
        this.registerF.style.display = "none";   
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.widthPage();
  }

  iniciarSesion() {
    if (window.innerWidth > 850){
        this.login.style.display = "block";
        this.contenedor_login_register.style.left = "1%";
        this.registerF.style.display = "none";
        this.registerF.style.opacity = "1";
        this.lastBox_login.style.opacity = "0";
    }else{
        this.login.style.display = "block";
        this.contenedor_login_register.style.left = "0px";
        this.registerF.style.display = "none";
        this.lastBox_register.style.display = "block";
        this.lastBox_login.style.display = "none";
    }
  }

  register() {
    if (window.innerWidth > 850){
        this.registerF.style.display = "block";
        this.contenedor_login_register.style.left = "51%";
        this.login.style.display = "none";
        this.lastBox_register.style.opacity = "0";
        this.lastBox_login.style.opacity = "1";
    }else{
        this.registerF.style.display = "block";
        this.contenedor_login_register.style.left = "0px";
        this.login.style.display = "none";
        this.lastBox_register.style.display = "none";
        this.lastBox_login.style.display = "block";
        this.lastBox_login.style.opacity = "1";
    }
  }
}

