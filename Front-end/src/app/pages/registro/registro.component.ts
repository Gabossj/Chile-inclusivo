import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  register: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.register.valid) {
      // Lógica para enviar el formulario
      console.log("test")
    } else {
      // Muestra un mensaje de error o realiza acciones adicionales si el formulario no es válido
    }
  }
}
