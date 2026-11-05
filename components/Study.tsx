"use client";
import { StudyItem } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Study({ heading, items }: { heading: string; items: StudyItem[] }) {
  const { t } = useLanguage();
  if (items.length === 0) return null;
  return (
    <div className="study">
      <h3>{heading}</h3>
      <ol>
        {items.map((item) => {
          const ongoing = item.status === "andamento";
          return (
            <li key={item.title} className="study-item">
              <div className="study-top">
                <div>
                  <h4>{item.title}</h4>
                  <p className="study-inst">{item.institution}</p>
                </div>
                <span className={ongoing ? "badge" : "badge badge-done"}>
                  {ongoing ? t.ui.ongoing : t.ui.completed}
                </span>
              </div>
              <div className="study-period-container">
                <p className="study-period">{item.pInit}</p>
                {typeof item.progress === "number" && (
                  <p className={item.progress >= 100 ? "percentage percentage-done" : "percentage"}>{item.progress}%</p>
                )}
                <p className="study-period">{item.pEnd}</p>
              </div>
              {typeof item.progress === "number" && (
                <div
                  className={item.progress >= 100 ? "progress progress-done" : "progress"}
                  role="progressbar"
                  aria-label={`Progress in ${item.title}`}
                  aria-valuenow={item.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span style={{ width: `${item.progress}%` }} />
                </div>
              )}
              {item.description && <p className="study-desc">{item.description}</p>}
              {item.link && (
                <a className="study-link" href={item.link} target="_blank" rel="noopener noreferrer">
                  {t.ui.seeCertificate}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
