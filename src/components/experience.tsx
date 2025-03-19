

const experiences = [

  {
    role: "Full Developer",
    company: "Sonoflow",
    period: "2023 - 2024",
    type: "Full-time",
    description: "Fundador e desenvolvedor do Sonoflow, um aplicativo de diário do sono com foco em monitoramento e análise de hábitos de sono dos usuários.",
    skills: ["React", "TypeScript", "Firebase", "Mobile Development", "Flutter"]
  },
  {
    role: "Co-founder & CTO",
    company: "PlanBTech",
    period: "2024 - Present",
    type: "Full-time",
    description: "Co-fundador e CTO da PlanBTech, uma empresa que oferece soluções tecnológicas para startups, com foco em desenvolvimento de software e criação de aplicativos.",
    skills: ["Node.js", "React", "Golang", "Docker", "python"]
  },
  {
    role: "Founder & CEO",
    company: "Unitime",
    period: "2025 - Present",
    type: "Full-time",
    description: "Fundador da Unitime, uma empresa de consultoria em tecnologia, especializada em desenvolvimento de soluções digitais personalizadas para empresas.",
    skills: ["Golang", "React.js", "Docker", "TypeScript"]
  },
  // mais experiências...
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Título com estilo consistente */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/20">
            Minha Jornada Profissional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Experiência</span> Profissional
          </h2>
        </div>

        {/* Timeline de experiências */}
        <div className="relative">
          {/* Linha vertical central (visível apenas em telas maiores) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Indicador na timeline (visível apenas em telas maiores) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hidden md:block z-10">
                  <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                </div>

                {/* Card da experiência */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative`}>
                  {/* Seta apontando para timeline (visível apenas em telas maiores) */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${index % 2 === 0 ? 'right-0 translate-x-1/2 rotate-45' : 'left-0 -translate-x-1/2 rotate-45'} bg-gray-800 border-r border-t ${index % 2 === 0 ? 'border-gray-600' : 'border-gray-600'} hidden md:block`}></div>

                  {/* Conteúdo */}
                  <div className="p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30 hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-300 border border-blue-500/20">{exp.period}</span>
                      <span className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300 border border-gray-600">{exp.type || 'Full-time'}</span>
                    </div>

                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      {exp.role}
                    </h3>

                    <h4 className="text-lg font-medium text-white mt-1">
                      {exp.company}
                    </h4>

                    <p className="text-gray-300 mt-4">
                      {exp.description}
                    </p>

                    {/* Skills usadas nesta experiência (se disponível) */}
                    {exp.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700/80 text-gray-300 text-xs rounded border border-gray-600 hover:border-blue-500/30 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default ExperienceSection;