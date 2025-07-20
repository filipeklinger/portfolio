import React from 'react';

// Exemplo de dados de projetos
const projects = [
  {
    title: 'Anfope',
    description: 'O sistema Anfope foi desenvolvido para facilitar a gestão de associados, professores, estudantes e demais participantes da organização. Seu principal objetivo é centralizar e automatizar processos como cadastro, controle de acesso, emissão de certificados, gerenciamento de anuidades, participação em eleições internas e geração de relatórios.',
    tech: ['Html + Js', 'PHP'],
    image: '/img/anfope.webp', // Exemplo de imagem
    systemLink: 'https://www.anfope.org.br/sistema/',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição breve do projeto 2.',
    tech: ['.NET', 'Angular'],
    image: '/img/cornered-stairs.svg',
    systemLink: 'https://exemplo.com/projeto2',
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
                <span key={t} className="text-xs bg-white/20 rounded px-2 py-1 text-white/90">{t}</span>
              ))}
            </div>
            <button
              onClick={() => handleOpenModal(project)}
              className="text-blue-300 hover:underline mt-auto text-left"
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
                <span key={t} className="text-xs bg-gray-200 rounded px-2 py-1 text-gray-800">{t}</span>
              ))}
            </div>
            <a
              href={selectedProject.systemLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Acessar sistema
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
