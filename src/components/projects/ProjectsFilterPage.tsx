import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';

import ProjectCard from "../cards/ProjectCard";
import { projects as allProjects } from "../data/ProjectData";

const ProjectsFilterPage: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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
      const matchesTitle = project.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTitle.toLowerCase());

      const matchesCategory = selectedCategories.length === 0 ||
        selectedCategories.includes(project.category);

      const matchesTechnology = selectedTechnologies.length === 0 ||
        selectedTechnologies.some(tech => project.technologies.includes(tech));

      const matchesFeatured = !showFeaturedOnly || project.isFeatured;

      return matchesTitle && matchesCategory && matchesTechnology && matchesFeatured;
    });
  }, [searchTitle, selectedCategories, selectedTechnologies, showFeaturedOnly]);

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
    setSearchTitle('');
    setSelectedCategories([]);
    setSelectedTechnologies([]);
    setShowFeaturedOnly(false);
  };

  const activeFiltersCount = selectedCategories.length + selectedTechnologies.length + (showFeaturedOnly ? 1 : 0);

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

        {/* Barra de búsqueda y filtros */}
        <div className="mb-4 lg:mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Búsqueda por título */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por título o descripción..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:border-violet-700 transition-colors"
              />
            </div>

            {/* Botón de filtros (móvil) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>
          </div>

          {/* Panel de filtros */}
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block rounded-lg bg-white/5 border border-white/10  p-4 lg:p-6 space-y-6`}>

            {/* Destacados */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Solo proyectos destacados
                </span>
              </label>
            </div>

            {/* Categorías */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-300">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategories.includes(category)
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                        : 'bg-slate-800 text-white hover:bg-slate-600'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tecnologías */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-300">Tecnologías</h3>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {allTechnologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedTechnologies.includes(tech)
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                        : 'bg-slate-800 text-white hover:bg-slate-600'
                      }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Limpiar filtros */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
              >
                <X className="w-4 h-4" />
                Limpiar filtros ({activeFiltersCount})
              </button>
            )}
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
      </div>
    </div>
  );
};

export default ProjectsFilterPage;