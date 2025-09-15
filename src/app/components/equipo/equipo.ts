import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiembroEquipo } from '../../models/interfaces';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.html',
  styleUrl: './equipo.scss'
})
export class Equipo {
  equipo: MiembroEquipo[] = [
    {
      id: 1,
      nombre: 'Felipe Zúñiga',
      cargo: 'Arquitecto Principal & Fundador',
      email: 'azuniga@gestionterritorial.cl',
      biografia: 'Con más de 20 años de experiencia, Felipe ha liderado proyectos emblemáticos que han redefinido el paisaje urbano de Santiago.',
      especialidad: 'Diseño Sostenible'
    },
    {
      id: 2,
      nombre: 'María Fernanda Zúñiga',
      cargo: 'Jefe de Proyectos',
      email: 'mftorres@gestionterritorial.cl',
      biografia: 'Experto en gestión de proyectos complejos y coordinación de equipos multidisciplinarios.',
      especialidad: 'Gestión BIM'
    },
    {
      id: 3,
      nombre: 'Isabella Rojas',
      cargo: 'Arquitecta Senior',
      email: 'irojas@gestionterritorial.cl',
      biografia: 'Apasionada por el diseño paramétrico y la integración de tecnología en la arquitectura.',
      especialidad: 'Diseño Paramétrico'
    },
    {
      id: 4,
      nombre: 'Diego Valenzuela',
      cargo: 'Arquitecto de Interiores',
      email: 'dvalenzuela@gestionterritorial.cl',
      biografia: 'Especialista en crear espacios interiores que reflejan la identidad y necesidades de cada cliente.',
      especialidad: 'Interiorismo'
    },
    {
      id: 5,
      nombre: 'Ana Lucía Campos',
      cargo: 'Arquitecta de Paisaje',
      email: 'alcampos@gestionterritorial.cl',
      biografia: 'Integra naturaleza y arquitectura creando espacios verdes sostenibles y funcionales.',
      especialidad: 'Paisajismo'
    }
  ];

  obtenerIniciales(nombre: string): string {
    return nombre
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
