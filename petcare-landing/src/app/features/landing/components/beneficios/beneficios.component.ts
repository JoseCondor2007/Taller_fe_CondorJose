import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beneficio } from '../../interfaces/beneficio';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  beneficios: Beneficio[] = [];

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.beneficios = this.landingService.getBeneficios();
  }
}