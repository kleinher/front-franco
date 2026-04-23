export interface TeamMember {
  name: string;
  role: string;
  role_en: string;
  bio: string;
  bio_en: string;
}

export const team: TeamMember[] = [
  {
    name: 'Franco García',
    role: 'Director — Visualización 3D',
    role_en: 'Director — 3D Visualization',
    bio: 'Arquitecto (FADU-UBA). Especializado en visualización fotorrealista con más de 10 años produciendo imágenes para estudios de arquitectura en Argentina y el exterior.',
    bio_en: 'Architect (FADU-UBA). Specialized in photorealistic visualization with over 10 years producing images for architecture studios in Argentina and abroad.',
  },
  {
    name: 'Valentina Torres',
    role: 'Renders de interiores',
    role_en: 'Interior renders',
    bio: 'Diseñadora de interiores con especialización en iluminación artificial y ambientación. Referente en renders residenciales de alta gama.',
    bio_en: 'Interior designer specialized in artificial lighting and staging. Reference in high-end residential renders.',
  },
  {
    name: 'Matías Roldán',
    role: 'Animación y post-producción',
    role_en: 'Animation & post-production',
    bio: 'Artista 3D especializado en animación arquitectónica y composición fotorrealista. Formado en Unreal Engine y Cinema 4D.',
    bio_en: '3D artist specialized in architectural animation and photorealistic compositing. Trained in Unreal Engine and Cinema 4D.',
  },
];
