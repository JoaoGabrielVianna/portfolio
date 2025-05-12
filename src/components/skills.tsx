import { skills } from "./skillsArray";




export default function SkillsSection() {


  return (
    <section id="skills" className="py-24  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Título com estilo consistente */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/20">
            My Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skills</span> & Technologies
          </h2>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card com efeito de hover */}
              <div className="p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg text-center transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 group-hover:translate-y-[-5px] h-full flex flex-col items-center justify-center">
                {/* Ícone (opcional) */}
                {skill.icon && (
                  <div className="text-3xl mb-3 text-gray-400 group-hover:text-blue-400 transition-colors">
                    {skill.icon}
                  </div>
                )}

                {/* Nome da habilidade */}
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all">
                  {skill.name}
                </h3>

                {/* Nível de proficiência (opcional) */}
                {skill.level && (
                  <div className="mt-3 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divisor de seção aprimorado */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto fill-current text-black" style={{ transform: "translateY(1px)" }}>
          <path d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </section>
  );
}
