import { useEffect } from 'react';
import { translations } from '../translations';

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
      <div className="relative w-full max-w-5xl mx-auto my-8 rounded-2xl bg-white shadow-xl border border-slate-300 animate-slideUp max-h-[90vh] flex flex-col overflow-hidden">
        {/* Hero Section */}
        <div className="relative rounded-t-2xl overflow-hidden">
          <img 
            src="/img/anfope.webp" 
            alt={title} 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Content with centered title like modal1 */}
        <div className="px-8 -mt-8 relative z-10">
          <div className="flex items-center mb-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-user text-white text-xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
            <small className="text-slate-500">{subtitle}</small>
          </div>
          
          <div className="flex items-center gap-4 mt-4 mb-6">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-2 mb-6 text-sm text-slate-600">
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

        {/* Content - scrollable area */}
        <div className="p-8 space-y-8 overflow-y-auto flex-1">
          
          {/* Overview */}
           <section>
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.overview}</h3>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              {overview.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Context */}
           <section>
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.context}</h3>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              {context.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Challenge */}
           <section>
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.challenge}</h3>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              {challenge.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* My Role */}
           <section>
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.myRole}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {myRole.map((item, index) => (
                <div key={index} className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
           <section>
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.solution}</h3>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              {solution.split('\n').map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Features */}
           {features.length > 0 && (
             <section>
               <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.featuresTitle}</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-slate-700">
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
               <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.technologies}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories.backend && techCategories.backend.length > 0 && (
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                      <i className="fas fa-server text-purple-600"></i> Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.backend.map((tech, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.frontend && techCategories.frontend.length > 0 && (
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                      <i className="fas fa-laptop-code text-blue-600"></i> Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.frontend.map((tech, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.database && techCategories.database.length > 0 && (
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                      <i className="fas fa-database text-yellow-600"></i> Banco de Dados
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.database.map((tech, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.cloud && techCategories.cloud.length > 0 && (
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                      <i className="fas fa-cloud text-orange-600"></i> Cloud
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.cloud.map((tech, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {techCategories.infrastructure && techCategories.infrastructure.length > 0 && (
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                      <i className="fas fa-cogs text-teal-600"></i> Infraestrutura
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.infrastructure.map((tech, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
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
               <h3 className="text-2xl font-bold text-blue-600 mb-4">{translations.caseStudy.gallery}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {gallery.map((item, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.caption} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-slate-50 text-center text-sm text-slate-700 border-t border-slate-200">
                      {item.caption}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer - fixed at bottom of modal */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-white rounded-b-2xl">
          <div className="flex justify-end max-w-[calc(100%-3rem)] mx-auto">
            <button 
              onClick={onClose}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-sm"
            >
              {translations.buttons.close}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-slate-50 text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}