import Chatbot from "react-chatbotify";
// import "react-chatbotify/dist/main.css";

// Função simples de similaridade baseada em Levenshtein Distance
function getClosestPath(input: string, options: string[]): string | null {
  input = input.trim().toLowerCase();
  let minDistance = Infinity;
  let closest = null;
  for (const option of options) {
    const distance = levenshtein(input, option.toLowerCase());
    if (distance < minDistance) {
      minDistance = distance;
      closest = option;
    }
  }
  // O threshold abaixo define o quanto de erro de digitação é aceito.
  // Quanto MENOR o valor, mais rigoroso: só aceita respostas quase idênticas.
  // Quanto MAIOR o valor, mais permissivo: aceita respostas com mais erros.
  // Exemplos:
  //   0: só aceita igual (case-insensitive)
  //   1: aceita 1 letra errada, faltando ou trocada
  //   2: aceita até 2 erros (recomendado para português, pois nomes de opções são longos)
  //   3+: aceita ainda mais erros, mas pode causar falsos positivos
  // Ajuste conforme o comportamento desejado:
  const threshold = 2;
  if (minDistance <= threshold) return closest;
  return null;
}

// Levenshtein Distance
function levenshtein(a: string, b: string): number {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

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
    path: async (params: any) => {
      const input = params.userInput || "";
      const options = [
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
      ];
      const pathMap: Record<string, string> = {
        "quero saber mais sobre o portfólio": "portfolioInfo",
        "entrar em contato": "contactInfo",
        "quais tecnologias você usa?": "tecnologias",
        "como funciona o processo de desenvolvimento?": "processo",
        "qual o prazo médio para um projeto?": "prazo",
        "como é feito o orçamento?": "orcamento",
        "você trabalha sozinho ou em equipe?": "equipe",
        "quais tipos de projeto você já fez?": "tiposProjetos",
        "você oferece manutenção ou suporte?": "suporte",
        "quais as formas de pagamento?": "pagamento",
        "como são feitas as reuniões?": "reunioes",
        "posso ver outros trabalhos seus?": "portfolioOnline",
        "qual seu diferencial?": "diferencial",
      };
      const closest = getClosestPath(input, options);
      if (closest) {
        return pathMap[closest.toLowerCase()];
      }
      if (input.length > 0) {
        await params.injectMessage("Desculpe, não entendi sua pergunta. Por favor, escolha uma das opções ou reformule sua dúvida.");
      }
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
    message: "Aceito pagamentos via Pix, transferência bancária, podemos negociar outras forma de pagamento dependendo do escopo do projeto.",
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