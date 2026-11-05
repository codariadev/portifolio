"use client";

import Avatar from "@/components/Avatar";
import Projects from "@/components/Projects";
import Study from "@/components/Study";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function HomeContent() {
  const { t, lang } = useLanguage();
  const { profile, about, education, courses, projects, challenges, skillGroups, ui } = t;

  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(ui.whatsappMessage)}`;

  return (
    <>
      <a className="skip" href="#conteudo">{ui.skip}</a>
      <header className="header">
        <div className="wrap header-in">
          <a href="#topo" className="brand">Codaria<span>Dev</span></a>
          <nav aria-label="Principal">
            <ul>
              {ui.nav.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <LanguageToggle />
            <a className="btn btn-sm" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {ui.talkToMe}
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section id="topo" className="hero wrap">
          <div className="hero-text">
            <p className="status"><i aria-hidden="true" />{ui.available}</p>
            <h1>{profile.headline}</h1>
            <p className="lead">
              {profile.welcome} {profile.name}, {profile.role.toLowerCase()}. {profile.intro}
            </p>
            <div className="cta">
              <a className="btn" href="#projetos">{ui.seeProjects}</a>
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
          <h2>{ui.aboutTitle}</h2>
          <div className="about">
            <div className="prose">
              {about.map((text) => <p key={text}>{text}</p>)}
            </div>
            <dl className="facts">
              {ui.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="formacao" className="section wrap">
          <h2>{ui.educationTitle}</h2>
          <p className="section-note">{ui.educationNote}</p>
          <div className="study-groups">
            <Study heading={ui.graduation} items={education} />
            <Study heading={ui.coursesTitle} items={courses} />
          </div>
        </section>

        <section id="habilidades" className="section wrap">
          <h2>{ui.skillsTitle}</h2>
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
          <h2>{ui.projectsTitle}</h2>
          <Projects projects={projects} key={lang}/>
        </section>

        <section id="desafios" className="section wrap">
          <h2>{ui.challengesTitle}</h2>
          <p className="section-note">{ui.challengesNote}</p>
          <ul className="projects">
            {challenges.map((c) => (
              <li key={c.title} className="project">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <ul className="tags">{c.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="project-links">
                  <a href={c.repo} target="_blank" rel="noopener noreferrer">{ui.seeCode}</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contato" className="contact wrap">
          <h2>{ui.contactTitle}</h2>
          <p>{ui.contactText}</p>
          <a className="btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {ui.whatsappCta}
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <p>© {new Date().getFullYear()} Codaria Desenvolvimento Web. {ui.footer}</p>
          <p>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </footer>
    </>
  );
}
