import React from 'react';

interface LevelTooltipProps {
  isVisible: boolean;
}

const LevelTooltip: React.FC<LevelTooltipProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const levels = [
    { label: 'Profesional', color: 'bg-purple-500' },
    { label: 'Avanzado',    color: 'bg-purple-500' },
    { label: 'Intermedio',  color: 'bg-purple-500' },
    { label: 'Básico',      color: 'bg-purple-500' },
  ];

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 animate-fadeIn">
      {/* Contenedor Principal */}
      <div className="bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-2xl p-4 min-w-[220px]">
        <p className="text-white/90 text-sm font-semibold mb-1 text-center">
          Escala de Niveles
        </p>
        <p className="text-white/80 text-[12px] mb-3 text-center italic">
          De mayor a menor experiencia
        </p>

        <ul className="space-y-2">
          {levels.map((level) => (
            <li key={level.label} className="flex items-center gap-2 text-sm">
              <span className={`w-3 h-3 rounded-full ${level.color} flex-shrink-0 shadow-sm`}></span>
              <span className="text-white/90 font-medium">{level.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Flecha del tooltip (Indicador visual superior) */}
      <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 border-l border-t border-purple-500/30 rotate-45"></div>
    </div>
  );
};

export default LevelTooltip;