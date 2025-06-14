import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header
      id="home"
      className="scroll-mt-24 mt-12 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden min-h-[600px] justify-center flex items-center"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            const duration = Math.random() * 4 + 3;
            const delay = Math.random() * 5;

            return (
              <span
                key={i}
                className="absolute bg-white rounded-full opacity-20 animate-[float_linear_infinite]"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  filter: "blur(0.7px)",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>

      {/* Contenido principal con 2 columnas */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start min-h-[500px] text-white z-10 justify-center items-center">
        {/* Columna izquierda pequeña */}
        <div className="md:col-span-4 flex flex-col items-center gap-8">
          <div className="rounded-full ring-4 ring-gray-600 shadow-lg w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden">
            <img
              src="./imgs/perfil.jpg"
              alt="Mi foto"
              className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <a
              href="/Documents/Keyler_Ibarra_CVI.pdf"
              download
              className="text-sm text-blue-400 hover:text-blue-600 hover:underline transition-colors px-2 py-1 rounded-sm"
            >
              Download CV
            </a>

            <div className="flex gap-6 text-gray-300">
              <a
                href="https://github.com/lele-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://linkedin.com/in/keyler-ibarra-carbajal-381b38214"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://wa.me/50664009488"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha más amplia */}
        <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hi, I am <br />
            <span className="underline decoration-white/40 decoration-2">
              Keyler Ibarra Carvajal
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium"
            style={{ textAlign: "justify" }}
          >Junior{" "}
            <span className="text-blue-400 font-semibold drop-shadow-md">
              Full Stack Developer
            </span>{" "}
            passionate about building robust and scalable solutions. Hands-on experience developing applications using{" "}
            <span className="text-gray-100 font-semibold">Java, .NET, C#, React</span>{" "}
            and{" "}
            <span className="text-gray-100 font-semibold">MySQL databases</span>. I stand out for my ability to quickly adapt to new technologies, collaborate effectively in multidisciplinary teams, and apply development methodologies that ensure clean, efficient, and maintainable code.

          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
