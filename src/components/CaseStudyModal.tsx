import { useEffect } from 'react';
import { translations } from '../translations';

type Accent = 'blue' | 'orange' | 'purple' | 'green' | 'pink' | 'teal';

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
  image?: string;
  icon?: string;
  accent?: Accent;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData;
}

/**
 * Mapa de estilos por cor de destaque. Cada projeto usa o mesmo accent do seu
 * card na seção Projects, mantendo o modal coerente com o restante do site.
 * As classes são literais para não serem removidas pelo purge do Tailwind.
 */
const ACCENTS: Record<Accent, { icon: string; bar: string; heading: string; pill: string }> = {
  blue: {
    icon: 'bg-blue-600',
    bar: 'bg-blue-500',
    heading: 'text-blue-600',
    pill: 'bg-blue-100 text-blue-800',
  },
  orange: {
    icon: 'bg-orange-600',
    bar: 'bg-orange-500',
    heading: 'text-orange-600',
    pill: 'bg-orange-100 text-orange-800',
  },
  purple: {
    icon: 'bg-purple-600',
    bar: 'bg-purple-500',
    heading: 'text-purple-600',
    pill: 'bg-purple-100 text-purple-800',
  },
  green: {
    icon: 'bg-green-600',
    bar: 'bg-green-500',
    heading: 'text-green-600',
    pill: 'bg-green-100 text-green-800',
  },
  pink: {
    icon: 'bg-pink-600',
    bar: 'bg-pink-500',
    heading: 'text-pink-600',
    pill: 'bg-pink-100 text-pink-800',
  },
  teal: {
    icon: 'bg-teal-600',
    bar: 'bg-teal-500',
    heading: 'text-teal-600',
    pill: 'bg-teal-100 text-teal-800',
  },
};

/** Título de seção com barra de destaque à esquerda, no estilo do site. */
function SectionHeading({ children, accent }: { children: React.ReactNode; accent: (typeof ACCENTS)[Accent] }) {
  return (
    <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-5">
      <span className={`inline-block w-1.5 h-7 rounded-full ${accent.bar}`}></span>
      {children}
    </h3>
  );
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const {
    title, subtitle, technologies, role, type, status, overview, context,
    challenge, myRole, solution, features, techCategories, gallery,
    image = '/img/anfope.webp', icon = 'fa-folder-open', accent = 'blue',
  } = project;

  const a = ACCENTS[accent];

  const techGroups = [
    { items: techCategories.backend, label: 'Backend', icon: 'fa-server', color: 'text-purple-600' },
    { items: techCategories.frontend, label: 'Frontend', icon: 'fa-laptop-code', color: 'text-blue-600' },
    { items: techCategories.database, label: 'Banco de Dados', icon: 'fa-database', color: 'text-yellow-600' },
    { items: techCategories.cloud, label: 'Cloud', icon: 'fa-cloud', color: 'text-orange-600' },
    { items: techCategories.infrastructure, label: 'Infraestrutura', icon: 'fa-cogs', color: 'text-teal-600' },
  ].filter((g) => g.items && g.items.length > 0);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={translations.buttons.close}
          className="absolute top-4 right-4 z-20 bg-white hover:bg-white text-slate-600 hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xl ring-1 ring-slate-200 hover:scale-105 backdrop-blur-sm"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Scrollable area (hero + meta + sections) */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero */}
          <div className="relative">
            <img src={image} alt={title} className="w-full h-56 sm:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          </div>

          {/* Title card floating over the hero */}
          <div className="px-6 sm:px-8 -mt-12 relative z-10">
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-lg border border-slate-200">
              <div className={`${a.icon} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <i className={`fas ${icon} text-white text-xl`}></i>
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">{title}</h2>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{subtitle}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-5">
              {technologies.map((tech, index) => (
                <span key={index} className={`${a.pill} px-3 py-1 rounded-full text-sm font-medium`}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                <i className="fas fa-user-tag text-slate-400"></i> {role}
              </span>
              <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                <i className="fas fa-folder-open text-slate-400"></i> {type}
              </span>
              <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                <i className="fas fa-check-circle text-green-500"></i> {status}
              </span>
            </div>
          </div>

          {/* Sections */}
          <div className="px-6 sm:px-8 py-8 space-y-10">
            {/* Overview */}
            <section>
              <SectionHeading accent={a}>{translations.caseStudy.overview}</SectionHeading>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {overview.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Context */}
            <section>
              <SectionHeading accent={a}>{translations.caseStudy.context}</SectionHeading>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {context.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Challenge */}
            <section>
              <SectionHeading accent={a}>{translations.caseStudy.challenge}</SectionHeading>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {challenge.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* My Role */}
            <section>
              <SectionHeading accent={a}>{translations.caseStudy.myRole}</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-3">
                {myRole.map((item, index) => (
                  <div key={index} className="flex items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <i className="fas fa-check text-green-500 mr-3 flex-shrink-0"></i>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <SectionHeading accent={a}>{translations.caseStudy.solution}</SectionHeading>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {solution.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Features */}
            {features.length > 0 && (
              <section>
                <SectionHeading accent={a}>{translations.caseStudy.featuresTitle}</SectionHeading>
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
            {techGroups.length > 0 && (
              <section>
                <SectionHeading accent={a}>{translations.caseStudy.technologies}</SectionHeading>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techGroups.map((group) => (
                    <div key={group.label} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-slate-800">
                        <i className={`fas ${group.icon} ${group.color}`}></i> {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items!.map((tech, index) => (
                          <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery */}
            {gallery && gallery.length > 0 && (
              <section>
                <SectionHeading accent={a}>{translations.caseStudy.gallery}</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-4">
                  {gallery.map((item, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                      <img src={item.image} alt={item.caption} className="w-full h-48 object-cover" />
                      <div className="p-3 bg-slate-50 text-center text-sm text-slate-600 border-t border-slate-200">
                        {item.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
