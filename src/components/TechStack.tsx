
import React from 'react';
import {
  Database,
  Server,
  Code,
  Globe,
  FileCode,
  Layers,
  Zap,
  Cpu,
  SquareStack,
} from 'lucide-react';

const techGroups = [
  {
    group: 'Bancos de Dados',
    items: [
      { name: 'MySQL/MariaDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'C# .NET', icon: Server },
      { name: 'Node.js', icon: Code },
      { name: 'PHP', icon: FileCode },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: Globe },
      { name: 'Angular', icon: Globe },
      { name: 'Html + Js', icon: Code },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'AWS SQS', icon: Layers },
      { name: 'AWS Lambda', icon: Zap },
      { name: 'AWS EC2', icon: Cpu },
      { name: 'AWS S3', icon: SquareStack },
      { name: 'Docker', icon: SquareStack },
      { name: 'Azure DevOps', icon: Layers },
    ],
  },
];

const TechStack: React.FC = () => (
  <section id="techstack" className="w-full max-w-4xl mx-auto py-20 rounded-xl text-white mb-8 px-4">
    <h2 className="text-2xl font-bold mb-8 text-white text-center">Tecnologias</h2>
    <div className="flex flex-col gap-8">
      {techGroups.map((group) => (
        <div key={group.group}>
          <h3 className="text-lg font-semibold mb-4 text-white">{group.group}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex items-center justify-center gap-2 px-4 py-3 rounded bg-white/20 backdrop-blur-md shadow text-white font-medium">
                  {Icon && <Icon className="w-5 h-5 text-blue-200" />}
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
    </section>
);

export default TechStack;
