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
      titulo: 'Diseño Arquitectónico',
      descripcion: 'Creación de proyectos únicos que combinan estética, funcionalidad y sostenibilidad.'
    },
    {
      titulo: 'Planificación Urbana',
      descripcion: 'Desarrollo integral de espacios urbanos que mejoran la calidad de vida comunitaria.'
    },
    {
      titulo: 'Consultoría Inmobiliaria',
      descripcion: 'Asesoramiento experto para maximizar el valor y potencial de proyectos inmobiliarios.'
    },
    {
      titulo: 'Diseño de Interiores',
      descripcion: 'Espacios interiores que reflejan personalidad y optimizan la funcionalidad.'
    },
    {
      titulo: 'Gestión de Proyectos',
      descripcion: 'Coordinación integral desde la concepción hasta la entrega final del proyecto.'
    },
    {
      titulo: 'Modelado BIM',
      descripcion: 'Tecnología avanzada para visualización y gestión eficiente de proyectos.'
    }
  ];

  obtenerIconoServicio(index: number): string {
    const iconos = ['📐', '🏙️', '📊', '🎨', '📋', '💻'];
    return iconos[index] || '🏗️';
  }

  formatearIndice(numero: number): string {
    return numero.toString().padStart(2, '0');
  }
}
