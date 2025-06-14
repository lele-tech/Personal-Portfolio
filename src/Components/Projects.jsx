import { useState } from 'react';

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'Built with React and Tailwind CSS, this personal portfolio showcases my skills and projects. It uses reusable components and responsive design to provide a clean and adaptable user experience across devices.',
    link: 'https://github.com/lele-tech/RinconEspannol',
    image: '/imgs/Portafolio.PNG',
  },
  {
    title: 'TuLook',
    description:
      'A web app developed with React and Node.js that allows stylists and manicurists to create professional profiles, manage appointments, and increase their visibility. It features user authentication, profile management, and a calendar booking system.',
    link: 'https://github.com/Encanto-ITM/TuLook-Desarrollo',
    image: '/imgs/TuLook.PNG',
    live: 'https://tulook.vercel.app/',
  },
  {
    title: 'Online Chat with SignalR + ASP.NET Core API',
    description:
      'Real-time chat application fully built with ASP.NET Core for both frontend and backend. Uses SignalR for instant communication and includes a REST API to manage users and messages, providing a smooth and synchronized user experience.',
    link: 'https://github.com/lele-tech/Chat-en-L-nea-API-ASP.NET-Core-',
    image: '/imgs/Chat2.PNG',
  },
  {
    title: 'Beach.SA',
    description:
      'Platform for managing and booking beach services, built entirely with ASP.NET Core including both frontend and backend API. It allows users to reserve activities and administrators to manage events through a clear and functional interface.',
    link: 'https://github.com/lele-tech/Beach.SA-API',
    image: '/imgs/BeachSA.PNG',
  },
  {
    title: 'Comida Española',
    description:
      'Web application developed using HTML, CSS, and PHP to explore and manage traditional Spanish dishes. Administrators can add and edit recipes, while users can browse and discover dishes with images and detailed descriptions.',
    link: 'https://github.com/lele-tech/RinconEspannol',
    image: '/imgs/ComidaEspañola.PNG',
  },
];


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div key={proj.title} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            {proj.image && (
              <img
                src={proj.image}
                alt={`Preview de ${proj.title}`}
                className="w-full h-48 object-cover rounded mb-3 cursor-pointer"
                onClick={() => openModal(proj.image)}
              />
            )}
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-sm text-gray-600">{proj.description}</p>
            <div className="flex space-x-4 mt-2 items-center justify-center">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Watch on GitHub
              </a>

              {proj.title === 'TuLook' && proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-1 -right-1 z-[60] text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center hover:text-red-600 transition"
              onClick={closeModal}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="w-full h-auto max-h-[80vh] rounded shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
