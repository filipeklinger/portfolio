/**
 * Modais dos projetos (Arbi, Tim Live, BTG Campus). Controlados via os globais
 * `openModal` / `closeModal` registrados em useSiteEffects.
 *
 * Nota: o modal da Anfope é renderizado pelo componente AnfopeCaseStudy.
 * Os cards dos projetos 5 e 6 referenciam modal5/modal6, que ainda não
 * possuem markup aqui.
 */
export default function ProjectModals() {
  return (
    <>
      {/* Modal 1 - Arbi */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal1')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>

            <div className="relative rounded-t-2xl overflow-hidden">
              <img src="/img/arbi.webp" alt="Arbi Landing Page" className="w-full h-64 object-cover" />
            </div>

            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-landmark text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Arbi - Landing Page</h2>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS3</span>
              </div>

              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Landing page desenvolvida para o banco Arbi, com foco em apresentar os serviços e soluções da instituição financeira. O projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4, seguindo as diretrizes de marca e identidade visual do cliente.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  O design é completamente responsivo e otimizado para navegação em dispositivos móveis e desktops, garantindo uma experiência consistente em todas as plataformas. A página foi construída com foco em performance e conversão.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Características:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Design responsivo para todos os dispositivos</li>
                  <li>Otimização para SEO e performance</li>
                  <li>Integração com formulários de contato</li>
                  <li>Animações suaves e interativas</li>
                  <li>Carregamento rápido e otimizado</li>
                  <li>Compatibilidade cross-browser</li>
                </ul>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-slate-600">Responsivo</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">95+</div>
                    <div className="text-sm text-slate-600">Performance Score</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal1')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 - Tim Live Carrinho */}
      <div id="modal2" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal2')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>

            <div className="relative rounded-t-2xl overflow-hidden">
              <img src="/img/timlive.webp" alt="Tim Live Carrinho de Compras" className="w-full h-64 object-cover" />
            </div>

            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-shopping-cart text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Tim Live - Carrinho de Compras</h2>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">API REST</span>
              </div>

              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Desenvolvimento do backend para o carrinho de compras da plataforma Tim Live, utilizando .NET C# e MySQL. O sistema permite que os usuários selecionem e adquiram serviços de internet de forma eficiente e segura. Este projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A solução foi projetada para lidar com alto volume de transações, garantindo performance e segurança nas operações de e-commerce. O sistema integra com diversos serviços da Tim para validação de produtos e processamento de pedidos.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Funcionalidades:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Gerenciamento de carrinho de compras em tempo real</li>
                  <li>Validação de produtos e disponibilidade</li>
                  <li>Integração com sistemas de pagamento</li>
                  <li>Controle de sessão e autenticação</li>
                  <li>API REST para comunicação com frontend</li>
                  <li>Logs detalhados para auditoria</li>
                </ul>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">.NET</div>
                    <div className="text-sm text-slate-600">Framework</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">MySQL</div>
                    <div className="text-sm text-slate-600">Database</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal2')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 - BTG Campus */}
      <div id="modal3" className="modal">
        <div className="modal-content">
          <div className="relative">
            <button onClick={() => (window as any).closeModal('modal3')} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 w-10 h-10 rounded-full flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>

            <div className="relative rounded-t-2xl overflow-hidden">
              <img src="/img/btgcampus.webp" alt="BTG Campus Plataforma de Cursos" className="w-full h-64 object-cover" />
            </div>

            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">BTG Campus - Plataforma de Cursos</h2>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">.NET C#</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Angular</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>

              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Descrição Completa</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Plataforma de cursos internos desenvolvida para o BTG Pactual, com o objetivo de oferecer treinamentos e capacitações aos colaboradores da instituição. A plataforma é responsiva e permite a gestão completa de cursos, usuários e relatórios de desempenho. Este projeto foi realizado durante minha atuação como desenvolvedor na TG4.
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  O sistema foi desenvolvido com arquitetura moderna, utilizando .NET C# no backend, Angular no frontend e MongoDB como banco de dados, garantindo escalabilidade e performance para atender às necessidades de uma grande instituição financeira.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-slate-800">Principais Funcionalidades:</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Gestão completa de cursos e módulos</li>
                  <li>Sistema de usuários com diferentes perfis</li>
                  <li>Acompanhamento de progresso dos colaboradores</li>
                  <li>Relatórios detalhados de desempenho</li>
                  <li>Interface responsiva e intuitiva</li>
                </ul>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">BTG</div>
                    <div className="text-sm text-slate-600">Pactual</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">Full</div>
                    <div className="text-sm text-slate-600">Stack</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">TG4</div>
                    <div className="text-sm text-slate-600">Desenvolvido na</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => (window as any).closeModal('modal3')} className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
