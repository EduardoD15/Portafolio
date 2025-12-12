import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from "../cards/ProjectCard"; // 👈 Ajusta la ruta según tu estructura


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // Inicializamos el estado de slides a mostrar
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Datos de ejemplo (sin cambios)
  const projects: Project[] = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "Replica completa de Netflix con streaming de video, perfiles de usuario y sistema de recomendaciones.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Yo solo"],
      category: "Streaming Platform"
    },
    {
      id: 2,
      title: "Spotify Dashboard",
      description: "Dashboard interactivo para análisis musical con visualizaciones de datos y playlists personalizadas.",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Spotify API", "Chart.js"],
      category: "Music Analytics"
    },
    {
      id: 3,
      title: "E-Banking App",
      description: "Aplicación bancaria moderna con transferencias, análisis de gastos y gestión de tarjetas.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
      category: "Fintech"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Red social completa con posts, stories, mensajería en tiempo real y sistema de notificaciones.",
      image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Socket.io", "Redis", "AWS"],
      category: "Social Network"
    },
    {
      id: 5,
      title: "AI SaaS Platform",
      description: "Plataforma SaaS con inteligencia artificial para automatización de procesos empresariales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Crypto Exchange",
      description: "Exchange de criptomonedas con trading en tiempo real, wallets y análisis de mercado.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit-crop",
      technologies: ["React", "Web3", "Solidity", "GraphQL"],
      category: "Blockchain"
    }
  ];


  // 1. Lógica de Responsividad (NUEVA)
  useEffect(() => {
    const handleResize = () => {
      // Si la ventana es pequeña (menor a 640px)
      if (window.innerWidth < 640) { 
        setSlidesToShow(1); // Muestra 1 proyecto
      // Si la ventana es mediana (entre 640px y 1024px)
      } else if (window.innerWidth < 1024) { 
        setSlidesToShow(2); // Muestra 2 proyectos
      } else {
        setSlidesToShow(3); // Muestra 3 proyectos
      }
    };

    // 1. Establecer el valor inicial
    handleResize();
    // 2. Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // 2. Auto-play optimizado (sin cambios)
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible, projects.length]);

  // 3. Detectar visibilidad del carrusel (sin cambios)
  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  // Navegación del carrusel (sin cambios)
  const navigate = (direction: 'prev' | 'next' | number) => {
    if (typeof direction === 'number') {
      setCurrentIndex(direction);
    } else {
      setCurrentIndex((prev) => {
        if (direction === 'prev') return prev === 0 ? projects.length - 1 : prev - 1;
        return prev >= projects.length - 1 ? 0 : prev + 1;
      });
    }
    
    // Pausar auto-play temporalmente después de interacción
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div
      ref={carouselRef}
      className="w-full max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8 my-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative">
        {/* Botones de navegación (sin cambios) */}
        <button
          onClick={() => navigate('prev')}
          className="cursor-pointer absolute left-2 sm:left-4 lg:-left-10 xl:-left-16 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 sm:p-3 xl:p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-white drop-shadow-lg" />
        </button>

        {/* Contenedor principal del carousel (sin cambios) */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6 lg:gap-8"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              willChange: 'transform'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                // La magia responsive ocurre aquí, ajustando el ancho basado en slidesToShow
                className={`flex-shrink-0 group`}
                style={{ flexBasis: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 8 / slidesToShow}px)` }} // Ajuste para el gap de 8px (sm:gap-6 lg:gap-8)
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate('next')}
          className="cursor-pointer absolute right-2 sm:right-4 lg:-right-10 xl:-right-16 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 sm:p-3 xl:p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-white drop-shadow-lg" />
        </button>
      </div>

      {/* Indicadores modernos (sin cambios) */}
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