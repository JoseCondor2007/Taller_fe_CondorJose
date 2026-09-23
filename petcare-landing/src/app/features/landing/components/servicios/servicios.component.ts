import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servicio } from '../../interfaces/servicio';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.servicios = this.landingService.getServicios();
  }
}