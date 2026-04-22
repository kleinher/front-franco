export interface Service {
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Renders fotorrealistas',
    description: 'Imágenes estáticas de alta resolución para exteriores e interiores. Ideales para licitaciones, presentaciones y comercialización.',
    items: [
      'Vistas exteriores e interiores',
      'Iluminación natural y artificial',
      'Renders de día, atardecer y noche',
      'Ambientación y entourage',
    ],
  },
  {
    title: 'Animación y recorridos 3D',
    description: 'Videos de recorrido arquitectónico para presentar proyectos en movimiento, desde la implantación hasta el detalle interior.',
    items: [
      'Walkthrough interior y exterior',
      'Flythrough aéreo',
      'Animación de fachada',
      'Presentaciones para inversores',
    ],
  },
  {
    title: 'Visualización de masterplan',
    description: 'Vistas aéreas y representación de conjunto para proyectos urbanos, barrios privados y desarrollos de gran escala.',
    items: [
      'Vistas aéreas y de implantación',
      'Renders de conjunto',
      'Diagramas de zonificación',
      'Integración con contexto real',
    ],
  },
  {
    title: 'Branding y comunicación',
    description: 'Producción de material visual completo para el lanzamiento comercial de un proyecto: renders, planos 2D y piezas gráficas.',
    items: [
      'Planos de planta amoblados',
      'Vistas de corte renderizadas',
      'Material para redes sociales',
      'Diseño de brochure y catálogo',
    ],
  },
];
