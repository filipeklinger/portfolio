import React from 'react';

const About: React.FC = () => (
  <section id="about" className="rounded-xl bg-white/20 backdrop-blur-md shadow-lg w-full max-w-4xl mx-auto py-20 flex flex-col items-center text-white mb-8">
    <h2 className="text-2xl font-bold mb-4 text-white">Sobre mim</h2>
    <p className="text-white text-center mb-2">
      Sou desenvolvedor full stack com foco em sistemas web usando C# .NET, Angular e React.
    </p>
    <p className="text-white text-center">
      Tenho experiência em backend, frontend e integração de sistemas. Busco sempre entregar soluções eficientes e de fácil manutenção.
    </p>
  </section>
);

export default About;
