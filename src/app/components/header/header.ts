import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

interface ItemNavegacion {
  id: string;
  etiqueta: string;
  ruta: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  rutaActiva: string = '';
  menuMovilAbierto: boolean = false;
  scrolled: boolean = false;

  itemsNavegacion: ItemNavegacion[] = [
    { id: 'proyectos', etiqueta: 'Proyectos', ruta: '/proyectos' },
    { id: 'oficina', etiqueta: 'Oficina', ruta: '/oficina' },
    { id: 'contacto', etiqueta: 'Contacto', ruta: '/contacto' }
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

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  esRutaActiva(ruta: string): boolean {
    if (ruta === '/') {
      return this.rutaActiva === '/';
    }
    return this.rutaActiva.startsWith(ruta);
  }

  alternarMenuMovil(): void {
    this.menuMovilAbierto = !this.menuMovilAbierto;
    document.body.style.overflow = this.menuMovilAbierto ? 'hidden' : 'auto';
  }

  cerrarMenuMovil(): void {
    this.menuMovilAbierto = false;
    document.body.style.overflow = 'auto';
  }

  navegarAInicio(): void {
    this.router.navigate(['/']);
    this.cerrarMenuMovil();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const menuBtn = document.querySelector('.menu-btn-minimal');
    const navMovil = document.querySelector('.nav-movil-minimal');

    if (this.menuMovilAbierto &&
        !menuBtn?.contains(target) &&
        !navMovil?.contains(target)) {
      this.cerrarMenuMovil();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (this.menuMovilAbierto && keyboardEvent.key === 'Escape') {
      this.cerrarMenuMovil();
    }
  }

  getHeaderClasses(): string {
    let classes = 'header-minimal';
    if (this.scrolled) {
      classes += ' scrolled';
    }
    if (this.rutaActiva === '/' && !this.scrolled) {
      classes += ' transparent';
    }
    return classes;
  }
}
