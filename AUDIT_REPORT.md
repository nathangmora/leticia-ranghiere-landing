# Auditoria Completa — Landing Page Dra. Leticia Ranghiere

**Data:** 11 de abril de 2026
**Agentes:** 4 análises paralelas (Visual, Código, Conformidade, Referência Apple)
**Referência de benchmark:** apple.com/br/macbook-neo

---

## SUMÁRIO EXECUTIVO

| Categoria | Conformidade | Nota |
|-----------|-------------|------|
| Brief original | 95% | 10/10 seções implementadas |
| Design Spec | 92% | Paleta, tipografia e tokens quase perfeitos |
| Copy/Textos | 95% | 3 divergências menores |
| UX Strategy | 97% | Funil e storytelling 100% aderentes |
| Acessibilidade | 60% | Vários problemas críticos |
| Performance | 70% | Leaflet bloqueante, SVGs duplicados, sem WebP |
| SEO | 55% | Falta OG image, favicon, JSON-LD, canonical |

---

## 1. BUGS CRÍTICOS (P0 — Corrigir imediatamente)

### 1.1 Slider Antes/Depois com mesma imagem
- **O quê:** O slider usa `86c9eb98732773b862390cd105130593.jpg` tanto para "antes" quanto para "depois"
- **Impacto:** Feature de social proof completamente inutilizada
- **Arquivo:** `landing_page_leticia.html` linhas 199 e 202
- **Fix:** Usar imagens diferentes para antes e depois

### 1.2 Seção de Resultados vazia no mobile
- **O quê:** As imagens da galeria não renderizam, gerando tela quase toda preta
- **Impacto:** Experiência mobile quebrada na seção mais importante
- **Arquivo:** `css/styles.css` (seção `.resultado-card`)

### 1.3 Hamburger menu inacessível
- **O quê:** `<div>` em vez de `<button>`, sem `aria-expanded`, `aria-controls`, `aria-label`
- **Impacto:** Inacessível por teclado e leitores de tela
- **Arquivo:** `landing_page_leticia.html` linha 36

