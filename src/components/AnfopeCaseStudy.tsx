import { useEffect, useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

const anfopeProject = {
  title: "Anfope - Sistema de Gestão",
  subtitle: "Plataforma completa para gestão administrativa desenvolvida de ponta a ponta como freelancer",
  technologies: ["HTML + JS", "PHP", "MariaDB"],
  role: "Full Stack Developer (Freelancer)",
  type: "Freelancer",
  status: "Finalizado",
  overview: "O sistema Anfope foi desenvolvido para facilitar a gestão de associados, professores, estudantes e demais participantes da organização. Seu principal objetivo é centralizar e automatizar processos administrativos, oferecendo uma solução completa para gerenciamento organizacional.",
  context: "A associação precisava de um sistema unificado para controlar todos os seus membros e processos internos. Antes do desenvolvimento do Anfope, a gestão era feita de forma manual ou com sistemas fragmentados, causando perda de tempo e erros nos processos administrativos. O projeto foi desenvolvido para substituir essa realidade por uma solução integrada e robusta.",
  challenge: "A principal dificuldade foi criar um sistema que fosse fácil de usar para usuários não técnicos, mas ao mesmo tempo oferecesse recursos avançados de gestão. Além disso, o sistema precisava lidar com processos eleitorais complexos e integração com sistemas de pagamento para anuidades.",
  myRole: [
    "Levantamento de requisitos",
    "Arquitetura do sistema",
    "Backend (PHP)",
    "Frontend (HTML + JS)",
    "Banco de Dados",
    "Integrações com provedores de pagamento"
  ],
  solution: "O sistema foi desenvolvido com arquitetura MVC, separando claramente a lógica de negócio da apresentação. O backend em PHP manipula todos os dados e regras de negócio, enquanto o frontend HTML + JavaScript cuida da interação com o usuário. Para as integrações bancárias, foi escolhida uma abordagem segura com redirecionamento para páginas de pagamento oficiais dos provedores.",
  features: [
    "Cadastro e gestão completa de associados",
    "Controle de acesso por perfis de usuário (admin, tesoureiro, coordenador)",
    "Emissão automática de certificados para eventos",
    "Gerenciamento de anuidades com alertas de vencimento",
    "Sistema eleitoral completo com candidaturas e votação",
    "Geração de relatórios administrativos em PDF"
  ],
  techCategories: {
    backend: ["PHP", "MVC Architecture"],
    frontend: ["HTML5", "JavaScript", "CSS3"],
    database: ["MariaDB"],
    cloud: [],
    infrastructure: []
  },
  gallery: [
    { image: "/img/anfope.webp", caption: "Tela inicial do sistema Anfope" }
  ]
};

/**
 * Case study da Anfope. Renderizado no topo da árvore (fora das seções) para
 * evitar problemas de z-index. Expõe os globais `openAnfopeModal` /
 * `closeAnfopeModal` usados pelo card do projeto.
 */
export default function AnfopeCaseStudy() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (window as any).openAnfopeModal = () => setIsOpen(true);
    (window as any).closeAnfopeModal = () => setIsOpen(false);
  }, []);

  return (
    <CaseStudyModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      project={anfopeProject}
    />
  );
}
