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
  PLANS,
  SGP_URL,
  STORES,
  cityChipList,
  featuredPlan,
  formatPrice,
  planRequestMessage,
  storeMapSrc,
  storeMapsHref,
  storePhoneHref,
  type City,
  type Plan,
  type Store,
} from "@/lib/catalog";
import { HERO_MEDIA } from "@/lib/hero-media";

type Receipt = {
  city: City;
  plan: Plan;
  forBusiness: boolean;
};

const NAV_SECTIONS = ["planos", "empresa", "lojas"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

export function Home() {
  const [city, setCity] = useState<City>(DEFAULT_CITY);
  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>(STORES[0]);
  const [activeSection, setActiveSection] = useState<NavSection>("planos");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const storeListRef = useRef<HTMLDivElement>(null);
  const chipsId = useId();
  const businessPlan = featuredPlan();
  const visibleCities = cityChipList(city, showAllCities);

  useEffect(() => {
    if (!receipt) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReceipt(null);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [receipt]);

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
        if (id === "planos" || id === "empresa" || id === "lojas") {
          setActiveSection(id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    observed.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function onRequest(nextCity: City, nextPlan: Plan, forBusiness = false) {
    setReceipt({ city: nextCity, plan: nextPlan, forBusiness });
  }

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
      <a className="skip" href="#planos">
        Ir para os planos
      </a>
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
              Área do cliente
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="planos" aria-labelledby="hero-title">
        <div className="hero-stage rail">
          <div className="hero-intro">
            <h1 id="hero-title">
              Planos em{" "}
              <span key={city} className="city-swap">
                {city}
              </span>
            </h1>
            <p className="sub">
              Fibra com TV em todo plano. Looke, ExitLag, Kaspersky e Estuda+
              entram no 700 Mega e no 1 Giga.
            </p>
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

          <div className="deck" aria-label="Planos de fibra">
            {PLANS.map((item) => (
              <article key={item.speedLabel} className="plan">
                <p className="speed">{item.speedLabel}</p>
                <p key={`${city}-${item.speedLabel}`} className="price">
                  <span className="price-value">
                    {formatPrice(item.priceMonthly)}
                  </span>
                  <span className="price-period">/mês</span>
                </p>
                <PlanApps plan={item} compare />
                <button
                  className="ask"
                  type="button"
                  onClick={() => onRequest(city, item)}
                >
                  Assinar {item.speedLabel}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main className="page">
        <section
          className="band rail"
          id="cobertura"
          aria-labelledby="city-heading"
        >
          <h2 id="city-heading">Onde a Info chega</h2>
          <p className="lead">
            Se a sua cidade está aqui, dá para pedir. Toque para ver o plano.
          </p>
          <ul className="places">
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

        <aside className="biz rail" id="empresa">
          <div className="biz-media">
            <Image
              src={HERO_MEDIA.notebook.src}
              alt={HERO_MEDIA.notebook.alt}
              fill
              sizes="(max-width: 759px) 100vw, 42vw"
            />
          </div>
          <div className="biz-copy">
            <h2>Para sua empresa</h2>
            <p>A mesma fibra da casa, no ponto de venda em {city}.</p>
            <button
              className="ask ask-quiet"
              type="button"
              onClick={() => onRequest(city, businessPlan, true)}
            >
              Pedir para empresa
            </button>
          </div>
        </aside>

        <section className="band rail" id="lojas" aria-labelledby="stores-heading">
          <h2 id="stores-heading">Três lojas no Vale</h2>
          <p className="lead">Pode ir lá ou ligar.</p>
          <div className="stores-layout">
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
        <strong>Info Projekt</strong>
        <p>
          Fibra no Vale do Jequitinhonha. Sede em Almenara.{" "}
          <span className="cnpj">CNPJ 02.410.966/0001-22</span>.
        </p>
        <p>
          Já é cliente? Entra na{" "}
          <a href={SGP_URL} rel="noopener noreferrer">
            área do cliente
          </a>
          . <a href="/privacidade">Privacidade</a>.
        </p>
      </footer>

      {receipt ? (
        <div
          className="success"
          role="presentation"
          onClick={() => setReceipt(null)}
        >
          <div
            className="success-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ok-title"
            aria-describedby="ok-copy"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="ok-title">
              {receipt.plan.speedLabel} em {receipt.city}
            </h2>
            <p id="ok-copy">
              {planRequestMessage(
                receipt.city,
                receipt.plan,
                receipt.forBusiness,
              )}
            </p>
            <button
              ref={closeRef}
              className="ask"
              type="button"
              onClick={() => setReceipt(null)}
            >
              Escolher outro
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
