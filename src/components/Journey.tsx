const Journey = () => {
  const events = [
    {
      year: "2013",
      title: "Técnico em Informática",
      description: "Primeiro contato profissional com desenvolvimento de software.",
      icon: "🎓"
    },
    {
      year: "2016",
      title: "Ingresso em Sistemas de Informação",
      description: "Início da graduação e aprofundamento em desenvolvimento de software.",
      icon: "💻"
    },
    {
      year: "2017",
      title: "Hackathon Embrapa",
      description: (
        <span>
          1º Lugar no Hackathon Acadêmico da Embrapa. Desenvolvimento do aplicativo <strong>Restaura Mata Atlântica</strong>. 
          Responsável pelo design da interface (UI/UX) do aplicativo.
        </span>
      ),
      icon: "🏆"
    },
    {
      year: "2019",
      title: "UFRRJ - Universidade Federal Rural do Rio de Janeiro",
      description: "Desenvolvimento dos sistemas institucionais da universidade.",
      icon: "🏛"
    },
    {
      year: "2020",
      title: "Entrada na TG4",
      description: "Primeiros projetos corporativos de grande porte.",
      icon: "🚀"
    },
    {
      year: "2021+",
      title: "Cloud & Arquitetura",
      description: "Projetos utilizando AWS, Serverless, MongoDB e processamento distribuído.",
      icon: "☁️"
    },
    {
      year: "Hoje",
      title: "Senior Software Engineer",
      description: "Foco em arquitetura de software, sistemas distribuídos, modernização de aplicações e soluções cloud.",
      icon: "🏗"
    }
  ];

  // Divide os eventos em duas colunas
  const leftEvents = events.filter((_, index) => index % 2 === 0);
  const rightEvents = events.filter((_, index) => index % 2 === 1);

  return (
    <section id="journey" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="slide-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400">Minha</span> Jornada<span className="text-blue-400"></span>
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Uma linha do tempo da minha evolução profissional através da engenharia de software
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Coluna esquerda */}
          <div className="timeline-column-left">
            {leftEvents.map((event, index) => (
              <div key={`left-${index}`} className="timeline-item-left slide-in">
                <div className="timeline-dot"></div>
                <div className="timeline-content text-right">
                  <span className="text-xs font-mono text-blue-400 mb-2 block">{event.year}</span>
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{event.title}</h3>
                    <div className="text-4xl">{event.icon}</div>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed text-right">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna direita */}
          <div className="timeline-column-right">
            {rightEvents.map((event, index) => (
              <div key={`right-${index}`} className="timeline-item-right slide-in">
                <div className="timeline-dot"></div>
                <div className="timeline-content text-left">
                  <span className="text-xs font-mono text-blue-400 mb-2 block">{event.year}</span>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{event.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{event.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;