import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Eduardo Alves | Desenvolvedor Frontend",
  icons: { icon: "/logo.png" },
  description:
    "Portfólio de Lucas Eduardo Alves, desenvolvedor frontend com React, Angular, Vue, React Native e Python.",
  openGraph: {
    title: "Lucas Eduardo Alves | Desenvolvedor Frontend",
    description: "Interfaces rápidas, claras e feitas para durar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
