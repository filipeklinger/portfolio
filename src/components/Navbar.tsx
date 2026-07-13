import { translations } from '../translations';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-800/90 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold text-slate-100 truncate">
            <span className="text-blue-400">&lt;</span>Filipe Klinger<span className="text-blue-400">/&gt;</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-slate-300 hover:text-blue-400">{translations.nav.home}</a>
            <a href="#about" className="nav-link text-slate-300 hover:text-blue-400">{translations.nav.about}</a>
            <a href="#journey" className="nav-link text-slate-300 hover:text-blue-400">Minha Jornada</a>
            <a href="#projects" className="nav-link text-slate-300 hover:text-blue-400">{translations.nav.projects}</a>
            <a href="#skills" className="nav-link text-slate-300 hover:text-blue-400">{translations.nav.skills}</a>
            <a href="#contact" className="nav-link text-slate-300 hover:text-blue-400">{translations.nav.contact}</a>
          </div>
          <button className="md:hidden text-slate-300 flex-shrink-0 p-2" onClick={() => (window as any).toggleMobileMenu()}>
            <i className="fas fa-bars text-lg"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobileMenu" className="hidden md:hidden mt-4 pb-4 overflow-hidden">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-slate-300 hover:text-blue-400 py-2 px-3 rounded transition-colors" onClick={() => (window as any).toggleMobileMenu()}>{translations.nav.home}</a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 py-2 px-3 rounded transition-colors" onClick={() => (window as any).toggleMobileMenu()}>{translations.nav.about}</a>
            <a href="#projects" className="text-slate-300 hover:text-blue-400 py-2 px-3 rounded transition-colors" onClick={() => (window as any).toggleMobileMenu()}>{translations.nav.projects}</a>
            <a href="#skills" className="text-slate-300 hover:text-blue-400 py-2 px-3 rounded transition-colors" onClick={() => (window as any).toggleMobileMenu()}>{translations.nav.skills}</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 py-2 px-3 rounded transition-colors" onClick={() => (window as any).toggleMobileMenu()}>{translations.nav.contact}</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
