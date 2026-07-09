// Traduções para o portfolio

export const translations = {
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato"
  },
  
  hero: {
    titleSenior: "Sênior Software Engineer",
    subtitle: "Projetando arquiteturas escaláveis e desenvolvendo soluções de alto impacto para sistemas corporativos",
    buttonProjects: "Ver Projetos",
    buttonContact: "Entre em Contato"
  },
  
  about: {
    title: "Sobre Mim",
    roleTitle: "Engenheiro de Software Sênior",
    description1: "Engenheiro de Software Sênior com experiência no desenvolvimento de sistemas corporativos utilizando .NET, Angular, React, Node.js e AWS.",
    description2: "Atuo na definição de arquitetura, evolução de aplicações legadas, desenvolvimento de APIs, sistemas distribuídos, processamento assíncrono e integração entre sistemas.",
    description3: "Tenho interesse especial em arquitetura de software, design de soluções, otimização de performance e construção de aplicações escaláveis, sempre buscando equilibrar qualidade técnica, simplicidade e valor para o negócio.",
    projectsDelivered: "Projetos Entregues",
    yearsExperience: "Anos de Experiência"
  },
  
  projects: {
    title: "Projetos",
    subtitle: "Soluções inovadoras que demonstram expertise técnica e visão estratégica",
    caseStudy: "Estudo de Caso"
  },
  
  skills: {
    title: "Habilidades",
    frontendTitle: "Frontend",
    backendTitle: "Backend",
    databaseTitle: "Bancos de Dados",
    cloudTitle: "Cloud & DevOps",
    competenciesTitle: "Principais Competências",
    competencySystemArchitecture: "Arquitetura de Sistemas",
    competencySystemArchitectureDesc: "Design e implementação de soluções escaláveis e robustas",
    competencyFullStack: "Desenvolvimento Full-Stack",
    competencyFullStackDesc: "Experiência completa em frontend, backend e integrações",
    competencyCloudDevOps: "Cloud & DevOps",
    competencyCloudDevOpsDesc: "Implementação e gestão de infraestrutura em nuvem",
    competencyTechnicalLeadership: "Liderança Técnica",
    competencyTechnicalLeadershipDesc: "Mentoria de equipes e definição de padrões de desenvolvimento"
  },
  
  contact: {
    title: "Vamos Conversar",
    subtitle: "Pronto para transformar sua ideia em realidade? Entre em contato e vamos construir algo incrível juntos.",
    contactTitle: "Entre em Contato",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    whatsappLabel: "WhatsApp"
  },
  
  footer: {
    copyright: "Desenvolvido com paixão e tecnologia."
  },
  
  // Project Modals
  modals: {
    modal1: {
      title: "Arbi - Landing Page",
      description: "Landing page desenvolvida para o banco Arbi, com foco em apresentar os serviços e soluções da instituição financeira. O projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4, seguindo as diretrizes de marca e identidade visual do cliente.",
      description2: "O design é completamente responsivo e otimizado para navegação em dispositivos móveis e desktops, garantindo uma experiência consistente em todas as plataformas. A página foi construída com foco em performance e conversão.",
      mainFeaturesTitle: "Principais Características:",
      features: [
        "Design responsivo para todos os dispositivos",
        "Otimização para SEO e performance",
        "Integração com formulários de contato",
        "Animações suaves e interativas",
        "Carregamento rápido e otimizado",
        "Compatibilidade cross-browser"
      ],
      stats: {
        responsive: "Responsivo",
        performanceScore: "Performance Score",
        developedAt: "Desenvolvido na"
      }
    },
    modal2: {
      title: "Tim Live - Carrinho de Compras",
      description: "Desenvolvimento do backend para o carrinho de compras da plataforma Tim Live, utilizando .NET C# e MySQL. O sistema permite que os usuários selecionem e adquiram serviços de internet de forma eficiente e segura. Este projeto foi desenvolvido durante minha atuação como desenvolvedor na TG4.",
      description2: "A solução foi projetada para lidar com alto volume de transações, garantindo performance e segurança nas operações de e-commerce. O sistema integra com diversos serviços da Tim para validação de produtos e processamento de pedidos.",
      mainFeaturesTitle: "Principais Funcionalidades:",
      features: [
        "Gerenciamento de carrinho de compras em tempo real",
        "Validação de produtos e disponibilidade",
        "Integração com sistemas de pagamento",
        "Controle de sessão e autenticação",
        "API REST para comunicação com frontend",
        "Logs detalhados para auditoria"
      ],
      techInfo: {
        framework: ".NET Framework",
        database: "MySQL Database",
        developedAt: "Desenvolvido na"
      }
    },
    modal3: {
      title: "BTG Campus - Plataforma de Cursos",
      description: "Plataforma de cursos internos desenvolvida para o BTG Pactual, com o objetivo de oferecer treinamentos e capacitações aos colaboradores da instituição. A plataforma é responsiva e permite a gestão completa de cursos, usuários e relatórios de desempenho. Este projeto foi realizado durante minha atuação como desenvolvedor na TG4.",
      description2: "O sistema foi desenvolvido com arquitetura moderna, utilizando .NET C# no backend, Angular no frontend e MongoDB como banco de dados, garantindo escalabilidade e performance para atender às necessidades de uma grande instituição financeira.",
      mainFeaturesTitle: "Principais Funcionalidades:",
      features: [
        "Gestão completa de cursos e módulos",
        "Sistema de usuários com diferentes perfis",
        "Acompanhamento de progresso dos colaboradores",
        "Relatórios detalhados de desempenho",
        "Interface responsiva e intuitiva"
      ],
      techInfo: {
        btg: "BTG Pactual",
        fullStack: "Full Stack",
        developedAt: "Desenvolvido na"
      }
    },
    modal5: {
      title: "Samsung Knox - Plataforma de Segurança",
      description: "Desenvolvimento da camada cloud para integração com a plataforma Samsung Knox. Criação de APIs RESTful que se comunicam com a API do Knox (via webhook ativado pelo sistema de vendas), sem uso de SDK Android. Solução serverless hospedada na AWS, processando dados de segurança empresarial em tempo real.",
      mainFeaturesTitle: "Principais Funcionalidades:",
      features: [
        "Integração com API Samsung Knox via webhook",
        "Solução serverless na AWS",
        "Processamento em tempo real de dados de segurança",
        "APIs RESTful para comunicação",
        "Escalabilidade automática"
      ]
    },
    modal6: {
      title: "Sistema de Performance Empresarial",
      description: "Plataforma completa para monitoramento de KPIs, metas e desempenho organizacional. Dashboard interativo com visualizações em tempo real, alertas automatizados e relatórios gerenciais personalizáveis.",
      mainFeaturesTitle: "Principais Funcionalidades:",
      features: [
        "Monitoramento de KPIs e metas em tempo real",
        "Dashboard interativo com visualizações dinâmicas",
        "Alertas automatizados por e-mail e notificações",
        "Relatórios gerenciais personalizáveis",
        "Exportação de dados para Excel e PDF"
      ]
    }
  },
  
  // CaseStudyModal (Anfope)
  caseStudy: {
    overview: "Visão Geral",
    context: "Contexto",
    challenge: "O Desafio",
    myRole: "Minha Atuação",
    solution: "Solução",
    featuresTitle: "Principais Funcionalidades",
    technologies: "Tecnologias",
    gallery: "Galeria"
  },
  
  buttons: {
    close: "Fechar"
  }
};