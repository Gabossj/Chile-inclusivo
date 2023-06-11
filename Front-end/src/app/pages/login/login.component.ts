import { Component } from '@angular/core';

@Component({
  selector: 'app.login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  submitForm() {
    if (this.isValidForm()) {
      // Realizar acciones necesarias si el formulario es válido
      console.log('Formulario válido', this.formData);
    }
  }

  isValidForm(): boolean {
    // Verificar si los campos requeridos están completos
    return this.formData.email !== '' && this.formData.password !== '';
  }
}
