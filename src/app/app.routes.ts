// src/app/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/inicio/inicio').then(m => m.Inicio) },
  { path: 'proyectos', loadComponent: () => import('./components/proyectos/proyectos').then(m => m.Proyectos) },
  { path: 'oficina', loadComponent: () => import('./components/oficina/oficina').then(m => m.Oficina) },
  { path: 'contacto', loadComponent: () => import('./components/contacto/contacto').then(m => m.Contacto) },
  { path: '**', redirectTo: '' }
];