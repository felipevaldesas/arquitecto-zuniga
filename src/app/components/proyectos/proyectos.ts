import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  // Filtros disponibles
  tiposProyecto: string[] = ['todos'];

  constructor(
    private datosService: DatosService,
    private router: Router
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
        this.cargando = false;
      }
    });
  }

  extraerTiposProyecto(): void {
    const tipos = [...new Set(this.proyectos.map(p => p.tipo))];
    this.tiposProyecto = ['todos', ...tipos];
  }

  filtrarProyectos(tipo: string): void {
    this.filtroActivo = tipo;
    if (tipo === 'todos') {
      this.proyectosFiltrados = this.proyectos;
    } else {
      this.proyectosFiltrados = this.proyectos.filter(p => p.tipo === tipo);
    }
  }

  verDetalleProyecto(id: number): void {
    // Por ahora scroll al proyecto o mostrar más info
    console.log('Ver proyecto:', id);
    // Futuro: this.router.navigate(['/proyectos', id]);
  }

  navegarAContacto(): void {
    this.router.navigate(['/contacto']);
  }
}