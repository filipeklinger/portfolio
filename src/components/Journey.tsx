const Journey = () => {
  const events = [
    {
      year: "2013",
      title: "Técnico em Informática",
      description: "Formação técnica que consolidou os fundamentos e despertou o interesse por desenvolvimento de software.",
      icon: "🎓"
    },
    {
      year: "2016",
      title: "Graduação em Sistemas de Informação",
      description: "Ingresso no ensino superior, com base sólida em programação, algoritmos e engenharia de software.",
      icon: "💻"
    },
    {
      year: "2017",
      title: "1º Lugar no Hackathon Embrapa",
      description: (
        <span>
          Primeiro lugar no Hackathon Acadêmico da Embrapa com o app <strong>Restaura Mata Atlântica</strong>, atuando no design de interface (UI/UX).
        </span>
      ),
      icon: "🏆"
    },
    {
      year: "2019",
      title: "Desenvolvedor na UFRRJ",
      description: "Início da atuação profissional no desenvolvimento e manutenção dos sistemas institucionais da universidade.",
      icon: "🏛"
    },
    {
      year: "2020",
      title: "Desenvolvedor na TG4",
      description: "Entrada no mercado corporativo, com atuação em projetos de grande porte e alta complexidade.",
      icon: "🚀"
    },
    {
      year: "2021+",
      title: "Cloud & Arquitetura",
      description: "Evolução para soluções escaláveis com AWS, arquitetura serverless, sistemas distribuídos e processamento assíncrono.",
      icon: "☁️"
    },
    {
      year: "2024",
      title: "Senior Software Engineer",
      description: "Consolidação da atuação em decisões arquiteturais, modernização de aplicações e resolução de problemas de maior complexidade.",
      icon: "🏗"
    },
    {
      year: "Hoje",
      title: "Arquitetura & Sistemas Distribuídos",
      description: "Aprofundando minha atuação em arquitetura de software, sistemas distribuídos e design de soluções escaláveis e sustentáveis.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="slide-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400">Minha</span> Jornada
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Uma linha do tempo da minha evolução profissional através da engenharia de software
          </p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item slide-in">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="text-xs font-mono text-blue-400 mb-2 block">{event.year}</span>
                <div className="timeline-heading flex items-center gap-3 mb-3">
                  <div className="text-4xl">{event.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">{event.title}</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
