import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ipw.com.br"),
  title: "Info Projekt, fibra no Vale",
  description: "Internet de fibra da Info Projekt no Vale do Jequitinhonha.",
  openGraph: {
    title: "Info Projekt, fibra no Vale",
    description: "Internet de fibra da Info Projekt no Vale do Jequitinhonha.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        {/*
          THESIS: Home ISP de conversão: hero benefit + oferta da cidade, dual CTA, quick-actions e planos speed-first. Recusa CEP inventado e depoimento fake.
          OWN-WORLD: Flat. Preto #000, branco #FFF, vermelho #EE1C25, verde #1B9E5A. Sem degradê. Tipografia Instagram: Montserrat Black nos megas e títulos. Entrada rise-in + hover lift.
          STORY: Confirma a cidade, vê 700 Mega e o preço, toca Assinar e abre WhatsApp com cidade e plano. Lojas e cobertura em lista.
          FIRST VIEWPORT: Utility. Header. Hero split (copy + foto). Oferta 700 Mega. Assinar | Ver cidades. Fita de cidades. Quick-actions sob o hero.
          FORM: DIRECTION ISP Behance adaptado à Info (v3). Assinatura: dual CTA + wa.me; cidade no lugar de CEP; tipografia alinhada a @vemprainfo_.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        {children}
      </body>
    </html>
  );
}
