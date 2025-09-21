import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatosService } from '../../services/datos.service';
import { Proyecto } from '../../models/interfaces';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss'
})
export class Proyectos implements OnInit {
  proyectos: Proyecto[] = [];
  proyectosFiltrados: Proyecto[] = [];
  filtroActivo: string = 'todos';
  cargando: boolean = true;

  // Solo 3 tipos de filtro máximo para mantener minimalismo
  tiposProyecto: string[] = ['todos'];

  constructor(
    private datosService: DatosService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.cargando = true;
    
    this.datosService.getProyectos().subscribe({
      next: (proyectos) => {
        this.proyectos = proyectos;
        this.proyectosFiltrados = proyectos;
        this.extraerTiposProyecto();
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar proyectos:', error);
        
        // Datos de fallback para demo
        this.proyectos = this.generarProyectosFallback();
        this.proyectosFiltrados = this.proyectos;
        this.extraerTiposProyecto();
        this.cargando = false;
      }
    });
  }

  generarProyectosFallback(): Proyecto[] {
    return [
      {
        id: 1,
        titulo: 'Casa Sustentable Los Andes',
        ubicacion: 'Los Andes, Chile',
        anio: '2024',
        tipo: 'Residencial',
        imagen: '',
        descripcion: 'Vivienda unifamiliar sustentable',
        area: '180m²',
        estado: 'Completado'
      },
      {
        id: 2,
        titulo: 'Centro Comunitario Valparaíso',
        ubicacion: 'Valparaíso, Chile',
        anio: '2024',
        tipo: 'Público',
        imagen: '',
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
        imagen: '',
        descripcion: 'Edificio de oficinas verde',
        area: '1200m²',
        estado: 'Completado'
      },
      {
        id: 4,
        titulo: 'Complejo Habitacional Concepción',
        ubicacion: 'Concepción, Chile',
        anio: '2024',
        tipo: 'Residencial',
        imagen: '',
        descripcion: 'Viviendas sociales sustentables',
        area: '2500m²',
        estado: 'En construcción'
      },
      {
        id: 5,
        titulo: 'Parque Urbano Temuco',
        ubicacion: 'Temuco, Chile',
        anio: '2023',
        tipo: 'Público',
        imagen: '',
        descripcion: 'Espacio verde urbano',
        area: '5000m²',
        estado: 'Completado'
      },
      {
        id: 6,
        titulo: 'Torre Comercial La Serena',
        ubicacion: 'La Serena, Chile',
        anio: '2024',
        tipo: 'Comercial',
        imagen: '',
        descripcion: 'Centro comercial sustentable',
        area: '3500m²',
        estado: 'En diseño'
      }
    ];
  }

  extraerTiposProyecto(): void {
    // Obtener tipos únicos, limitando a máximo 3 + "todos" para mantener minimalismo
    const tiposUnicos = [...new Set(this.proyectos.map(p => p.tipo))];
    
    // Tomar solo los primeros 3 tipos más comunes
    const tiposLimitados = tiposUnicos.slice(0, 3);
    
    this.tiposProyecto = ['todos', ...tiposLimitados];
  }

  filtrarProyectos(tipo: string): void {
    this.filtroActivo = tipo;
    
    if (tipo === 'todos') {
      this.proyectosFiltrados = this.proyectos;
    } else {
      this.proyectosFiltrados = this.proyectos.filter(proyecto => 
        proyecto.tipo === tipo
      );
    }
  }

  verDetalleProyecto(id: number): void {
    // Por ahora solo log, en el futuro se puede implementar vista de detalle
    console.log('Ver detalle del proyecto:', id);
    
    // Opción 1: Navegar a una página de detalle
    // this.router.navigate(['/proyectos', id]);
    
    // Opción 2: Mostrar modal/overlay con detalles
    // this.mostrarModalProyecto(id);
    
    // Opción 3: Scroll al proyecto específico
    this.scrollToProject(id);
  }

  private scrollToProject(id: number): void {
    // Encontrar el elemento del proyecto y hacer scroll suave
    const elemento = document.querySelector(`[data-proyecto-id="${id}"]`);
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }

  volverAtras(): void {
    // Usar Location service para volver atrás en el historial
    this.location.back();
  }

  navegarAInicio(): void {
    this.router.navigate(['/']);
  }

  navegarAContacto(): void {
    this.router.navigate(['/contacto']);
  }

  // Método helper para tracking en ngFor
  trackByProyectoId(index: number, proyecto: Proyecto): number {
    return proyecto.id;
  }

  // Método para manejar errores de carga de imágenes
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    // Ocultar imagen si falla la carga
    img.style.display = 'none';
  }

  // Método para lazy loading de imágenes
  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.opacity = '1';
  }
}