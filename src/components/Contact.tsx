import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="w-full mx-auto py-20 flex flex-col items-center bg-white/90">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contato</h2>
    <p className="text-gray-700 mb-2">Email: <a href="mailto:seuemail@email.com" className="text-blue-600 hover:underline">seuemail@email.com</a></p>
    <div className="flex gap-4 mt-2">
      <a href="https://github.com/seuusuario" className="text-gray-700 hover:text-blue-600 transition">GitHub</a>
      <a href="https://linkedin.com/in/seuusuario" className="text-gray-700 hover:text-blue-600 transition">LinkedIn</a>
    </div>
  </section>
);

export default Contact;
