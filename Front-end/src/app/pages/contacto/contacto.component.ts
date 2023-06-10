import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  animations: [
    trigger('shakeAnimation', [
      state('shake', style({ transform: 'translateX(0)' })),
      transition('* => shake', [
        animate('0.2s', style({ transform: 'translateX(-10px)' })),
        animate('0.2s', style({ transform: 'translateX(10px)' })),
        animate('0.2s', style({ transform: 'translateX(-10px)' })),
        animate('0.2s', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  shakeState = '';
  contactData: any; // Objeto para almacenar los datos del formulario

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.snackBar.open('El formulario se ha enviado de manera exitosa.', 'Cerrar', { duration: 3000 });
    } else {
      this.snackBar.open('Por favor completa todos los campos correctamente.', 'Cerrar', { duration: 3000 });
      // manejar aqui si no es valido, resaltar campos faltante
      
      //animación "shake", agita el contenido del container
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.controls[key];
        if (control.invalid) {
          // Aquí puedes realizar las acciones necesarias para resaltar los campos inválidos
          console.log('Campo inválido:', key);
        }
      });
      console.log('TEST');
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    }
  }
}