### 1.4 Contraste WCAG insuficiente
- **O quê:** `var(--gray)` (#6B6960) sobre `var(--sf)` (#F4F2EF) = ~3.7:1 (mínimo AA é 4.5:1)
- **Impacto:** Falha WCAG AA para texto normal
- **Arquivo:** `css/styles.css` linha 22 (`--gray` deveria ser `#8A8880` conforme spec)

### 1.5 Leaflet JS bloqueando renderização
- **O quê:** CSS e JS do Leaflet carregados no `<head>` sem `defer`
- **Impacto:** ~150KB bloqueando first paint. Mapa só é visível após muito scroll
- **Arquivo:** `landing_page_leticia.html` linhas 13-14

---

## 2. PROBLEMAS IMPORTANTES (P1 — Corrigir antes do lançamento)

### 2.1 SEO — Assets faltantes
| Item | Status | Impacto |
|------|--------|---------|
| Favicon | Ausente | Aba do navegador sem ícone |
| OG Image (1200x630) | Ausente | Sem preview ao compartilhar no WhatsApp/Instagram |
| `og:url`, `og:type` | Ausentes | SEO de redes sociais incompleto |
| `link rel="canonical"` | Ausente | Possível conteúdo duplicado |
| JSON-LD (LocalBusiness/Dentist) | Ausente | SEO local muito prejudicado |
| Favicon apple-touch-icon | Ausente | Bookmark no iPhone sem ícone |

### 2.2 Performance — Imagens
| Problema | Impacto |
|----------|---------|
| Sem formato WebP | JPEGs originais pesados em mobile |
| Sem `srcset` / `<picture>` | Mesma imagem carregada em todas as resoluções |
| Sem `width`/`height` nas `<img>` | Layout shift (CLS alto) |
| Sem `fetchpriority="high"` no hero | Imagem acima do fold sem prioridade |

### 2.3 Acessibilidade
| Elemento | Problema |
|----------|---------|
| Video play button | `<div>` sem role, tabindex, aria-label |
| FAQ accordion | Falta `aria-expanded`, `aria-controls` |
| B/A slider | Sem nenhum atributo ARIA |
| Skip navigation | Não existe |
| Service cards | `cursor:pointer` mas sem ação real (engana o usuário) |

### 2.4 Conformidade com Design Spec
| Item | Spec | Implementado | Diferença |
|------|------|-------------|-----------|
| `--gray` | `#8A8880` | `#6B6960` | Textos mais escuros que o projetado |
| Font-size depoimentos | 20px | 17px | 3px menor — reduz legibilidade |
| Body S weight | 400 | 300 | Texto mais fino |
| FAQ max-width | 680px | 720px | 40px mais largo |
| CTA Final bg opacity | .08 | .12 | Foto mais visível que pretendido |

### 2.5 Copy truncada
| Local | Faltando |
|-------|---------|
| Depoimento Patricia M. | Frase final "e só isso já valeu tudo." |
| Diferencial 5 | "e protocolos" removido do título |
| FAQ repouso | Frase "Passo todas as orientações detalhadas antes e depois." |

---

## 3. MELHORIAS (P2 — Nice to have)

### 3.1 Código
- **SVG WhatsApp duplicado 6x inline** → usar `<symbol>` + `<use>`
- **SVGs estrelas 25x duplicados** (5 por depoimento) → mesmo fix
- **CSS morto:** `.hero-bg`, `.hero-overlay`, `.hero-overlay-bottom`, `.resultado-label`
- **CSS vars não usadas:** `--cream`, `--dark-sf`, `--dark-el`, `--radius-md`, `--radius-xl`
- **JS morto:** `lastScroll` (atualizado mas nunca lido), `videoWrapper` (declarado mas nunca usado)
- **Estilos inline em 7+ locais** → migrar para classes CSS
- **Tokens de espaçamento** (`--space-1` a `--space-32`) não implementados como CSS vars
- **Leaflet script inline no HTML** → mover para `main.js`
- **Instagram link placeholder** (`href="#"`) na seção localização

### 3.2 Mobile
- Excesso de espaço vazio entre hero e seção "Sobre"
- 5 depoimentos empilhados ficam muito longos — considerar carrossel ou "ver mais"
- Footer repete informações — poderia ser mais compacto
- FAB WhatsApp pode sobrepor botão WhatsApp do footer

### 3.3 Visual
- Ícones dos cards de tratamento muito pequenos/sutis
- Cards de tratamento inconsistentes (alguns sem ícones em mobile)
- Labels de procedimento nos depoimentos com fonte excessivamente pequena
- Diferenciais com texto desbotado no 2º card

---

## 4. REFERÊNCIA APPLE — O QUE REPLICAR

### 4.1 Padrões-chave do MacBook Neo para aplicar

#### Tipografia
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| SF Pro Display 80px/700 hero | Instrument Serif 72px/400 | Manter serif mas considerar 80px+ |
| Escala: 96→80→64→56→48→40→32→28→24→21→17→14→12 | Escala limitada | Implementar escala mais granular |
| letter-spacing negativo em grandes, positivo em pequenos | Parcialmente implementado | Padronizar |
| `clamp()` para transições fluidas entre breakpoints | Media queries fixas | **Adotar clamp()** |

#### Layout e Grid
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| CSS Grid 12 colunas | Grid básico 2-3 col | Considerar sistema mais flexível |
| 5 breakpoints (480/734/1068/1441) | 2 breakpoints (768/1024) | **Adicionar breakpoints** |
| `<picture>` com 3 tamanhos por imagem | `<img>` único | **Implementar `<picture>`** |
| Cards com border-radius 28px | 24px (--radius-lg) | Aumentar levemente |
| Botões pill (border-radius: 980px) | Já usa --radius-full | OK |

#### Animações e Interações
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| StartFrame/EndFrame (crossfade de imagens no scroll) | Não tem | **Implementar para galeria de resultados** |
| StaggeredFadeIn com delay incremental | `.stagger-item` com 150ms | OK, similar |
| Parallax nos captions dos cards | Parallax nas aspas | Expandir para mais elementos |
| Hover scale 1.016 com cubic-bezier(0,0,0.5,1) | translateY(-4px) scale(1.01) | Similar, OK |
| Tab navigation com indicador animado | Não tem | **Considerar para seção de tratamentos** |
| Gradiente animado em texto | Não tem | **Implementar para headline de resultados** |

#### Performance
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| JS crítico no head, principal no body final | Leaflet no head bloqueando | **Mover Leaflet para defer** |
| Lazy loading via data-lazy + IntersectionObserver | `loading="lazy"` nativo | OK, nativo é suficiente |
| HLS para vídeo (streaming adaptativo) | MP4 direto | Para produção, considerar HLS |
| CSS minificado e concatenado | Sem minificação | **Minificar para produção** |
| `will-change` e `contain` para compositing | `will-change: transform` parcial | OK |

#### UX Patterns
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| Alternância claro/escuro ritmada | Parcialmente implementada | **Melhorar ritmo** |
| Hero emocional → Features → Prova social → CTA | Mesma estrutura | OK |
| CTA primário pill colorido + secundário link com seta | CTA verde WhatsApp + nude | OK |
| Header sticky com backdrop-filter blur(20px) | Mesmo padrão | OK |
| `prefers-reduced-motion` + `prefers-contrast` | Apenas reduced-motion | **Adicionar prefers-contrast** |

#### SEO e Meta
| Apple | Leticia Atual | Recomendação |
|-------|--------------|-------------|
| OG completo (image, title, desc, url, locale, type) | Parcial (falta image, url, type) | **Completar** |
| Twitter Card | Ausente | **Adicionar** |
| Canonical URL | Ausente | **Adicionar** |
| JSON-LD structured data | Ausente | **Adicionar (Dentist schema)** |
| Favicon + apple-touch-icon | Ausente | **Criar** |

---

## 5. CONFORMIDADE COM SPECS — RESUMO DETALHADO

### 5.1 Seções: 10/10 implementadas ✓

| # | Seção | Status |
|---|-------|--------|
| 01 | Hero (100vh, parallax, CTA) | ✓ Conforme |
| 02 | Sobre (sticky photo, counters) | ✓ Conforme |
| 03 | Serviços (6 cards, grid 2col) | ✓ Conforme |
| 04 | Resultados (dark, galeria, B/A) | ⚠ Bug no slider |
| 05 | Depoimentos (5, estrelas, parallax) | ✓ Conforme |
| 06 | Vídeo (player custom, lazy) | ✓ Conforme |
| 07 | Diferenciais (6 cards, 3col) | ✓ Conforme |
| 08 | FAQ (8 perguntas, accordion) | ✓ Conforme |
| 09 | Localização (Leaflet, rota animada) | ✓ Conforme |
| 10 | CTA Final (dark, WhatsApp) | ✓ Conforme |

### 5.2 Paleta de cores: 12/13 tokens conformes

Única divergência: `--gray` (#6B6960 vs spec #8A8880)

### 5.3 Tipografia: 90% conforme

Divergências: depoimentos 17px vs 20px, Body S weight 300 vs 400

### 5.4 Animações: 100% conforme

Todas as animações especificadas foram implementadas (parallax, reveal, counter, hover, clip-path, word-by-word)

### 5.5 Pontos de contato WhatsApp: 10 CTAs distribuídos ✓

Hero, Sobre, Serviços, Resultados, Depoimentos, Diferenciais, FAQ, CTA Final, FAB flutuante, Footer

### 5.6 Storytelling: 100% conforme com UX Strategy ✓

---

## 6. PLANO DE AÇÃO RECOMENDADO

### Sprint 1 — Bugs críticos (imediato)
1. [ ] Corrigir slider B/A (imagens diferentes)
2. [ ] Corrigir seção resultados no mobile
3. [ ] Mover Leaflet para `defer`
4. [ ] Corrigir `--gray` para #8A8880
5. [ ] Hamburger → `<button>` com ARIA

### Sprint 2 — SEO e Meta (antes do lançamento)
6. [ ] Criar favicon (16x16, 32x32, apple-touch-icon)
7. [ ] Criar OG Image (1200x630)
8. [ ] Adicionar og:url, og:type, canonical, Twitter Card
9. [ ] Adicionar JSON-LD (Dentist/LocalBusiness)
10. [ ] Completar copy truncada (3 textos)

### Sprint 3 — Performance (antes do lançamento)
11. [ ] Converter imagens para WebP com fallback
12. [ ] Implementar `<picture>` + srcset
13. [ ] Adicionar width/height em todas as `<img>`
14. [ ] Consolidar SVGs duplicados em `<symbol>`
15. [ ] Minificar CSS e JS para produção

### Sprint 4 — Apple-inspired upgrades
16. [ ] Adicionar breakpoints 480px e 1441px
17. [ ] Implementar `clamp()` para tipografia fluida
18. [ ] Implementar startframe/endframe para galeria
19. [ ] Adicionar tab navigation para tratamentos
20. [ ] Gradiente animado no título de resultados
21. [ ] Adicionar `prefers-contrast: more` support

### Sprint 5 — Polish
22. [ ] Limpar CSS morto
23. [ ] Limpar JS morto
24. [ ] Migrar estilos inline para classes
25. [ ] Renomear arquivos de imagem para nomes semânticos
26. [ ] Otimizar mobile (espaçamento sobre, depoimentos carrossel)

---

## 7. ARQUIVOS ANALISADOS

| Arquivo | Linhas | Função |
|---------|--------|--------|
| `landing_page_leticia.html` | ~650 | HTML principal |
| `css/styles.css` | ~600 | Estilos completos |
| `js/main.js` | ~255 | Interações e animações |
| `figma_design_report.md` | 198 | Spec do design |
| `art_direction.md` | ~500 | Direção artística |
| `ux_strategy.md` | ~800 | Estratégia UX |
| `copy_landing_page.md` | ~300 | Textos do copywriter |
| `LANDING_PAGE_BRIEF.md` | ~60 | Brief original |

---

## 8. SCREENSHOTS DE REFERÊNCIA

Screenshots capturados e disponíveis em `/tmp/`:
- Desktop (1440px): `audit-desktop-1.png` a `audit-desktop-13.png`
- Mobile (390px): `audit-mobile-1.png` a `audit-mobile-20.png`
- iPad (1024px): `audit-ipad-hero.png`, `audit-ipad-footer.png`
- Viewport scroll: `lp-hero.png`, `lp-sobre.png`, `lp-servicos.png`, `lp-footer.png`
