export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  isFeatured: boolean; // 👈 NUEVA PROPIEDAD
}