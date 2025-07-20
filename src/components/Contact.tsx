import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="w-full mx-auto py-20 flex flex-col items-center bg-[#0E2A47] text-white px-4">
    <h1 className="text-4xl font-bold mb-4">Contato</h1>
    <p className="mb-2">Email: <a href="mailto:filipeklinger@gmail.com" className="text-white hover:text-blue-200 underline transition">filipeklinger@gmail.com</a></p>
    <div className="flex gap-4 mt-2">
      <a href="https://github.com/filipeklinger" className="text-white hover:text-blue-200 transition">GitHub</a>
      <a href="https://linkedin.com/in/filipeklinger" className="text-white hover:text-blue-200 transition">LinkedIn</a>
    </div>
  </section>
);

export default Contact;

// Footer destacado após a seção de contato
export const Footer: React.FC = () => (
  <footer className="w-full bg-[#0E2A47] text-white flex flex-col items-center py-4 mt-0">
    <hr className="w-3/4 border-gray-400 mb-2" />
    <span className="w-3/4 text-sm">© Copyright {new Date().getFullYear()}</span>
  </footer>
);
