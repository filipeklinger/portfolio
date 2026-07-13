export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="slide-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400">&lt;</span>Habilidades<span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {/* Frontend */}
          <div className="slide-in text-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-laptop-code text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Frontend</h3>
            <div className="space-y-2 text-slate-300">
              <div>React</div>
              <div>Angular</div>
              <div>HTML + JS</div>
            </div>
          </div>

          {/* Backend */}
          <div className="slide-in text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-server text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Backend</h3>
            <div className="space-y-2 text-slate-300">
              <div>C# .NET</div>
              <div>Node.js</div>
              <div>PHP</div>
            </div>
          </div>

          {/* Bancos de Dados */}
          <div className="slide-in text-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-database text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Bancos de Dados</h3>
            <div className="space-y-2 text-slate-300">
              <div>MySQL/MariaDB</div>
              <div>PostgreSQL</div>
              <div>MongoDB</div>
              <div>Redis</div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="slide-in text-center">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cloud text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Cloud & DevOps</h3>
            <div className="space-y-2 text-slate-300">
              <div>AWS (SQS, Lambda, EC2, S3)</div>
              <div>Docker</div>
              <div>Azure DevOps</div>
            </div>
          </div>
        </div>

        {/* Key Competencies */}
        <div className="slide-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-100">Principais Competências</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                <span className="font-semibold text-lg text-slate-100">Arquitetura de Sistemas</span>
              </div>
              <p className="text-slate-300">Design e implementação de soluções escaláveis e robustas</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span className="font-semibold text-lg text-slate-100">Desenvolvimento Full-Stack</span>
              </div>
              <p className="text-slate-300">Experiência completa em frontend, backend e integrações</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                <span className="font-semibold text-lg text-slate-100">Cloud & DevOps</span>
              </div>
              <p className="text-slate-300">Implementação e gestão de infraestrutura em nuvem</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="font-semibold text-lg text-slate-100">Liderança Técnica</span>
              </div>
              <p className="text-slate-300">Mentoria de equipes e definição de padrões de desenvolvimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
