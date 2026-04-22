export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'puente-rio-parana',
    title: 'Puente Río Paraná',
    category: 'Estructuras',
    year: 2023,
    location: 'Corrientes, Argentina',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    description: 'Diseño y cálculo estructural de puente de 420 metros sobre el Río Paraná. Estructura de hormigón pretensado con vigas cajón.',
  },
  {
    id: 'edificio-corporativo-bue',
    title: 'Edificio Corporativo Norte',
    category: 'Edificios',
    year: 2023,
    location: 'Buenos Aires, Argentina',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    description: 'Estructura de 22 pisos en hormigón armado. Diseño sismoresistente y cálculo de fundaciones profundas sobre pilotes.',
  },
  {
    id: 'autopista-rosario',
    title: 'Autopista Rosario–Córdoba Tramo 3',
    category: 'Infraestructura vial',
    year: 2022,
    location: 'Santa Fe, Argentina',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    description: 'Proyecto ejecutivo de 38 km de autopista de doble calzada. Incluye 4 alcantarillas, 2 pasos superiores y señalización completa.',
  },
  {
    id: 'planta-tratamiento-agua',
    title: 'Planta de Tratamiento de Agua',
    category: 'Obras hidráulicas',
    year: 2022,
    location: 'Mendoza, Argentina',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    description: 'Ingeniería básica y de detalle para planta potabilizadora con capacidad de 800 m³/h. Sistema de filtración en múltiples etapas.',
  },
  {
    id: 'torre-residencial-cba',
    title: 'Torre Residencial Palmera',
    category: 'Edificios',
    year: 2021,
    location: 'Córdoba, Argentina',
    image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1200&q=80',
    description: 'Estructura de losas planas postensadas para edificio residencial de 16 pisos. Optimización de materiales con reducción del 18% en acero.',
  },
  {
    id: 'dique-san-juan',
    title: 'Ampliación Dique El Carrizal',
    category: 'Obras hidráulicas',
    year: 2021,
    location: 'San Juan, Argentina',
    image: 'https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?w=1200&q=80',
    description: 'Proyecto de ampliación de capacidad y refuerzo estructural de dique existente. Estudio hidrológico e hidráulico completo.',
  },
];
