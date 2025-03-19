function ContactSection(){
  return(
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Título com estilo consistente */}
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
              Vamos Trabalhar Juntos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Contato</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Cards com informações de contato */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <div className="p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                  <a href="mailto:joaogabrielvianna05@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                    joaogabrielvianna05@gmail.com
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Telefone</h3>
                  <a href="tel:+5567999850112" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +55 67 99985-0112
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all">
                    <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/joaogabrielvianna/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    linkedin.com/in/joaogabrielvianna
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de contato */}
            {/* <div className="p-8 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Envie uma mensagem</h3>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all font-medium"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>

        {/* Decoração extra */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </section>
  )
}

export default ContactSection