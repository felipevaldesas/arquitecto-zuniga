// src/app/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./components/proyectos/proyectos').then(m => m.Proyectos)
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('./components/noticias/noticias').then(m => m.Noticias)
  },
  {
    path: 'estudio',
    loadComponent: () =>
      import('./components/estudio/estudio').then(m => m.Estudio)
  },
  {
    path: '**',
    redirectTo: ''
  }
];