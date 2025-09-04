import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Proyecto, Noticia, InformacionEstudio } from '../../models/interfaces';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
 proyectosDestacados: Proyecto[] = [];
  noticiasDestacadas: Noticia[] = [];
  informacionEstudio?: InformacionEstudio | null = null;
  cargando: boolean = true;

  // Texto de hero/banner principal
  textoHero = {
    titulo: 'Arquitectura que Transforma Espacios',
    subtitulo: 'Creamos espacios significativos que mejoran la calidad de vida y respetan el entorno natural chileno.',
    descripcion: 'Desde 2015, Felipe Zuñiga y su equipo desarrollan proyectos arquitectónicos que combinan innovación, sustentabilidad y sensibilidad hacia el contexto local.'
  };

  constructor(
    private datosService: DatosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;

    // Cargar proyectos destacados
    this.datosService.getProyectosDestacados().subscribe({
      next: (proyectos) => {
        this.proyectosDestacados = proyectos.slice(0, 3); // Solo los primeros 3
      },
      error: (error) => {
        console.error('Error al cargar proyectos destacados:', error);
      }
    });

    // Cargar noticias destacadas
    this.datosService.getNoticiasDestacadas().subscribe({
      next: (noticias) => {
        this.noticiasDestacadas = noticias.slice(0, 2); // Solo las primeras 2
      },
      error: (error) => {
        console.error('Error al cargar noticias destacadas:', error);
      }
    });

    // Cargar información del estudio
    this.datosService.getInformacionEstudio().subscribe({
      next: (info) => {
        this.informacionEstudio = info;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar información del estudio:', error);
        this.cargando = false;
      }
    });
  }

  navegarAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  navegarANoticias(): void {
    this.router.navigate(['/noticias']);
  }

  navegarAEstudio(): void {
    this.router.navigate(['/estudio']);
  }

  verProyecto(id: number): void {
    // Por ahora navega a la página de proyectos
    // Más adelante se puede implementar una vista de detalle
    this.router.navigate(['/proyectos']);
  }

  verNoticia(id: number): void {
    // Por ahora navega a la página de noticias
    // Más adelante se puede implementar una vista de detalle
    this.router.navigate(['/noticias']);
  }
}