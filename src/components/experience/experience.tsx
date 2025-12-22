import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

type ExperienceCategory = 'Educación' | 'Laboral';

interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationData: TimelineItem[] = [
  {
    id: 1,
    title: "Media Técnica en Informática",
    institution: "Colegio Empresarial / Unilasallista",
    location: "Medellín, Colombia",
    period: "2020 - 2022",
    description:
      "Se inició con una base sólida en programación, donde el primer año se trabajó con C++ y el segundo año con Java.",
    achievements: [
      "Proyecto final: Sistema de gestión de inventarios",
      "Rol: Líder del grupo",
      "JavaScript, Node.js + Express, PostgreSQL"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    institution: "Platzi",
    location: "Online",
    period: "2020 - 2024",
    description:
      "Especialización en desarrollo web moderno, con énfasis en tecnologías JavaScript y frameworks actuales.",
    achievements: [
      "Angular, HTML, CSS, JavaScript",
      "Tailwind CSS, Sass",
      "Responsive Design"
    ]
  },
  {
    id: 3,
    title: "Backend Developer",
    institution: "Platzi",
    location: "Online",
    period: "2020 - 2024",
    description:
      "Especialización en desarrollo de APIs, arquitectura MVC y principios SOLID, junto con testing y administración de servidores.",
    achievements: [
      ".NET Core, JavaScript",
      "MySQL, MariaDB",
      "Flujos CI/CD",
      "Testing unitario con JUnit"
    ]
  },
  {
    id: 4,
    title: "Tecnólogo en Desarrollo de Software",
    institution: "Institución Universitaria Pascual Bravo",
    location: "Medellín, Colombia",
    period: "2023 - 2025",
    description:
      "Formación en metodologías ágiles, estructuras de datos, seguridad informática y auditoría de sistemas, junto con el uso de lenguajes de programación empresariales y prácticas de testing.",
    achievements: [
      ".NET Core, C#, Python, Django",
      "PostgreSQL, SQL Server",
      "Angular, React, Windows Forms"
    ]
  },

];


const workData: TimelineItem[] = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    institution: "Elico Group",
    location: "La Estrella, Antioquia, Colombia",
    period: "2025",
    description:
      "Desarrollador Full Stack con enfoque en frontend. Creación de interfaces UX/UI con React y TypeScript, usando Tailwind CSS y Figma. Consumo de APIs REST y desarrollo backend con Python y Django.",
    achievements: [
      "Frontend: React, TypeScript, Tailwind CSS",
      "Backend: Python, Django, APIs REST",
      "Base de datos: PostgreSQL",
      "Integración con SAP usando Python y Visual Basic en Raspberry Pi (Servicio para Postobón)",
      "Creación de bot de WhatsApp mediante API",
      "Diseño e implementación de procesos ETL"
    ]
  }
];


