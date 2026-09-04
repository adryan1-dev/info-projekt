# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js. Code-first. Preços e planos vivem em dados no repositório. Adryan envia a tabela e o código é atualizado. Área do cliente permanece em `https://sgp.ipw.com.br/central`. Info TV Plus permanece em `https://infoplay.ipw.com.br/login`.

## Users

Visitante principal: pessoa no Vale do Jequitinhonha, no celular, querendo saber se a Info cobre a cidade e assinar fibra. Situação típica: compara mega e preço, escolhe um plano, manda WhatsApp.

Outros públicos no v1, sem virar o centro da home: empresa vê um bloco "Para sua empresa". Cliente já assinante usa "Área do cliente" e vai para o SGP atual.

## Product Purpose

O site vende internet fibra da Info Projekt nas cidades em que ela opera. Sucesso é a pessoa escolher cidade e plano e abrir o WhatsApp da sede `(33) 3721-1726` (`wa.me/553337211726`) com cidade e plano já na mensagem.

O site também explica a empresa, mostra cobertura e aponta suporte. Não substitui o SGP nem o app de TV.

## Positioning

Provedor regional do Vale do Jequitinhonha, com loja na cidade, preço por município e um mascote (Infozinho) que a região já conhece no Instagram. Uma operadora nacional não pode afirmar isso com honestidade.

## Operating Context

A pessoa chega pelo celular, muitas vezes pelo Instagram `@vemprainfo_` ou pelo Google. Fecha pelo WhatsApp `(33) 3721-1726` (Almenara), um número só. Lojas físicas existem em Almenara, Jequitinhonha e Jacinto. O domínio continua `ipw.com.br`. O nome na cara do site é Info Projekt, não IPW.

## Capabilities and Constraints

v1: Home, Sobre, Cobertura, Suporte.

Home v3: utility bar, hero benefit + oferta, dual CTA (Assinar WhatsApp | Ver cidades), quick-actions, planos speed-first com highlight leve no 700, cobertura em lista de cidades (sem CEP), benefícios, SVA/apps, lojas, float WhatsApp. Infozinho está pausado na home.

Info TV Plus entra em todo plano fibra. Looke, ExitLag, Kaspersky e Estuda+ entram só em 700 Mega e 1 Giga.

Sac+ existe (app white-label MeuAppProvedor) e não é destaque do v1. "25 anos" não é prova obrigatória.

Não inventar depoimento, número de clientes, prêmio ou cobertura de endereço. Não existe checagem de CEP/rua hoje. Cobertura é lista de cidades.

Cidades no site atual, grafia de Santo Antônio corrigida para Jacinto:

Almenara, Bandeira, Itapiru, Jacinto, Jaguarão do Jacinto, Jequitinhonha, Joaíma, Mata Verde, Rio do Prado, Rubim, Salto da Divisa, Santa Maria, Santo Antônio do Jacinto, Timorante.

Preços vistos em setembro de 2026 no site atual (a confirmar na tabela que Adryan enviar): R$59,90 a R$189,90. Velocidades de 15 Mega a 1 Giga, com 100/300/700 Mega e 1 Giga como grades mais comuns.

## Brand Commitments

Nome visível: Info Projekt. Wordmark INFO, com i minúsculo e anel orbital no pingente. Vermelho da marca. Mascote Infozinho: robô branco, juntas vermelhas, olhos azul-claro, antena com anéis de sinal, jatos nos pés.

Identidade visual de referência: Instagram [https://www.instagram.com/vemprainfo_/](https://www.instagram.com/vemprainfo_/). Bio e tom: "Seu provedor de internet", "Fibra óptica de alta velocidade", "Os melhores planos da região", "Vem ser #InfoFibra".

Cores oficiais (feed + wordmark, pedido do cliente): vermelho `#EE1C25`, branco `#FFFFFF`, preto `#000000`, verde `#1B9E5A`. Sem degradê. Sem ciano na UI.

Mundo visual escolhido (v3): flat ISP — preto no hero, branco no corpo, vermelho de ação, verde nos checks e WhatsApp. Planos com type pesado. Infozinho não entra nesta versão.

Anti-referência: o site atual [https://ipw.com.br/](https://ipw.com.br/). Não copiar o visual, a grade de cards idênticos, o HTML com todas as cidades no DOM, nem o clipart Memphis. Manter fatos (cidades, preços, WhatsApp, lojas, SGP, TV).

Assets: `assets/LOGO INFO.png`, `assets/LOGO INFO - branco.png`, `assets/Infosinho Avatar - Copia/`.

IPW some da cara. Pode permanecer no domínio e em URLs internas (SGP, Infoplay).

## Evidence on Hand

Site atual: planos por cidade, três lojas com telefone e endereço, WhatsApp de contratação, Sac+, Info TV Plus, CNPJ 02.410.966/0001-22.

Instagram: ~1.885 seguidores, extras Looke / ExitLag / Kaspersky / Estuda+, Infozinho em posts.

Anatel via Radar da Telecom (ciclo 07/2026): ~1.365 acessos banda larga, +40% em 12 meses, sede Almenara, ~36% da base PJ. Não usar esses números no site a menos que Adryan autorize.

Não há depoimento, foto de cliente, caso de sucesso ou mapa de rua verificados. Não fabricar.

Moodboard de referências (padrão e Lighthouse, 2026-09-03) em `refs/`.

## Product Principles

1. A home existe para assinar. Tudo que não ajuda a escolher cidade, ver preço e mandar WhatsApp fica para depois ou para o canto.
2. Preço é da cidade. Mostrar a grade errada é pior do que mostrar menos planos.
3. Infozinho é cara da marca no Instagram. Na home atual ele fica de fora.
4. O site fala Info Projekt. IPW é lastro técnico, não identidade.
5. Fato local ganha de clichê de telecom. Sem prêmio inventado, sem mapa do Brasil, sem "a melhor do país".
