import React from 'react';

const Header: React.FC = () => (
  <header className="w-full fixed top-0 left-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur bg-transparent">
    <span className="text-xl font-bold text-white">Filipe Klinger</span>
    <nav className="space-x-6">
      <a href="#about" className="text-white hover:text-blue-600 transition">Sobre</a>
      <a href="#projects" className="text-white hover:text-blue-600 transition">Projetos</a>
      <a href="#contact" className="text-white hover:text-blue-600 transition">Contato</a>
    </nav>
  </header>
);

export default Header;
