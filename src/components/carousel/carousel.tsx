import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 👈 Importaciones actualizadas
import ProjectCard from "../cards/ProjectCard"; 
import { type Project } from "../types/interface-project"; // 👈 Importar la interfaz
import { projects as allProjects } from "../data/ProjectData"; // 👈 Importar los datos

const ProjectCarousel: React.FC = () => {
  // 1. Filtrar solo los proyectos destacados
  const projects: Project[] = allProjects.filter(p => p.isFeatured); 
  
  // 💡 NOTA: Si projects.length es 0, el carrusel se mostrará vacío.
  // Podrías añadir una comprobación aquí: if (projects.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Lógica de Responsividad (sin cambios funcionales, solo usa el estado filtrado)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Auto-play optimizado (sin cambios funcionales)
  useEffect(() => {
    if (!isAutoPlaying || !isVisible || projects.length <= 1) return; // Añadida comprobación de length > 1

    const interval = window.setInterval(() => {
      // Ajuste para el nuevo array filtrado
      setCurrentIndex((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible, projects.length]);

  // Detectar visibilidad del carrusel (sin cambios)
  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  // Navegación del carrusel (sin cambios funcionales)
  const navigate = (direction: 'prev' | 'next' | number) => {
    if (projects.length === 0) return; // No navegar si no hay proyectos
    
    if (typeof direction === 'number') {
      setCurrentIndex(direction);
    } else {
      setCurrentIndex((prev) => {
        if (direction === 'prev') return prev === 0 ? projects.length - 1 : prev - 1;
        return prev >= projects.length - 1 ? 0 : prev + 1;
      });
    }

    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  // Si no hay proyectos destacados, podrías mostrar un mensaje
  if (projects.length === 0) {
      return (
          <div className="text-center p-8 text-gray-500">
              No hay proyectos destacados para mostrar en este momento.
          </div>
      );
  }

  return (
    <div
      ref={carouselRef}
      className="w-full max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8 my-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative">
        {/* Botones de navegación */}
        {/* Los botones solo se muestran si hay más proyectos de los que caben en la vista actual o si se quiere ver el ciclo completo */}
        {projects.length > slidesToShow && (
          <>
            <button
              onClick={() => navigate('prev')}
              className="cursor-pointer absolute left-2 sm:left-4 lg:-left-10 xl:-left-16 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 sm:p-3 xl:p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-white drop-shadow-lg" />
            </button>
          
            <button
              onClick={() => navigate('next')}
              className="cursor-pointer absolute right-2 sm:right-4 lg:-right-10 xl:-right-16 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 sm:p-3 xl:p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-white drop-shadow-lg" />
            </button>
          </>
        )}

        {/* Contenedor principal del carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6 lg:gap-8"
            style={{ 
              // Ajuste para el nuevo array filtrado
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              willChange: 'transform'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`flex-shrink-0 group`}
                style={{ flexBasis: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 8 / slidesToShow}px)` }} 
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Indicadores modernos */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentIndex
                ? 'w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-purple-600 to-violet-700 shadow-lg shadow-purple-500/45'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-600 hover:bg-slate-500 hover:scale-125'
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default ProjectCarousel;