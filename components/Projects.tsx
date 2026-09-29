"use client";
import { useState } from "react";
import type { Project } from "@/data/content";

const filters = ["Todos", "Web", "APIs"] as const;

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const list = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar projetos">
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
                  {p.status ? "Finalizado" : "Em andamento"}
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
                  Ver demo
                </a>
              )}
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                Ver código
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
