import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app.login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.login.valid) {
      // Lógica para enviar el formulario
      console.log("test")
    } else {
      // Muestra un mensaje de error o realiza acciones adicionales si el formulario no es válido
    }
  }
}
