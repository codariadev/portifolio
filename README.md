# Portfólio | Lucas Eduardo Alves

Portfólio pessoal de **Lucas Eduardo Alves**, desenvolvedor frontend com React, Angular, Vue, React Native e Python. O site apresenta quem eu sou, minhas habilidades e os projetos que desenvolvi, com links para o código e para o contato direto por WhatsApp.

🔗 **Site:** *(adicione aqui o link do portfólio publicado)*

---

## ✨ O que tem no site

- Apresentação pessoal com foto (ou iniciais, quando não há foto)
- Lista de projetos com descrição, categoria, tecnologias utilizadas e link para o repositório
- Indicação de status de cada projeto (concluído ou em andamento)
- Botão de contato via WhatsApp
- Layout responsivo, com tipografia otimizada e metadados para compartilhamento (Open Graph)

---

## 🧰 Tecnologias

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS puro com variáveis de tema (`app/globals.css`)
- [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) com as fontes **Bricolage Grotesque** (títulos) e **Instrument Sans** (texto)
- [Vercel](https://vercel.com/) (deploy)

---

## 🚀 Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Passo a passo

```bash
git clone https://github.com/codariadev/portifolio.git
cd portifolio
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm start` | Executa a versão de produção (após o `build`) |
| `npm run lint` | Executa a verificação de código do Next.js |

---

## 🎨 Como personalizar

| O que alterar | Onde |
| --- | --- |
| Textos, projetos e links | `data/content.ts` |
| Número do WhatsApp (DDI + DDD + número, só dígitos) | campo `whatsapp` em `data/content.ts` |
| Foto de perfil | `public/assets/profile.jpg` |
| Favicon | `public/logo.png` (referenciado em `app/layout.tsx`) |
| Título, descrição e metadados do site | `metadata` em `app/layout.tsx` |
| Cores e tipografia | variáveis no topo de `app/globals.css` |

### Adicionando um projeto

Cada projeto é um objeto em `data/content.ts`:

```ts
{
  title: "Nome do projeto",
  status: true,               // true = concluído, false = em andamento
  description: "O que o projeto faz, em 1 ou 2 frases.",
  category: "Web",            // ex.: "Web", "APIs"
  stack: ["NextJS", "TypeScript"],
  repo: "https://github.com/usuario/repositorio",
},
```

---

## 📁 Estrutura do projeto

```
portifolio/
├── app/                # Rotas, layout e estilos globais (App Router)
├── components/         # Componentes da interface
├── data/
│   └── content.ts      # Conteúdo do site (textos, projetos, contato)
├── public/
│   └── assets/         # Imagens (foto de perfil, etc.)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## ☁️ Deploy

O jeito mais simples é publicar na Vercel:

1. Envie o repositório para o GitHub.
2. Na [Vercel](https://vercel.com/new), importe o repositório.
3. Clique em **Deploy**. Não há variáveis de ambiente obrigatórias.

---

## 📬 Contato

- GitHub: [@codariadev](https://github.com/codariadev)
