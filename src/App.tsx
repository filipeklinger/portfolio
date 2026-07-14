import './App.css';
import './components/Journey.css';
import { useSiteEffects } from './hooks/useSiteEffects';
import AnfopeCaseStudy from './components/AnfopeCaseStudy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModals from './components/ProjectModals';
import Footer from './components/Footer';

function App() {
  useSiteEffects();

  return (
    <div className="bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Case Study Modal - Anfope (renderizado aqui para evitar erros de zIndex) */}
      <AnfopeCaseStudy />

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
      <ProjectModals />
      <Footer />
    </div>
  );
}

export default App;
