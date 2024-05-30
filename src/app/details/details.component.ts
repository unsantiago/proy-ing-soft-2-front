import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  placeholders: any;

  // Mapa de servicios con sus íconos
  serviceIcons: { [key: string]: string } = {
    'Wifi': '/assets/wifi.png',
    'Cocina': '/assets/cocina.png',
    'TV': '/assets/tv.png',
    'Refrigerador': '/assets/refrigerador.png',
    'Cámaras de seguridad en la parte exterior de la propiedad': '/assets/camara.png',
    'Conexión Ethernet': '/assets/ethernet.png',
    'Licuadora': '/assets/licuadora.png',
    'Aire acondicionado': '/assets/aire.png',
    'Estacionamiento': '/assets/estacionamiento.png',
    'Patio o balcón privado': '/assets/patio.png',
    'Secadora de pelo': '/assets/secador.png',
    'Mesa de billar': '/assets/billar.png', 
    'Microondas': '/assets/microondas.png',
    'Cocina completa': '/assets/cocina.png',
    'TV por cable': '/assets/tv.png',
    'Lavadora y secadora': '/assets/lavadorasecadora.png',
    'Gimnasio': '/assets/gym.png',
    'Piscina': '/assets/piscina.png',
    'Jacuzzi': '/assets/jacuzzi.png',
    'Calefacción': '/assets/calefaccion.png',
    'Zona BBQ': '/assets/bbq.png',
    'Jardín': '/assets/jardin.png',
    'Chimenea': '/assets/chimenea.png',
    'Zonas verdes': '/assets/jardin.png',
    'Cancha de fútbol': '/assets/canchafutbol.png',
    'Billar': '/assets/billar.png',
    'Ping pong': '/assets/pingpong.png',
    'Sauna': '/assets/sauna.png',
    'Sala de juegos': '/assets/salajuegos.png',
    'Terraza': '/assets/patio.png',
    'Vista al mar': '/assets/vistamar.png',
    'Servicio de limpieza': '/assets/limpieza.png',
    'Estacionamiento cercano': '/assets/estacionamiento.png',
    'Balcón privado': '/assets/patio.png',
  };
  detailsPage: any;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  ngAfterViewInit(): void {
    // Desplázate hacia arriba al cargar la página
    if (this.detailsPage) {
      this.detailsPage.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  get habitacionesTexto(): string {
    const nroHabitaciones = this.housingLocation?.nroHabitaciones;
    return nroHabitaciones === 1 ? 'habitación' : 'habitaciones';
  }

  getServiceIcon(servicio: string): string {
    return this.serviceIcons[servicio] || '/assets/default.png'; // Ícono por defecto si no se encuentra el servicio
  }
}
