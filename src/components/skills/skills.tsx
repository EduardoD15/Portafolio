import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaSass, FaJava, FaPython, FaNodeJs, FaDocker, FaLinux, FaWindows, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiJavascript, SiSharp, SiDotnet, SiExpress, SiDjango, SiPostgresql, SiMysql, SiVercel, SiNotion, SiNpm, SiHostinger } from "react-icons/si";
import { TbBrain, TbTarget, TbBulb, TbUsers, TbRocket, TbMoodHappy, TbHeartHandshake } from "react-icons/tb";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";

import { BiLogoVisualStudio } from "react-icons/bi";
import SkillCard, { type SkillItemData } from "../cards/skillCard";

type SkillCategory = 'Front-End' | 'Back-End' | 'Herramientas' | 'Habilidades';

const Skill: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Front-End');

  // Array de datos para Front-End skills
  const frontEndSkills: SkillItemData[] = [
    { name: "HTML", icon: FaHtml5, level: "Avanzado", color: "text-orange-500 hover:text-orange-400 transition-colors" },
    { name: "CSS", icon: FaCss3Alt, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "JavaScript", icon: SiJavascript, level: "Avanzado", color: "text-yellow-400 hover:text-yellow-300 transition-colors" },
    { name: "TypeScript", icon: SiTypescript, level: "Avanzado", color: "text-blue-600 hover:text-blue-500 transition-colors" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Avanzado", color: "text-cyan-500 hover:text-cyan-400 transition-colors" },
    { name: "Bootstrap", icon: FaBootstrap, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Sass", icon: FaSass, level: "Avanzado", color: "text-pink-500 hover:text-pink-400 transition-colors" },
    { name: "React JS", icon: FaReact, level: "Avanzado", color: "text-cyan-400 hover:text-cyan-300 transition-colors" },
    { name: "React + TS", icon: SiVite, level: "Avanzado", color: "text-violet-500 hover:text-violet-400 transition-colors" },
    { name: "Angular", icon: FaAngular, level: "Avanzado", color: "text-red-600 hover:text-red-500 transition-colors" },
  ];

  // Array de datos para Back-End skills
const backEndSkills: SkillItemData[] = [
    { name: "C#", icon: SiSharp, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: ".NET", icon: SiDotnet, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Java", icon: FaJava, level: "Avanzado", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "JavaScript", icon: SiJavascript, level: "Avanzado", color: "text-yellow-400 hover:text-yellow-300 transition-colors" },
    { name: "Node.js", icon: FaNodeJs, level: "Avanzado", color: "text-green-600 hover:text-green-500 transition-colors" },
    { name: "Express", icon: SiExpress, level: "Avanzado", color: "text-gray-300 hover:text-gray-200 transition-colors" },
    { name: "Python", icon: FaPython, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "Django", icon: SiDjango, level: "Avanzado", color: "text-green-700 hover:text-green-600 transition-colors" },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Avanzado", color: "text-blue-400 hover:text-blue-300 transition-colors" },
    { name: "SQL", icon: DiMsqlServer, level: "Avanzado", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "MySQL", icon: SiMysql, level: "Avanzado", color: "text-blue-600 hover:text-blue-500 transition-colors" },
    { name: "Visual Basic", icon: DiVisualstudio, level: "Avanzado", color: "text-purple-700 hover:text-purple-600 transition-colors" },
  ];

  // Array de datos para Herramientas
  const toolsSkills: SkillItemData[] = [
    { name: "VS Code", icon: BiLogoVisualStudio, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "GitHub", icon: FaGithub, level: "Avanzado", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Git", icon: FaGitAlt, level: "Avanzado", color: "text-orange-600 hover:text-orange-500 transition-colors" },
    { name: "Docker", icon: FaDocker, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "Visual Studio", icon: BiLogoVisualStudio, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "Notion", icon: SiNotion, level: "Avanzado", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Windows", icon: FaWindows, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },
    { name: "Hostinger", icon: SiHostinger, level: "Avanzado", color: "text-purple-600 hover:text-purple-500 transition-colors" },
    { name: "npm", icon: SiNpm, level: "Avanzado", color: "text-red-600 hover:text-red-500 transition-colors" },
    { name: "Vercel", icon: SiVercel, level: "Avanzado", color: "text-white hover:text-gray-200 transition-colors" },
    { name: "Figma", icon: FaFigma, level: "Avanzado", color: "text-orange-500 hover:text-orange-400 transition-colors" },
    { name: "Linux", icon: FaLinux, level: "Avanzado", color: "text-blue-500 hover:text-blue-400 transition-colors" },

  ];

  // Array de datos para Habilidades blandas
  const softSkills: SkillItemData[] = [
    { name: "Productividad", icon: TbTarget, level: "Avanzado", color: "text-purple-400 hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" },
    { name: "Versatilidad", icon: TbBrain, level: "Avanzado", color: "text-indigo-400 hover:text-indigo-300 transition-colors drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" },
    { name: "Autodidacta", icon: TbBulb, level: "Avanzado", color: "text-violet-400 hover:text-violet-300 transition-colors drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" },
    { name: "Liderazgo", icon: TbUsers, level: "Avanzado", color: "text-purple-500 hover:text-purple-400 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" },
    { name: "Creatividad", icon: TbHeartHandshake, level: "Avanzado", color: "text-indigo-500 hover:text-indigo-400 transition-colors drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" },
    { name: "Proactivo", icon: TbRocket, level: "Avanzado", color: "text-violet-500 hover:text-violet-400 transition-colors drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" },
    { name: "Atención al cliente", icon: TbMoodHappy, level: "Avanzado", color: "text-purple-300 hover:text-purple-200 transition-colors drop-shadow-[0_0_8px_rgba(216,180,254,0.5)]" },
    { name: "Trabajo en equipo", icon: TbUsers, level: "Avanzado", color: "text-indigo-300 hover:text-indigo-200 transition-colors drop-shadow-[0_0_8px_rgba(165,180,252,0.5)]" },
    { name: "Gestión del tiempo", icon: TbTarget, level: "Avanzado", color: "text-violet-300 hover:text-violet-200 transition-colors drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]" },
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
                Experiencia en Front-End
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-purple-500/40 text-balance">
                Desde mis primeros proyectos descubrí que el Front-End era mi forma favorita de unir diseño
                y funcionalidad. Hoy trabajo con tecnologías modernas para crear interfaces coherentes,
                accesibles y visualmente atractivas.
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
                Experiencia en Back-End
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-indigo-500/40 text-balance">
                Mi experiencia en Back-End me ha permitido desarrollar soluciones robustas y escalables.
                Trabajo con múltiples lenguajes y frameworks para crear APIs eficientes, gestionar bases de
                datos y construir arquitecturas sólidas que soporten aplicaciones de alto rendimiento.
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
              </h3>

              <p className="text-white/70 leading-relaxed pl-5 border-l-2 border-blue-500/40 text-balance">
                Más allá de la técnica, cuento con habilidades interpersonales que me permiten trabajar
                efectivamente en equipo, liderar proyectos y mantener un alto nivel de productividad incluso
                bajo presión. Estas competencias complementan mi perfil técnico para ofrecer soluciones integrales.
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