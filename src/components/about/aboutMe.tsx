import React from "react";

const AboutMe: React.FC = () => {
    return (
        <section className="w-full py-16 md:py-20 relative max-w-screen-2xl m-auto">
            <div className=" m-auto">
                <div className="flex gap-10 lg:gap-15 items-center justify-evenly max-[1100px]:flex-col">
                    {/* Imagen circular */}
                    <div className="flex-shrink-0">
                        <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br rounded-full flex justify-center items-center relative overflow-hidden group">
                            {/* Efecto de brillo animado */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <img
                                src="h.png"
                                alt="Eduardo Deossa Bohorquez"
                                className="relative bottom-4 w-[320px] md:w-[370px] lg:w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    {/* Sección de texto */}
                    <article className="flex-1 max-w-2xl">

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                            Sobre mí
                        </h2>
                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                Soy una persona que vive el presente y actúa en el momento justo, lo que me permite
                                <span className="text-purple-500 font-semibold"> adaptarme rápidamente</span> y responder con
                                eficacia a los retos.
                            </p>
                            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                Durante mi formación universitaria, aprendí y fortalecí mis habilidades en programación con
                                <span className="text-purple-500 font-semibold"> Angular, C# y el entorno .NET</span>, al mismo
                                tiempo que aplicaba y reforzaba mis conocimientos previos en
                                <span className="text-purple-500 font-semibold"> Python, Django y React</span>, desarrollando
                                proyectos en ambos lenguajes de forma paralela.
                            </p>
                            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                También adquirí experiencia en el manejo de bases de datos relacionales como
                                <span className="text-purple-500 font-semibold"> SQL Server y PostgreSQL</span>. Me apasiona
                                aprender de manera constante, estar al día con los cambios tecnológicos y ampliar mi visión
                                como desarrollador.
                            </p>
                           
                        </div>
                    </article>


                </div>
            </div>
        </section>
    );
};

export default AboutMe;