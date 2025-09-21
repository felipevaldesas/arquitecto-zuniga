import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Proyecto } from '../../models/interfaces';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit, OnDestroy {
  
  proyectosHero: Proyecto[] = [];
  proyectoActual: number = 0;
  intervalId: any;
  cargando: boolean = true;

  constructor(
    private datosService: DatosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarProyectosHero();
    this.iniciarCarruselAutomatico();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  cargarProyectosHero(): void {
    this.datosService.getProyectosDestacados().subscribe({
      next: (proyectos) => {
        this.proyectosHero = proyectos.slice(0, 4);
        this.cargando = false;
      },
      error: () => {
        this.proyectosHero = [
          {
            id: 1,
            titulo: 'Casa Sustentable Los Andes',
            ubicacion: 'Los Andes, Chile',
            anio: '2024',
            tipo: 'Residencial',
            imagen: '/assets/placeholder-project-1.jpg',
            descripcion: 'Vivienda unifamiliar con criterios de sustentabilidad',
            area: '180m²',
            estado: 'Completado'
          },
          {
            id: 2,
            titulo: 'Centro Comunitario Valparaíso',
            ubicacion: 'Valparaíso, Chile',
            anio: '2024',
            tipo: 'Público',
            imagen: '/assets/placeholder-project-2.jpg',
            descripcion: 'Espacio público comunitario',
            area: '350m²',
            estado: 'En construcción'
          },
          {
            id: 3,
            titulo: 'Oficinas Corporativas Santiago',
            ubicacion: 'Santiago, Chile',
            anio: '2023',
            tipo: 'Comercial',
            imagen: '/assets/placeholder-project-3.jpg',
            descripcion: 'Edificio de oficinas con certificación verde',
            area: '1200m²',
            estado: 'Completado'
          },
          {
            id: 4,
            titulo: 'Complejo Habitacional Concepción',
            ubicacion: 'Concepción, Chile',
            anio: '2024',
            tipo: 'Residencial',
            imagen: '/assets/placeholder-project-4.jpg',
            descripcion: 'Viviendas sociales sustentables',
            area: '2500m²',
            estado: 'En construcción'
          }
        ];
        this.cargando = false;
      }
    });
  }

  iniciarCarruselAutomatico(): void {
    this.intervalId = setInterval(() => {
      this.siguienteProyecto();
    }, 5000);
  }

  pausarCarrusel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  reanudarCarrusel(): void {
    this.iniciarCarruselAutomatico();
  }

  siguienteProyecto(): void {
    this.proyectoActual = (this.proyectoActual + 1) % this.proyectosHero.length;
  }

  anteriorProyecto(): void {
    this.proyectoActual = this.proyectoActual === 0 
      ? this.proyectosHero.length - 1 
      : this.proyectoActual - 1;
  }

  irAProyecto(index: number): void {
    this.proyectoActual = index;
    this.pausarCarrusel();
    setTimeout(() => {
      this.reanudarCarrusel();
    }, 3000);
  }

  verProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  verProyectoDetalle(proyecto: Proyecto): void {
    this.router.navigate(['/proyectos'], { 
      queryParams: { proyecto: proyecto.id } 
    });
  }
}
