import React from 'react';

const About: React.FC = () => (
  <section id="about" className="rounded bg-white/80 shadow w-full max-w-4xl mx-auto py-20 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Sobre mim</h2>
    <p className="text-gray-700 text-center mb-2">
      Sou desenvolvedor full stack com foco em sistemas web usando C# .NET, Angular e React.
    </p>
    <p className="text-gray-700 text-center">
      Tenho experiência em backend, frontend e integração de sistemas. Busco sempre entregar soluções eficientes e de fácil manutenção.
    </p>
  </section>
);

export default About;
