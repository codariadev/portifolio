"use client";
import { useState, useEffect } from "react";
import type { Project } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects({ projects }: { projects: Project[] }) {
  const { t, lang } = useLanguage();
  const filters = t.ui.filters;
  const allFilter = filters[0];

  const [active, setActive] = useState(allFilter);

  // Reset filter to "All" whenever language changes
  useEffect(() => {
    setActive(allFilter);
  }, [lang, allFilter]);

  const list = active === allFilter ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label={lang === "pt" ? "Filtrar projetos" : "Filter projects"}>
        {filters.map((f) => (
          <button key={f} aria-pressed={active === f} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>
      <ul className="projects">
        {list.map((p) => (
          <li key={p.title} className="project">
            <div className="project-head">
              <h3>{p.title}</h3>
              {p.status !== undefined && (
                <span className={`badge ${p.status ? "badge-success" : "badge-warning"}`}>
                  {p.status ? t.ui.finished : t.ui.inProgress}
                </span>
              )}
            </div>
            <p>{p.description}</p>
            <ul className="tags">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="project-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  {t.ui.seeDemo}
                </a>
              )}
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                {t.ui.seeCode}
              </a>
              {p.version && <span className="version">{p.version}</span>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}