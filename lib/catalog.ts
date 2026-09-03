export type Plan = {
  speedLabel: string;
  priceMonthly: number;
  includesBundles: boolean;
};

export type Store = {
  city: string;
  phone: string;
  address: string;
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

export const DEFAULT_CITY: City = "Almenara";

export const PLANS: Plan[] = [
  { speedLabel: "1 Giga", priceMonthly: 129.9, includesBundles: true },
  { speedLabel: "700 Mega", priceMonthly: 99.9, includesBundles: true },
  { speedLabel: "300 Mega", priceMonthly: 89.9, includesBundles: false },
  { speedLabel: "100 Mega", priceMonthly: 79.9, includesBundles: false },
];

export const STORES: Store[] = [
  {
    city: "Almenara",
    phone: "(33) 3721-1726",
    address: "Praça Dr. Hélio Rocha Guimarães, 101",
  },
  {
    city: "Jequitinhonha",
    phone: "(33) 3741-1253",
    address: "Av. Dr. Franco Duarte, 385 B",
  },
  {
    city: "Jacinto",
    phone: "(33) 3723-1544",
    address: "Av. Antonio Ferreira Lúcio, 543",
  },
];

export const SGP_URL = "https://sgp.ipw.com.br/central";

export const TV_LABEL = "Info TV Plus";

export const BUNDLE_LABELS = ["Looke", "ExitLag", "Kaspersky", "Estuda+"] as const;

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function planTags(plan: Plan): string[] {
  return plan.includesBundles ? [TV_LABEL, ...BUNDLE_LABELS] : [TV_LABEL];
}
