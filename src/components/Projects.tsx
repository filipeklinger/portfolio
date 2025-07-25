import React from 'react';

// Exemplo de dados de projetos
const projects = [
  {
    title: 'Arbi - Landing Page',
    description: 'Landing page desenvolvida para o banco Arbi, com foco em apresentar os serviços e soluções da instituição. O design é responsivo e otimizado para navegação em dispositivos móveis e desktops. Este projeto foi realizado enquanto atuo como desenvolvedor na TG4.',
    tech: ['React'],
    image: '/img/arbi.webp',
    systemLink: 'https://www.bancoarbi.com.br/',
  },
  {
    title: 'Tim Live - Carrinho de Compras',
    description: 'Criação do backend para o carrinho de compras da plataforma Tim Live, utilizando .Net C#. O sistema permite que os usuários selecionem e adquiram serviços de internet de forma eficiente e segura. Este projeto foi desenvolvido enquanto atuo como desenvolvedor na TG4.',
    tech: ['.Net C#', 'MySQL'],
    image: '/img/timlive.webp',
    systemLink: 'https://internet.tim.com.br/',
  },
  {
    title: 'BTG Campus - Plataforma de Cursos internos',
    description: 'Plataforma de cursos internos desenvolvida para o BTG Pactual, com o objetivo de oferecer treinamentos e capacitações aos colaboradores. A plataforma é responsiva e permite a gestão de cursos, usuários e relatórios de desempenho. Este projeto foi realizado enquanto atuo como desenvolvedor na TG4.',
    tech: ['.Net C#', 'Angular', 'MongoDB'],
    image: '/img/btgcampus.webp',
    systemLink: '',
  },
  {
    title: 'Anfope',
    description: 'O sistema Anfope foi desenvolvido para facilitar a gestão de associados, professores, estudantes e demais participantes da organização. Seu principal objetivo é centralizar e automatizar processos como cadastro, controle de acesso, emissão de certificados, gerenciamento de anuidades, participação em eleições internas e geração de relatórios.',
    tech: ['Html + Js', 'PHP', 'MariaDB'],
    image: '/img/anfope.webp',
    systemLink: 'https://www.anfope.org.br/sistema/',
  },
  {
    title: 'Centro de Arte e Cultura (CAC - UFRRJ)',
    description: 'O Centro de Arte e Cultura (CAC) da UFRRJ é um espaço dedicado à promoção e difusão da cultura, oferecendo uma variedade de atividades artísticas e culturais para a comunidade.',
    tech: ['Html + Js', 'PHP', 'MySQL'],
    image: '/img/cac.webp',
    systemLink: 'https://r1.ufrrj.br/dac/',
  },
];


const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-20 rounded-xl text-white mb-8 px-4">
      <h2 className="text-2xl font-bold mb-8 text-white text-center">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-white/30 rounded-lg p-6 bg-white/20 backdrop-blur-md shadow-sm flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-white/80 mb-2">
              {project.description.length > 200
                ? project.description.slice(0, 200) + '...'
                : project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-gray-800/40 rounded px-2 py-1 text-white">{t}</span>
              ))}
            </div>
            <button
              onClick={() => handleOpenModal(project)}
              className="text-white hover:underline mt-auto text-left"
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[80vw] max-w-3xl relative text-black max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Fechar"
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-96 object-cover object-center rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
            <p className="mb-2">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t) => (
                <span key={t} className="text-xs bg-gray-800 rounded px-2 py-1 text-white">{t}</span>
              ))}
            </div>
            {selectedProject.systemLink ? (
              <a
                href={selectedProject.systemLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Acessar sistema
              </a>
            ) : (
              <button
                className="inline-block bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-60"
                disabled
              >
                Acessar sistema
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
