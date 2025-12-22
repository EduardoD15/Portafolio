import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaPhone,FaUser  } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

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
            url: "https://wa.me/573023231725",
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
            url: "mailto:eduardodeossa23@gmail.com",
            color: "hover:text-purple-400"
        }
    ];

    return (
        <footer className="w-full bg-gradient-to-t from-black via-slate-950 to-transparent border-t border-indigo-600/50 py-6 md:py-8">
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
                    <div className="">
                        
                        {/* Información de contacto */}
                        <div className="flex gap-5 text-xs md:text-sm text-slate-400 items-center lg:items-start">
                            <a 
                                href="mailto:eduardodeossa23@gmail.com" 
                                className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
                            >
                                <MdEmail className="text-base" />
                                <span>eduardodeossa23@gmail.com</span>
                            </a>
                            <a 
                                href="https://wa.me/573023231725" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300"
                            >
                                <FaPhone className="text-sm cursor-pointer" />
                                <span>+57 302 323 1725</span>
                            </a>
                             <a 
                                href="#sobre-mi" 
                                className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
                            >
                                <FaUser className="text-base" />
                                <span>Sobre mí</span>
                            </a>
                        </div>
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