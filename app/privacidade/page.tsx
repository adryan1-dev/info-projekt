import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade, Info Projekt",
  description: "Como a Info Projekt trata dados neste site.",
};

export default function PrivacidadePage() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="legal-bar">
        <div className="rail">
          <Link href="/">Info Projekt</Link>
        </div>
      </header>
      <main id="conteudo" className="legal rail">
        <h1>Privacidade</h1>
        <p>
          Este site apresenta planos de fibra da Info Projekt no Vale do
          Jequitinhonha. Não há cadastro, conta nem formulário aqui.
        </p>
        <h2>O que este site não guarda</h2>
        <p>
          Cidade e plano que você escolhe ficam só no seu navegador, nesta
          visita. Pedido de assinatura, quando houver, segue pelo WhatsApp da
          sede em Almenara. O que você envia no WhatsApp fica no WhatsApp, não
          neste site.
        </p>
        <h2>Serviços de fora</h2>
        <p>
          A área do cliente abre o SGP em sgp.ipw.com.br. Os mapas das lojas
          no site vêm do OpenStreetMap; o link abre o Google Maps. Essas
          páginas têm regras próprias.
        </p>
        <h2>Empresa</h2>
        <p>
          Info Projekt. CNPJ 02.410.966/0001-22. Sede em Almenara, MG. Telefone
          da loja: (33) 3721-1726.
        </p>
        <p>
          <Link href="/#planos">Voltar aos planos</Link>
        </p>
      </main>
    </>
  );
}
