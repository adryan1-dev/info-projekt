# Direção de arte — ISP Website v2

## Contexto / objetivo v2
Redesign de site institucional + conversão para **provedor de internet BR** (fibra residencial).  
Meta: look de agência (nível Behance) + UX de conversão real (planos, cobertura, WhatsApp, 2ª via, app).  
Síntese a partir de 6 galleries Behance + moodboard live já em `/workspace/info-refs/` (Vero, Unifique, Alloha, etc.).  
**Um sistema só** — não 6 skins. Brand colors do cliente plugam nos tokens; estrutura/componentes ficam fixos.

---

## Referências analisadas
| # | Projeto | 1 linha |
|---|---------|---------|
| 1 | [Mr. Y Net / Fullpage](https://www.behance.net/gallery/222260077/Site-Provedor-de-Internet) | Verde+lime, hero oferta+lifestyle, planos dark cards, SVA apps |
| 2 | [INET / Duma](https://www.behance.net/gallery/193728713/Site-Provedor-de-Internet) | Roxo+laranja, dual CTA, color-block services, WhatsApp header |
| 3 | [Banners Telecom](https://www.behance.net/gallery/248074175/Banner-sites-Telecom) | Promo/gamer: badge mega+preço, light-trails, nested offer cards |
| 4 | [Indanet](https://www.behance.net/gallery/185665643/Site-Indanet) | Teal, hero benefit-led, plan cards borda brand + CTA WhatsApp |
| 5 | [Grupo Connect Ba](https://www.behance.net/gallery/210925417/Site-Institucional-Grupo-Connect-Ba) | Roxo+cyan, MEGAS tipografia hero, split entretenimento, quick-actions app |
| 6 | [Maximum Telecom RJ](https://www.behance.net/gallery/198272953/Maximum-Telecom-Provedor-de-Internet-em-RJ) | Lime×navy, quick-actions pós-hero, carousel planos, seção app |

Shots: `/workspace/info-refs/behance/<slug>/` · notas: `behance/ANALYSIS.md`

---

## Direção de arte (síntese)
**Vibe:** “fibra humana e rápida” — tech confiável sem frio corporativo.  
**Visual:** lifestyle BR real (família, home-office, streaming) + **1 accent quente** + **1 dark de confiança**. Sem parede monocromática.  
**Hierarquia:** número (mega/preço) > benefício emocional > prova (fibra, instalação, suporte) > CTA.  
**Âncoras a roubar:**
- Maximum → quick-actions + contraste dark/accent + float WhatsApp  
- Indanet → hero benefit-first + cards com borda brand  
- Connect → speed tipografia enorme nos planos + split SVA  
- INET → dual CTA (Assinar | Cobertura)  
- Mr. Y → benefits bar 4 ícones + bloco apps incluídos  
- Banners → badge de oferta (mega + preço) só em campanhas/hero promo  

**Não é:** site gamer-red full-time; template WordPress ISP genérico; itálico em tudo; 5 cores de CTA sem regra.

---

## Design tokens

### Color (neutros fixos; brand plugável)
```
--color-bg:            #F7F8FA
--color-surface:       #FFFFFF
--color-ink:           #0F1C24          /* navy-ink, tipo Maximum */
--color-ink-muted:     #5B6B76
--color-border:        #E6EAEE

--color-brand:         #5B2A86          /* PRIMARY — trocar p/ marca; ex. Connect purple */
--color-brand-soft:    #F3ECFA
--color-accent:        #E8A317          /* CTA quente / highlights — laranja-âmbar */
--color-accent-ink:    #1A1205
--color-success:       #1B9E5A          /* checks fibra / ok cobertura */
--color-danger:        #D92D20

--color-hero-fg:       #FFFFFF
--color-hero-overlay:  rgba(15, 28, 36, 0.55)
```
**Regra:** Primary CTA = `brand` **ou** `accent` (escolher **um** filled). Secondary = outline/`surface`. Nunca 3 filled colors diferentes no mesmo viewport.

### Typography
```
--font-sans: "Inter", "Poppins", system-ui, sans-serif
--fs-display: clamp(2.5rem, 5vw, 4rem)     /* mega / preço */
--fs-h1: clamp(1.75rem, 3vw, 2.75rem)
--fs-h2: clamp(1.35rem, 2.2vw, 2rem)
--fs-body: 1rem / 1.6
--fs-small: 0.875rem
--fw-regular: 400
--fw-semibold: 600
--fw-bold: 700
--fw-black: 800                          /* só números de plano */
```
ALL-CAPS só em labels/nav curtos. Itálico: **no máximo** 1 H2 por página (opcional “velocidade”).

### Spacing / radius / shadow
```
--space-1: 4px … --space-8: 64px
--section-y: clamp(48px, 8vw, 96px)
--container: 1200px (pad 24px)

--radius-sm: 8px
--radius-md: 12px
--radius-lg: 20px          /* cards plano */
--radius-pill: 999px

--shadow-card: 0 8px 24px rgba(15,28,36,.08)
--shadow-float: 0 12px 40px rgba(15,28,36,.16)
```

---

## Layout / IA das páginas

### Home (conversão)
1. **Utility bar** — Para você | Empresas · tel · 2ª via · social  
2. **Header sticky** — logo · nav · Central do Cliente · WhatsApp  
3. **Hero** — benefit headline + kicker preço/mega + **dual CTA** + visual (foto cutout / blob) · carousel opcional  
4. **Quick-actions** — 4 cards: Assinar · 2ª via · Suporte · Teste velocidade  
5. **Planos** — 3–4 cards (1 highlighted) · link “ver todos”  
6. **Cobertura** — input CEP/cidade + mapa/estado  
7. **Benefícios** — 4 ícones (fibra, instalação, suporte 24h, Wi‑Fi)  
8. **SVA / apps** — logos streaming em surface cards  
9. **App** — split mockup + store badges  
10. **Prova social / conteúdo** — depoimentos ou blog curto  
11. **FAQ** accordion  
12. **Footer** — colunas + selos + apps  

### Planos / Ofertas
Filtros (residencial/empresarial, mega) → grid cards → comparativo → CTA cobertura.

### Institucional / Sobre · Suporte · Contato
Padrão content + CTA lateral WhatsApp; suporte com tickets/atalhos (boleto, visita técnica).

### Mobile IA
Hero stack: visual → headline → preço → CTAs full-width. Planos = swipe carousel. Float WhatsApp + sticky “Assinar”.

---

## Componentes-chave

### Header
- 2 tiers (utility + main).  
- Sticky com blur/`surface` após scroll.  
- CTA direito: filled “Central” (outline) + ícone WhatsApp.

### Hero
- **Variant A (default):** split 50/50 — copy | cutout+shape.  
- **Variant B (campanha):** full-bleed foto + overlay + **offer badge** (mega + preço) estilo banners.  
- Dual CTA: `Assinar agora` (filled) + `Verificar cobertura` (outline/ghost).

### Plan cards
```
[ badge opcional: Mais popular / Instalação grátis ]
[ NOME DO PLANO ]
[ 500 ] MEGA          ← display black
[ R$ 99,90 /mês ]     ← bold
[ checklist 4–6 itens com --color-success ]
[ CTA Assinar ] + link “Detalhes”
```
- Radius `--radius-lg`, border 1px ou borda brand 2px (modo Indanet).  
- Highlight: scale 1.03 + ring brand + shadow.  
- Carousel mobile; grid desktop.

### Coverage checker
- Input CEP (máscara) + submit.  
- Estados: idle / loading / available (CTA Assinar) / unavailable (lead WhatsApp).  
- Nunca dead-end.

### Benefits
- 4 colunas ícone line + título + 1 linha. Fundo `surface` ou strip `brand-soft`.

### FAQ
- Accordion acessível (`button` + `aria-expanded`). Uma pergunta aberta por vez.

### Footer
- 4 cols: Institucional · Planos · Suporte · Contato.  
- Faixa legal + redes + “Baixe o app”.

### Float
- WhatsApp bottom-right (safe-area); badge só se unread/marketing on.

---

## Motion
- **Entrada seções:** fade-up 400ms, stagger 60ms, `ease-out`.  
- **Cards:** hover lift 4px + shadow (desktop only).  
- **Hero:** parallax leve no blob/shape (max 8px); sem autoplay vídeo pesado.  
- **Prefer:** `prefers-reduced-motion: reduce` → sem parallax/stagger.  
- **Evitar:** scrolljacking, counters infinitos, glow piscando.

---

## Conteúdo / tom
- PT-BR direto, benefício primeiro (“Filmes sem travar”, não “Soluções de conectividade”).  
- Mega e preço sempre visíveis juntos.  
- Legal (*valor no boleto, fidelidade*) em `--fs-small`, nunca compete com CTA.  
- WhatsApp = canal principal de conversão regional.

---

## Critérios de qualidade
- [ ] Lighthouse Perf desktop ≥ 85; mobile ≥ 60 (imagens AVIF/WebP, LCP hero ≤ 2.5s)  
- [ ] Contraste AA em texto e CTAs (nada de white on lime puro)  
- [ ] Dual CTA + coverage path sem beco sem saída  
- [ ] Plan cards: speed → preço → features → CTA em < 1 scroll desktop  
- [ ] Quick-actions (2ª via / suporte) acima da dobra ou logo após hero  
- [ ] WhatsApp acessível teclado/screen reader  
- [ ] Tokens centralizados (CSS vars / theme); zero hex hardcode em componentes  
- [ ] Mobile: CTAs ≥ 44px tap; carousel planos com dots  

---

## Prompt pronto pro Cursor

```
Implemente o ISP Website v2 seguindo /workspace/info-refs/DIRECTION.md (fonte da verdade).

Contexto: site provedor fibra BR — home conversão + planos + cobertura + suporte.
Design system unificado (NÃO copiar 6 Behances): tokens em CSS variables; primary brand + accent CTA + navy ink; radius lg nos plan cards; dual CTA Assinar | Verificar cobertura; quick-actions pós-hero; float WhatsApp.

Stack: [PREENCHER: Next.js/React + Tailwind ou CSS modules]. Use as refs visuais em /workspace/info-refs/behance/*/01-hero.png e */03-plans.png só como mood — implementar o sistema DIRECTION, não pixel-copy.

Entregar:
1) tokens (color, type, space, radius, shadow)
2) componentes: Header, Hero (variant A), QuickActions, PlanCard(+grid), CoverageChecker, Benefits, Faq, Footer, WhatsAppFloat
3) página Home com IA na ordem do DIRECTION.md
4) mobile-first; prefers-reduced-motion
5) copy PT-BR placeholder realista (sem Lorem)

Do: speed-first nos cards, contraste AA, um filled CTA color por viewport.
Don't: estética gamer-red default; itálico em todos H2; 3+ cores de botão filled; parede monocromática.
```

---

## Mapa rápido de arquivos
- Direção: `/workspace/info-refs/DIRECTION.md` (este arquivo)  
- Notas por projeto: `/workspace/info-refs/behance/ANALYSIS.md`  
- Screenshots: `/workspace/info-refs/behance/<slug>/`  
- Moodboard live ISP: `/workspace/info-refs/README.md`
