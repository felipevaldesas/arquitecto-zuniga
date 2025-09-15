import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface CriterioESG {
  categoria: 'environmental' | 'social' | 'governance';
  titulo: string;
  descripcion: string;
  items: string[];
  icono: string;
  color: string;
}

interface MetricaImpacto {
  valor: string;
  descripcion: string;
  categoria: string;
}

interface CasoAplicacion {
  titulo: string;
  descripcion: string;
  criteriosAplicados: string[];
  resultado: string;
}

@Component({
  selector: 'app-criterios-esg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './criterios-esg.html',
  styleUrl: './criterios-esg.scss'
})
export class CriteriosESG {

  criteriosESG: CriterioESG[] = [
    {
      categoria: 'environmental',
      titulo: 'Criterios Ambientales (E)',
      descripcion: 'Soluciones que minimizan el impacto ambiental y promueven la eficiencia en el uso de recursos',
      icono: '🌍',
      color: '#22c55e',
      items: [
        'Diseño de espacios urbanos que minimicen el impacto ambiental',
        'Implementación de soluciones basadas en la naturaleza',
        'Fomento de la movilidad sostenible y transporte público',
        'Planificación territorial con protección de ecosistemas',
        'Evaluación de impacto ambiental en proyectos urbanos',
        'Promoción de economía circular en construcción',
        'Integración de estrategias de mitigación climática',
        'Desarrollo de infraestructuras verdes para captura de carbono'
      ]
    },
    {
      categoria: 'social',
      titulo: 'Criterios Sociales (S)',
      descripcion: 'Enfoque en inclusión, equidad y calidad de vida para todas las comunidades',
      icono: '🤝',
      color: '#3b82f6',
      items: [
        'Diseño de espacios urbanos accesibles y seguros para todos',
        'Promoción de participación ciudadana en planificación',
        'Desarrollo de proyectos que reduzcan desigualdades',
        'Creación de espacios públicos que fomenten convivencia',
        'Promoción de salud y bienestar de habitantes',
        'Contribución a creación de empleo y desarrollo local',
        'Colaboración con comunidades locales',
        'Fortalecimiento del tejido social e identidad local'
      ]
    },
    {
      categoria: 'governance',
      titulo: 'Criterios de Gobernanza (G)',
      descripcion: 'Prácticas éticas, transparentes e innovadoras en gestión territorial',
      icono: '⚖️',
      color: '#f59e0b',
      items: [
        'Implementación de prácticas empresariales éticas',
        'Cumplimiento de leyes y regulaciones ambientales',
        'Divulgación transparente de información ESG',
        'Identificación y evaluación de riesgos ambientales',
        'Implementación de medidas de mitigación de riesgos',
        'Promoción de innovación en gestión urbana',
        'Sistemas de gestión ambiental y social',
        'Participación en redes de desarrollo sostenible'
      ]
    }
  ];

  metricas: MetricaImpacto[] = [
    {
      valor: '85%',
      descripcion: 'Reducción promedio en emisiones CO2',
      categoria: 'Ambiental'
    },
    {
      valor: '100%',
      descripcion: 'Proyectos con participación ciudadana',
      categoria: 'Social'
    },
    {
      valor: '95%',
      descripcion: 'Cumplimiento normativas ambientales',
      categoria: 'Gobernanza'
    },
    {
      valor: '40+',
      descripcion: 'Empleos locales generados por proyecto',
      categoria: 'Social'
    }
  ];

  casosAplicacion: CasoAplicacion[] = [
    {
      titulo: 'Revitalización Urbana Sustentable',
      descripcion: 'Transformación de área degradada en espacio público inclusivo con criterios ESG integrales',
      criteriosAplicados: ['Infraestructura verde', 'Participación ciudadana', 'Gestión transparente'],
      resultado: '65% reducción huella de carbono, 200 empleos locales creados'
    },
    {
      titulo: 'Plan Territorial Resiliente',
      descripcion: 'Desarrollo de estrategia territorial que integra adaptación climática y desarrollo social',
      criteriosAplicados: ['Gestión riesgos climáticos', 'Inclusión social', 'Innovación tecnológica'],
      resultado: '30% mejora en indicadores de calidad de vida, certificación internacional'
    },
    {
      titulo: 'Desarrollo Habitacional ESG',
      descripcion: 'Proyecto residencial que aplica criterios de sostenibilidad en todas sus fases',
      criteriosAplicados: ['Eficiencia energética', 'Accesibilidad universal', 'Transparencia financiera'],
      resultado: 'Certificación LEED Platinum, 90% satisfacción vecinal'
    }
  ];

  constructor(private router: Router) {}

  navegarAContacto(): void {
    this.router.navigate(['/contacto'], { 
      queryParams: { servicio: 'evaluacion-esg' } 
    });
  }

  navegarAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  solicitarEvaluacion(): void {
    this.router.navigate(['/contacto'], { 
      queryParams: { tipo: 'evaluacion-esg-gratuita' } 
    });
  }

  descargarGuiaESG(): void {
    // Implementar descarga de guía ESG
    console.log('Descargando Guía ESG...');
    // window.open('/assets/guia-criterios-esg.pdf', '_blank');
  }
}