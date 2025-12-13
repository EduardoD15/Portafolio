import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { type Project } from "../types/interface-project"; // 👈 Importar interfaz

interface ProjectCardProps {
  project: Project;
  imageHeight?: string; // Altura personalizada de la imagen (ej: "h-32", "h-48")
  imageWidth?: string;  // Ancho personalizado de la imagen (ej: "w-full", "w-64")
}

const getTechColor = (tech: string): string => {
  const colors: { [key: string]: string } = {
    'React': 'bg-slate-700 text-white',
    'Node.js': 'bg-slate-600 text-white',
    'MongoDB': 'bg-slate-800 text-white',
    'Firebase': 'bg-gray-700 text-white',
    'Next.js': 'bg-slate-900 text-white',
    'TypeScript': 'bg-slate-700 text-white',
    'Spotify API': 'bg-gray-700 text-white',
    'Chart.js': 'bg-slate-600 text-white',
    'React Native': 'bg-slate-700 text-white',
    'PostgreSQL': 'bg-slate-800 text-white',
    'Stripe': 'bg-gray-800 text-white',
    'Vue.js': 'bg-slate-700 text-white',
    'Socket.io': 'bg-slate-800 text-white',
    'Redis': 'bg-gray-700 text-white',
    'AWS': 'bg-slate-600 text-white',
    'Python': 'bg-slate-800 text-white',
    'TensorFlow': 'bg-gray-800 text-white',
    'FastAPI': 'bg-slate-700 text-white',
    'Docker': 'bg-slate-800 text-white',
    'Web3': 'bg-gray-800 text-white',
    'Solidity': 'bg-slate-900 text-white',
    'GraphQL': 'bg-slate-700 text-white',
    'Yo solo': 'bg-slate-900 text-white'
  };
  return colors[tech] || 'bg-slate-600 text-white';
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, imageHeight = "h-48 sm:h-56 lg:h-64",
  imageWidth = "w-full" }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-lg bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-violet-500/10 border border-purple-400/30 transition-all duration-500 h-full">
      {/* Imagen con overlay gradient */}
      <div className={`relative overflow-hidden ${imageHeight} ${imageWidth}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

        {/* Badge de categoría 
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-2.5 py-1 sm:px-3">
          <span className="text-xs font-medium text-white/90">{project.category}</span>
        </div>
        */}
      </div>

      {/* Contenido visible por defecto */}
      <div className="p-4 sm:p-5 lg:p-6 lg:group-hover:opacity-0 transition-opacity ">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full ${getTechColor(tech)} shadow-lg`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-slate-600 to-slate-700 text-white">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Overlay completo que aparece en hover (solo desktop) */}
      <div className="hidden lg:flex absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-indigo-900/0 to-indigo-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col justify-center items-center p-6 xl:p-8">
        <div className="text-center">
          <h3 className="text-2xl xl:text-3xl font-bold mb-3 xl:mb-4 bg-gradient-to-r text-white bg-clip-text">
            {project.title}
          </h3>
          <p className="text-slate-100 font-medium mb-4 xl:mb-6 leading-relaxed text-sm xl:text-base max-w-sm">
            {project.description}
          </p>

          {/* Tecnologías completas */}
          <div className="flex flex-wrap gap-2 mb-6 xl:mb-8 justify-center">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 xl:px-3 py-1 text-xs font-semibold rounded-full ${getTechColor(tech)} shadow-lg`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3 xl:gap-4 justify-center">
            <button className="backdrop-blur-sm bg-white/10 border border-white/20 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <ExternalLink className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Demo</span>
            </button>
            <button className="backdrop-blur-sm bg-white/10 border border-white/20 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <Github className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;