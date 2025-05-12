function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#1E1E1E]/95 to-[#121212]/95 backdrop-blur-md p-4 shadow-xl z-50 border-b border-gray-800/50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#1E90FF]">&lt;João Gabriel/&gt;</span>
          </h1>
        </a>

        {/* Mobile Menu Button - aparece apenas em telas pequenas */}
        <button className="md:hidden text-gray-400 hover:text-white focus:outline-none" id="mobile-menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}  // Agora o href é passado explicitamente
                className="relative font-medium text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {item.name}  {/* Aqui o nome é utilizado */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#1E90FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}

          {/* CTA de destaque */}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-[#8A2BE2] to-[#1E90FF] text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu - inicialmente oculto */}
      <div className="hidden bg-[#1E1E1E]/95 mt-4 rounded-lg shadow-lg p-4" id="mobile-menu">
        <ul className="space-y-4">
          {["Sobre", "Habilidades", "Experiência", "Projetos", "Contato"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 bg-gradient-to-r from-[#8A2BE2] to-[#1E90FF] text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center mt-2"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;