import photo from '../assets/joaogabrielvianna.jpg'

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background com gradientes e grid aprimorados */}
      <div className=" inset-0 fixed">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Container principal */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Coluna de texto */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/20">
            Software Engineer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            João Gabriel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vianna</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mb-8">
            Developing creative and efficient solutions with modern technologies to create exceptional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-lg transition-all font-medium flex items-center shadow-lg shadow-blue-500/20">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg transition-all font-medium backdrop-blur-sm hover:bg-white/5">
              Contact
            </a>
          </div>

          {/* Social links */}
          <div className="flex mt-8 gap-4">
            <a href="https://github.com/joaogabrielvianna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/joaogabrielvianna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/joaogabrielvianna_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2C4.126 2 2 4.126 2 7.75v8.5C2 19.874 4.126 22 7.75 22h8.5C19.874 22 22 19.874 22 16.25v-8.5C22 4.126 19.874 2 16.25 2h-8.5zM12 5.667a6.333 6.333 0 016.333 6.333A6.333 6.333 0 0112 18.333 6.333 6.333 0 015.667 12 6.333 6.333 0 0112 5.667zm0 1.5a4.833 4.833 0 00-4.833 4.833A4.833 4.833 0 0012 16.833a4.833 4.833 0 004.833-4.833A4.833 4.833 0 0012 7.167zm5.417-2.083a1.083 1.083 0 110 2.167 1.083 1.083 0 010-2.167z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Ilustração/Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="hero-image-container rounded-full p-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm relative">
              <img
                src={photo}
                alt="João Gabriel Vianna"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-gray-800"
              />
              <div className="absolute -right-4 -bottom-4 bg-gray-900 rounded-full p-3 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-0.5">
                  <div className="bg-gray-900 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor de seção aprimorado */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div> */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto fill-current text-black preserve-3d" style={{ transform: "translateY(1px)" }}>
          <path d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </section>
  )

}

export default HeroSection;