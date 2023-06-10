import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent {
  constructor(private router: Router) {}

  renderPayPalDonateButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        // Lógica para crear la orden de donación
      },
      onApprove: (data: any, actions: any) => {
        // Lógica para manejar la aprobación de la donación
      }
    }).render('#donate-button');
  }

  navigateToPrivacyPolicy(): void {
    this.router.navigate(['/politicas']);
  }
}
