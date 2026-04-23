export interface Service {
  title: string;
  title_en: string;
  description: string;
  description_en: string;
}

export const services: Service[] = [
  {
    title: 'Renders fotorrealistas',
    title_en: 'Photorealistic renders',
    description: 'Imágenes estáticas de alta resolución para exteriores e interiores. Ideales para licitaciones, presentaciones y comercialización.',
    description_en: 'High-resolution static images for exteriors and interiors. Ideal for tenders, presentations and property marketing.',
  },
  {
    title: 'Animación y recorridos 3D',
    title_en: 'Animation & 3D walkthroughs',
    description: 'Videos de recorrido arquitectónico para presentar proyectos en movimiento, desde la implantación hasta el detalle interior.',
    description_en: 'Architectural walkthrough videos to present projects in motion, from site overview to interior detail.',
  },
];
