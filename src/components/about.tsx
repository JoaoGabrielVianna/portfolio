import { FaDocker, FaGitAlt, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiGo, SiTypescript } from "react-icons/si";
import photo from '../assets/joaogabrielvianna.jpg'
import cv from '../assets/joaogabriel-curriculo.pdf'
const skills = [
  {
    name: 'Golang',
    icon: <SiGo />,
    color: 'text-teal-400',
    level: 50
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'text-cyan-400',
    level: 92
  },
  {
    name: 'Python',
    icon: <FaPython />,
    color: 'text-cyan-400',
    level: 60
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-400',
    level: 60
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-400',
    level: 60
  },

  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    color: 'text-green-400',
    level: 45
  },

  {
    name: 'Docker',
    icon: <FaDocker />,
    color: 'text-blue-400',
    level: 25
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: 'text-orange-400',
    level: 50
  },
];

function AboutSection(){
  return(
    <section id="about" className="py-24 bg-black relative overflow-hidden ">
            <div className="absolute inset-0 ">
              <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px]"></div>
              <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[100px]"></div>
            </div>
    
            <div className="container mx-auto px-4 relative z-10">
              {/* Título com estilo similar ao hero */}
              <div className="flex flex-col items-center mb-16">
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/20">
                  Conheça Minha Trajetória
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mim</span>
                </h2>
              </div>
    
              {/* Conteúdo principal */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Foto e decoração */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Decoração de fundo */}
                    <div className="absolute -z-10 w-full h-full translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-sm"></div>
    
                    {/* Moldura com gradiente */}
                    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400">
                      <div className="bg-gray-900 p-4 rounded-2xl h-full backdrop-blur-sm">
                        <img
                          src={photo}
                          alt="João Gabriel Vianna"
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      </div>
                    </div>
    
                    {/* Badge de experiência */}
                    <div className="absolute -right-6 bottom-6 bg-gray-900 rounded-full p-2 shadow-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-0.5">
                        <div className="bg-gray-900 rounded-full p-3">
                          <div className="text-cyan-300 font-bold">2+</div>
                          <div className="text-xs text-gray-400">Anos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Informações pessoais */}
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    Desenvolvedor de software com 2 anos de experiência em desenvolvimento front-end e back-end, especializado em criação de aplicações escaláveis e eficientes. Apaixonado por qualidade de código, design de soluções e otimização de performance.
                  </p>
    
                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-white font-medium mb-4">Tecnologias & Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-full text-sm hover:border-blue-500/30 hover:bg-blue-900/10 transition-colors cursor-pointer"
                        >
                          {skill.icon}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
    
                  {/* Call to Action */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`${cv}`}
                      download="joaogabriel-curriculo"
                      className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 font-medium"
                    >
                      Download CV
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white rounded-lg transition-all hover:border-gray-500 hover:bg-white/5"
                    >
                      Entrar em Contato
                    </a>
                  </div>
                </div>
              </div>
            </div>
    
          </section>
  )
}

export default AboutSection;