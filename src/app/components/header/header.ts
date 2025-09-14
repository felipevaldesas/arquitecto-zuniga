import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ItemNavegacion } from '../../models/interfaces';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  
  rutaActiva: string = '';
  menuMovilAbierto: boolean = false;

  itemsNavegacion: ItemNavegacion[] = [
    { id: 'inicio', etiqueta: 'Inicio', ruta: '/' },
    { id: 'proyectos', etiqueta: 'Proyectos', ruta: '/proyectos' },
    { id: 'noticias', etiqueta: 'Noticias', ruta: '/noticias' },
    { id: 'estudio', etiqueta: 'Estudio', ruta: '/estudio' },
    { id: 'equipo', etiqueta: 'Equipo', ruta: '/equipo' },
    { id: 'servicios', etiqueta: 'Servicios', ruta: '/servicios' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.rutaActiva = event.urlAfterRedirects;
      this.menuMovilAbierto = false;
    });
    this.rutaActiva = this.router.url;
  }

  esRutaActiva(ruta: string): boolean {
    if (ruta === '/') {
      return this.rutaActiva === '/';
    }
    return this.rutaActiva.startsWith(ruta);
  }

  alternarMenuMovil(): void {
    this.menuMovilAbierto = !this.menuMovilAbierto;
  }

  cerrarMenuMovil(): void {
    this.menuMovilAbierto = false;
  }

  navegarA(ruta: string): void {
    this.router.navigate([ruta]);
    this.cerrarMenuMovil();
  }
}
