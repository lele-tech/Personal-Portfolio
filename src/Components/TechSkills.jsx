import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
  FaWindows,
  FaLinux,
  FaDocker,
  FaNetworkWired,
  FaGitAlt,
  FaNodeJs,
  FaAws,
  FaCode,
} from 'react-icons/fa';
import {
  SiMysql,
  SiWireshark,
  SiNetlify,
  SiVercel,
  SiSass,
  SiWordpress,
  SiOracle,
} from 'react-icons/si';

const techCategories = [
  {
    category: 'Frontend',
    techs: [
      { name: 'React', icon: <FaReact size={48} className="text-cyan-400" /> },
      { name: 'JavaScript', icon: <FaJs size={48} className="text-yellow-400" /> },
      { name: 'HTML', icon: <FaHtml5 size={48} className="text-orange-600" /> },
      { name: 'CSS', icon: <FaCss3Alt size={48} className="text-blue-600" /> },
      { name: 'SASS', icon: <SiSass size={48} className="text-pink-600" /> },
      { name: 'Wordpress', icon: <SiWordpress size={48} className="text-blue-700" /> },
    ],
  },
  {
    category: 'Backend',
    techs: [
      { name: 'Node.js', icon: <FaNodeJs size={48} className="text-green-600" /> },
      { name: 'PHP', icon: <FaPhp size={48} className="text-indigo-500" /> },
      { name: 'Laravel', icon: <img src=".imgs/laravel.png" alt="Laravel" className="w-12 h-12 object-contain" /> },
      { name: 'Java', icon: <FaJava size={48} className="text-red-600" /> },
      { name: 'C#', icon: <img src="./imgs/C.png" alt="C#" className="w-12 h-12" /> },
      { name: '.NET', icon: <img src="./imgs/Microsoft_.NET.png" alt=".NET" className="w-12 h-12" /> },
    ],
  },
  {
    category: 'Data Bases',
    techs: [
      { name: 'MySQL', icon: <SiMysql size={48} className="text-[#4479A1]" /> },
      { name: 'HeidiSQL', icon: <img src="./imgs/HeidiSQL.png" alt="HeidiSQL" className="w-12 h-12" /> },
      { name: 'Firebase', icon: <img src="./imgs/firebase.png" alt="Firebase" className="w-12 h-12" /> },
      { name: 'Oracle', icon: <SiOracle size={48} className="text-red-600" /> },
    ],
  },
  {
    category: 'Operative Systems',
    techs: [
      { name: 'Windows', icon: <FaWindows size={48} className="text-blue-500" /> },
      { name: 'Linux', icon: <FaLinux size={48} style={{ color: '#000000' }} /> },
    ],
  },
  {
    category: 'Security and Networks',
    techs: [
      { name: 'Wireshark', icon: <SiWireshark size={48} className="text-blue-700" /> },
      { name: 'Packet Tracer', icon: <FaNetworkWired size={48} className="text-gray-600" /> },
      { name: 'Docker', icon: <FaDocker size={48} className="text-blue-400" /> },
    ],
  },
  {
    category: 'Version Control',
    techs: [
      { name: 'Git', icon: <FaGitAlt size={48} className="text-orange-500" /> },
      { name: 'GitHub', icon: <img src="./imgs/github.png" alt="GitHub" className="w-12 h-12" /> },
    ],
  },
  {
    category: 'Cloud',
    techs: [
      { name: 'AWS', icon: <FaAws size={48} className="text-yellow-400" /> },
      { name: 'Netlify', icon: <SiNetlify size={48} className="text-teal-500" /> },
      { name: 'Vercel', icon: <SiVercel size={48} className="text-black" /> },
    ],
  },
  {
    category: 'Development Tools',
    techs: [
      { name: 'Visual Studio Code', icon: <FaCode size={48} className="text-blue-500" /> },
      { name: 'Composer', icon: <img src="./imgs/composer.png" alt="Composer" className="w-12 h-12 object-contain" /> },
      { name: 'Netbeans', icon: <img src="/imgs/NetBeans.png" alt="NetBeans" className="w-12 h-12 object-contain" /> },
      { name: 'NPM', icon: <img src="./imgs/npm.png" alt="NPM" className="w-12 h-12" /> },
    ],
  },
  {
    category: 'APIs',
    techs: [
      { name: 'API REST', icon: <FaNetworkWired size={48} className="text-green-600" /> },
    ],
  },
];

const TechSkills = () => {
  return (
    <section
      id="technologies"
      className="p-8 text-center bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen"
    >
      <h2
        className="
          text-3xl md:text-4xl
          font-semibold
          text-gray-700
          mb-10
          border-b
          inline-block
          tracking-wider
          drop-shadow-sm
        "
      >
        TechSkills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map(({ category, techs }) => (
          <div
            key={category}
            className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-md p-6 border border-gray-200
                       hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {techs.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center group hover:scale-105 transition-transform duration-200"
                >
                  <div className="transition duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1">
                    {icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-700 font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
