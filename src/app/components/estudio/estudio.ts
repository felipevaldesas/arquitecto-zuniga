// estudio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Reconocimiento {
  anio: string;
  titulo: string;
  organizacion: string;
}

interface PasoProceso {
  titulo: string;
  descripcion: string;
  icono: string;
}

interface ObjetivoEstrategico {
  titulo: string;
  descripcion: string;
  items: string[];
  icono: string;
}

interface ObjetivoOperativo {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-estudio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudio.html',
  styleUrl: './estudio.scss'
})
export class Estudio {

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

  // Agregar estas propiedades a la clase Estudio
  objetivosEstrategicos: ObjetivoEstrategico[] = [
    {
      titulo: 'Promover la Sostenibilidad',
      descripcion: 'Implementar proyectos que reduzcan el impacto ambiental y optimicen la gestión de recursos',
      icono: '🌱',
      items: [
        'Implementar proyectos que reduzcan el impacto ambiental',
        'Integrar criterios de sostenibilidad en todas las etapas'
      ]
    },
    {
      titulo: 'Impulsar la Innovación',
      descripcion: 'Desarrollar soluciones creativas y tecnológicas para desafíos urbanos y territoriales',
      icono: '💡',
      items: [
        'Desarrollar soluciones creativas y tecnológicas',
        'Fomentar investigación y desarrollo de nuevas metodologías'
      ]
    },
    {
      titulo: 'Mejorar la Calidad de Vida',
      descripcion: 'Crear espacios públicos inclusivos, seguros y accesibles para todos',
      icono: '🏙️',
      items: [
        'Crear espacios públicos inclusivos y seguros',
        'Promover movilidad sostenible y conectividad',
        'Generar soluciones para vivienda social digna'
      ]
    },
    {
      titulo: 'Fortalecer Participación Ciudadana',
      descripcion: 'Establecer mecanismos de diálogo con comunidades en todos los proyectos',
      icono: '🤝',
      items: [
        'Establecer mecanismos de diálogo y colaboración',
        'Promover educación sobre desarrollo urbano y territorial'
      ]
    },
    {
      titulo: 'Consolidar el Liderazgo',
      descripcion: 'Expandir presencia nacional e internacional como referentes en buenas prácticas',
      icono: '🏆',
      items: [
        'Expandir presencia en mercado nacional e internacional',
        'Establecer alianzas estratégicas con instituciones clave',
        'Generar proyectos referentes de buenas prácticas'
      ]
    }
  ];

  objetivosOperativos: ObjetivoOperativo[] = [
    {
      titulo: 'Eficiencia en Gestión',
      descripcion: 'Aumentar la eficiencia en la gestión de proyectos, optimizando los recursos y los plazos'
    },
    {
      titulo: 'Fortalecimiento del Equipo',
      descripcion: 'Fortalecer el equipo de profesionales, promoviendo la formación continua y la especialización'
    },
    {
      titulo: 'Sistemas de Calidad',
      descripcion: 'Implementar sistemas de gestión de calidad para garantizar la excelencia en los servicios'
    },
    {
      titulo: 'Viabilidad Económica',
      descripcion: 'Aumentar la rentabilidad de la empresa, asegurando la viabilidad económica de los proyectos'
    }
  ];

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

  // Agregar al final de la clase Estudio
  iniciarConsultaGratuita(): void {
    this.router.navigate(['/contacto'], { 
      queryParams: { tipo: 'consulta-gratuita' } 
    });
  }
}