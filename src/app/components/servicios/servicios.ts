import { Component } from '@angular/core';

interface Servicio {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {

  servicios: Servicio[] = [
    {
      titulo: 'Planificación Urbana Sostenible',
      descripcion: 'Desarrollo de planes urbanos que integran criterios ambientales, sociales y de gobernanza para ciudades resilientes.'
    },
    {
      titulo: 'Gestión Territorial',
      descripcion: 'Administración integral del territorio considerando ecosistemas, riesgos naturales y adaptación climática.'
    },
    {
      titulo: 'Participación Ciudadana',
      descripcion: 'Metodologías de colaboración comunitaria para incorporar necesidades locales en proyectos territoriales.'
    },
    {
      titulo: 'Infraestructura Verde',
      descripcion: 'Soluciones basadas en naturaleza para gestión de aguas, mitigación climática y biodiversidad urbana.'
    },
    {
      titulo: 'Evaluación ESG',
      descripcion: 'Implementación de criterios ambientales, sociales y de gobernanza en proyectos de desarrollo.'
    },
    {
      titulo: 'Diseño Urbano Inclusivo',
      descripcion: 'Espacios públicos accesibles y seguros que fomenten cohesión social y calidad de vida.'
    }
  ]

  obtenerIconoServicio(index: number): string {
    const iconos = ['📐', '🏙️', '📊', '🎨', '📋', '💻'];
    return iconos[index] || '🏗️';
  }

  formatearIndice(numero: number): string {
    return numero.toString().padStart(2, '0');
  }
}
