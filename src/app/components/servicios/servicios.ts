import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Servicio {
  titulo: string;
  descripcion: string;
  categoria: 'planificacion' | 'evaluacion' | 'gestion' | 'participacion' | 'innovacion';
  criteriosESG: string[];
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
      titulo: 'Planificación Urbana y Territorial',
      descripcion: 'Formulación de planes y políticas para orientar el desarrollo sostenible de ciudades y territorios, integrando criterios ESG.',
      categoria: 'planificacion',
      criteriosESG: ['Sostenibilidad Urbana', 'Gestión Territorial', 'Participación Ciudadana']
    },
    {
      titulo: 'Evaluación de Impacto Socioambiental',
      descripcion: 'Estudios integrales que identifican y mitigan impactos negativos en proyectos de desarrollo urbano y territorial.',
      categoria: 'evaluacion',
      criteriosESG: ['Cambio Climático', 'Calidad de Vida', 'Gestión de Riesgos']
    },
    {
      titulo: 'Gestión de Riesgos y Desastres',
      descripcion: 'Planificación territorial que considera prevención de riesgos naturales y adaptación al cambio climático.',
      categoria: 'gestion',
      criteriosESG: ['Gestión Territorial', 'Inclusión y Equidad', 'Innovación y Mejora']
    },
    {
      titulo: 'Participación Ciudadana',
      descripcion: 'Metodologías de diálogo y colaboración para incorporar necesidades comunitarias en proyectos territoriales.',
      categoria: 'participacion',
      criteriosESG: ['Desarrollo Comunitario', 'Inclusión y Equidad', 'Ética y Transparencia']
    },
    {
      titulo: 'Infraestructura Verde y Azul',
      descripcion: 'Soluciones basadas en naturaleza para gestión de aguas pluviales, biodiversidad y regulación climática urbana.',
      categoria: 'planificacion',
      criteriosESG: ['Sostenibilidad Urbana', 'Cambio Climático', 'Calidad de Vida']
    },
    {
      titulo: 'Certificación y Auditoría ESG',
      descripcion: 'Implementación y verificación de criterios ambientales, sociales y de gobernanza en proyectos de desarrollo.',
      categoria: 'evaluacion',
      criteriosESG: ['Ética y Transparencia', 'Gestión de Riesgos', 'Innovación y Mejora']
    },
    {
      titulo: 'Diseño de Políticas Territoriales',
      descripcion: 'Desarrollo de marcos normativos y políticas públicas para el desarrollo territorial sostenible.',
      categoria: 'planificacion',
      criteriosESG: ['Gestión Territorial', 'Ética y Transparencia', 'Desarrollo Comunitario']
    },
    {
      titulo: 'Capacitación en Desarrollo Sostenible',
      descripcion: 'Programas de formación y sensibilización sobre gestión territorial sostenible y criterios ESG.',
      categoria: 'innovacion',
      criteriosESG: ['Desarrollo Comunitario', 'Innovación y Mejora', 'Ética y Transparencia']
    },
    {
      titulo: 'Economía Circular Territorial',
      descripcion: 'Implementación de estrategias de economía circular en construcción y desarrollo urbano.',
      categoria: 'innovacion',
      criteriosESG: ['Sostenibilidad Urbana', 'Innovación y Mejora', 'Gestión Territorial']
    }
  ];

  constructor(private router: Router) {}

  obtenerIconoServicio(categoria: string): string {
    const iconos = {
      'planificacion': '🗺️',
      'evaluacion': '📊',
      'gestion': '⚡',
      'participacion': '🤝',
      'innovacion': '💡'
    };
    return iconos[categoria as keyof typeof iconos] || '🏗️';
  }

  formatearIndice(numero: number): string {
    return numero.toString().padStart(2, '0');
  }

  solicitarInformacion(servicio: Servicio): void {
    this.router.navigate(['/contacto'], { 
      queryParams: { servicio: servicio.titulo } 
    });
  }

  navegarAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  navegarAContacto(): void {
    this.router.navigate(['/contacto']);
  }
}
