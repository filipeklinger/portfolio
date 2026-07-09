import { useEffect } from 'react';

interface ProjectData {
  title: string;
  subtitle: string;
  technologies: string[];
  role: string;
  type: string;
  status: string;
  overview: string;
  context: string;
  challenge: string;
  myRole: string[];
  solution: string;
  features: string[];
  techCategories: {
    backend?: string[];
    frontend?: string[];
    database?: string[];
    cloud?: string[];
    infrastructure?: string[];
  };
  gallery?: { image: string; caption: string }[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData;
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { title, subtitle, technologies, role, type, status, overview, context, challenge, myRole, solution, features, techCategories, gallery } = project;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Hero Section */}
        <div className="relative">
          <img 
            src="/img/anfope.webp" 
            alt={title} 
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-xl text-slate-300 mb-4">{subtitle}</p>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-4 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <i className="fas fa-user-tag"></i> {role}
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-folder-open"></i> {type}
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-check-circle"></i> {status}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          
          {/* Overview */}
          <section>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Visão Geral</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              {overview.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Context */}
          <section>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Contexto</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              {context.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Challenge */}
          <section>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">O Desafio</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              {challenge.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* My Role */}
          <section>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Minha Atuação</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {myRole.map((item, index) => (
                <div key={index} className="flex items-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Solução</h3>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              {solution.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Features */}
          {features.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Principais Funcionalidades</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technologies */}
          {Object.keys(techCategories).length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Tecnologias</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories.backend && techCategories.backend.length > 0 && (
                  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-server text-purple-400"></i> Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.backend.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.frontend && techCategories.frontend.length > 0 && (
                  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-laptop-code text-blue-400"></i> Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.frontend.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.database && techCategories.database.length > 0 && (
                  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-database text-yellow-400"></i> Banco de Dados
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.database.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.cloud && techCategories.cloud.length > 0 && (
                  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-cloud text-orange-400"></i> Cloud
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.cloud.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.infrastructure && techCategories.infrastructure.length > 0 && (
                  <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-cogs text-teal-400"></i> Infraestrutura
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.infrastructure.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Galeria</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {gallery.map((item, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-slate-700">
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-slate-800 text-center text-sm text-slate-300">
                      {item.caption}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 flex justify-end">
          <button 
            onClick={onClose}
            className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}