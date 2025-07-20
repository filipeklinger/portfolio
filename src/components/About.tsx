import React from 'react';
import { User, Code2, MonitorSmartphone } from 'lucide-react';

const About: React.FC = () => (
  <div className="flex flex-col items-center w-full px-4">
    <div id="about" className='my-8'>
      {/* Ancora invisivel para manter a seção "Sobre" no topo da página */}
    </div>
    <section className="rounded-xl bg-white/20 backdrop-blur-md w-full shadow-lg max-w-4xl py-12 flex flex-col items-center text-white mb-8 px-4">
      <div className="flex flex-col items-center gap-4">
        <img
          src="eu.jpeg"
          alt="Foto de Filipe Klinger"
          className="w-32 h-32 rounded-full object-cover border-4 border-white/40 shadow-lg mb-2"
          draggable={false}
        />
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <User className="w-7 h-7 text-blue-200" /> Filipe Klinger
        </h1>
        <h2 className="text-lg font-medium text-blue-200 mb-2 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-200" /> Desenvolvedor Full Stack
        </h2>
        <div className="text-white/90 text-center max-w-xl flex flex-col gap-1">
          <span className="flex items-center gap-2 justify-center">
            <MonitorSmartphone className="w-4 h-4 text-blue-200" /> Especialista em sistemas web.
          </span>
          <span className="flex items-center gap-2 justify-center">
            Experiência sólida em backend, frontend, integrações  e cloud.
          </span>
          <span>Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.</span>
          <span>Apaixonado por criar soluções eficientes e que entregam valor.</span>
        </div>
      </div>
    </section>
  </div>
);

export default About;
