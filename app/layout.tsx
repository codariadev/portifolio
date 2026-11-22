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

const siteUrl = "https://codariadev.vercel.app";
const title = "Lucas Eduardo Alves | Desenvolvedor Full-Stack";
const description =
  "Portfólio de Lucas Eduardo Alves, desenvolvedor full-stack em Palhoça/SC. Next.js, React, Angular, Vue, React Native, Python e Firebase. Landing pages, apps e sistemas. Aberto a freelas no Brasil e no exterior.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CodariaDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Eduardo Alves, desenvolvedor full-stack — CodariaDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codariadev",
    creator: "@codariadev",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
