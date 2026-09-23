import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = 'contacto@petcare.pe';
  telefono = '(01) 555-1234';
  whatsapp = '+51 999 888 777';
  direccion = 'Av. Mascotas 123, San Vicente de Cañete';
}