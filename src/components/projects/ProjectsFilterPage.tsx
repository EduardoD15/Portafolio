import React, { useState, useMemo, useEffect } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

import ProjectCard from "../cards/ProjectCard";
import { projects as allProjects } from "../data/ProjectData";
import FilterModal from "../modal/filterModal";

const ProjectsFilterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Detectar tamaño de pantalla y ajustar items por página
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      let items = 8; // Desktop

      if (width < 640) {
        items = 5; // Móvil
      } else if (width < 1024) {
        items = 8; // Tablet
      }

      setItemsPerPage(items);
      setVisibleCount(items);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const allCategories = useMemo(() => {
    return Array.from(new Set(allProjects.map(p => p.category))).sort();
  }, []);

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    allProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategories.length === 0 ||
        selectedCategories.includes(project.category);

      const matchesTechnology = selectedTechnologies.length === 0 ||
        selectedTechnologies.some(tech => project.technologies.includes(tech));

      return matchesSearch && matchesCategory && matchesTechnology;
    });
  }, [searchQuery, selectedCategories, selectedTechnologies]);

  // Resetear visibleCount cuando cambien los filtros
  useEffect(() => {
    setVisibleCount(itemsPerPage);
  }, [searchQuery, selectedCategories, selectedTechnologies, itemsPerPage]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = filteredProjects.length > visibleCount;
  const canShowLess = visibleCount > itemsPerPage;

  const loadMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  const showLess = () => {
    setVisibleCount(prev => Math.max(itemsPerPage, prev - itemsPerPage));
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTechnologies([]);
  };

  const activeFiltersCount = selectedCategories.length + selectedTechnologies.length;

  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

        {/* Header */}
        <div className="mb-4 lg:mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Todos mis proyectos
          </h3>

          <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-purple-500/40 text-balance">
            Explora mi portafolio completo con {allProjects.length} proyectos
          </p>
        </div>

        {/* Barra de búsqueda y botón de filtros */}
        <div className="mb-4 lg:mb-6">
          {/* Modificado para ser flex-col (apilado) por defecto y md:flex-row (en fila) en pantallas medianas+ */}
          <div className="flex flex-col md:flex-row gap-3">

            {/* Contenedor del Input: Ocupa todo el ancho en móvil, flex-1 en desktop */}
            <div className="relative w-full md:flex-1">
              <input
                type="text"
                placeholder="Buscar por título, categoría o tecnología..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:border-violet-700 transition-colors"
              />
            </div>

            {/* Botón de Filtros: Ocupa todo el ancho en móvil, vuelve a su ancho de contenido en desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_6px_#4338ca] w-full md:w-auto md:whitespace-nowrap"
            >
              <Filter className="w-5 h-5" />
              Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>
        </div>

        {/* Chips de filtros activos */}
        {activeFiltersCount > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-sm font-medium">Filtros activos:</span>

            {selectedCategories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                {category}
                <X className="w-4 h-4" />
              </button>
            ))}

            {selectedTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => toggleTechnology(tech)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                {tech}
                <X className="w-4 h-4" />
              </button>
            ))}

            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 text-white rounded-full text-sm font-medium hover:bg-slate-600 transition-colors ml-2"
            >
              Limpiar todos
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Contador de resultados */}
        <div className="mb-6 text-slate-400 text-sm">
          Mostrando {visibleProjects.length} de {filteredProjects.length} proyectos
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-5">
              {visibleProjects.map(project => (
                <ProjectCard key={project.id} project={project} imageHeight="h-28 sm:h-36 lg:h-44" />
              ))}
            </div>

            {/* Botones Ver más / Ver menos */}
            {(hasMoreProjects || canShowLess) && (
              <div className=" flex justify-center items-center gap-4 mt-8">
                {canShowLess && (
                  <button
                    onClick={showLess}
                    className="cursor-pointer flex items-center gap-2 px-8 py-3 bg-indigo-700 hover:bg-indigo-600 shadow-[0_0_6px_#4338ca] rounded-xl font-semibold transition-all hover:scale-105"
                  >
                    <ChevronUp className="w-5 h-5" />
                    Ver menos
                  </button>
                )}

                {hasMoreProjects && (
                  <button
                    onClick={loadMore}
                    className="cursor-pointer flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_6px_#4338ca]"
                  >
                    Ver más proyectos
                    <ChevronDown className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-slate-400 text-lg mb-4">
              No se encontraron proyectos con los filtros seleccionados
            </div>
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Modal de filtros */}
        <FilterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          allCategories={allCategories}
          allTechnologies={allTechnologies}
          selectedCategories={selectedCategories}
          selectedTechnologies={selectedTechnologies}
          onToggleCategory={toggleCategory}
          onToggleTechnology={toggleTechnology}
          onClearFilters={clearAllFilters}
          activeFiltersCount={activeFiltersCount}
        />
      </div>
    </div>
  );
};

export default ProjectsFilterPage;