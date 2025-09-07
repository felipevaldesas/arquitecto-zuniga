// estudio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MiembroEquipo, InformacionContacto } from '../../models/interfaces';

interface Servicio {
  titulo: string;
  descripcion: string;
}

interface Reconocimiento {
  anio: string;
  titulo: string;
  organizacion: string;
}

interface EventoHistoria {
  anio: string;
  titulo: string;
  descripcion: string;
}

interface PasoProceso {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-estudio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudio.html',
  styleUrl: './estudio.scss'
})
export class Estudio {
  // Datos del equipo
  equipo: MiembroEquipo[] = [
    {
      id: 1,
      nombre: 'Felipe Zúñiga',
      cargo: 'Arquitecto Principal & Fundador',
      email: 'azuniga@estudiozuniga.cl',
      biografia: 'Con más de 20 años de experiencia, Felipe ha liderado proyectos emblemáticos que han redefinido el paisaje urbano de Santiago.',
      especialidad: 'Diseño Sostenible'
    },
    {
      id: 2,
      nombre: 'María Fernanda Zúñiga',
      cargo: 'Jefe de Proyectos',
      email: 'mftorres@estudiozuniga.cl',
      biografia: 'Experto en gestión de proyectos complejos y coordinación de equipos multidisciplinarios.',
      especialidad: 'Gestión BIM'
    },
    {
      id: 3,
      nombre: 'Isabella Rojas',
      cargo: 'Arquitecta Senior',
      email: 'irojas@estudiozuniga.cl',
      biografia: 'Apasionada por el diseño paramétrico y la integración de tecnología en la arquitectura.',
      especialidad: 'Diseño Paramétrico'
    },
    {
      id: 4,
      nombre: 'Diego Valenzuela',
      cargo: 'Arquitecto de Interiores',
      email: 'dvalenzuela@estudiozuniga.cl',
      biografia: 'Especialista en crear espacios interiores que reflejan la identidad y necesidades de cada cliente.',
      especialidad: 'Interiorismo'
    },
    {
      id: 5,
      nombre: 'Ana Lucía Campos',
      cargo: 'Arquitecta de Paisaje',
      email: 'alcampos@estudiozuniga.cl',
      biografia: 'Integra naturaleza y arquitectura creando espacios verdes sostenibles y funcionales.',
      especialidad: 'Paisajismo'
    }
  ];

  // Servicios ofrecidos
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

  // Reconocimientos
  reconocimientos: Reconocimiento[] = [
    {
      anio: '2023',
      titulo: 'Premio Nacional de Arquitectura',
      organizacion: 'Colegio de Arquitectos de Chile'
    },
    {
      anio: '2022',
      titulo: 'Mejor Proyecto Residencial',
      organizacion: 'Bienal de Arquitectura de Santiago'
    },
    {
      anio: '2021',
      titulo: 'Certificación LEED Platinum',
      organizacion: 'U.S. Green Building Council'
    },
    {
      anio: '2020',
      titulo: 'Estudio del Año',
      organizacion: 'Revista Arquitectura & Diseño'
    }
  ];

  // Historia del estudio
  historia: EventoHistoria[] = [
    {
      anio: '2005',
      titulo: 'Fundación',
      descripcion: 'Alejandro Zúñiga establece el estudio con la visión de crear arquitectura transformadora.'
    },
    {
      anio: '2010',
      titulo: 'Primer Premio Internacional',
      descripcion: 'Reconocimiento en la Bienal de Venecia por proyecto de vivienda social sostenible.'
    },
    {
      anio: '2015',
      titulo: 'Expansión del Equipo',
      descripcion: 'El estudio crece a 15 profesionales y abre nueva sede en Providencia.'
    },
    {
      anio: '2018',
      titulo: 'Proyectos Emblemáticos',
      descripcion: 'Completamos Torre Horizonte y el Centro Cultural Metropolitano.'
    },
    {
      anio: '2020',
      titulo: 'Innovación Digital',
      descripcion: 'Implementación completa de tecnología BIM y diseño paramétrico.'
    },
    {
      anio: '2024',
      titulo: 'Liderazgo Sostenible',
      descripcion: 'Certificación como estudio carbono neutral y líder en arquitectura verde.'
    }
  ];

  // Proceso de trabajo
  procesoTrabajo: PasoProceso[] = [
    {
      titulo: 'Consulta Inicial',
      descripcion: 'Entendemos tu visión, necesidades y objetivos para el proyecto.',
      icono: '💡'
    },
    {
      titulo: 'Análisis y Concepto',
      descripcion: 'Estudiamos el contexto y desarrollamos propuestas conceptuales innovadoras.',
      icono: '📐'
    },
    {
      titulo: 'Diseño y Desarrollo',
      descripcion: 'Creamos planos detallados y visualizaciones 3D del proyecto.',
      icono: '✏️'
    },
    {
      titulo: 'Documentación',
      descripcion: 'Preparamos toda la documentación técnica y permisos necesarios.',
      icono: '📋'
    },
    {
      titulo: 'Construcción',
      descripcion: 'Supervisamos la ejecución para garantizar la calidad y fidelidad al diseño.',
      icono: '🏗️'
    },
    {
      titulo: 'Entrega',
      descripcion: 'Finalizamos con la entrega del proyecto y seguimiento post-ocupación.',
      icono: '🎯'
    }
  ];

  // Información de contacto
  informacionContacto: InformacionContacto = {
    direccion: 'Av. Providencia 2594, Piso 12',
    email: 'contacto@estudiozuniga.cl',
    telefono: '+56 2 2234 5678',
    sitioWeb: 'www.estudiozuniga.cl',
    ciudad: 'Santiago',
    region: 'Región Metropolitana'
  };

  // Estadísticas
  aniosExperiencia: number = 19;
  proyectosCompletados: number = 127;
  premiosGanados: number = 15;
  clientesSatisfechos: number = 98;

  constructor(private router: Router) {}

  // Métodos auxiliares
  obtenerIniciales(nombre: string): string {
    return nombre
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  obtenerIconoServicio(index: number): string {
    const iconos = ['📐', '🏙️', '📊', '🎨', '📋', '💻'];
    return iconos[index] || '🏗️';
  }

  formatearIndice(numero: number): string {
    return numero.toString().padStart(2, '0');
  }

  navegarAContacto(): void {
    this.router.navigate(['/contacto']);
  }

  descargarPortfolio(): void {
    // Lógica para descargar portfolio
    console.log('Descargando portfolio...');
    // Aquí podrías implementar la descarga real del PDF
    window.open('/assets/portfolio-estudio-zuniga.pdf', '_blank');
  }
}