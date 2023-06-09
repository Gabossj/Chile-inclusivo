import { Component,} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})

export class ContactoComponent {
  formularioContacto: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  enviarFormulario() {
    if (this.formularioContacto.valid) {
      // Lógica para enviar el formulario
    } else {
      // Muestra un mensaje de error o realiza acciones adicionales si el formulario no es válido
    }
  }
}