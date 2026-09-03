"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { FiberOverlay } from "@/components/FiberOverlay";
import {
  BUNDLE_LABELS,
  CITIES,
  DEFAULT_CITY,
  PLANS,
  SGP_URL,
  STORES,
  TV_LABEL,
  formatPrice,
  type City,
  type Plan,
} from "@/lib/catalog";
import { HERO_MEDIA, HERO_PRIMARY } from "@/lib/hero-media";

type Receipt = {
  city: City;
  plan: Plan;
  forBusiness: boolean;
};

function requestCopy(receipt: Receipt) {
  const who = receipt.forBusiness ? "empresarial do plano" : "do plano";
  return `Pedido ${who} ${receipt.plan.speedLabel} em ${receipt.city} registrado. Na produção isso segue para o WhatsApp da sede.`;
}

export function Home() {
  const [city, setCity] = useState<City>(DEFAULT_CITY);
  const [planIndex, setPlanIndex] = useState(0);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const chipsId = useId();
  const plan = PLANS[planIndex];

  useEffect(() => {
    if (!receipt) return;
    closeRef.current?.focus();
  }, [receipt]);

  function onRequest(nextCity: City, nextPlan: Plan, forBusiness = false) {
    setReceipt({ city: nextCity, plan: nextPlan, forBusiness });
  }

  return (
    <>
      <a className="skip" href="#planos">
        Ir para os planos
      </a>
      <div className="mast">
        <header className="topbar">
          <a className="brand" href="#topo">
            <Image
              src="/brand/logo-white.png"
              alt=""
              width={132}
              height={28}
              style={{ width: "auto", height: 28 }}
              priority
            />
            <span className="brand-name">Info Projekt</span>
          </a>
          <nav className="nav" aria-label="Seções">
            <a href="#planos">Planos</a>
            <a href="#empresa">Empresa</a>
            <a href="#lojas">Lojas</a>
          </nav>
          <div className="top-actions">
            <a className="ghost" href={SGP_URL} rel="noopener noreferrer">
              Área do cliente
            </a>
            <a className="ask" href="#planos">
              Pedir plano
            </a>
          </div>
        </header>

        <section className="hero" id="topo" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image
              src={HERO_PRIMARY.src}
              alt={HERO_PRIMARY.alt}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover", objectPosition: "50% 28%" }}
            />
          </div>
          <div className="hero-shade" />
          <FiberOverlay />
          <div className="hero-copy">
            <h1 id="hero-title">{plan.speedLabel}</h1>
            <p className="place">em {city}</p>
            <p className="sub">
              Fibra no Vale do Jequitinhonha. Você escolhe a cidade e o plano.
              O pedido fecha aqui.
            </p>
            <button
              className="ask"
              type="button"
              onClick={() => onRequest(city, plan)}
            >
              Pedir {plan.speedLabel} em {city}
            </button>
          </div>
          <p className="hero-credit">
            Foto{" "}
            <a href={HERO_PRIMARY.creditUrl} rel="noopener noreferrer">
              {HERO_PRIMARY.credit}
            </a>
            , Unsplash
          </p>
        </section>
      </div>

      <main className="page">
        <section className="band" id="cobertura" aria-labelledby="city-heading">
          <h2 id="city-heading">Onde a Info chega</h2>
          <p className="lead">
            Quatorze cidades. O preço nesta tela é o de Almenara. Trocar o
            município muda o nome no pedido.
          </p>
          <div
            className="chips"
            role="group"
            aria-labelledby="city-heading"
            id={chipsId}
          >
            {CITIES.map((name) => (
              <button
                key={name}
                className="chip"
                type="button"
                aria-pressed={name === city}
                onClick={() => setCity(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </section>

        <section className="band" id="planos" aria-labelledby="plans-heading">
          <h2 id="plans-heading">Planos em {city}</h2>
          <p className="lead">
            TV entra em todos. {BUNDLE_LABELS.join(", ")} só nos dois mais
            altos.
          </p>
          <div className="plans">
            {PLANS.map((item, index) => {
              const selected = index === planIndex;
              const tags = item.includesBundles
                ? [TV_LABEL, ...BUNDLE_LABELS]
                : [TV_LABEL];
              return (
                <article
                  key={item.speedLabel}
                  className={selected ? "plan is-on" : "plan"}
                >
                  <button
                    className="plan-pick"
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setPlanIndex(index)}
                  >
                    <span className="speed">{item.speedLabel}</span>
                    <span className="price">
                      {formatPrice(item.priceMonthly)}/mês
                    </span>
                    <div className="tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </button>
                  <button
                    className="ask"
                    type="button"
                    onClick={() => onRequest(city, item)}
                  >
                    Pedir este plano
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="biz" id="empresa">
          <div className="biz-media">
            <Image
              src={HERO_MEDIA.notebook.src}
              alt={HERO_MEDIA.notebook.alt}
              fill
              sizes="(max-width: 759px) 100vw, 42vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div className="biz-copy">
            <h2>Para sua empresa</h2>
            <p>
              Ponto de venda, escritório, caixa. O pedido comercial usa a
              cidade que você marcou acima.
            </p>
            <button
              className="ask"
              type="button"
              onClick={() => onRequest(city, plan, true)}
            >
              Pedir para empresa em {city}
            </button>
          </div>
        </aside>

        <section className="band" id="lojas" aria-labelledby="stores-heading">
          <h2 id="stores-heading">Três lojas no Vale</h2>
          <p className="lead">
            Telefone na vitrine, sem ligação por este site. Pedido de plano
            continua no fluxo de cima.
          </p>
          <div className="stores">
            {STORES.map((store) => (
              <article className="store" key={store.city}>
                <h3>{store.city}</h3>
                <p className="phone">{store.phone}</p>
                <p>{store.address}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot">
        <strong>Info Projekt</strong>
        <p>
          Provedor do Vale do Jequitinhonha. Sede em Almenara. CNPJ
          02.410.966/0001-22.
        </p>
        <p>
          Área do cliente no{" "}
          <a href={SGP_URL} rel="noopener noreferrer">
            SGP
          </a>
          .
        </p>
      </footer>

      {receipt ? (
        <div
          className="success"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ok-title"
          aria-describedby="ok-copy"
        >
          <div className="success-card">
            <span className="stamp">Pedido registrado</span>
            <h2 id="ok-title">
              {receipt.plan.speedLabel} em {receipt.city}
            </h2>
            <p id="ok-copy">{requestCopy(receipt)}</p>
            <button
              ref={closeRef}
              className="ask"
              type="button"
              onClick={() => setReceipt(null)}
            >
              Pedir outro plano
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
