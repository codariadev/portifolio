"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
