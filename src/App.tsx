import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Matrix Rain Effect
    const createMatrixRain = () => {
      const matrixContainer = document.getElementById('matrixRain');
      if (!matrixContainer) return;
      
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);
      
      matrixContainer.innerHTML = '';
      
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDelay = Math.random() * 10 + 's';
        column.style.animationDuration = (8 + Math.random() * 4) + 's';
        
        let text = '';
        for (let j = 0; j < 20; j++) {
          text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
      }
    };

    // Mobile menu toggle
    const toggleMobileMenu = () => {
      const menu = document.getElementById('mobileMenu');
      menu?.classList.toggle('hidden');
    };

    // Initialize effects
    createMatrixRain();
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all slide-in elements
    document.querySelectorAll('.slide-in').forEach(el => {
      observer.observe(el);
    });

    // Active nav link on scroll
    const handleScroll = () => {
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Make functions globally available
    (window as any).toggleMobileMenu = toggleMobileMenu;
    (window as any).openModal = (modalId: string) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    };
    
    (window as any).closeModal = (modalId: string) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    };

    (window as any).handleSubmit = (event: Event) => {
      event.preventDefault();
      
      const form = event.target as HTMLFormElement;
      const button = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-check mr-2"></i>Mensagem Enviada!';
      button.classList.add('bg-green-600', 'hover:bg-green-700');
      button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-green-600', 'hover:bg-green-700');
        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
        form.reset();
      }, 3000);
    };

    // Modal event listeners
    const handleModalClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).classList.contains('modal')) {
        (event.target as HTMLElement).classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
          openModal.classList.remove('show');
          document.body.style.overflow = 'auto';
        }
      }
    };

    document.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleModalClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-100">
              <span className="text-blue-400">&lt;</span>Filipe Klinger<span className="text-blue-400">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link text-slate-300 hover:text-blue-400">Início</a>
              <a href="#about" className="nav-link text-slate-300 hover:text-blue-400">Sobre</a>
              <a href="#projects" className="nav-link text-slate-300 hover:text-blue-400">Projetos</a>
              <a href="#skills" className="nav-link text-slate-300 hover:text-blue-400">Habilidades</a>
              <a href="#contact" className="nav-link text-slate-300 hover:text-blue-400">Contato</a>
            </div>
            <button className="md:hidden text-slate-300" onClick={() => (window as any).toggleMobileMenu()}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
          {/* Mobile Menu */}
          <div id="mobileMenu" className="hidden md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-slate-300 hover:text-blue-400" onClick={() => (window as any).toggleMobileMenu()}>Início</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400" onClick={() => (window as any).toggleMobileMenu()}>Sobre</a>
              <a href="#projects" className="text-slate-300 hover:text-blue-400" onClick={() => (window as any).toggleMobileMenu()}>Projetos</a>
              <a href="#skills" className="text-slate-300 hover:text-blue-400" onClick={() => (window as any).toggleMobileMenu()}>Habilidades</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400" onClick={() => (window as any).toggleMobileMenu()}>Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
          <div className="matrix-rain" id="matrixRain"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="slide-in">
            <div className="floating mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                <img src="eu.jpeg" alt="Filipe Klinger" className="rounded-full w-32 h-32 object-cover" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-slate-100">Desenvolvedor &</span><br />
              <span className="text-blue-400">Arquiteto de Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transformando ideias complexas em soluções elegantes e escaláveis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Ver Projetos
              </a>
              <a href="#contact" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-blue-400 text-2xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="slide-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
              <span className="text-blue-400">&lt;</span>Sobre Mim<span className="text-blue-400">/&gt;</span>
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
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Desenvolvedor Full Stack</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Especialista em sistemas web com experiência sólida em backend, frontend, integrações e cloud. Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Apaixonado por criar soluções eficientes e que entregam valor. Acredito que a melhor tecnologia é aquela que resolve problemas reais de forma elegante, transformando complexidade em simplicidade.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-slate-300">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">8+</div>
                  <div className="text-slate-300">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="slide-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
              <span className="text-blue-400">&lt;</span>Projetos<span className="text-blue-400">/&gt;</span>
            </h2>
            <div className="code-lines w-24 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Soluções inovadoras que demonstram expertise técnica e visão estratégica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="slide-in project-card rounded-2xl p-6 border border-slate-700">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-landmark text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Arbi - Landing Page</h3>
              <p className="text-slate-300 mb-4">
                Landing page desenvolvida para o banco Arbi, com design responsivo e otimizado para apresentar serviços bancários. Projeto realizado na TG4.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              </div>
              <button onClick={() => (window as any).openModal('modal1')} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Ver Detalhes <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            
            {/* Project 2 */}
            <div className="slide-in project-card rounded-2xl p-6 border border-slate-700">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-shopping-cart text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Tim Live - Carrinho de Compras</h3>
              <p className="text-slate-300 mb-4">
                Backend do carrinho de compras da plataforma Tim Live, permitindo seleção e aquisição de serviços de internet. Desenvolvido na TG4.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
              <button onClick={() => (window as any).openModal('modal2')} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                Ver Detalhes <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            
            {/* Project 3 */}
            <div className="slide-in project-card rounded-2xl p-6 border border-slate-700">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">BTG Campus - Plataforma de Cursos</h3>
              <p className="text-slate-300 mb-4">
                Plataforma de cursos internos para o BTG Pactual, oferecendo treinamentos e capacitações aos colaboradores. Projeto realizado na TG4.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Angular</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <button onClick={() => (window as any).openModal('modal3')} className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                Ver Detalhes <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            
            {/* Project 4 */}
            <div className="slide-in project-card rounded-2xl p-6 border border-slate-700">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Anfope - Sistema de Gestão</h3>
              <p className="text-slate-300 mb-4">
                Sistema completo para gestão de associados, professores e estudantes, centralizando processos como cadastros, certificados e relatórios.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML + JS</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">MariaDB</span>
              </div>
              <button onClick={() => (window as any).openModal('modal4')} className="text-orange-400 hover:text-orange-300 font-semibold flex items-center">
                Ver Detalhes <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="slide-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
              <span className="text-blue-400">&lt;</span>Habilidades<span className="text-blue-400">/&gt;</span>
            </h2>
            <div className="code-lines w-24 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="slide-in text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-400">&lt;</span>Vamos Conversar<span className="text-blue-400">/&gt;</span>
            </h2>
            <div className="code-lines w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Entre em contato e vamos construir algo incrível juntos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">filipe.klinger@email.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fab fa-linkedin text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-slate-300">linkedin.com/in/filipeklinger</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <i className="fab fa-github text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-slate-300">github.com/filipeklinger</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <form className="space-y-6" onSubmit={(window as any).handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome</label>
                    <input type="text" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensagem</label>
                    <textarea rows={4} required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Enviar Mensagem
                  </button>
                </form>
                
                <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
                  <div className="flex items-center text-blue-300 text-sm">
                    <i className="fas fa-info-circle mr-2"></i>
                    <span>Demo - Formulário não funcional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modals */}
      {/* Modal 1 - Arbi Landing Page */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal1')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="project-image rounded-t-2xl">
              <i className="fas fa-landmark"></i>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-landmark text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Arbi - Landing Page</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS3</span>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Landing page desenvolvida para o banco Arbi, com foco em apresentar os serviços e soluções da instituição financeira. O projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4, seguindo as diretrizes de marca e identidade visual do cliente.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  O design é completamente responsivo e otimizado para navegação em dispositivos móveis e desktops, garantindo uma experiência consistente em todas as plataformas. A página foi construída com foco em performance e conversão.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Características:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Design responsivo para todos os dispositivos</li>
                  <li>Otimização para SEO e performance</li>
                  <li>Integração com formulários de contato</li>
                  <li>Animações suaves e interativas</li>
                  <li>Carregamento rápido e otimizado</li>
                  <li>Compatibilidade cross-browser</li>
                </ul>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-slate-600">Responsivo</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">95+</div>
                    <div className="text-sm text-slate-600">Performance Score</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal1')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal 2 - Tim Live Carrinho */}
      <div id="modal2" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal2')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="project-image rounded-t-2xl" style={{background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)'}}>
              <i className="fas fa-shopping-cart"></i>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-shopping-cart text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Tim Live - Carrinho de Compras</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">API REST</span>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Desenvolvimento do backend para o carrinho de compras da plataforma Tim Live, utilizando .NET C# e MySQL. O sistema permite que os usuários selecionem e adquiram serviços de internet de forma eficiente e segura. Este projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A solução foi projetada para lidar com alto volume de transações, garantindo performance e segurança nas operações de e-commerce. O sistema integra com diversos serviços da Tim para validação de produtos e processamento de pedidos.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Funcionalidades:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Gerenciamento de carrinho de compras em tempo real</li>
                  <li>Validação de produtos e disponibilidade</li>
                  <li>Integração com sistemas de pagamento</li>
                  <li>Controle de sessão e autenticação</li>
                  <li>API REST para comunicação com frontend</li>
                  <li>Logs detalhados para auditoria</li>
                </ul>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">.NET</div>
                    <div className="text-sm text-slate-600">Framework</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">MySQL</div>
                    <div className="text-sm text-slate-600">Database</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal2')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal 3 - BTG Campus */}
      <div id="modal3" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal3')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="project-image rounded-t-2xl" style={{background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'}}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">BTG Campus - Plataforma de Cursos</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Angular</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Plataforma de cursos internos desenvolvida para o BTG Pactual, com o objetivo de oferecer treinamentos e capacitações aos colaboradores da instituição. A plataforma é responsiva e permite a gestão completa de cursos, usuários e relatórios de desempenho. Este projeto foi realizado durante minha atuação como desenvolvedor na TG4.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  O sistema foi desenvolvido com arquitetura moderna, utilizando .NET C# no backend, Angular no frontend e MongoDB como banco de dados, garantindo escalabilidade e performance para atender às necessidades de uma grande instituição financeira.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Funcionalidades:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Gestão completa de cursos e módulos</li>
                  <li>Sistema de usuários com diferentes perfis</li>
                  <li>Acompanhamento de progresso dos colaboradores</li>
                  <li>Relatórios detalhados de desempenho</li>
                  <li>Interface responsiva e intuitiva</li>
                  <li>Integração com sistemas internos do BTG</li>
                </ul>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">BTG</div>
                    <div className="text-sm text-slate-600">Pactual</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">Full</div>
                    <div className="text-sm text-slate-600">Stack</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal3')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal 4 - Anfope */}
      <div id="modal4" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal4')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="project-image rounded-t-2xl" style={{background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'}}>
              <i className="fas fa-users"></i>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Anfope - Sistema de Gestão</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML + JS</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">MariaDB</span>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  O sistema Anfope foi desenvolvido para facilitar a gestão de associados, professores, estudantes e demais participantes da organização. Seu principal objetivo é centralizar e automatizar processos administrativos, oferecendo uma solução completa para gerenciamento organizacional.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Desenvolvido com tecnologias web tradicionais mas eficazes, o sistema utiliza HTML, JavaScript, PHP e MariaDB para oferecer uma solução robusta e confiável para as necessidades específicas da Anfope.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Funcionalidades:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Cadastro e gestão de associados</li>
                  <li>Controle de acesso por perfis de usuário</li>
                  <li>Emissão automática de certificados</li>
                  <li>Gerenciamento de anuidades e pagamentos</li>
                  <li>Sistema de eleições internas</li>
                  <li>Geração de relatórios administrativos</li>
                </ul>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">PHP</div>
                    <div className="text-sm text-slate-600">Backend</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">MariaDB</div>
                    <div className="text-sm text-slate-600">Database</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">Web</div>
                    <div className="text-sm text-slate-600">Platform</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal4')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-blue-400">&lt;</span>Filipe Klinger<span className="text-blue-400">/&gt;</span>
          </div>
          <p>&copy; 2024 Filipe Klinger. Desenvolvido com paixão e tecnologia.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
