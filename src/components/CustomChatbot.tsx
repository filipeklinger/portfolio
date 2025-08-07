import Chatbot from "react-chatbotify";
// import "react-chatbotify/dist/main.css";

const flow = {
  start: {
    message: "Olá! Como posso ajudar você hoje?",
    options: [
      "Quero saber mais sobre o portfólio",
      "Entrar em contato",
      "Quais tecnologias você usa?",
      "Como funciona o processo de desenvolvimento?",
      "Qual o prazo médio para um projeto?",
      "Como é feito o orçamento?",
      "Você trabalha sozinho ou em equipe?",
      "Quais tipos de projeto você já fez?",
      "Você oferece manutenção ou suporte?",
      "Quais as formas de pagamento?",
      "Como são feitas as reuniões?",
      "Posso ver outros trabalhos seus?",
      "Qual seu diferencial?",
    ],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "quero saber mais sobre o portfólio") return "portfolioInfo";
      if (normalized === "entrar em contato") return "contactInfo";
      if (normalized === "quais tecnologias você usa?") return "tecnologias";
      if (normalized === "como funciona o processo de desenvolvimento?") return "processo";
      if (normalized === "qual o prazo médio para um projeto?") return "prazo";
      if (normalized === "como é feito o orçamento?") return "orcamento";
      if (normalized === "você trabalha sozinho ou em equipe?") return "equipe";
      if (normalized === "quais tipos de projeto você já fez?") return "tiposProjetos";
      if (normalized === "você oferece manutenção ou suporte?") return "suporte";
      if (normalized === "quais as formas de pagamento?") return "pagamento";
      if (normalized === "como são feitas as reuniões?") return "reunioes";
      if (normalized === "posso ver outros trabalhos seus?") return "portfolioOnline";
      if (normalized === "qual seu diferencial?") return "diferencial";
      return "start";
    },
  },
  portfolioInfo: {
    message: "Este portfólio foi criado com React, Vite e Tailwind CSS!",
    options: ["Voltar ao início"],
    path: () => "start",
  },
  contactInfo: {
    message: "Você pode entrar em contato pelo e-mail: seuemail@exemplo.com",
    options: ["Voltar ao início"],
    path: () => "start",
  },
  tecnologias: {
    message: "Trabalho principalmente com React, TypeScript, Node.js, Vite, Tailwind CSS e integrações com APIs.",
    options: ["Voltar ao início", "Quais tipos de projeto você já fez?"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "quais tipos de projeto você já fez?") return "tiposProjetos";
      return "start";
    },
  },
  processo: {
    message: "O processo começa com o entendimento da sua necessidade, seguido de planejamento, prototipação, desenvolvimento, testes e entrega.",
    options: ["Voltar ao início", "Como é feito o orçamento?"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "como é feito o orçamento?") return "orcamento";
      return "start";
    },
  },
  prazo: {
    message: "O prazo médio depende do escopo, mas projetos simples levam de 1 a 3 semanas. Projetos maiores podem levar mais tempo.",
    options: ["Voltar ao início"],
    path: () => "start",
  },
  orcamento: {
    message: "O orçamento é feito com base na complexidade, funcionalidades e prazo do projeto. Sempre envio uma proposta detalhada.",
    options: ["Voltar ao início", "Entrar em contato"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "entrar em contato") return "contactInfo";
      return "start";
    },
  },
  equipe: {
    message: "Atuo como freelancer, mas posso trabalhar em parceria com outros profissionais conforme a demanda do projeto.",
    options: ["Voltar ao início"],
    path: () => "start",
  },
  tiposProjetos: {
    message: "Já desenvolvi portfólios, landing pages, sistemas internos, integrações com APIs, dashboards e e-commerces.",
    options: ["Voltar ao início", "Quais tecnologias você usa?"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "quais tecnologias você usa?") return "tecnologias";
      return "start";
    },
  },
  suporte: {
    message: "Sim! Ofereço manutenção e suporte após a entrega, com planos flexíveis conforme a necessidade do cliente.",
    options: ["Voltar ao início", "Quais as formas de pagamento?"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "quais as formas de pagamento?") return "pagamento";
      return "start";
    },
  },
  pagamento: {
    message: "Aceito pagamentos via Pix, transferência bancária e, para empresas, emissão de nota fiscal.",
    options: ["Voltar ao início", "Como são feitas as reuniões?"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "como são feitas as reuniões?") return "reunioes";
      return "start";
    },
  },
  reunioes: {
    message: "As reuniões podem ser feitas por Google Meet, Zoom ou WhatsApp, conforme sua preferência.",
    options: ["Voltar ao início", "Entrar em contato"],
    path: (params: any) => {
      const input = params.userInput || "";
      const normalized = input.trim().toLowerCase();
      if (normalized === "entrar em contato") return "contactInfo";
      return "start";
    },
  },
  portfolioOnline: {
    message: "Claro! Você pode ver outros trabalhos acessando meu portfólio online: https://seuportfolio.com",
    options: ["Voltar ao início"],
    path: () => "start",
  },
  diferencial: {
    message: "Meu diferencial é a comunicação clara, entrega ágil e foco total na experiência do usuário e resultado do cliente.",
    options: ["Voltar ao início"],
    path: () => "start",
  },
};

const themes = [
  { id: "minimal_midnight", version: "0.1.0" },
];
const settings = {
  general: {
    embedded: true,
  },
  header: {
    title: "Tire suas dúvidas 💬",
  },
};

export default function CustomChatbot() {
  return (
    <Chatbot flow={flow} themes={themes} settings={settings} />
  );
}