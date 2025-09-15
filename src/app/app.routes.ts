// src/app/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/inicio/inicio').then(m => m.Inicio) },
  { path: 'proyectos', loadComponent: () => import('./components/proyectos/proyectos').then(m => m.Proyectos) },
  { path: 'noticias', loadComponent: () => import('./components/noticias/noticias').then(m => m.Noticias) },
  { path: 'estudio', loadComponent: () => import('./components/estudio/estudio').then(m => m.Estudio) },
  { path: 'equipo', loadComponent: () => import('./components/equipo/equipo').then(m => m.Equipo) },
  { path: 'servicios', loadComponent: () => import('./components/servicios/servicios').then(m => m.Servicios) },
  { path: 'criterios-esg', loadComponent: () => import('./components/criterios-esg/criterios-esg').then(m => m.CriteriosESG) },
  { path: '**', redirectTo: '' }
]