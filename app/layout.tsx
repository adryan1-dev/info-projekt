import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
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
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        {/*
          THESIS: A home é uma vitrine de quatro planos no mesmo peso. Recusa o cartão 700 em destaque e o hero de lifestyle.
          OWN-WORLD: Barra noite #12100e, piso calcário #e7e6e2, placas #fafafa, tinta #161412. Vermelho #e10600 só na cidade, no chip pressionado e no Assinar. Manrope 800 nas velocidades. Fita em pílula.
          STORY: Confirma a cidade, compara mega e preço lado a lado, toca Assinar no plano escolhido. O preço é da cidade; as lojas existem.
          FIRST VIEWPORT: Barra noite. Palco claro. H1 Planos em {cidade} com a cidade em vermelho. Fita. Quatro placas iguais (100 / 300 / 700 / 1 Giga), extras comparáveis e o mesmo Assinar em cada uma.
          FORM: Vitrine GFiber×Claro, pedido v2.0. Assinatura: quatro velocidades no mesmo peso; trocar a cidade vinca os quatro preços.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        {children}
      </body>
    </html>
  );
}
