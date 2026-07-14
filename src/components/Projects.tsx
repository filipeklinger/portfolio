import { translations } from '../translations';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            <span className="text-blue-400"></span>{translations.projects.title}<span className="text-blue-400"></span>
          </h2>
          <div className="code-lines w-24 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            {translations.projects.subtitle}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Project 1 */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-landmark text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Arbi - Landing Page</h3>
            <p className="text-slate-300 mb-4">
              Landing page desenvolvida para o banco Arbi, com design responsivo e otimizado para apresentar serviços bancários. Projeto realizado na TG4.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
            </div>
            <button onClick={() => (window as any).openModal('modal1')} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
               {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>

          {/* Project 2 */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-shopping-cart text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Tim Live - Carrinho de Compras</h3>
            <p className="text-slate-300 mb-4">
              Backend do carrinho de compras da plataforma Tim Live, permitindo seleção e aquisição de serviços de internet. Desenvolvido na TG4.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
            </div>
            <button onClick={() => (window as any).openModal('modal2')} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
              {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>

          {/* Project 3 */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">BTG Campus - Plataforma de Cursos</h3>
            <p className="text-slate-300 mb-4">
              Plataforma corporativa de educação para treinamentos internos. Evolução da arquitetura responsável pelo cálculo de progresso dos alunos, utilizando processamento incremental baseado em DAG, persistência otimizada em MongoDB e cache em memória para melhoria de performance e escalabilidade.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Angular</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
            </div>
            <button onClick={() => (window as any).openModal('modal3')} className="text-green-600 hover:text-green-800 font-semibold flex items-center">
              {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>

          {/* Project 4 */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-users text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Anfope - Sistema de Gestão</h3>
            <p className="text-slate-300 mb-4">
              Plataforma completa para gestão administrativa desenvolvida de ponta a ponta como freelancer. Contempla gestão de associados, anuidades, processos eleitorais, administração institucional e integração com provedores de pagamento.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML + JS</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">PHP</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">MariaDB</span>
            </div>
            <button onClick={() => (window as any).openAnfopeModal()} className="text-orange-400 hover:text-orange-300 font-semibold flex items-center">
              {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>

          {/* Project 5 - Samsung Knox */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-cloud text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Samsung Knox - Plataforma de Segurança</h3>
            <p className="text-slate-300 mb-4">
              Desenvolvimento da camada cloud para integração com a plataforma Samsung Knox. Criação de APIs RESTful que se comunicam com a API do Knox (via webhook ativado pelo sistema de vendas), sem uso de SDK Android. Solução serverless hospedada na AWS, processando dados de segurança empresarial em tempo real.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Lambda</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">SQS</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">APIs REST</span>
            </div>
            <button onClick={() => (window as any).openModal('modal5')} className="text-pink-600 hover:text-pink-800 font-semibold flex items-center">
              {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>

          {/* Project 6 - Performance Empresarial */}
          <Reveal className="project-card rounded-2xl p-6 border border-slate-700">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Sistema de Performance Empresarial</h3>
            <p className="text-slate-300 mb-4">
              Plataforma completa para monitoramento de KPIs, metas e desempenho organizacional. Dashboard interativo com visualizações em tempo real, alertas automatizados e relatórios gerenciais personalizáveis.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Angular</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">.NET</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">SQS</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Workers Assíncronos</span>
            </div>
            <button onClick={() => (window as any).openModal('modal6')} className="text-teal-600 hover:text-teal-800 font-semibold flex items-center">
              {translations.projects.caseStudy} <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
