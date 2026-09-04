export type Plan = {
  speedLabel: string;
  priceMonthly: number;
  includesBundles: boolean;
};

export const CITIES = [
  "Almenara",
  "Bandeira",
  "Itapiru",
  "Jacinto",
  "Jaguarão do Jacinto",
  "Jequitinhonha",
  "Joaíma",
  "Mata Verde",
  "Rio do Prado",
  "Rubim",
  "Salto da Divisa",
  "Santa Maria",
  "Santo Antônio do Jacinto",
  "Timorante",
] as const;

export type City = (typeof CITIES)[number];

export type Store = {
  city: City;
  phone: string;
  address: string;
  lat: number;
  lon: number;
};

export const DEFAULT_CITY: City = "Almenara";

export const FEATURED_SPEED_LABEL = "700 Mega";

export const PLANS: Plan[] = [
  { speedLabel: "100 Mega", priceMonthly: 79.9, includesBundles: false },
  { speedLabel: "300 Mega", priceMonthly: 89.9, includesBundles: false },
  { speedLabel: "700 Mega", priceMonthly: 99.9, includesBundles: true },
  { speedLabel: "1 Giga", priceMonthly: 129.9, includesBundles: true },
];

export function isFeaturedPlan(plan: Plan): boolean {
  return plan.speedLabel === FEATURED_SPEED_LABEL;
}

export function featuredPlan(): Plan {
  return PLANS.find(isFeaturedPlan) ?? PLANS[0];
}

export function planRequestMessage(
  city: City,
  plan: Plan,
  forBusiness = false,
): string {
  if (forBusiness) {
    return `Quero ${plan.speedLabel} em ${city}, para empresa.`;
  }
  return `Quero ${plan.speedLabel} em ${city}.`;
}

export const STORES: Store[] = [
  {
    city: "Almenara",
    phone: "(33) 3721-1726",
    address: "Praça Dr. Hélio Rocha Guimarães, 101",
    lat: -16.1830609,
    lon: -40.6939828,
  },
  {
    city: "Jequitinhonha",
    phone: "(33) 3741-1253",
    address: "Av. Dr. Franco Duarte, 385 B",
    lat: -16.4353282,
    lon: -41.0081018,
  },
  {
    city: "Jacinto",
    phone: "(33) 3723-1544",
    address: "Av. Antonio Ferreira Lúcio, 543",
    lat: -16.1521117,
    lon: -40.2949891,
  },
];

export const STORE_CITIES: City[] = STORES.map((store) => store.city);

export function cityChipList(
  selected: City,
  showAll: boolean,
): City[] {
  if (showAll) return [...CITIES];
  return CITIES.filter(
    (name) => STORE_CITIES.includes(name) || name === selected,
  );
}

export function storeMapSrc(store: Store): string {
  const pad = 0.0055;
  const params = new URLSearchParams({
    bbox: [
      store.lon - pad,
      store.lat - pad,
      store.lon + pad,
      store.lat + pad,
    ].join(","),
    layer: "mapnik",
    marker: `${store.lat},${store.lon}`,
  });
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`;
}

export function storeMapsHref(store: Store): string {
  const params = new URLSearchParams({
    api: "1",
    query: `${store.address}, ${store.city}, MG`,
  });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function storePhoneHref(phone: string): string {
  return `tel:+55${phone.replace(/\D/g, "")}`;
}

export const SGP_URL = "https://sgp.ipw.com.br/central";

export const TV_LABEL = "Info TV Plus";

export const BUNDLE_LABELS = ["Looke", "ExitLag", "Kaspersky", "Estuda+"] as const;

export type PlanAppId = "tv" | "looke" | "exitlag" | "kaspersky" | "estuda";

export type PlanApp = {
  id: PlanAppId;
  label: string;
};

export const PLAN_APPS: PlanApp[] = [
  { id: "tv", label: TV_LABEL },
  { id: "looke", label: "Looke" },
  { id: "exitlag", label: "ExitLag" },
  { id: "kaspersky", label: "Kaspersky" },
  { id: "estuda", label: "Estuda+" },
];

export function planIncludesApp(plan: Plan, app: PlanApp): boolean {
  if (app.id === "tv") return true;
  return plan.includesBundles;
}

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
