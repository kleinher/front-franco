export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Franco García',
    role: 'Director — Visualización 3D',
    bio: 'Arquitecto (FADU-UBA). Especializado en visualización fotorrealista con más de 10 años produciendo imágenes para estudios de arquitectura en Argentina y el exterior.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Valentina Torres',
    role: 'Renders de interiores',
    bio: 'Diseñadora de interiores con especialización en iluminación artificial y ambientación. Referente en renders residenciales de alta gama.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Matías Roldán',
    role: 'Animación y post-producción',
    bio: 'Artista 3D especializado en animación arquitectónica y composición fotorrealista. Formado en Unreal Engine y Cinema 4D.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
];
