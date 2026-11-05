export type Language = "pt" | "en";

export const content = {
  pt: {
    profile: {
      welcome: "Olá, meu nome é",
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
    },
    about: [
      "Programo há mais de 4 anos e gosto de transformar ideias em produtos que as pessoas realmente conseguem usar. Comecei pelo web design, com HTML, CSS e JavaScript, e evolui para aplicações completas em React, Next e Angular.",
      "Também desenvolvo apps mobile com React Native, automações e dashboards com Python, e integrações com Firebase. Sou curioso por natureza e estou sempre buscando um jeito mais simples e sólido de resolver um problema.",
    ],
    education: [
      {
        title: "Engenharia de Software",
        institution: "UFBRA",
        pInit: "2026",
        pEnd: "2030",
        progress: 12,
        status: "andamento" as const,
        description:
          "Graduação com ênfase em todo o ciclo de vida do software, da análise de requisitos à entrega. Inclui lógica de programação, estruturas de dados, orientação a objetos, banco de dados, engenharia de requisitos, arquitetura e padrões de projeto, qualidade e testes, e gestão de projetos com metodologias ágeis.",
      },
    ],
    courses: [
      {
        title: "OKR - Objectives and Key Results",
        institution: "FM2S Educação e Consultoria",
        pInit: "2025",
        pEnd: "2025",
        status: "concluido" as const,
        progress: 100,
        description:
          "Framework de gestão ágil que conecta a estratégia da empresa à execução das equipes. Ele funciona através de duas frentes: Objetivos, que definem para onde ir de forma inspiradora, e Resultados-Chave (KRs), que são metas quantitativas para medir o sucesso. O foco é priorizar a entrega de valor e gerar resultados reais, em vez de apenas cumprir tarefas.",
        link: "https://ead.fm2s.com.br/verify/46b5dea324d631f46252666770717758cdf674ed",
      },
    ],
    projects: [
      {
        title: "Codaria SaaS — Plataforma de Gestão para Barbearias e Salões",
        status: true,
        description:
          "Plataforma SaaS multi-tenant desenvolvida para centralizar a gestão de barbearias e salões de beleza, com módulos de agendamento, clientes, profissionais, serviços, estoque, financeiro, comissões e relatórios. Arquitetura com Firebase independente por estabelecimento, permitindo isolamento dos dados e gerenciamento centralizado dos tenants.",
        category: "Web" as const,
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Firebase",
          "Firebase Authentication",
          "Cloud Firestore",
          "Firebase Admin SDK",
          "Firebase Storage",
          "Tailwind CSS",
          "Vitest",
          "ESLint",
        ],
        repo: "https://github.com/codariadev/codariasaas",
        version: "v1.0.0",
      },
      {
        title: "Producer / Consumer com Node.js + RabbitMQ",
        status: true,
        description: "Dois microsserviços Node.js que se comunicam de forma assíncrona por uma fila RabbitMQ e testes unitários.",
        category: "APIs" as const,
        stack: ["Node.js", "RabbitMQ", "Docker"],
        repo: "https://github.com/codariadev/rabbitmq",
      },
      {
        title: "Debt Management API",
        status: true,
        description:
          "API RESTful profissional para gerenciamento e controle de dívidas, construída com Node.js, TypeScript, Express, Prisma ORM e PostgreSQL, utilizando Docker para containerização.",
        category: "APIs" as const,
        stack: ["NodeJS", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "Zod", "Docker", "Swagger/OpenAPI"],
        repo: "https://github.com/codariadev/debt-api",
      },
      {
        title: "SincroAlign CRM Inteligente",
        status: false,
        description:
          "O SincroAlign é desenvolvido por CodariaDev e colaboradores com um objetivo principal: aprender na prática. Aqui o processo importa tanto quanto o resultado, então erros, refatorações e experimentos fazem parte da proposta.",
        category: "Web" as const,
        stack: ["NextJS", "HTML", "CSS"],
        repo: "https://github.com/codariadev/projeto-estudo-main",
      },
      {
        title: "LavaFlow",
        status: true,
        description:
          "Sistema web multiempresa para gestão e agendamento de lava-jatos. Conta com painéis por perfil (cliente, lavador, administrador e master), login com e-mail ou Google, notificações push quando a lavagem é concluída e arquivamento diário automático dos serviços em um histórico.",
        category: "Web" as const,
        stack: [
          "NextJS",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Firebase Auth",
          "Firestore",
          "Firebase Cloud Messaging",
          "Firebase Admin",
          "Vercel",
        ],
        repo: "https://github.com/codariadev/lavaflow-app",
      },
      {
        title: "Dashboard de Vendas",
        status: true,
        description:
          "Dashboard interativo de vendas a partir de planilhas Excel. Calcula o faturamento automaticamente, exibe indicadores como faturamento total e ticket médio, gráficos por produto e por dia, filtros por período e produto, e permite exportar os dados filtrados em CSV.",
        category: "Web" as const,
        stack: ["Python", "Streamlit", "Pandas", "Plotly", "openpyxl"],
        repo: "https://github.com/codariadev/lavaflow-app",
        demo: "https://dashboardvendas-nwfekbrxlabmuhe2ntdwrw.streamlit.app/",
      },
      {
        title: "SecurusAuth",
        status: false,
        description:
          "API RESTful de autenticação e autorização desenvolvida em FastAPI com Python 3.14. Conta com hashing de passwords seguro usando bcrypt, emissão e validação de tokens JWT (Bearer), validação de schemas com Pydantic e documentação interativa com Swagger UI.",
        category: "APIs" as const,
        stack: ["Python", "FastAPI", "Pydantic", "JWT", "Uvicorn", "Bcrypt"],
        repo: "https://github.com/codariadev/securusauth",
      },
    ],
    challenges: [
      {
        title: "Weather API",
        description: "Site simples que consome uma API de previsão do tempo.",
        stack: ["JavaScript", "API REST", "Express 5", "CORS", "Vite", "Vercel"],
        repo: "https://github.com/codariadev/desafio-st1",
      },
    ],
    skillGroups: [
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
    ],
    ui: {
      nav: [
        ["Sobre", "#sobre"],
        ["Formação", "#formacao"],
        ["Habilidades", "#habilidades"],
        ["Projetos", "#projetos"],
        ["Desafios", "#desafios"],
      ],
      available: "Disponível para novos projetos",
      talkToMe: "Falar comigo",
      seeProjects: "Ver projetos",
      aboutTitle: "Sobre mim",
      educationTitle: "Formação",
      educationNote: "Cursos, treinamentos e formações acadêmicas.",
      graduation: "Graduação",
      coursesTitle: "Cursos e certificados",
      skillsTitle: "Habilidades",
      projectsTitle: "Projetos",
      challengesTitle: "Desafios",
      challengesNote: "Exercícios práticos para treinar e testar novas ideias.",
      contactTitle: "Vamos construir algo juntos?",
      contactText: "Conte sobre o seu projeto e eu respondo o quanto antes.",
      whatsappCta: "Chamar no WhatsApp",
      whatsappMessage: "Olá, Lucas! Vi seu portfólio e gostaria de conversar.",
      footer: "Todos os direitos reservados.",
      skip: "Ir para o conteúdo",
      filters: ["Todos", "Web", "APIs"],
      finished: "Finalizado",
      inProgress: "Em andamento",
      seeDemo: "Ver demo",
      seeCode: "Ver código",
      seeCertificate: "Ver certificado",
      ongoing: "Em andamento",
      completed: "Concluído",
      facts: [
        { value: `+${new Date().getFullYear() - 2022}`, label: "de experiência em programação" },
        { value: "7", label: "projetos publicados" },
        { value: "3", label: "frameworks frontend no dia a dia" },
      ],
    },
  },
  en: {
    profile: {
      welcome: "Hello, my name is",
      name: "Lucas Eduardo Alves",
      role: "Frontend | Backend Developer",
      headline: "Fast systems, robust APIs, and architectures built to last.",
      intro:
        "I develop web applications focused on performance, usability, and design. I work on building interfaces with Next, Angular, and Vue, and structuring data and APIs with Python and Firebase.",
      location: "Santa Catarina, Brazil",
      whatsapp: "5548920048026",
      linkedin: "https://www.linkedin.com/in/lucasealves/",
      github: "https://github.com/codariadev",
      photo: "/assets/profile.jpg",
    },
    about: [
      "I've been programming for over 4 years and enjoy turning ideas into products that people can actually use. I started with web design using HTML, CSS, and JavaScript, and evolved into full applications with React, Next, and Angular.",
      "I also develop mobile apps with React Native, automations and dashboards with Python, and integrations with Firebase. I'm naturally curious and always looking for a simpler and more solid way to solve a problem.",
    ],
    education: [
      {
        title: "Software Engineering",
        institution: "UFBRA",
        pInit: "2026",
        pEnd: "2030",
        progress: 12,
        status: "andamento" as const,
        description:
          "Bachelor's degree with emphasis on the entire software lifecycle, from requirements analysis to delivery. Includes programming logic, data structures, object-oriented programming, databases, requirements engineering, architecture and design patterns, quality and testing, and project management with agile methodologies.",
      },
    ],
    courses: [
      {
        title: "OKR - Objectives and Key Results",
        institution: "FM2S Education and Consulting",
        pInit: "2025",
        pEnd: "2025",
        status: "concluido" as const,
        progress: 100,
        description:
          "Agile management framework that connects the company's strategy to team execution. It works through two fronts: Objectives, which define where to go in an inspiring way, and Key Results (KRs), which are quantitative goals to measure success. The focus is on prioritizing value delivery and generating real results, rather than just completing tasks.",
        link: "https://ead.fm2s.com.br/verify/46b5dea324d631f46252666770717758cdf674ed",
      },
    ],
    projects: [
      {
        title: "Codaria SaaS — Management Platform for Barbershops and Salons",
        status: true,
        description:
          "Multi-tenant SaaS platform developed to centralize the management of barbershops and beauty salons, with modules for scheduling, clients, professionals, services, inventory, finance, commissions, and reports. Architecture with independent Firebase per establishment, enabling data isolation and centralized tenant management.",
        category: "Web" as const,
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Firebase",
          "Firebase Authentication",
          "Cloud Firestore",
          "Firebase Admin SDK",
          "Firebase Storage",
          "Tailwind CSS",
          "Vitest",
          "ESLint",
        ],
        repo: "https://github.com/codariadev/codariasaas",
        version: "v1.0.0",
      },
      {
        title: "Producer / Consumer with Node.js + RabbitMQ",
        status: true,
        description: "Two Node.js microservices that communicate asynchronously via a RabbitMQ queue, with unit tests.",
        category: "APIs" as const,
        stack: ["Node.js", "RabbitMQ", "Docker"],
        repo: "https://github.com/codariadev/rabbitmq",
      },
      {
        title: "Debt Management API",
        status: true,
        description:
          "Professional RESTful API for debt management and control, built with Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL, using Docker for containerization.",
        category: "APIs" as const,
        stack: ["NodeJS", "TypeScript", "Express", "Prisma ORM", "PostgreSQL", "Zod", "Docker", "Swagger/OpenAPI"],
        repo: "https://github.com/codariadev/debt-api",
      },
      {
        title: "SincroAlign Intelligent CRM",
        status: false,
        description:
          "SincroAlign is developed by CodariaDev and collaborators with one main goal: learning in practice. Here the process matters as much as the result, so errors, refactorings, and experiments are part of the proposal.",
        category: "Web" as const,
        stack: ["NextJS", "HTML", "CSS"],
        repo: "https://github.com/codariadev/projeto-estudo-main",
      },
      {
        title: "LavaFlow",
        status: true,
        description:
          "Multi-company web system for car wash management and scheduling. Features profile-based panels (client, washer, admin, and master), login with email or Google, push notifications when washing is completed, and automatic daily archiving of services into a history.",
        category: "Web" as const,
        stack: [
          "NextJS",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Firebase Auth",
          "Firestore",
          "Firebase Cloud Messaging",
          "Firebase Admin",
          "Vercel",
        ],
        repo: "https://github.com/codariadev/lavaflow-app",
      },
      {
        title: "Sales Dashboard",
        status: true,
        description:
          "Interactive sales dashboard from Excel spreadsheets. Automatically calculates revenue, displays indicators such as total revenue and average ticket, charts by product and by day, filters by period and product, and allows exporting filtered data to CSV.",
        category: "Web" as const,
        stack: ["Python", "Streamlit", "Pandas", "Plotly", "openpyxl"],
        repo: "https://github.com/codariadev/lavaflow-app",
        demo: "https://dashboardvendas-nwfekbrxlabmuhe2ntdwrw.streamlit.app/",
      },
      {
        title: "SecurusAuth",
        status: false,
        description:
          "RESTful authentication and authorization API developed in FastAPI with Python 3.14. Features secure password hashing using bcrypt, JWT token issuance and validation (Bearer), schema validation with Pydantic, and interactive documentation with Swagger UI.",
        category: "APIs" as const,
        stack: ["Python", "FastAPI", "Pydantic", "JWT", "Uvicorn", "Bcrypt"],
        repo: "https://github.com/codariadev/securusauth",
      },
    ],
    challenges: [
      {
        title: "Weather API",
        description: "Simple site that consumes a weather forecast API.",
        stack: ["JavaScript", "REST API", "Express 5", "CORS", "Vite", "Vercel"],
        repo: "https://github.com/codariadev/desafio-st1",
      },
    ],
    skillGroups: [
      {
        title: "Frontend",
        text: "Responsive interfaces, reusable components, and attention to performance.",
        items: ["React", "Next.js", "Angular", "Vue", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Mobile",
        text: "Cross-platform apps with a single codebase.",
        items: ["React Native", "Expo"],
      },
      {
        title: "Data and Backend",
        text: "Automation, data analysis, and integrations with cloud services.",
        items: ["Python", "Firebase", "Streamlit", "Plotly"],
      },
      {
        title: "Workflow",
        text: "Organized versioning and collaborative deliveries.",
        items: ["Git", "Git Flow", "Vercel"],
      },
    ],
    ui: {
      nav: [
        ["About", "#sobre"],
        ["Education", "#formacao"],
        ["Skills", "#habilidades"],
        ["Projects", "#projetos"],
        ["Challenges", "#desafios"],
      ],
      available: "Available for new projects",
      talkToMe: "Talk to me",
      seeProjects: "See projects",
      aboutTitle: "About me",
      educationTitle: "Education",
      educationNote: "Courses, trainings, and academic degrees.",
      graduation: "Degree",
      coursesTitle: "Courses and certificates",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      challengesTitle: "Challenges",
      challengesNote: "Practical exercises to train and test new ideas.",
      contactTitle: "Let's build something together?",
      contactText: "Tell me about your project and I'll reply as soon as possible.",
      whatsappCta: "Message on WhatsApp",
      whatsappMessage: "Hi Lucas! I saw your portfolio and would like to chat.",
      footer: "All rights reserved.",
      skip: "Skip to content",
      filters: ["All", "Web", "APIs"],
      finished: "Finished",
      inProgress: "In progress",
      seeDemo: "View demo",
      seeCode: "View code",
      seeCertificate: "View certificate",
      ongoing: "In progress",
      completed: "Completed",
      facts: [
        { value: `+${new Date().getFullYear() - 2022}`, label: "years of programming experience" },
        { value: "7", label: "published projects" },
        { value: "3", label: "frontend frameworks used daily" },
      ],
    },
  },
};

export type Project = {
  title: string;
  description: string;
  category: "Web" | "APIs";
  stack: string[];
  demo?: string;
  repo: string;
  status?: boolean;
  version?: string;
};

export type StudyItem = {
  title: string;
  institution: string;
  pInit: string;
  pEnd: string;
  status: "andamento" | "concluido";
  progress?: number;
  link?: string;
  description?: string;
};

export function getContent(lang: Language) {
  return content[lang];
}
