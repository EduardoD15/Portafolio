import { useState, useEffect } from "react";
import { FaDownload, FaLaptopCode, FaChevronDown } from "react-icons/fa";

interface HeaderProps {
    scrollToSectionId?: string;
}

export default function Header({ scrollToSectionId = 'Carousel' }: HeaderProps) {
    const [showArrow, setShowArrow] = useState(true);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    // Función para obtener la posición de la sección objetivo
    const getTargetSectionTop = () => {
        const targetElement = document.getElementById(scrollToSectionId);
        if (targetElement) {
            return targetElement.offsetTop;
        }
        return Infinity; // Si no se encuentra, usamos un valor grande
    };

    // Efecto para detectar cambios en el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Posición superior de la siguiente sección
            const targetTop = getTargetSectionTop();

            // 1. Condición de REAPARICIÓN (mostrar flecha):
            // Si la posición del scroll es menor al 90% de la altura de la vista (estamos en el header)
            const shouldShowOnScrollUp = scrollPosition < viewportHeight * 0.9;

            // 2. Condición de DESAPARICIÓN (ocultar flecha):
            // Se calcula cuando el 75% de la siguiente sección está visible.
            const thresholdForDisappearance = targetTop - viewportHeight * 0.75;

            const shouldHideOnScrollDown = scrollPosition >= thresholdForDisappearance;

            // Lógica de actualización:
            // Muestra la flecha si estamos en el header Y aún no hemos pasado el umbral de desaparición
            if (shouldShowOnScrollUp && !shouldHideOnScrollDown) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollToSectionId, viewportHeight]);

    const handleArrowClick = () => {
        // Desaparecer al hacer click
        setShowArrow(false);

        // Desplazar a la sección objetivo
        const targetElement = document.getElementById(scrollToSectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`w-full ${viewportHeight < 710 && viewportWidth < 1110 ? 'h-auto' : 'h-screen'} flex items-center relative max-w-screen-2xl m-auto pt-[80px]`}>             <article className="w-[95%] m-auto">
            <div className="flex gap-5 items-center w-[100%] justify-evenly max-[1300px]:flex-col max-[1300px]:gap-8">
                <div className="w-[450px] h-[450px] bg-violet-950 rounded-full border-4 border-purple-600 shadow-[0_0_20px_#8e44ad] flex justify-center items-center max-[1300px]:w-[350px] max-[1300px]:h-[350px]">
                    <img
                        src="eduardo.webp"
                        alt="Eduardo Deossa Bohorquez"
                        className="bottom-15 relative w-[400px] max-[1300px]:w-[300px]"
                    />
                </div>
                <div className="flex flex-col gap-2 max-[1300px]:text-center max-[1300px]:items-center">
                    <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-medium text-white max-[1300px]:text-xl">
                        Eduardo Deossa Bohorquez
                    </h3>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white max-[1300px]:text-2xl">
                        Desarrollador <span className="text-purple-600 [text-shadow:0_0_20px_rgba(142,68,173,0.4)]">Fullstack Web</span>
                    </h2>
                    <p className="max-w-[720px] text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-white max-[1300px]:text-base max-[1300px]:max-w-[90%]">
                        Cuento con la capacidad de construir una página web desde cero, desarrollando tanto el frontend como el backend.
                        En cuanto al diseño, puedo implementar sitios idénticos a los diseños entregados.
                    </p>

                    <div className="flex gap-5 max-[1300px]:justify-center">
                        <button className="bg-purple-700 mt-[10px] cursor-pointer shadow-[0_0_6px_#9333ea] px-5 py-3 text-lg rounded-xl font-semibold flex justify-center items-center gap-3 hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-300 tracking-wide max-[1300px]:text-base max-[1300px]:px-4 max-[1300px]:py-2">
                            <span className="text-white">CV</span>
                            <FaDownload className="text-lg text-white" />
                        </button>
                        <button className="bg-indigo-700 shadow-[0_0_6px_#4338ca] mt-[10px] cursor-pointer px-5 py-3 text-lg rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300 tracking-wide hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] max-[1300px]:text-base max-[1300px]:px-4 max-[1300px]:py-2">
                            <span className="text-white">Proyectos</span>
                            <FaLaptopCode className="text-white text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </article>

            {/* Flecha triple para scroll */}
            {showArrow && viewportHeight >= 810 && viewportWidth > 441 && (
                <button
                    onClick={handleArrowClick}
                    className={`group absolute left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 flex flex-col items-center ${viewportHeight > 810 && viewportHeight <= 835 ? 'bottom-0' : 'bottom-5'
                        }`}
                    aria-label="Scroll hacia abajo"
                >
                    <FaChevronDown
                        className="text-3xl text-purple-600 animate-bounce -mt-4 [animation-duration:1700ms] transition-transform duration-300 filter hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]"
                        style={{ animationDelay: '0s' }}
                    />
                    <FaChevronDown
                        className="text-3xl text-purple-600 animate-bounce -mt-4 [animation-duration:1700ms] transition-transform duration-300 filter hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]"
                        style={{ animationDelay: '0s' }}
                    />
                    <FaChevronDown
                        className="text-3xl text-purple-600 animate-bounce -mt-4 [animation-duration:1700ms] transition-transform duration-300 filter hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]"
                        style={{ animationDelay: '0s' }}
                    />
                </button>
            )}
        </header>
    );
}