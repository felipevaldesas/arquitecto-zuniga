// src/app/services/datos.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto, Noticia, MiembroEquipo, InformacionContacto, InformacionEstudio } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'Casa Los Dominicos',
      anio: '2024',
      ubicacion: 'Las Condes, Santiago',
      tipo: 'Residencial',
      descripcion: 'Vivienda unifamiliar que integra arquitectura contemporánea con el paisaje cordillerano.',
      area: '280 m²',
      estado: 'Completado',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Plaza Comunitaria Ñuñoa',
      anio: '2023',
      ubicacion: 'Ñuñoa, Santiago',
      tipo: 'Espacio Público',
      descripcion: 'Revitalización de espacio público con enfoque en sustentabilidad y participación ciudadana.',
      area: '1,200 m²',
      estado: 'Completado',
      destacado: true
    },
    {
      id: 3,
      titulo: 'Oficinas Corporativas Providencia',
      anio: '2023',
      ubicacion: 'Providencia, Santiago',
      tipo: 'Comercial',
      descripcion: 'Espacio de trabajo flexible que promueve la colaboración y el bienestar laboral.',
      area: '450 m²',
      estado: 'Completado'
    },
    {
      id: 4,
      titulo: 'Casa de Playa Algarrobo',
      anio: '2022',
      ubicacion: 'Algarrobo, Valparaíso',
      tipo: 'Residencial',
      descripcion: 'Refugio costero que dialoga armoniosamente con el entorno natural.',
      area: '180 m²',
      estado: 'Completado'
    },
    {
      id: 5,
      titulo: 'Centro Cultural Maipú',
      anio: '2022',
      ubicacion: 'Maipú, Santiago',
      tipo: 'Cultural',
      descripcion: 'Espacio multifuncional que fomenta el arte y la cultura local.',
      area: '800 m²',
      estado: 'Completado'
    },
    {
      id: 6,
      titulo: 'Conjunto Habitacional Sustentable',
      anio: '2024',
      ubicacion: 'Quilicura, Santiago',
      tipo: 'Residencial',
      descripcion: 'Desarrollo habitacional con certificación LEED y sistemas de energía renovable.',
      area: '2,500 m²',
      estado: 'En construcción',
      destacado: true
    },
    {
      id: 7,
      titulo: 'Campus Tecnológico',
      anio: '2024',
      ubicacion: 'Las Condes, Santiago',
      tipo: 'Educacional',
      descripcion: 'Complejo educativo con espacios de innovación y áreas verdes integradas.',
      area: '3,200 m²',
      estado: 'En diseño'
    },
    {
      id: 8,
      titulo: 'Biblioteca Regional Valparaíso',
      anio: '2021',
      ubicacion: 'Valparaíso',
      tipo: 'Cultural',
      descripcion: 'Biblioteca pública que rescata la identidad porteña con materiales locales.',
      area: '650 m²',
      estado: 'Completado'
    }
  ];

  private noticias: Noticia[] = [
    {
      id: 1,
      fecha: '2024.12.15',
      titulo: 'Premio Nacional de Arquitectura Sustentable',
      descripcion: 'Casa Los Dominicos recibe reconocimiento por su innovador diseño bioclimático y uso eficiente de recursos naturales.',
      categoria: 'Reconocimientos',
      destacada: true,
      autor: 'Felipe Zuñiga'
    },
    {
      id: 2,
      fecha: '2024.11.28',
      titulo: 'Nuevo Socio en el Estudio',
      descripcion: 'Damos la bienvenida a María Fernanda Rodríguez como nueva socia, especialista en arquitectura sustentable.',
      categoria: 'Equipo',
      destacada: true
    },
    {
      id: 3,
      fecha: '2024.10.10',
      titulo: 'Exposición "Arquitectura Chilena Contemporánea"',
      descripcion: 'Participamos en la muestra colectiva en el Museo Nacional de Bellas Artes con tres proyectos destacados.',
      categoria: 'Exposiciones'
    },
    {
      id: 4,
      fecha: '2024.09.22',
      titulo: 'Conferencia en Bienal de Arquitectura',
      descripcion: 'Felipe Zuñiga presenta ponencia sobre "Arquitectura Resiliente en Tiempos de Crisis Climática".',
      categoria: 'Conferencias'
    },
    {
      id: 5,
      fecha: '2024.08.15',
      titulo: 'Inauguración Plaza Comunitaria Ñuñoa',
      descripcion: 'Apertura oficial del espacio público tras 8 meses de construcción y participación vecinal.',
      categoria: 'Proyectos'
    },
    {
      id: 6,
      fecha: '2024.07.03',
      titulo: 'Publicación en Revista ARQ',
      descripcion: 'Artículo sobre metodologías de diseño participativo publicado en la revista ARQ UC.',
      categoria: 'Publicaciones'
    }
  ];

  private miembrosEquipo: MiembroEquipo[] = [
    {
      id: 1,
      nombre: 'Felipe Zuñiga',
      cargo: 'Arquitecto Principal',
      email: 'felipe@estudiozuniga.cl',
      biografia: 'Arquitecto titulado de la Universidad de Chile con 15 años de experiencia en arquitectura sustentable y diseño urbano.',
      especialidad: 'Arquitectura Sustentable, Diseño Bioclimático'
    },
    {
      id: 2,
      nombre: 'María Fernanda Rodríguez',
      cargo: 'Arquitecta Socia',
      email: 'maria@estudiozuniga.cl',
      biografia: 'Especialista en certificaciones ambientales y eficiencia energética en edificaciones.',
      especialidad: 'Certificaciones LEED, Eficiencia Energética'
    },
    {
      id: 3,
      nombre: 'Carlos Mendoza',
      cargo: 'Jefe de Proyectos',
      email: 'carlos@estudiozuniga.cl',
      biografia: 'Arquitecto con experiencia en gestión de proyectos de gran escala y coordinación multidisciplinaria.',
      especialidad: 'Gestión de Proyectos, BIM'
    },
    {
      id: 4,
      nombre: 'Javiera Lagos',
      cargo: 'Arquitecta Senior',
      email: 'javiera@estudiozuniga.cl',
      biografia: 'Arquitecta especializada en espacios públicos y participación ciudadana.',
      especialidad: 'Espacios Públicos, Diseño Participativo'
    },
    {
      id: 5,
      nombre: 'Rodrigo Silva',
      cargo: 'Arquitecto Paisajista',
      email: 'rodrigo@estudiozuniga.cl',
      biografia: 'Especialista en diseño de paisaje y integración de arquitectura con entorno natural.',
      especialidad: 'Paisajismo, Arquitectura del Paisaje'
    },
    {
      id: 6,
      nombre: 'Sofía Herrera',
      cargo: 'Arquitecta Junior',
      email: 'sofia@estudiozuniga.cl',
      biografia: 'Recién titulada con especialización en diseño computacional y fabricación digital.',
      especialidad: 'Diseño Paramétrico, Modelado 3D'
    }
  ];

  private informacionContacto: InformacionContacto = {
    direccion: 'Avenida Providencia 1208, Oficina 502',
    email: 'contacto@estudiozuniga.cl',
    telefono: '+56 2 2234 5678',
    sitioWeb: 'www.estudiozuniga.cl',
    ciudad: 'Santiago',
    region: 'Región Metropolitana'
  };

  private informacionEstudio: InformacionEstudio = {
    nombre: 'Get - Gestión Territorial',
    arquitectoPrincipal: 'Felipe Zúñiga',
    anioFundacion: 2005,
    descripcion: 'Contribuimos al desarrollo sostenible de ciudades y territorios mediante soluciones innovadoras de diseño y gestión, que promuevan la calidad de vida, la equidad social y el respeto por el medio ambiente.',
    filosofia: 'Trabajamos en colaboración con comunidades, instituciones y otros actores clave para crear espacios urbanos y rurales resilientes, inclusivos y funcionales.',
    servicios: [
      'Planificación Urbana y Territorial',
      'Diseño Urbano Sostenible', 
      'Gestión Territorial',
      'Participación Ciudadana',
      'Evaluación de Impacto Ambiental',
      'Infraestructura Verde',
      'Desarrollo Comunitario',
      'Criterios ESG en Proyectos'
    ]
  }

  constructor() { }

  // Métodos para obtener datos
  getProyectos(): Observable<Proyecto[]> {
    return of(this.proyectos);
  }

  getProyectosDestacados(): Observable<Proyecto[]> {
    return of(this.proyectos.filter(proyecto => proyecto.destacado));
  }

  getProyectoPorId(id: number): Observable<Proyecto | undefined> {
    return of(this.proyectos.find(proyecto => proyecto.id === id));
  }

  getNoticias(): Observable<Noticia[]> {
    return of(this.noticias);
  }

  getNoticiasDestacadas(): Observable<Noticia[]> {
    return of(this.noticias.filter(noticia => noticia.destacada));
  }

  getMiembrosEquipo(): Observable<MiembroEquipo[]> {
    return of(this.miembrosEquipo);
  }

  getInformacionContacto(): Observable<InformacionContacto> {
    return of(this.informacionContacto);
  }

  getInformacionEstudio(): Observable<InformacionEstudio> {
    return of(this.informacionEstudio);
  }

}