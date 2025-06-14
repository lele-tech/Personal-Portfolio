import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para scroll suave con compensación (en este caso, al top 0)
  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -70; // Ajusta según la altura del navbar fijo
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // Manejador para links desktop y mobile
  const handleNavClick = (id) => {
    smoothScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo o nombre */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            KeylerIbarra
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:text-gray-300 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="hover:text-gray-300 transition"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("technologies")}
              className="hover:text-gray-300 transition"
            >
               TechSkills
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-gray-300 transition"
            >
              Contact
            </button>
          </div>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <button
            onClick={() => handleNavClick("home")}
            className="block py-2 text-white hover:bg-gray-700 rounded transition w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="block py-2 text-white hover:bg-gray-700 rounded transition w-full text-left"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("technologies")}
            className="block py-2 text-white hover:bg-gray-700 rounded transition w-full text-left"
          >
            TechSkills
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="block py-2 text-white hover:bg-gray-700 rounded transition w-full text-left"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
