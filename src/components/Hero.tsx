import { translations } from '../translations';
import MatrixRainCanvas from './MatrixRainCanvas';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="circuit-bg absolute inset-0"></div>

      {/* Tech Background Effects */}
      <div className="tech-background">
        {/* Pulsing Dots */}
        <div className="tech-dots">
          <div className="tech-dot"></div>
          <div className="tech-dot"></div>
          <div className="tech-dot"></div>
          <div className="tech-dot"></div>
          <div className="tech-dot"></div>
          <div className="tech-dot"></div>
        </div>

        {/* Matrix Rain Effect */}
        <MatrixRainCanvas className="opacity-40" speed={0.35} fps={24} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <Reveal>
          <div className="floating mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              <img src="eu.jpeg" alt="Filipe Klinger" className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-100">{translations.hero.titleSenior}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {translations.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center">
              {translations.hero.buttonProjects}
            </a>
            <a href="#contact" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center">
              {translations.hero.buttonContact}
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <i className="fas fa-chevron-down text-blue-400 text-2xl"></i>
      </div>
      {/* Bottom Fade Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-800 pointer-events-none z-10" />
    </section>
  );
}
