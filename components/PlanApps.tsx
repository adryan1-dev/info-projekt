import {
  PLAN_APPS,
  planIncludesApp,
  type Plan,
  type PlanAppId,
} from "@/lib/catalog";

function IconGlyph({ id }: { id: PlanAppId }) {
  const common = {
    viewBox: "0 0 256 256",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "tv":
      return (
        <svg {...common}>
          <path d="M216 60h-59l27.52-27.52a12 12 0 0 0-17-17L128 55L88.49 15.51a12 12 0 0 0-17 17L99 60H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 136H44V84h168Z" />
        </svg>
      );
    case "looke":
      return (
        <svg {...common}>
          <path d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 100h72v56H44Zm96-24V60h24v16Zm-24 0H92V60h24Zm0 104v16H92v-16Zm24 0h24v16h-24Zm0-24v-56h72v56Zm72-80h-24V60h24ZM68 60v16H44V60ZM44 180h24v16H44Zm144 16v-16h24v16Z" />
        </svg>
      );
    case "exitlag":
      return (
        <svg {...common}>
          <path d="M176 116h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 0 24m-72-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24m140.76 110.94a40 40 0 0 1-61 5.35a7 7 0 0 1-.53-.56L144.67 164h-33.34l-38.52 43.73c-.17.19-.35.38-.53.56a40 40 0 0 1-67.66-35.24a1 1 0 0 1 0-.2L21 88.79A63.88 63.88 0 0 1 83.88 36H172a64.08 64.08 0 0 1 62.93 52.48a2 2 0 0 1 0 .19l16.36 84.17a2 2 0 0 1 0 .2a39.74 39.74 0 0 1-6.53 29.9M172 140a40 40 0 0 0 0-80H83.89a39.9 39.9 0 0 0-39.27 33.06a2 2 0 0 0 0 .21l-16.34 84a16 16 0 0 0 13 18.44a16.07 16.07 0 0 0 13.86-4.21l41.76-47.43a12 12 0 0 1 9-4.07Zm55.76 37.31l-7-35.95a63.84 63.84 0 0 1-44.27 22.46l24.41 27.72a16 16 0 0 0 26.85-14.23Z" />
        </svg>
      );
    case "kaspersky":
      return (
        <svg {...common}>
          <path d="M92 128a156.1 156.1 0 0 1-19.5 75.56a12 12 0 1 1-21-11.64A132 132 0 0 0 68 128a60 60 0 0 1 99.68-45a12 12 0 1 1-15.88 18A36 36 0 0 0 92 128m84.16-8H176a12 12 0 0 0-12 11.8a226.8 226.8 0 0 1-17 82.84a12 12 0 1 0 22.19 9.13A250.4 250.4 0 0 0 188 132.2a12 12 0 0 0-11.85-12.2Zm-62.22 81.21a12 12 0 0 0-16 5.54c-1.37 2.81-2.85 5.65-4.38 8.42a12 12 0 1 0 21 11.63c1.74-3.14 3.41-6.35 5-9.55a12 12 0 0 0-5.63-16.04ZM128 116a12 12 0 0 0-12 12a181 181 0 0 1-4.75 41.26a12 12 0 0 0 8.94 14.42a11.8 11.8 0 0 0 2.75.32a12 12 0 0 0 11.67-9.26A204.6 204.6 0 0 0 140 128a12 12 0 0 0-12-12m0-96a108 108 0 0 0-31.5 4.67a12 12 0 0 0 7 23A84.06 84.06 0 0 1 212 128a277.4 277.4 0 0 1-6.84 61.34a12 12 0 0 0 9.05 14.36a11.6 11.6 0 0 0 2.66.3a12 12 0 0 0 11.7-9.34A302 302 0 0 0 236 128A108.12 108.12 0 0 0 128 20M68.47 51.74a12 12 0 0 0-17 0A107.32 107.32 0 0 0 20 128a83.3 83.3 0 0 1-7.61 35a12 12 0 1 0 21.81 10a107.1 107.1 0 0 0 9.8-45a83.42 83.42 0 0 1 24.5-59.29a12 12 0 0 0-.03-16.97" />
        </svg>
      );
    case "estuda":
      return (
        <svg {...common}>
          <path d="m249.8 85.49l-116-64a12 12 0 0 0-11.6 0l-116 64a12 12 0 0 0 0 21l21.8 12v47.76a19.9 19.9 0 0 0 5.09 13.32C46.63 194.7 77 220 128 220a136.9 136.9 0 0 0 40-5.75V240a12 12 0 0 0 24 0v-35.88a119.5 119.5 0 0 0 30.91-24.51a19.9 19.9 0 0 0 5.09-13.32v-47.76l21.8-12a12 12 0 0 0 0-21ZM128 45.71L219.16 96L186 114.3a2 2 0 0 1-.18-.12l-52-28.69a12 12 0 0 0-11.6 21l39 21.49L128 146.3L36.84 96ZM128 196c-40.42 0-64.65-19.07-76-31.27v-33l70.2 38.74a12 12 0 0 0 11.6 0l34.2-18.83v37.23a110.5 110.5 0 0 1-40 7.13m76-31.27a93 93 0 0 1-12 10.81v-37.15l12-6.62Z" />
        </svg>
      );
  }
}

export function PlanApps({
  plan,
  compact = false,
  compare = false,
}: {
  plan: Plan;
  compact?: boolean;
  compare?: boolean;
}) {
  const apps = compare
    ? PLAN_APPS
    : PLAN_APPS.filter((app) => planIncludesApp(plan, app));

  return (
    <ul className={compact ? "plan-apps is-compact" : "plan-apps"}>
      {apps.map((app) => {
        const included = planIncludesApp(plan, app);
        return (
          <li
            key={app.id}
            className={included ? "perk" : "perk is-off"}
            data-app={app.id}
            aria-label={
              included ? app.label : `${app.label}, não incluso`
            }
          >
            <span className="perk-icon">
              <IconGlyph id={app.id} />
            </span>
            <span className="perk-name">{app.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
