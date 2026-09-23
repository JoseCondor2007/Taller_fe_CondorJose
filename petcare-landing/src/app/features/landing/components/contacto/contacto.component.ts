import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    telefono: '+51 999 888 777',
    whatsapp: '+51999888777',
    email: 'contacto@petcare.pe',
    direccion: 'Av. Mascotas 123, San Vicente de Cañete, Lima',
    referencia: 'Frente al Parque Central'
  };

  horarios = [
    { dia: 'Lunes a Viernes', hora: '8:00 am – 8:00 pm' },
    { dia: 'Sábados', hora: '8:00 am – 6:00 pm' },
    { dia: 'Domingos', hora: '9:00 am – 2:00 pm' },
    { dia: 'Urgencias', hora: '24/7 — Todos los días' }
  ];
}