const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceCategory>('Educación');

  const handleTabClick = (tab: ExperienceCategory) => {
    setActiveTab(tab);
  };

  const getTabClasses = (tab: ExperienceCategory) => {
    const isActive = activeTab === tab;
    const baseClasses = "font-bold text-white/90 transition-all duration-300 rounded-lg border cursor-pointer group";
    const responsiveClasses = "px-3 py-2 text-sm md:px-6 md:py-3 md:text-base text-center";
    const hoverClasses = "hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:border-purple-500/50";
    const activeClasses = isActive
      ? "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 shadow-[0_0_12px_#9333ea] border-purple-500/50"
      : "border-transparent";

    return `${baseClasses} ${responsiveClasses} ${hoverClasses} ${activeClasses}`;
  };

  const currentData = activeTab === 'Educación' ? educationData : workData;
  const Icon = activeTab === 'Educación' ? FaGraduationCap : FaBriefcase;

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <header>
          <h1 className="text-white font-bold text-center text-3xl md:text-4xl mt-[10px]">
            Mi Experiencia
          </h1>
          <hr className="w-24 border-t-4 shadow-[0_0_20px_#8e44ad] border-purple-600 mx-auto mt-2" />

          <ul className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-20 mt-6 w-full md:w-auto px-4">
            <li className="w-full md:w-auto" onClick={() => handleTabClick('Educación')}>
              <h2 className={getTabClasses('Educación')}>
                Educación
              </h2>
            </li>

            <li className="w-full md:w-auto" onClick={() => handleTabClick('Laboral')}>
              <h2 className={getTabClasses('Laboral')}>
                Laboral
              </h2>
            </li>
          </ul>
        </header>

        <main className="mt-12 md:mt-16">
          <section className="w-[95%] max-w-5xl m-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Línea vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_8px_#8e44ad] hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                {currentData.map((item, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={item.id} className="relative">
                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        <div className="bg-white/5 hover:bg-white/10 rounded-xl p-5 border border-purple-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-600/20 border border-purple-500/50 rounded-full p-3 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                              <Icon className="text-2xl text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white">{item.title}</h3>
                              <p className="text-sm text-purple-400 font-semibold">{item.institution}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3 mb-3 text-xs text-white/70">
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="text-purple-400" />
                              {item.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-purple-400" />
                              {item.location}
                            </span>
                          </div>

                          <p className="text-sm text-white/80 mb-3">{item.description}</p>

                          {item.achievements && (
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Desktop Layout - Zigzag */}
                      <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                        {isLeft ? (
                          <>
                            {/* Contenido a la izquierda */}
                            <div className="text-right pr-8">
                              <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-violet-500/10 border border-purple-400/30 transition-all rounded-xl p-6  duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] backdrop-blur-sm hover:scale-105 transform">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-base text-purple-400 font-semibold mb-3">{item.institution}</p>

                                <div className="flex flex-wrap gap-3 mb-3 text-sm text-white/70 justify-end">
                                  <span className="flex items-center gap-1">
                                    <FaCalendarAlt className="text-purple-400" />
                                    {item.period}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-purple-400" />
                                    {item.location}
                                  </span>
                                </div>

                                <p className="text-sm text-white/80 mb-3">{item.description}</p>

                                {item.achievements && (
                                  <ul className="space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                      <li key={i} className="text-sm text-white/70 flex items-start gap-2 justify-end">
                                        <span>{achievement}</span>
                                        <span className="text-purple-400">•</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>

                            {/* Punto central */}
                            <div className="relative flex justify-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-purple-600 border-4 border-slate-900 rounded-full p-4 shadow-[0_0_7px_#8e44ad] z-10">
                                <Icon className="text-2xl text-white" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Punto central */}
                            <div className="relative flex justify-end">
                              <div className="absolute right-0 transform translate-x-1/2 bg-indigo-600 border-4 border-slate-900 rounded-full p-4 shadow-[0_0_7px_#4338ca] z-10">
                                <Icon className="text-2xl text-white" />
                              </div>
                            </div>

                            {/* Contenido a la derecha */}
                            <div className="text-left pl-8">
                              <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/10 to-indigo-500/10 border border-indigo-400/30 transition-all rounded-xl p-6 duration-300 hover:shadow-[0_0_25px_rgba(67,56,202,0.4)] backdrop-blur-sm hover:scale-105 transform">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-base text-indigo-400 font-semibold mb-3">{item.institution}</p>

                                <div className="flex flex-wrap gap-3 mb-3 text-sm text-white/70">
                                  <span className="flex items-center gap-1">
                                    <FaCalendarAlt className="text-indigo-400" />
                                    {item.period}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-indigo-400" />
                                    {item.location}
                                  </span>
                                </div>

                                <p className="text-sm text-white/80 mb-3">{item.description}</p>

                                {item.achievements && (
                                  <ul className="space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                      <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                                        <span className="text-indigo-400">•</span>
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Experience;