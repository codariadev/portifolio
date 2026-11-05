"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, getContent } from "@/data/content";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: ReturnType<typeof getContent>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang === "pt" ? "pt-BR" : "en";
  };

  const t = getContent(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
