const projects = [
  {
    name: 'VidiNine',
    description: 'Modular e-commerce platform built with Golang, React, PostgreSQL, and Docker, using microservices to ensure flexibility and scalability.',
    technologies: ['Golang', 'React.js', 'Docker', 'PostgreSQL', 'Microservices'],
    link: 'https://github.com/JoaoGabrielVianna/vidinine-ecommerce',
  },
  {
    name: 'UniTime',
    description: 'Scheduling app for academic routines, allowing users to efficiently organize their classes, appointments, and extracurricular activities.',
    technologies: ['Golang', 'React.js', 'Docker'],
    link: 'https://github.com/JoaoGabrielVianna/uniTime',
  },
  {
    name: 'TheSisterHood',
    description: 'App dedicated to increasing women’s safety by enabling real-time connection for reporting risky situations and offering mutual support.',
    technologies: ['Golang', 'React.js', 'Docker', 'Flutter'],
    link: 'https://github.com/TheSisterHood',
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
            Completed Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Background visual effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Content */}
              <div className="p-6 relative z-10 h-full flex flex-col">
                {/* Badge */}
                <div className="absolute -right-2 -top-2 w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-br-xl opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative text-cyan-300 font-mono text-sm font-bold">#{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/80 text-gray-300 text-xs rounded-full border border-gray-600 group-hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-lg transition-all duration-500 font-medium text-sm"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/joaogabrielvianna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/10"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
