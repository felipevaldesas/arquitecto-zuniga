// src/app/models/interfaces.ts

export interface Proyecto {
  id: number;
  titulo: string;
  anio: string;
  ubicacion: string;
  tipo: string;
  descripcion?: string;
  imagen?: string;
  destacado?: boolean;
  area?: string;
  estado?: 'Completado' | 'En construcción' | 'En diseño' | 'Propuesta';
}

export interface Noticia {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  categoria?: string;
  destacada?: boolean;
  autor?: string;
}

export interface MiembroEquipo {
  id: number;
  nombre: string;
  cargo: string;
  email?: string;
  biografia?: string;
  imagen?: string;
  especialidad?: string;
}

export interface InformacionContacto {
  direccion: string;
  email: string;
  telefono: string;
  sitioWeb?: string;
  ciudad: string;
  region: string;
}

export interface ItemNavegacion {
  id: string;
  etiqueta: string;
  ruta: string;
}

export interface InformacionEstudio {
  nombre: string;
  arquitectoPrincipal: string;
  anioFundacion: number;
  descripcion: string;
  filosofia: string;
  servicios: string[];
  reconocimientos?: string[];
}