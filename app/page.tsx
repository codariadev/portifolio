import Avatar from "@/components/Avatar";
import Projects from "@/components/Projects";
import Study from "@/components/Study";
import { profile, about, facts, skillGroups, projects, challenges, courses, education } from "@/data/content";

const nav = [
  ["Sobre", "#sobre"],
  ["Habilidades", "#habilidades"],
  ["Projetos", "#projetos"],
  ["Desafios", "#desafios"],
  ["Formação", "#formacao"],
];

export default function Home() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Olá, Lucas! Vi seu portfólio e gostaria de conversar."
  )}`;

  return (
    <>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      <header className="header">
        <div className="wrap header-in">
          <a href="#topo" className="brand">Codaria<span>Dev</span></a>
          <nav aria-label="Principal">
            <ul>
              {nav.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-sm" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar comigo
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section id="topo" className="hero wrap">
          <div className="hero-text">
            <p className="status"><i aria-hidden="true" />Disponível para novos projetos</p>
            <h1>{profile.headline}</h1>
            <p className="lead">
              Sou {profile.name}, {profile.role.toLowerCase()}. {profile.intro}
            </p>
            <div className="cta">
              <a className="btn" href="#projetos">Ver projetos</a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <Avatar src={profile.photo} name={profile.name} />
        </section>

        <section id="sobre" className="section wrap">
          <h2>Sobre mim</h2>
          <div className="about">
            <div className="prose">
              {about.map((t) => <p key={t}>{t}</p>)}
            </div>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="formacao" className="section wrap">
          <h2>Formação</h2>
          <p className="section-note">Cursos, treinamentos e formações acadêmicas.</p>
          <div className="study-groups">
              <Study heading="Graduação" items={education} />
              <Study heading="Cursos e certificados" items={courses} />
          </div>
        </section>

        <section id="habilidades" className="section wrap">
          <h2>Habilidades</h2>
          <div className="skills">
            {skillGroups.map((g) => (
              <article key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <ul className="tags">
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="section wrap">
          <h2>Projetos</h2>
          <Projects projects={projects} />
        </section>

        <section id="desafios" className="section wrap">
          <h2>Desafios</h2>
          <p className="section-note">Exercícios práticos para treinar e testar novas ideias.</p>
          <ul className="projects">
            {challenges.map((c) => (
              <li key={c.title} className="project">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <ul className="tags">{c.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="project-links">
                  <a href={c.repo} target="_blank" rel="noopener noreferrer">Ver código</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contato" className="contact wrap">
          <h2>Vamos construir algo juntos?</h2>
          <p>Conte sobre o seu projeto e eu respondo o quanto antes.</p>
          <a className="btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <p>© {new Date().getFullYear()} Codaria Desenvolvimento Web. Todos os direitos reservados.</p>
          <p>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </footer>
    </>
  );
}
