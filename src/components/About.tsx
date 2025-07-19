import React from 'react';

const About: React.FC = () => (
  <section id="about" className="rounded-xl bg-white/20 backdrop-blur-md shadow-lg w-full max-w-4xl mx-auto py-12 flex flex-col items-center text-white mb-8 px-4">
    <div className="flex flex-col items-center gap-4 w-full">
      <img
        src="eu.jpeg"
        alt="Foto de Filipe Klinger"
        className="w-32 h-32 rounded-full object-cover border-4 border-white/40 shadow-lg mb-2"
        draggable={false}
      />
      <h1 className="text-3xl font-bold text-white text-center">Filipe Klinger</h1>
      <h2 className="text-lg font-medium text-blue-200 text-center mb-2">Desenvolvedor Full Stack</h2>
      <p className="text-white/90 text-center max-w-xl">
        Especialista em sistemas web com foco em C# .NET, Angular e React. Experiência sólida em backend, frontend, integrações e cloud. Apaixonado por criar soluções eficientes, escaláveis e de fácil manutenção.
      </p>
    </div>
  </section>
);

export default About;
