import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  allCategories: string[];
  allTechnologies: string[];
  selectedCategories: string[];
  selectedTechnologies: string[];
  onToggleCategory: (category: string) => void;
  onToggleTechnology: (tech: string) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  allCategories,
  allTechnologies,
  selectedCategories,
  selectedTechnologies,
  onToggleCategory,
  onToggleTechnology,
  onClearFilters,
  activeFiltersCount
}) => {
  const [categorySearch, setCategorySearch] = useState('');
  const [technologySearch, setTechnologySearch] = useState('');

  // Filtrar categorías según búsqueda
  const filteredCategories = useMemo(() => {
    return allCategories.filter(cat => 
      cat.toLowerCase().includes(categorySearch.toLowerCase())
    );
  }, [allCategories, categorySearch]);

  // Filtrar tecnologías según búsqueda
  const filteredTechnologies = useMemo(() => {
    return allTechnologies.filter(tech => 
      tech.toLowerCase().includes(technologySearch.toLowerCase())
    );
  }, [allTechnologies, technologySearch]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal con scroll completo */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div 
            className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-2xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-slate-900 z-10 rounded-t-2xl">
              <h2 className="text-xl font-bold text-white">Filtros</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Content - Scrolleable */}
            <div className="p-6 space-y-6">
              
              {/* Categorías */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-300">Categorías</h3>
                
                {/* Input de búsqueda de categorías */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar categoría..."
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  />
                  {categorySearch && (
                    <button
                      onClick={() => setCategorySearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => onToggleCategory(category)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          selectedCategories.includes(category)
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                            : 'bg-slate-800 text-white hover:bg-slate-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm">No se encontraron categorías</p>
                  )}
                </div>
              </div>

              {/* Tecnologías */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-300">Tecnologías</h3>
                
                {/* Input de búsqueda de tecnologías */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar tecnología..."
                    value={technologySearch}
                    onChange={(e) => setTechnologySearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                  {technologySearch && (
                    <button
                      onClick={() => setTechnologySearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredTechnologies.length > 0 ? (
                    filteredTechnologies.map(tech => (
                      <button
                        key={tech}
                        onClick={() => onToggleTechnology(tech)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          selectedTechnologies.includes(tech)
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                            : 'bg-slate-800 text-white hover:bg-slate-600'
                        }`}
                      >
                        {tech}
                      </button>
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm">No se encontraron tecnologías</p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="p-6 border-t border-white/10 flex items-center justify-between gap-4 sticky bottom-0 bg-slate-900 rounded-b-2xl">
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    onClearFilters();
                    setCategorySearch('');
                    setTechnologySearch('');
                    onClose();
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros ({activeFiltersCount})
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;