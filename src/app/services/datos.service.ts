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
      titulo: 'Plan Maestro Territorial Sustentable Los Dominicos',
      anio: '2024',
      ubicacion: 'Las Condes, Santiago',
      tipo: 'Planificación Territorial',
      descripcion: 'Desarrollo integral de plan maestro que integra criterios ESG para transformación territorial sustentable con participación ciudadana.',
      area: '45 hectáreas',
      estado: 'Completado',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Revitalización Urbana Participativa Ñuñoa',
      anio: '2023',
      ubicacion: 'Ñuñoa, Santiago',
      tipo: 'Gestión Territorial',
      descripcion: 'Proyecto de revitalización urbana con metodologías participativas, infraestructura verde y criterios de inclusión social.',
      area: '2.5 hectáreas',
      estado: 'Completado',
      destacado: true
    },
    {
      id: 3,
      titulo: 'Evaluación ESG Desarrollo Corporativo Providencia',
      anio: '2023',
      ubicacion: 'Providencia, Santiago',
      tipo: 'Evaluación Ambiental',
      descripcion: 'Implementación integral de criterios ESG en complejo corporativo, incluyendo certificación ambiental y social.',
      area: '1.2 hectáreas',
      estado: 'Completado'
    },
    {
      id: 4,
      titulo: 'Plan de Adaptación Climática Algarrobo',
      anio: '2022',
      ubicacion: 'Algarrobo, Valparaíso',
      tipo: 'Gestión de Riesgos',
      descripcion: 'Estrategia territorial de adaptación al cambio climático para zona costera, integrando gestión de riesgos y resiliencia.',
      area: '15 km de borde costero',
      estado: 'Completado'
    },
    {
      id: 5,
      titulo: 'Centro Comunitario Sustentable Maipú',
      anio: '2022',
      ubicacion: 'Maipú, Santiago',
      tipo: 'Desarrollo Comunitario',
      descripcion: 'Espacio multifuncional diseñado con participación ciudadana, eficiencia energética e identidad local.',
      area: '3,200 m²',
      estado: 'Completado'
    },
    {
      id: 6,
      titulo: 'Eco-Barrio Resiliente Quilicura',
      anio: '2024',
      ubicacion: 'Quilicura, Santiago',
      tipo: 'Vivienda Sustentable',
      descripcion: 'Desarrollo habitacional certificado ESG con sistemas de energía renovable, gestión de aguas y cohesión social.',
      area: '8 hectáreas',
      estado: 'En construcción',
      destacado: true
    },
    {
      id: 7,
      titulo: 'Campus Territorial Innovación Las Condes',
      anio: '2024',
      ubicacion: 'Las Condes, Santiago',
      tipo: 'Infraestructura Educativa',
      descripcion: 'Complejo educativo que integra investigación territorial, espacios verdes y tecnologías sostenibles.',
      area: '12 hectáreas',
      estado: 'En diseño'
    },
    {
      id: 8,
      titulo: 'Plan de Recuperación Patrimonial Valparaíso',
      anio: '2021',
      ubicacion: 'Valparaíso',
      tipo: 'Patrimonio Territorial',
      descripcion: 'Estrategia integral de recuperación patrimonial con criterios de sostenibilidad y participación comunitaria.',
      area: '25 manzanas',
      estado: 'Completado'
    },
    {
      id: 9,
      titulo: 'Corredor Verde Metropolitano',
      anio: '2023',
      ubicacion: 'Región Metropolitana',
      tipo: 'Infraestructura Verde',
      descripcion: 'Red de espacios verdes conectados que mejora calidad del aire, biodiversidad y movilidad sustentable.',
      area: '120 km lineales',
      estado: 'En construcción',
      destacado: true
    },
    {
      id: 10,
      titulo: 'Estrategia Territorial Rural Sustentable',
      anio: '2022',
      ubicacion: 'Valle del Maipo',
      tipo: 'Desarrollo Rural',
      descripcion: 'Plan integral para desarrollo rural sustentable que potencia economía local y protege recursos naturales.',
      area: '2,500 hectáreas',
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

  private informacionContacto: InformacionContacto = {
    direccion: 'Avenida Providencia 1208, Oficina 502',
    email: 'contacto@gestionterritorial.cl',
    telefono: '+56 2 2234 5678',
    sitioWeb: 'www.gestionterritorial.cl',
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
      'Evaluación de Impacto Socioambiental',
      'Gestión de Riesgos y Desastres',
      'Participación Ciudadana',
      'Infraestructura Verde y Azul',
      'Certificación y Auditoría ESG',
      'Diseño de Políticas Territoriales',
      'Capacitación en Desarrollo Sostenible',
      'Economía Circular Territorial'
    ]
  };

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

  getInformacionContacto(): Observable<InformacionContacto> {
    return of(this.informacionContacto);
  }

  getInformacionEstudio(): Observable<InformacionEstudio> {
    return of(this.informacionEstudio);
  }

}