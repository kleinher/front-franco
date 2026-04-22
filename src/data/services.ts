export interface Service {
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Cálculo estructural',
    description: 'Diseño y verificación de estructuras de hormigón armado, pretensado y acero para todo tipo de edificación.',
    items: [
      'Estructuras de hormigón armado y pretensado',
      'Estructuras metálicas',
      'Diseño sismoresistente',
      'Verificación y refuerzo de estructuras existentes',
    ],
  },
  {
    title: 'Infraestructura vial',
    description: 'Proyecto ejecutivo de rutas, autopistas y puentes desde la fase de anteproyecto hasta la documentación licitatoria.',
    items: [
      'Diseño geométrico de trazados',
      'Proyecto de pavimentos flexibles y rígidos',
      'Puentes y obras de arte',
      'Señalización y seguridad vial',
    ],
  },
  {
    title: 'Obras hidráulicas',
    description: 'Ingeniería básica y de detalle para obras de captación, conducción y tratamiento de agua.',
    items: [
      'Diseño de redes de agua potable y cloacas',
      'Plantas de tratamiento',
      'Canales y obras de regulación',
      'Estudios hidrológicos e hidráulicos',
    ],
  },
  {
    title: 'Dirección de obra',
    description: 'Supervisión técnica y gestión de calidad durante la ejecución, garantizando el cumplimiento del proyecto.',
    items: [
      'Inspección y control de calidad',
      'Certificación de avance de obra',
      'Gestión de documentación técnica',
      'Coordinación con contratistas',
    ],
  },
];
