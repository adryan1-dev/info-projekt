import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada, Info Projekt",
  description: "Essa página não existe. Volte aos planos de fibra no Vale.",
};

export default function NotFound() {
  return (
    <main className="legal rail">
      <p>
        <Link href="/">Info Projekt</Link>
      </p>
      <h1>Essa página não existe</h1>
      <p>
        O endereço não bate com nenhum plano, loja ou página da Info. Volte
        para a home e escolha a cidade.
      </p>
      <p>
        <Link className="ask" href="/#planos">
          Ver planos
        </Link>
      </p>
    </main>
  );
}
