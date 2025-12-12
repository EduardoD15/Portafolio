import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaSass } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";

// Define a type for the possible active skills to ensure type safety
type SkillCategory = 'Front-End' | 'Back-End' | 'Herramientas' | 'Habilidades';

const Skill: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Front-End');

  const handleSkillClick = (skill: SkillCategory) => {
    setActiveSkill(skill);
  };

  const getSkillClasses = (skill: SkillCategory) => {
    const isActive = activeSkill === skill;
    
    const baseClasses = "font-bold text-white/90 transition-all duration-300 rounded-lg border cursor-pointer group";
    const responsiveClasses = "px-3 py-2 text-sm md:px-6 md:py-3 md:text-base text-center";
    const hoverClasses = "hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:border-purple-500/50";
    const activeClasses = isActive 
      ? "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 shadow-[0_0_12px_#9333ea] border-purple-500/50" 
      : "border-transparent";

    return `${baseClasses} ${responsiveClasses} ${hoverClasses} ${activeClasses}`;
  };

  return (
    <div>
      <header>
        <ul className="grid grid-cols-2 md:flex md:justify-center sm:justify-between sm:flex gap-2 mt-6 w-full md:w-auto">
          <li className="w-full md:w-auto" onClick={() => handleSkillClick('Front-End')}>
            <h2 className={getSkillClasses('Front-End')}>
              Front-End
            </h2>
          </li>

          <li className="w-full md:w-auto" onClick={() => handleSkillClick('Back-End')}>
            <h2 className={getSkillClasses('Back-End')}>
              Back-End
            </h2>
          </li>

          <li className="w-full md:w-auto" onClick={() => handleSkillClick('Herramientas')}>
            <h2 className={getSkillClasses('Herramientas')}>
              Herramientas
            </h2>
          </li>

          <li className="w-full md:w-auto" onClick={() => handleSkillClick('Habilidades')}>
            <h2 className={getSkillClasses('Habilidades')}>
              Habilidades
            </h2>
          </li>
        </ul>
      </header>

      <main className="mt-8">
        {activeSkill === 'Front-End' && (
          <section className="w-[95%] m-auto">
            {/* Descripción de experiencia */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                Experiencia en Front-End
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-purple-500/40 text-balance">
                Desde mis primeros proyectos descubrí que el Front-End era mi forma favorita de unir diseño
                y funcionalidad. Hoy trabajo con tecnologías modernas para crear interfaces coherentes,
                accesibles y visualmente atractivas.
              </p>
            </div>

            {/* Lista de habilidades */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaHtml5 className="text-4xl md:text-6xl text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">HTML</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaCss3Alt className="text-4xl md:text-6xl text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">CSS</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <SiTailwindcss className="text-4xl md:text-6xl text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">Tailwind CSS</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaBootstrap className="text-4xl md:text-6xl text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">Bootstrap</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaSass className="text-4xl md:text-6xl text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">Sass</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaReact className="text-4xl md:text-6xl text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">React JS</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <SiVite className="text-4xl md:text-6xl text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">React + TS</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <FaAngular className="text-4xl md:text-6xl text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">Angular</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                <SiTypescript className="text-4xl md:text-6xl text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white">TypeScript</h3>
                  <p className="text-xs md:text-sm text-purple-400">Avanzado</p>
                </div>
              </li>
            </ul>
          </section>
        )}

        {activeSkill === 'Back-End' && (
          <section className="w-[95%] m-auto">
            <p className="text-white/60 text-center py-12">Contenido de Back-End próximamente...</p>
          </section>
        )}

        {activeSkill === 'Herramientas' && (
          <section className="w-[95%] m-auto">
            <p className="text-white/60 text-center py-12">Contenido de Herramientas próximamente...</p>
          </section>
        )}

        {activeSkill === 'Habilidades' && (
          <section className="w-[95%] m-auto">
            <p className="text-white/60 text-center py-12">Contenido de Habilidades próximamente...</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Skill;