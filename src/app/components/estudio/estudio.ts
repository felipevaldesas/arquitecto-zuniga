// estudio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InformacionContacto } from '../../models/interfaces';

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
}