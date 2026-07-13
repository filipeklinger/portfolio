import Chatbot from './CustomChatbot';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="slide-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">&lt;</span>Vamos Conversar<span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="code-lines w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos construir algo incrível juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="slide-in">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <div className="space-y-6">
              <a href="mailto:filipeklinger@gmail.com" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors group">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300 group-hover:text-blue-400 transition-colors">filipeklinger@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/filipeklinger" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors group">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-slate-300 group-hover:text-blue-400 transition-colors">linkedin.com/in/filipeklinger</div>
                </div>
              </a>

              <a href="https://github.com/filipeklinger" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors group">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <i className="fab fa-github text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-slate-300 group-hover:text-blue-400 transition-colors">github.com/filipeklinger</div>
                </div>
              </a>

              <a href="https://wa.me/5521972935253?text=Olá%20Filipe!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors group">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-slate-300 group-hover:text-green-400 transition-colors">(21) 97293-5253</div>
                </div>
              </a>
            </div>
          </div>

          <div className="slide-in">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="flex justify-center items-center min-h-[400px] w-full">
                <Chatbot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
