export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Ing. Francisco García',
    role: 'Socio fundador — Estructuras',
    bio: 'Doctor en Ingeniería Estructural (UBA). Más de 20 años de experiencia en diseño de grandes obras de infraestructura y edificios de altura.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Ing. Valentina Ríos',
    role: 'Socia — Obras hidráulicas',
    bio: 'Especialista en hidráulica y saneamiento (UTN). Coordinó proyectos de infraestructura hídrica en 5 provincias argentinas.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Ing. Martín Díaz',
    role: 'Responsable de proyectos viales',
    bio: 'Magíster en Ingeniería Vial (UNLP). Especializado en diseño geométrico, pavimentos y seguridad vial.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Ing. Sofía Morales',
    role: 'Ingeniería de fundaciones',
    bio: 'Especialista en geotecnia y fundaciones especiales. Experiencia en suelos complejos y obras de contención.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];
