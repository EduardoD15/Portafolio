import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap,
  FaSass, FaJava, FaPython, FaDocker, FaLinux,
  FaWindows, FaGitAlt, FaGithub, FaFigma, FaNodeJs
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiVite, SiJavascript,
  SiSharp, SiDotnet, SiDjango, SiPostgresql, SiCplusplus,
  SiVercel, SiNotion, SiNpm, SiExpress
} from "react-icons/si";
import {
  TbBrain, TbTarget, TbBulb, TbUsers,
  TbRocket, TbMoodHappy, TbHeartHandshake
} from "react-icons/tb";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

import SkillCard, { type SkillItemData } from "../cards/skillCard";
import LevelTooltip from "../modal/leveltop";


type SkillCategory = 'Front-End' | 'Back-End' | 'Herramientas' | 'Habilidades';

const Skill: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Front-End');

  // Array de datos para Front-End skills
  const frontEndSkills: SkillItemData[] = [
    { name: "HTML", icon: FaHtml5, level: "Profesional", color: "text-orange-500 hover:text-orange-400 transition-colors" },
    { name: "CSS", icon: FaCss3Alt, level: "Profesional", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "JavaScript", icon: SiJavascript, level: "Profesional", color: "text-yellow-400 hover:text-yellow-300 transition-colors" },
    { name: "TypeScript", icon: SiTypescript, level: "Profesional", color: "text-blue-600 hover:text-blue-500 transition-colors" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Profesional", color: "text-cyan-500 hover:text-cyan-400 transition-colors" },
    { name: "Bootstrap", icon: FaBootstrap, level: "Intermedio", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Sass", icon: FaSass, level: "Intermedio", color: "text-pink-500 hover:text-pink-400 transition-colors" },
    { name: "React JS", icon: FaReact, level: "Intermedio", color: "text-cyan-400 hover:text-cyan-300 transition-colors" },
    { name: "React + TS", icon: SiVite, level: "Profesional", color: "text-violet-500 hover:text-violet-400 transition-colors" },
    { name: "Angular", icon: FaAngular, level: "Intermedio", color: "text-red-600 hover:text-red-500 transition-colors" },
  ];

  // Array de datos para Back-End skills
 const backEndSkills: SkillItemData[] = [
    { name: "C#", icon: SiSharp, level: "Profesional", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: ".NET", icon: SiDotnet, level: "Profesional", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Python", icon: FaPython, level: "Profesional", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "Django", icon: SiDjango, level: "Profesional", color: "text-green-700 hover:text-green-600 transition-colors" },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Avanzado", color: "text-blue-400 hover:text-blue-300 transition-colors" },
    { name: "SQL", icon: DiMsqlServer, level: "Intermedio", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "Node.js", icon: FaNodeJs, level: "Basico", color: "text-green-500 hover:text-green-400 transition-colors" },
    { name: "Express", icon: SiExpress, level: "Basico", color: "text-gray-400 hover:text-white transition-colors" },
    { name: "Java", icon: FaJava, level: "Basico", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "C++", icon: SiCplusplus, level: "Basico", color: "text-blue-600 hover:text-blue-500 transition-colors" },
    { name: "Visual Basic", icon: DiVisualstudio, level: "Basico", color: "text-purple-700 hover:text-purple-600 transition-colors" },
  ];

  // Array de datos para Herramientas
  const toolsSkills: SkillItemData[] = [
    { name: "VS Code", icon: BiLogoVisualStudio, level: "Profesional", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "GitHub", icon: FaGithub, level: "Avanzado", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Git", icon: FaGitAlt, level: "Avanzado", color: "text-orange-600 hover:text-orange-500 transition-colors" },
    { name: "Docker", icon: FaDocker, level: "Intermedio", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "Visual Studio", icon: BiLogoVisualStudio, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Notion", icon: SiNotion, level: "Profesional", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Windows", icon: FaWindows, level: "Profesional", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "npm", icon: SiNpm, level: "Intermedio", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "Vercel", icon: SiVercel, level: "Basico", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Figma", icon: FaFigma, level: "Avanzado", color: "text-orange-500 hover:text-orange-400 transition-colors" },
    { name: "Linux", icon: FaLinux, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },

  ];

  // Array de datos para Habilidades blandas
  const softSkills: SkillItemData[] = [
    { name: "Productividad", icon: TbTarget, level: "Profesional", color: "text-purple-400 hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" },
    { name: "Versatilidad", icon: TbBrain, level: "Profesional", color: "text-indigo-400 hover:text-indigo-300 transition-colors drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" },
    { name: "Autodidacta", icon: TbBulb, level: "Profesional", color: "text-violet-400 hover:text-violet-300 transition-colors drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" },
    { name: "Liderazgo", icon: TbUsers, level: "Avanzado", color: "text-purple-500 hover:text-purple-400 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" },
    { name: "Creatividad", icon: TbHeartHandshake, level: "Avanzado", color: "text-indigo-500 hover:text-indigo-400 transition-colors drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" },
    { name: "Proactivo", icon: TbRocket, level: "Profesional", color: "text-violet-500 hover:text-violet-400 transition-colors drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" },
    { name: "Atención al cliente", icon: TbMoodHappy, level: "Avanzado", color: "text-purple-300 hover:text-purple-200 transition-colors drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]" },
    { name: "Trabajo en equipo", icon: TbUsers, level: "Avanzado", color: "text-indigo-300 hover:text-indigo-200 transition-colors drop-shadow-[0_0_8px_rgba(165,180,252,0.5)]" },
    { name: "Gestión del tiempo", icon: TbTarget, level: "Profesional", color: "text-violet-300 hover:text-violet-200 transition-colors drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]" },
  ];

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
                Front-End
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-6 h-6 rounded-full border-2 border-purple-400/60 flex items-center justify-center text-purple-400/80 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-200 text-sm font-bold cursor-help"
                  >
                    ?
                  </button>
                  <LevelTooltip isVisible={showTooltip} />
                </div>
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-purple-500/40 text-balance">
                Desde mis inicios me gustó trabajar y especializarme en el desarrollo front-end, principalmente utilizando CSS puro sin frameworks, lo que me permitió adquirir la capacidad de crear interfaces profesionales y manejar la lógica de desarrollo de manera sólida y profesional.
              </p>
            </div>

            {/* Lista de habilidades mapeada */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frontEndSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </ul>
          </section>
        )}

        {activeSkill === 'Back-End' && (
          <section className="w-[95%] m-auto">
            {/* Descripción de experiencia */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                Back-End
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-6 h-6 rounded-full border-2 border-indigo-400/60 flex items-center justify-center text-indigo-400/80 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-200 text-sm font-bold cursor-help"
                  >
                    ?
                  </button>
                  <LevelTooltip isVisible={showTooltip} />
                </div>
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-indigo-500/40 text-balance">
                Mi lógica de programación se formó desde la media técnica, con jornadas de hasta cinco horas continuas de desarrollo, lo que me permitió resolver problemas bajo presión y asumir la responsabilidad de solucionarlos de inicio a fin.
              </p>
            </div>

            {/* Lista de habilidades mapeada */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {backEndSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </ul>
          </section>
        )}

        {activeSkill === 'Herramientas' && (
          <section className="w-[95%] m-auto">
            {/* Descripción de experiencia */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full"></span>
                Herramientas de Desarrollo
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-6 h-6 rounded-full border-2 border-violet-400/60 flex items-center justify-center text-violet-400/80 hover:bg-violet-500/20 hover:border-violet-400 transition-all duration-200 text-sm font-bold cursor-help"
                  >
                    ?
                  </button>
                  <LevelTooltip isVisible={showTooltip} />
                </div>
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-violet-500/40 text-balance">
                Domino un amplio conjunto de herramientas que optimizan mi flujo de trabajo. Desde editores
                de código hasta plataformas de diseño, control de versiones y despliegue, estas tecnologías
                me permiten ser más eficiente y colaborativo en cada proyecto.
              </p>
            </div>

            {/* Lista de habilidades mapeada */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {toolsSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </ul>
          </section>
        )}

        {activeSkill === 'Habilidades' && (
          <section className="w-[95%] m-auto">
            {/* Descripción de experiencia */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-400 rounded-full"></span>
                Habilidades Blandas
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-6 h-6 rounded-full border-2 border-blue-400/60 flex items-center justify-center text-blue-400/80 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200 text-sm font-bold cursor-help"
                  >
                    ?
                  </button>
                  <LevelTooltip isVisible={showTooltip} />
                </div>
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-blue-500/40 text-balance">
                He desarrollado sólidas habilidades interpersonales, asumiendo roles de liderazgo y destacándome por mi proactividad, identificando tareas y mejoras de forma autónoma para garantizar el éxito de los proyectos.
              </p>
            </div>

            {/* Lista de habilidades mapeada */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default Skill;