import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface Servicio {
  titulo: string;
  descripcion: string;
}

interface MiembroEquipo {
  nombre: string;
  cargo: string;
}

@Component({
  selector: 'app-oficina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oficina.html',
  styleUrl: './oficina.scss'
})
export class Oficina {

  // Servicios principales (basados en el PDF)
  servicios: Servicio[] = [
    {
      titulo: 'Planificación Urbana y Territorial',
      descripcion: 'Formulación de planes y políticas para orientar el desarrollo sostenible de ciudades y territorios.'
    },
    {
      titulo: 'Diseño Urbano',
      descripcion: 'Creación de espacios públicos atractivos y funcionales que fomenten la convivencia y la cultura.'
    },
    {
      titulo: 'Gestión Territorial',
      descripcion: 'Administración y control del uso del suelo y recursos naturales con criterios ESG aplicados.'
    },
    {
      titulo: 'Participación Ciudadana',
      descripcion: 'Metodologías para involucrar a la comunidad en la toma de decisiones territoriales.'
    },
    {
      titulo: 'Sostenibilidad Ambiental',
      descripcion: 'Soluciones que minimizan el impacto ambiental y promueven la eficiencia de recursos.'
    },
    {
      titulo: 'Desarrollo Comunitario',
      descripcion: 'Proyectos que fortalecen el tejido social y la identidad local de las comunidades.'
    }
  ];

  // Equipo simplificado
  equipo: MiembroEquipo[] = [
    {
      nombre: 'Felipe Zúñiga',
      cargo: 'Director General'
    },
    {
      nombre: 'María González',
      cargo: 'Arquitecta Senior'
    },
    {
      nombre: 'Carlos Ramírez',
      cargo: 'Planificador Urbano'
    },
    {
      nombre: 'Ana Silva',
      cargo: 'Especialista en Sostenibilidad'
    },
    {
      nombre: 'Roberto Torres',
      cargo: 'Coordinador de Proyectos'
    },
    {
      nombre: 'Lucía Morales',
      cargo: 'Participación Ciudadana'
    }
  ];

  // Objetivos esenciales (simplificados del PDF)
  objetivosEsenciales: string[] = [
    'Promover la sostenibilidad en todos los proyectos',
    'Impulsar la innovación en diseño territorial',
    'Mejorar la calidad de vida de las comunidades',
    'Fortalecer la participación ciudadana',
    'Consolidar el liderazgo en gestión territorial'
  ];

  // Proceso simplificado
  procesoMinimal = [
    {
      titulo: 'Consulta Inicial',
      descripcion: 'Entendemos tu visión, necesidades y objetivos para el proyecto territorial.'
    },
    {
      titulo: 'Análisis Territorial',
      descripcion: 'Estudiamos el contexto territorial y desarrollamos propuestas conceptuales sostenibles.'
    },
    {
      titulo: 'Diseño y Planificación',
      descripcion: 'Creamos planes detallados y visualizaciones del proyecto con criterios ESG aplicados.'
    },
    {
      titulo: 'Implementación',
      descripcion: 'Ejecutamos y supervisamos el proyecto garantizando calidad y sostenibilidad.'
    },
    {
      titulo: 'Seguimiento',
      descripcion: 'Monitoreamos resultados y impacto para asegurar el éxito a largo plazo.'
    }
  ];

  constructor(
    private router: Router,
    private location: Location
  ) {}

  // Método helper para obtener iniciales de nombres
  obtenerIniciales(nombre: string): string {
    return nombre
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  // Método para volver atrás
  volverAtras(): void {
    this.location.back();
  }

  // Método para navegar al inicio
  navegarAInicio(): void {
    this.router.navigate(['/']);
  }

  // Método para navegar a contacto
  navegarAContacto(): void {
    this.router.navigate(['/contacto']);
  }

  // Método para navegar a proyectos
  navegarAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

}