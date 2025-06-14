import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="scroll-bt-24 bg-gray-900 text-gray-300 py-10 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Logo o Nombre */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Keyler Ibarra</h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Full Stack Developer whith pasion to develop clean and maintainable code.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Me </h3>
                    <div className="flex flex-col items-start gap-4">
                        {/* Íconos de redes */}
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/tu-usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={28} />
                            </a>
                            <a
                                href="https://linkedin.com/in/keyler-ibarra-carbajal-381b38214"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://wa.me/50664009488"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={28} />
                            </a>
                        </div>

                        {/* Datos de contacto debajo de los íconos */}
                        <div className="flex flex-col text-gray-300 space-y-1 text-sm">
                            <p className="font-medium">Tel: (+506) 64009488</p>
                            <p>Orotina, Alajuela, Costa Rica</p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:ibarrakeyler@gmail.com"
                                    className="text-blue-400 hover:underline"
                                >
                                    ibarrakeyler@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Línea divisora */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © 2025 Keyler Ibarra Carvajal. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
