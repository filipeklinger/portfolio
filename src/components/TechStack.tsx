import React from 'react';

const techGroups = [
    {
        group: 'Bancos de Dados',
        items: [
            { name: 'MySQL/MariaDB' },
            { name: 'PostgreSQL' },
            { name: 'MongoDB' },
            { name: 'Redis' },
        ],
    },
    {
        group: 'Backend',
        items: [
            { name: 'C# .NET' },
            { name: 'Node.js' },
            { name: 'PHP' },
        ],
    },
    {
        group: 'Frontend',
        items: [
            { name: 'React' },
            { name: 'Angular' },
        ],
    },
    {
        group: 'Cloud & DevOps',
        items: [
            { name: 'AWS SQS' },
            { name: 'AWS Lambda' },
            { name: 'AWS EC2' },
            { name: 'AWS S3' },
            { name: 'Docker' },
            { name: 'Azure DevOps' },
        ],
    },
];

const TechStack: React.FC = () => (
    <section id="techstack" className="w-full max-w-4xl mx-auto py-20 bg-transparent">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Tecnologias</h2>
        <div className="flex flex-col gap-8">
            {techGroups.map((group) => (
                <div key={group.group}>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">{group.group}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {group.items.map((item) => (
                            <div key={item.name} className="flex items-center justify-center px-4 py-3 rounded bg-white/60 shadow text-gray-800 font-medium">
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default TechStack;
