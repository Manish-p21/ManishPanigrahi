import { HiOutlineGlobeAlt, HiOutlineShoppingCart, HiOutlineOfficeBuilding, HiOutlinePhotograph, HiOutlineDatabase } from 'react-icons/hi';

function Projects() {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio to showcase projects, case studies, and contact information.',
      link: 'https://yourportfolio.live',
      tech: 'React, Tailwind, Vite',
      date: '12 Oct 2019',
      location: 'Mumbai, India',
      logo: <HiOutlineGlobeAlt size={24} color="#A445ED" />,
      patternImage: '/images/7.jpg',
    },
    {
      name: 'E-commerce Tennis',
      description: 'Modern e-commerce web app focused on performance, filtering, and scalability.',
      link: 'https://yourportfolio.live',
      tech: 'MySQL, Node, React',
      date: '28 Dec 2019',
      location: 'Mumbai, India',
      logo: <HiOutlineShoppingCart size={24} color="#00AEEF" />,
      patternImage: '/images/2.jpg',
    },
    {
      name: 'Real Estate Website',
      description: 'Property listings with filters, expert banners, and property detail flows.',
      link: 'https://realvia.vercel.app/',
      tech: 'React, Tailwind, MongoDB',
      date: '28 Nov 2019',
      location: 'Mumbai, India',
      logo: <HiOutlineOfficeBuilding size={24} color="#FFC107" />,
      patternImage: '/images/3.jpg',
    },
    {
      name: 'Battery E-commerce',
      description: 'Battery-focused e-commerce platform with filters and advanced search.',
      link: 'https://batteryboss.vercel.app/',
      tech: 'React, Tailwind, MongoDB',
      date: '28 Nov 2019',
      location: 'Mumbai, India',
      logo: <HiOutlineDatabase size={24} color="#4CAF50" />,
      patternImage: '/images/4.jpg',
    },
    {
      name: 'AI B/W Image Colorization',
      description: 'Convert black and white images to colored using AI & ML model.',
      link: 'https://yourportfolio.live',
      tech: 'Python, Flask, OpenCV',
      date: '30 Dec 2019',
      location: 'Mumbai, India',
      logo: <HiOutlinePhotograph size={24} color="#FF9800" />,
      patternImage: '/images/5.jpg',
    },
    {
      name: 'Battery E-commerce',
      description: 'Battery-focused e-commerce platform with filters and advanced search.',
      link: 'https://yourportfolio.live',
      tech: 'React, Tailwind, MongoDB',
      date: '13 Aug 2019',
      location: 'Mumbai, India',
      logo: <HiOutlineDatabase size={24} color="#F44336" />,
      patternImage: '/images/8.png',
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/11.jp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-white to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 min-h-[250px] flex flex-col justify-between group hover:scale-[1.01] transition duration-300"
            >
              {/* Pattern Image Overlay */}
              <img
                src={project.patternImage}
                alt=""
                className="absolute right-0 top-0 h-full w-1/3 object-cover z-0"
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-md">
                    {project.logo}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-500/20 rounded-md p-1 hover:text-white text-gray-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 30 16"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="text-xs text-gray-300 pt-2">{project.date}</div>
              </div>


              {/* Title and Location */}
              <div className="relative z-10 text-left">
                <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.location}</p>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 mt-auto text-sm text-purple-300 font-medium">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
