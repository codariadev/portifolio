export const profile = {
  name: "Lucas Eduardo Alves",
  role: "Desenvolvedor Frontend | Backend",
  headline: "Sistemas rápidos, APIs robustas e arquiteturas feitas para durar.",
  intro:
    "Desenvolvo aplicações web com foco em performance, usabilidade e design. Trabalho na construção de interfaces com Next, Angular e Vue, e na estruturação de dados e APIs com Python e Firebase.",
  location: "Santa Catarina, Brasil",
  whatsapp: "5548920048026",
  linkedin: "https://www.linkedin.com/in/lucasealves/",
  github: "https://github.com/codariadev",
  photo: "/assets/profile.jpg",
};

export const about = [
  "Programo há mais de 4 anos e gosto de transformar ideias em produtos que as pessoas realmente conseguem usar. Comecei pelo web design, com HTML, CSS e JavaScript, e evoluí para aplicações completas em React, Next e Angular.",
  "Também desenvolvo apps mobile com React Native, automações e dashboards com Python, e integrações com Firebase. Sou curioso por natureza e estou sempre buscando um jeito mais simples e sólido de resolver um problema.",
];

export const projects: Project[] = [
  {
    title: "Debt Management API",
    status: true,
    description:
      "API RESTful profissional para gerenciamento e controle de dívidas, construída com Node.js, TypeScript, Express, Prisma ORM e PostgreSQL, utilizando Docker para containerização.",
    category: "APIs",
    stack: ["NodeJS", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "Zod", "Docker", "Swagger/OpenAPI"],
    repo: "https://github.com/codariadev/debt-api",
  },
  {
    title: "SincroAlign CRM Inteligente",
    status: false,
    description:
      "O SincroAlign é desenvolvido por CodariaDev e colaboradores com um objetivo principal: aprender na prática. Aqui o processo importa tanto quanto o resultado, então erros, refatorações e experimentos fazem parte da proposta.",
    category: "Web",
    stack: ["NextJS", "HTML", "CSS"],
    repo: "https://github.com/codariadev/projeto-estudo-main",
  },
  {
    title: "LavaFlow",
    status: true,
    description:
      "Sistema web multiempresa para gestão e agendamento de lava-jatos. Conta com painéis por perfil (cliente, lavador, administrador e master), login com e-mail ou Google, notificações push quando a lavagem é concluída e arquivamento diário automático dos serviços em um histórico.",
    category: "Web",
    stack: ["NextJS", "React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Firebase Cloud Messaging", "Firebase Admin", "Vercel"],
    repo: "https://github.com/codariadev/lavaflow-app",
  },
  {
    title: "Dashboard de Vendas",
    status: true,
    description:
      "Dashboard interativo de vendas a partir de planilhas Excel. Calcula o faturamento automaticamente, exibe indicadores como faturamento total e ticket médio, gráficos por produto e por dia, filtros por período e produto, e permite exportar os dados filtrados em CSV.",
    category: "Web",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "openpyxl"],
    repo: "https://github.com/codariadev/lavaflow-app",
    demo: "https://dashboardvendas-nwfekbrxlabmuhe2ntdwrw.streamlit.app/"
  },
  
];

export const facts = [
  { value: "+4 anos", label: "de experiência em programação" },
  { value: `${projects.length}`, label: "projetos publicados" },
  { value: "3", label: "frameworks frontend no dia a dia" },
];


export const skillGroups = [
  {
    title: "Frontend",
    text: "Interfaces responsivas, componentes reutilizáveis e atenção à performance.",
    items: ["React", "Next.js", "Angular", "Vue", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mobile",
    text: "Apps multiplataforma com um único código base.",
    items: ["React Native", "Expo"],
  },
  {
    title: "Dados e backend",
    text: "Automação, análise de dados e integrações com serviços na nuvem.",
    items: ["Python", "Firebase", "Streamlit", "Plotly"],
  },
  {
    title: "Fluxo de trabalho",
    text: "Versionamento organizado e entregas colaborativas.",
    items: ["Git", "Git Flow", "Vercel"],
  },
];

export type Project = {
  title: string;
  description: string;
  category: "Web" | "APIs" ;
  stack: string[];
  demo?: string;
  repo: string;
  status?: boolean;
};



export const challenges = [
  {
    title: "Weather API",
    description: "Site simples que consome uma API de previsão do tempo.",
    stack: ["JavaScript", "API REST", "Express 5", "CORS", "Vite", "Vercel"],
    repo: "https://github.com/codariadev/desafio-st1",
  },
];


