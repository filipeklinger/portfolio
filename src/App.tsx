import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background SVG fixo */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src="circuit-board.svg"
          alt="background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-24">
        <About />
        <Projects />
        <TechStack />
        
        <Contact />
      </main>
    </div>
  );
}

export default App
