import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[80px] flex justify-center items-center z-50 transition-all duration-200
         ${scrolled ? "bg-black/90 backdrop-blur-[80px] shadow-[0_0_5px_#9333ea]" : ""}
      `}
    >
      <div className="max-w-screen-2xl w-[95%] flex justify-between items-center">
        {/* Logo */}
        <div className="navbar-brand flex items-center justify-center text-center">
          <a
            href="/Home"
            className="text-white text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold no-underline
              [text-shadow:0_0_8px_rgba(142,68,173,0.5)]
              transition-all duration-300
              hover:text-purple-600 hover:[text-shadow:0_0_10px_#8e44ad]
              active:text-purple-600 active:[text-shadow:0_0_15px_#8e44ad,0_0_25px_#8e44ad]"
          >
           Port<span className="text-violet-500">afo</span><span>lio</span>
          </a>
        </div>

        {/* Menú */}
        <ul className="flex flex-row gap-3 sm:gap-5 md:gap-8 list-none justify-center items-center text-center">
          <li>
            <a
              href="/Home"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium no-underline
                transition-all duration-300
                hover:text-purple-600 hover:[text-shadow:0_0_8px_#4f46e5]"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium no-underline
                transition-all duration-300
                hover:text-purple-600 hover:[text-shadow:0_0_8px_#4f46e5]"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium no-underline
                transition-all duration-300
                hover:text-purple-600 hover:[text-shadow:0_0_8px_#4f46e5]"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium no-underline
                transition-all duration-300
                hover:text-purple-600 hover:[text-shadow:0_0_8px_#4f46e5]"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
