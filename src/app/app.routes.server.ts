import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'proyectos', renderMode: RenderMode.Prerender },
  { path: 'noticias', renderMode: RenderMode.Prerender },
  { path: 'estudio', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server } 
];