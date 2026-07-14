import Reveal from './Reveal';

const Journey = () => {
  const events = [
    {
      year: "2013",
      title: "Técnico em Informática",
      description: "Onde tudo começou: os fundamentos da computação e a descoberta de que resolver problemas com software seria a minha profissão.",
      icon: "🎓"
    },
    {
      year: "2016",
      title: "Graduação em Sistemas de Informação",
      description: "A base formal em programação, algoritmos e engenharia de software que estrutura a minha forma de pensar até hoje.",
      icon: "💻"
    },
    {
      year: "2017",
      title: "1º Lugar no Hackathon Embrapa",
      description: (
        <span>
          Primeiro lugar no Hackathon Acadêmico da Embrapa com o app <strong>Restaura Mata Atlântica</strong>, cuidando da experiência do usuário (UI/UX) — meu primeiro contato próximo com produto.
        </span>
      ),
      icon: "🏆"
    },
    {
      year: "2019",
      title: "Desenvolvedor na UFRRJ",
      description: "Primeira experiência profissional colocando a mão em sistemas reais, mantendo e evoluindo as aplicações que a universidade usava todos os dias.",
      icon: "🏛"
    },
    {
      year: "2020",
      title: "Desenvolvedor na TG4",
      description: "Entrada no mundo corporativo, atuando em projetos de grande porte para clientes exigentes dos setores financeiro e de telecom.",
      icon: "🚀"
    },
    {
      year: "2021+",
      title: "Cloud & Processamento Assíncrono",
      description: "Migração para a nuvem com AWS e soluções serverless, aprendendo a lidar com processamento assíncrono e integrações entre serviços.",
      icon: "☁️"
    },
    {
      year: "2024",
      title: "Senior Software Engineer",
      description: "Mais responsabilidade sobre as decisões técnicas: liderar escolhas, modernizar aplicações e assumir os problemas de maior peso dos projetos.",
      icon: "🏗"
    },
    {
      year: "Hoje",
      title: "Arquitetura & Design de Soluções",
      description: "Hoje meu foco é desenhar soluções: modernizar o que existe, orientar decisões técnicas e entregar sistemas mais simples, confiáveis e fáceis de evoluir.",
      icon: "🧩"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400">Minha</span> Jornada
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Uma trajetória que evoluiu naturalmente dos fundamentos ao design de soluções
          </p>
        </Reveal>

        <div className="timeline">
          {events.map((event, index) => (
            <Reveal key={index} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="text-xs font-mono text-blue-400 mb-2 block">{event.year}</span>
                <div className="timeline-heading flex items-center gap-3 mb-3">
                  <div className="text-4xl">{event.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">{event.title}</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">{event.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
