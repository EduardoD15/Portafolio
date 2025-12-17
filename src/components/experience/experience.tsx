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
    title: "Ingeniería en Sistemas",
    institution: "Universidad Nacional de Colombia",
    location: "Medellín, Colombia",
    period: "2018 - 2023",
    description: "Formación integral en desarrollo de software, estructuras de datos, algoritmos y arquitectura de sistemas.",
    achievements: [
      "Proyecto final: Sistema de gestión educativa",
      "Promedio: 4.2/5.0",
      "Miembro del grupo de investigación en IA"
    ]
  },
  {
    id: 2,
    title: "Certificación Full Stack Development",
    institution: "Platzi",
    location: "Online",
    period: "2022",
    description: "Especialización en desarrollo web moderno con énfasis en tecnologías JavaScript y frameworks actuales.",
    achievements: [
      "React, Node.js, MongoDB",
      "Arquitectura de microservicios",
      "Deployment en AWS"
    ]
  },
  {
    id: 3,
    title: "Curso Avanzado de TypeScript",
    institution: "Frontend Masters",
    location: "Online",
    period: "2023",
    description: "Profundización en TypeScript, patrones de diseño y mejores prácticas para aplicaciones escalables.",
    achievements: [
      "Tipos avanzados y generics",
      "Integración con React",
      "Testing con Jest y TypeScript"
    ]
  }
];

const workData: TimelineItem[] = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    institution: "TechCorp Solutions",
    location: "Medellín, Colombia",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web empresariales utilizando React, Node.js y PostgreSQL. Liderazgo de equipo de 3 desarrolladores junior.",
    achievements: [
      "Migración de sistema legacy a arquitectura moderna",
      "Reducción de tiempos de carga en 40%",
      "Implementación de CI/CD con GitHub Actions"
    ]
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    institution: "Digital Innovations",
    location: "Remote",
    period: "2022 - 2023",
    description: "Creación de interfaces de usuario responsivas y accesibles para plataformas e-commerce y landing pages corporativas.",
    achievements: [
      "Desarrollo de 15+ proyectos exitosos",
      "Mejora de SEO y performance",
      "Implementación de design systems"
    ]
  },
  {
    id: 3,
    title: "Desarrollador Junior",
    institution: "StartUp Labs",
    location: "Medellín, Colombia",
    period: "2021 - 2022",
    description: "Primera experiencia profesional desarrollando funcionalidades para aplicaciones web y móviles con React y React Native.",
    achievements: [
      "Colaboración en equipo ágil",
      "Desarrollo de componentes reutilizables",
      "Integración con APIs REST"
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
    <div className="min-h-screen py-12 px-4">
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
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_10px_#8e44ad] hidden md:block"></div>

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
                              <div className="absolute left-0 transform -translate-x-1/2 bg-purple-600 border-4 border-slate-900 rounded-full p-4 shadow-[0_0_20px_#8e44ad] z-10">
                                <Icon className="text-2xl text-white" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Punto central */}
                            <div className="relative flex justify-end">
                              <div className="absolute right-0 transform translate-x-1/2 bg-indigo-600 border-4 border-slate-900 rounded-full p-4 shadow-[0_0_20px_#4338ca] z-10">
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