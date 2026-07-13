import { translations } from '../translations';

// Calcula os anos de experiência desde 1 de janeiro de 2019.
const calculateYearsOfExperience = () => {
  const startDate = new Date(2019, 0, 1);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();

  // Verifica se ainda não chegou ao aniversário do início da experiência neste ano
  const hasPassedAnniversary =
    currentDate.getMonth() > startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() >= startDate.getDate());

  if (!hasPassedAnniversary) {
    years--;
  }

  return years;
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="slide-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400"></span>{translations.about.title}<span className="text-blue-400"></span>
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <div className="tech-grid p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500">
                <div className="text-6xl text-blue-400 mb-4">
                  <i className="fas fa-code"></i>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-mono text-slate-200">System.Architecture.Design()</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-mono text-slate-200">Code.Quality.Optimize()</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-mono text-slate-200">Team.Leadership.Execute()</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-100">{translations.about.roleTitle}</h3>
            <p className="sm:text-lg text-slate-300 mb-6 leading-relaxed break-words px-4">
              {translations.about.description1}
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed break-words px-4">
              {translations.about.description2}
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed break-words px-4">
              {translations.about.description3}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm sm:text-base text-slate-300">{translations.about.projectsDelivered}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">{calculateYearsOfExperience()}+</div>
                <div className="text-sm sm:text-base text-slate-300">{translations.about.yearsExperience}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
