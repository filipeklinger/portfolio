
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => (
  <section id="contact" className="w-full mx-auto py-20 flex flex-col items-center bg-[#0E2A47]/80 backdrop-blur-md text-white px-4">
    <h1 className="text-4xl font-bold mb-4">Contato</h1>
    <p className="mb-2 flex items-center gap-2">
      <Mail className="inline-block w-5 h-5 text-blue-200" />
      <a href="mailto:filipeklinger@gmail.com" className="text-white hover:text-blue-200 underline transition">filipeklinger@gmail.com</a>
    </p>
    <div className="flex gap-4 mt-2">
      <a href="https://github.com/filipeklinger" className="flex items-center gap-1 text-white hover:text-blue-200 transition">
        <Github className="w-5 h-5" /> GitHub
      </a>
      <a href="https://linkedin.com/in/filipeklinger" className="flex items-center gap-1 text-white hover:text-blue-200 transition">
        <Linkedin className="w-5 h-5" /> LinkedIn
      </a>
    </div>
  </section>
);

export default Contact;

// Footer destacado após a seção de contato
export const Footer: React.FC = () => (
  <footer className="w-full bg-[#0E2A47]/70 backdrop-blur-md text-white flex flex-col items-center py-4 mt-0">
    <hr className="w-3/4 border-gray-400 mb-2" />
    <span className="w-3/4 text-sm">© Copyright {new Date().getFullYear()}</span>
  </footer>
);
