import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  galeria = [
    { url: 'assets/img/galeria-1.jpg', alt: 'Perro feliz' },
    { url: 'assets/img/galeria-2.jpg', alt: 'Gato curioso' },
    { url: 'assets/img/galeria-3.jpg', alt: 'Cachorro' },
    { url: 'assets/img/galeria-4.jpg', alt: 'Perro con dueño' },
    { url: 'assets/img/galeria-5.jpg', alt: 'Gato tierno' },
    { url: 'assets/img/galeria-6.jpg', alt: 'Mascota feliz' }
  ];
}