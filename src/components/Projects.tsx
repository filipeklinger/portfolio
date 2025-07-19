import React from 'react';

// Exemplo de dados de projetos
const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição breve do projeto 1.',
    tech: ['React', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição breve do projeto 2.',
    tech: ['.NET', 'Angular'],
    link: '#',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="w-full max-w-4xl mx-auto py-20 rounded-xl text-white mb-8">
    <h2 className="text-2xl font-bold mb-8 text-white text-center">Projetos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="border border-white/30 rounded-lg p-6 bg-white/10 shadow-sm flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-white/80 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-white/20 rounded px-2 py-1 text-white/90">{t}</span>
            ))}
          </div>
          <a href={project.link} className="text-blue-300 hover:underline mt-auto">Ver mais</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
