import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://instagram.com/tu-usuario",
            color: "hover:text-pink-500"
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            url: "https://wa.me/tu-numero",
            color: "hover:text-green-500"
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/tu-usuario",
            color: "hover:text-gray-300"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://linkedin.com/in/tu-usuario",
            color: "hover:text-blue-500"
        },
        {
            name: "Email",
            icon: FaEnvelope,
            url: "mailto:tu-email@example.com",
            color: "hover:text-purple-400"
        }
    ];

    return (
        <footer className="w-full bg-gradient-to-t from-black via-slate-950 via-slate-950 border-t border-indigo-600/50 py-6 md:py-8 ">
            <div className="max-w-screen-2xl w-[95%] m-auto">

                {/* Layout Principal - Horizontal en desktop, vertical en móvil */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8">

                    {/* Logo/Brand - Izquierda */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-white [text-shadow:0_0_15px_rgba(142,68,173,0.5)]">
                            Port<span className="text-violet-500">afo</span>lio
                        </h2>
                        <p className="text-xs md:text-sm text-slate-400 mt-1">
                            Desarrollador Fullstack Web
                        </p>
                    </div>

                    {/* Quick Links - Centro */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
                        <a
                            href="#inicio"
                            className="text-slate-400 hover:text-purple-500 transition-all duration-300 hover:[text-shadow:0_0_8px_#9333ea]"
                        >
                            Inicio
                        </a>
                        <a
                            href="#servicios"
                            className="text-slate-400 hover:text-purple-500 transition-all duration-300 hover:[text-shadow:0_0_8px_#9333ea]"
                        >
                            Servicios
                        </a>
                        <a
                            href="#portafolio"
                            className="text-slate-400 hover:text-purple-500 transition-all duration-300 hover:[text-shadow:0_0_8px_#9333ea]"
                        >
                            Portafolio
                        </a>
                        <a
                            href="#contacto"
                            className="text-slate-400 hover:text-purple-500 transition-all duration-300 hover:[text-shadow:0_0_8px_#9333ea]"
                        >
                            Contacto
                        </a>
                    </div>

                    {/* Social Links - Derecha */}
                    <div className="flex justify-center lg:justify-end gap-3 md:gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`text-white text-xl md:text-2xl transition-all duration-300 
                    ${social.color}
                    hover:scale-110 hover:[filter:drop-shadow(0_0_10px_currentColor)]
                    active:scale-95`}
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Copyright - Abajo centrado */}
                <div className="text-center text-xs md:text-sm text-slate-500 mt-3">
                    <p className="flex items-center justify-center gap-2 flex-wrap">
                        <span>© {currentYear} Eduardo Deossa Bohorquez.</span>
                        <AiFillThunderbolt className="text-purple-600 text-xs animate-pulse" />
                        <span className="flex items-center gap-1">
                            Hecho con dedicación. 
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;