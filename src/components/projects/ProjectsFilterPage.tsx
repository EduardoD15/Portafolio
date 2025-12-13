import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';

import ProjectCard from "../cards/ProjectCard";
import { projects as allProjects } from "../data/ProjectData";
import FilterModal from "../modal/filterModal"; // Ajusta la ruta según donde guardaste el modal

const ProjectsFilterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extraer categorías y tecnologías únicas
  const allCategories = useMemo(() => {
    return Array.from(new Set(allProjects.map(p => p.category))).sort();
  }, []);

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    allProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  // Filtrar proyectos
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

  // Handlers para filtros
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
          <div className="flex gap-3">
            {/* Búsqueda */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Buscar por título, categoría o tecnología..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:border-violet-700 transition-colors"
              />
            </div>

            {/* Botón de filtros */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-colors whitespace-nowrap"
            >
              <Filter className="w-5 h-5" />
              Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mb-6 text-slate-400 text-sm">
          Mostrando {filteredProjects.length} de {allProjects.length} proyectos
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-5">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} imageHeight="h-28 sm:h-36 lg:h-44" />
            ))}
          </div>
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