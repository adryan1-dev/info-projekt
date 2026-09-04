"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { PlanApps } from "@/components/PlanApps";
import {
  CITIES,
  DEFAULT_CITY,
  INSTAGRAM_URL,
  PLANS,
  SGP_URL,
  SPEED_TEST_URL,
  STORES,
  WHATSAPP_DISPLAY,
  cityChipList,
  featuredPlan,
  formatPrice,
  isFeaturedPlan,
  storeMapSrc,
  storeMapsHref,
  storePhoneHref,
  whatsappHref,
  type City,
  type Store,
} from "@/lib/catalog";
import { HERO_MEDIA } from "@/lib/hero-media";

const NAV_SECTIONS = ["planos", "cobertura", "empresa", "lojas"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

export function Home() {
  const [city, setCity] = useState<City>(DEFAULT_CITY);
  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>(STORES[0]);
  const [activeSection, setActiveSection] = useState<NavSection>("planos");
  const storeListRef = useRef<HTMLDivElement>(null);
  const chipsId = useId();
  const offer = featuredPlan();
  const visibleCities = cityChipList(city, showAllCities);
  const heroWa = whatsappHref(city, offer);
  const floatWa = whatsappHref(city);

  useEffect(() => {
    const observed = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (
          id === "planos" ||
          id === "cobertura" ||
          id === "empresa" ||
          id === "lojas"
        ) {
          setActiveSection(id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    observed.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress?.style.setProperty("--scroll-p", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const reveal = (node: Element) => {
      node.classList.add("is-revealed");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: [0, 0.08, 0.2] },
    );

    const viewportBottom = window.innerHeight * 0.94;
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < viewportBottom && rect.bottom > 40) {
        reveal(node);
        return;
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  function onSelectStore(store: Store) {
    setSelectedStore(store);
    setCity(store.city);
  }

  function onPickCity(name: City) {
    setCity(name);
  }

  function onStoreListKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const index = STORES.findIndex((store) => store.city === selectedStore.city);
    const offset = event.key === "ArrowDown" ? 1 : -1;
    const next = STORES[(index + offset + STORES.length) % STORES.length];
    onSelectStore(next);
    const buttons = storeListRef.current?.querySelectorAll<HTMLButtonElement>(
      "[role='radio']",
    );
    buttons?.[STORES.indexOf(next)]?.focus();
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip" href="#planos">
        Ir para os planos
      </a>

      <div className="utility">
        <div className="rail utility-inner">
          <a className="utility-link" href={storePhoneHref(WHATSAPP_DISPLAY)}>
            {WHATSAPP_DISPLAY}
          </a>
          <a
            className="utility-link"
            href={SGP_URL}
            rel="noopener noreferrer"
          >
            Área do cliente
          </a>
          <a
            className="utility-link"
            href={INSTAGRAM_URL}
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <header className="topbar">
        <div className="rail topbar-inner">
          <a className="brand" href="#planos" aria-label="Info Projekt">
            <Image
              src="/brand/logo-white.png"
              alt="Info Projekt"
              width={320}
              height={151}
              priority
            />
          </a>
          <nav className="nav" aria-label="Menu">
            <a
              href="#planos"
              aria-current={activeSection === "planos" ? "true" : undefined}
            >
              Planos
            </a>
            <a
              href="#cobertura"
              aria-current={activeSection === "cobertura" ? "true" : undefined}
            >
              Cobertura
            </a>
            <a
              href="#empresa"
              aria-current={activeSection === "empresa" ? "true" : undefined}
            >
              Empresa
            </a>
            <a
              href="#lojas"
              aria-current={activeSection === "lojas" ? "true" : undefined}
            >
              Lojas
            </a>
          </nav>
          <div className="top-actions">
            <a className="ghost" href={SGP_URL} rel="noopener noreferrer">
              Central
            </a>
            <a
              className="ask ask-wa"
              href={heroWa}
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="speed-streaks" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-stage rail">
          <div className="hero-copy">
            <h1 id="hero-title">
              Filmes e séries sem travar em{" "}
              <span key={city} className="city-swap">
                {city}
              </span>
            </h1>
            <p className="sub">
              Fibra da Info Projekt no Vale do Jequitinhonha. TV em todo plano.
              Looke, ExitLag, Kaspersky e Estuda+ no 700 Mega e no 1 Giga.
            </p>

            <div className="offer" aria-label={`Oferta em ${city}`}>
              <p key={`offer-speed-${city}`} className="offer-speed">
                {offer.speedLabel}
              </p>
              <span className="signal-rail" aria-hidden="true">
                <span className="signal-dash" />
                <span className="signal-dash" />
                <span className="signal-dash" />
              </span>
              <p key={`offer-price-${city}`} className="offer-price">
                <span className="offer-tag">a partir de</span>
                <span className="price-value">
                  {formatPrice(offer.priceMonthly)}
                </span>
                <span className="price-period">/mês</span>
              </p>
            </div>

            <div className="hero-ctas">
              <a
                className="ask"
                href={heroWa}
                rel="noopener noreferrer"
              >
                Assinar {offer.speedLabel}
              </a>
              <a className="ask ask-quiet" href="#cobertura">
                Ver cidades
              </a>
            </div>

            <div
              className={showAllCities ? "tape is-open" : "tape"}
              role="group"
              aria-label="Cidades da Info"
              id={chipsId}
            >
              {visibleCities.map((name) => (
                <button
                  key={name}
                  className="chip"
                  type="button"
                  aria-pressed={name === city}
                  aria-label={`Planos em ${name}`}
                  onClick={() => onPickCity(name)}
                >
                  {name}
                </button>
              ))}
              <button
                className="chip chip-more"
                type="button"
                aria-expanded={showAllCities}
                onClick={() => setShowAllCities((open) => !open)}
              >
                {showAllCities ? "Menos cidades" : "Ver todas"}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob" aria-hidden="true" />
            <Image
              src={HERO_MEDIA.tablet.src}
              alt={HERO_MEDIA.tablet.alt}
              fill
              priority
              sizes="(max-width: 759px) 100vw, 46vw"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      <section className="quick rail" aria-label="Atalhos">
        <a className="quick-card" href="#planos">
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
          <span className="quick-label">Assinar</span>
        </a>
        <a
          className="quick-card"
          href={SGP_URL}
          rel="noopener noreferrer"
        >
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="6" width="16" height="12" rx="2" />
              <path d="M4 10h16" strokeLinecap="round" />
            </svg>
          </span>
          <span className="quick-label">2ª via / Central</span>
        </a>
        <a
          className="quick-card"
          href={whatsappHref(city)}
          rel="noopener noreferrer"
        >
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path
                d="M12 4a7 7 0 0 0-6.1 10.4L5 20l5.7-.9A7 7 0 1 0 12 4Z"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="quick-label">Suporte</span>
        </a>
        <a
          className="quick-card"
          href={SPEED_TEST_URL}
          rel="noopener noreferrer"
        >
          <span className="quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="13" r="7" />
              <path d="M12 13l3.5-3.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="quick-label">Teste de velocidade</span>
        </a>
      </section>

      <main className="page">
        <section
          className="band rail"
          id="planos"
          aria-labelledby="plans-heading"
        >
          <h2 id="plans-heading" data-reveal="up">
            Planos em {city}
          </h2>
          <p className="lead" data-reveal="up">
            Quatro velocidades. Toque Assinar e o WhatsApp abre com a cidade e o
            plano na mensagem.
          </p>

          <div className="deck" aria-label="Planos de fibra">
            {PLANS.map((item) => {
              const featured = isFeaturedPlan(item);
              return (
                <article
                  key={item.speedLabel}
                  className={featured ? "plan is-featured" : "plan"}
                  data-reveal="bolt"
                >
                  {featured ? (
                    <p className="plan-badge">Mais popular</p>
                  ) : null}
                  <p className="speed">{item.speedLabel}</p>
                  <p key={`${city}-${item.speedLabel}`} className="price">
                    <span className="price-value">
                      {formatPrice(item.priceMonthly)}
                    </span>
                    <span className="price-period">/mês</span>
                  </p>
                  <ul className="plan-checks">
                    <li>100% fibra óptica</li>
                    <li>Info TV Plus incluso</li>
                    {item.includesBundles ? (
                      <li>Looke, ExitLag, Kaspersky, Estuda+</li>
                    ) : (
                      <li>Extras no 700 Mega e 1 Giga</li>
                    )}
                  </ul>
                  <PlanApps plan={item} compare />
                  <a
                    className={featured ? "ask" : "ask ask-quiet"}
                    href={whatsappHref(city, item)}
                    rel="noopener noreferrer"
                  >
                    Assinar {item.speedLabel}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="benefits" aria-labelledby="benefits-heading">
          <div className="rail benefits-inner">
            <h2 id="benefits-heading" className="visually-hidden">
              Por que a Info
            </h2>
            <ul className="benefits-list">
              <li data-reveal="up">
                <span className="benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 18h16v2H4zm2-4h2v3H6zm4-5h2v8h-2zm4-4h2v12h-2zm4 7h2v5h-2z" />
                  </svg>
                </span>
                <span>Conexão 100% fibra óptica</span>
              </li>
              <li data-reveal="up">
                <span className="benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3a9 9 0 0 0-9 9h2a7 7 0 0 1 14 0h2a9 9 0 0 0-9-9zm0 4a5 5 0 0 0-5 5h2a3 3 0 0 1 6 0h2a5 5 0 0 0-5-5zm0 4a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <span>Wi‑Fi no roteador da casa</span>
              </li>
              <li data-reveal="up">
                <span className="benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                  </svg>
                </span>
                <span>Suporte pelo WhatsApp da sede</span>
              </li>
              <li data-reveal="up">
                <span className="benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z" />
                  </svg>
                </span>
                <span>Loja física em Almenara, Jequitinhonha e Jacinto</span>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="band rail"
          id="cobertura"
          aria-labelledby="city-heading"
        >
          <h2 id="city-heading" data-reveal="up">
            Onde a Info chega
          </h2>
          <p className="lead" data-reveal="up">
            Se a sua cidade está aqui, dá para pedir. Toque para ver o plano.
          </p>
          <ul className="places" data-reveal="up">
            {CITIES.map((name) => (
              <li key={name}>
                <a
                  className={name === city ? "place is-on" : "place"}
                  href="#planos"
                  onClick={() => onPickCity(name)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="sva rail"
          aria-labelledby="sva-heading"
          data-reveal="up"
        >
          <div className="sva-copy">
            <h2 id="sva-heading">TV e apps no plano</h2>
            <p>
              Info TV Plus entra em todo plano fibra. Looke, ExitLag, Kaspersky e
              Estuda+ entram no 700 Mega e no 1 Giga.
            </p>
            <a
              className="ask"
              href={whatsappHref(city, offer)}
              rel="noopener noreferrer"
            >
              Pedir {offer.speedLabel}
            </a>
          </div>
          <div className="sva-media">
            <Image
              src={HERO_MEDIA.notebook.src}
              alt={HERO_MEDIA.notebook.alt}
              fill
              sizes="(max-width: 759px) 100vw, 48vw"
            />
          </div>
        </section>

        <aside className="biz rail" id="empresa" data-reveal="up">
          <div className="biz-media">
            <Image
              src={HERO_MEDIA.laptop.src}
              alt={HERO_MEDIA.laptop.alt}
              fill
              sizes="(max-width: 759px) 100vw, 42vw"
            />
          </div>
          <div className="biz-copy">
            <h2>Para sua empresa</h2>
            <p>A mesma fibra da casa, no ponto de venda em {city}.</p>
            <a
              className="ask ask-quiet"
              href={whatsappHref(city, offer, true)}
              rel="noopener noreferrer"
            >
              Pedir para empresa
            </a>
          </div>
        </aside>

        <section className="band rail" id="lojas" aria-labelledby="stores-heading">
          <h2 id="stores-heading" data-reveal="up">
            Três lojas no Vale
          </h2>
          <p className="lead" data-reveal="up">
            Pode ir lá ou ligar.
          </p>
          <div className="stores-layout" data-reveal="up">
            <div
              ref={storeListRef}
              className="store-list"
              role="radiogroup"
              aria-label="Lojas no Vale"
              onKeyDown={onStoreListKeyDown}
            >
              {STORES.map((store) => {
                const selected = store.city === selectedStore.city;
                return (
                  <article
                    className={selected ? "store is-active" : "store"}
                    key={store.city}
                  >
                    <button
                      type="button"
                      className="store-pick"
                      role="radio"
                      aria-checked={selected}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => onSelectStore(store)}
                    >
                      <span className="store-city">{store.city}</span>
                      <span className="store-address">{store.address}</span>
                    </button>
                    <a className="phone" href={storePhoneHref(store.phone)}>
                      {store.phone}
                    </a>
                  </article>
                );
              })}
            </div>
            <div
              className="store-map"
              role="region"
              aria-live="polite"
              aria-label={`Mapa da loja em ${selectedStore.city}`}
            >
              <iframe
                key={selectedStore.city}
                title={`Mapa da loja em ${selectedStore.city}`}
                src={storeMapSrc(selectedStore)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="map-link"
                href={storeMapsHref(selectedStore)}
                rel="noopener noreferrer"
              >
                Abrir {selectedStore.city} no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot rail">
        <div className="foot-brand">
          <strong>Info Projekt</strong>
          <p>Fibra no Vale do Jequitinhonha. Sede em Almenara.</p>
          <p className="cnpj">CNPJ 02.410.966/0001-22</p>
        </div>
        <div className="foot-links">
          <p>
            Já é cliente? Entra na{" "}
            <a href={SGP_URL} rel="noopener noreferrer">
              área do cliente
            </a>
            .
          </p>
          <p>
            <a href="/privacidade">Privacidade</a>
          </p>
          <p>
            WhatsApp{" "}
            <a href={floatWa} rel="noopener noreferrer">
              {WHATSAPP_DISPLAY}
            </a>
          </p>
        </div>
      </footer>

      <a
        className="wa-float"
        href={floatWa}
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
          <path d="M16.04 4C9.5 4 4.2 9.2 4.2 15.6c0 2.05.54 4.05 1.56 5.82L4 28l6.78-1.74A12 12 0 0 0 16.04 27.2c6.54 0 11.84-5.2 11.84-11.6S22.58 4 16.04 4zm6.9 16.5c-.28.78-1.64 1.44-2.28 1.52-.58.08-1.32.11-2.12-.13-.49-.15-1.11-.36-1.91-.7-3.37-1.45-5.56-4.78-5.73-5-.17-.22-1.4-1.86-1.4-3.55s.88-2.52 1.2-2.86c.3-.33.66-.41.88-.41h.64c.2 0 .48-.08.74.56.28.68.94 2.3 1.02 2.46.08.17.14.36.03.58-.1.22-.16.36-.32.55-.16.2-.33.44-.47.59-.16.17-.33.35-.14.68.19.33.84 1.38 1.8 2.24 1.24 1.1 2.28 1.44 2.61 1.6.33.17.52.14.71-.08.2-.22.84-.98 1.06-1.32.22-.33.45-.28.76-.17.31.11 1.97.93 2.31 1.1.33.17.56.25.64.39.08.14.08.8-.2 1.58z" />
        </svg>
      </a>
    </>
  );
}
