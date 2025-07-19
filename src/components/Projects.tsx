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
  <section id="projects" className="w-full max-w-4xl mx-auto py-20">
    <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Projetos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white/80 shadow-sm flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-gray-600 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-gray-200 rounded px-2 py-1 text-gray-700">{t}</span>
            ))}
          </div>
          <a href={project.link} className="text-blue-600 hover:underline mt-auto">Ver mais</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
