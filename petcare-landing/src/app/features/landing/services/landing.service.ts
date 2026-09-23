import { Injectable } from '@angular/core';
import { Servicio } from '../interfaces/servicio';
import { Beneficio } from '../interfaces/beneficio';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private servicios: Servicio[] = [
    { icono: '🩺', titulo: 'Consulta General', descripcion: 'Evaluación completa del estado de salud de tu mascota.', precio: 'Desde S/ 40' },
    { icono: '💉', titulo: 'Vacunación', descripcion: 'Vacunas esenciales con carnet actualizado.', precio: 'Desde S/ 60' },
    { icono: '✂️', titulo: 'Peluquería', descripcion: 'Baño, corte y estilizado profesional.', precio: 'Desde S/ 50' },
    { icono: '🚑', titulo: 'Urgencias 24/7', descripcion: 'Atención inmediata ante cualquier emergencia.', precio: 'Disponible' },
    { icono: '🦷', titulo: 'Limpieza Dental', descripcion: 'Cuidado bucal para prevenir enfermedades.', precio: 'Desde S/ 120' },
    { icono: '🏠', titulo: 'Delivery Pet Shop', descripcion: 'Alimentos y accesorios hasta la puerta de tu casa.', precio: 'Gratis +S/ 80' }
  ];

  private beneficios: Beneficio[] = [
    { icono: '⏰', titulo: 'Urgencias 24/7', descripcion: 'Estamos disponibles cuando tu mascota más lo necesita.' },
    { icono: '👨‍⚕️', titulo: 'Veterinarios certificados', descripcion: 'Especialistas en pequeños animales con amplia experiencia.' },
    { icono: '🏠', titulo: 'Delivery pet shop', descripcion: 'Recibe alimentos y accesorios sin salir de casa.' },
    { icono: '📱', titulo: 'App de seguimiento', descripcion: 'Historial clínico y recordatorios de vacunas al alcance.' },
    { icono: '💳', titulo: 'Pagos flexibles', descripcion: 'Efectivo, Yape, Plin, tarjetas y crédito veterinario.' },
    { icono: '❤️', titulo: 'Amor por los animales', descripcion: 'Tratamos a cada mascota como si fuera nuestra.' }
  ];

  getServicios(): Servicio[] {
    return this.servicios;
  }

  getBeneficios(): Beneficio[] {
    return this.beneficios;
  }
}