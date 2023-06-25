import { Component } from '@angular/core';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})

export class DonacionComponent {
  paypalUrl = 'https://www.sandbox.paypal.com/donate/?hosted_button_id=YAUN3PNN2GDXA';
  donar() {
    window.open(this.paypalUrl, "_blank");
  }
}
