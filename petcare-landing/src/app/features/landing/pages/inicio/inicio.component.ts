import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiciosComponent } from '../../components/servicios/servicios.component';
import { BeneficiosComponent } from '../../components/beneficios/beneficios.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, ServiciosComponent,
    BeneficiosComponent, NosotrosComponent, GaleriaComponent,
    ContactoComponent, FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}