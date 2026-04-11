# Engenharia Reversa — Apple MacBook Neo (BR)

**Data:** 11 de abril de 2026
**Fonte:** https://www.apple.com/br/macbook-neo/

---

## 1. ESTRUTURA HTML

### Documento Base
```html
<html class="no-js" lang="pt-BR" dir="ltr" prefix="og: http://ogp.me/ns#">
```
- Classe `no-js` removida via JS quando o browser suporta JS
- `viewport-fit=cover` para iPhones com notch
- Open Graph completo + Twitter Card
- 100+ `link rel="alternate" hreflang` para i18n

### Stylesheets (ordem de carregamento)
1. SF Pro fonts (proprietária Apple)
2. Global header CSS (componente separado)
3. Global footer CSS
4. Local nav CSS (sub-navegação do produto)
5. `overview.built.css` — CSS principal
6. CSS específico Brasil (overrides de localização)

### Scripts
1. `head.built.js` — No head, bloqueia render (detecção de features)
2. `globalheader.umd.js` — Header interativo
3. `ac-analytics.js` — Analytics
4. `ac-localnav.built.js` — Nav local
5. `ac-globalfooter.built.js` — Footer
6. `main.built.js` — JS principal (final do body)
7. `autofilms.built.js` — Player de vídeo HLS
8. `autopricing.built.js` — Preço dinâmico

### Tratamento de Imagens
Pattern `<picture>` com 3 tamanhos:
```html
<picture>
  <source srcset="..._xlarge.jpg" media="(min-width: 1441px)">
  <source srcset="..._large.jpg" media="(min-width: 735px)">
  <img src="..._small.jpg" alt="...">
</picture>
```

Para animações: pares `startframe` / `endframe` com crossfade via JS.

### 15 Seções da Página
1. Welcome/Hero — "Olá, Neo" + imagem animada
2. Highlights — Carrossel horizontal com 7 destaques
3. Design — "Amor ao primeiro Mac" + vídeo + seletor 4 cores
4. Product Viewer — Visualizador interativo com callouts
5. Performance — 4 cenários de uso + bateria
6. Display/Camera/Audio — Specs técnicos
7. Apple Intelligence — Ferramentas de escrita, Genmoji, Cleanup
8. macOS — Facilidade de uso, apps
9. Continuity — Mac+iPhone, 6 features
10. New to Mac — Migração, setup, iCloud
11. Security — Touch ID, Find My, Safari privacy
12. Incentive — Pagamento, educação, frete
13. Compare — Comparação de modelos
14. Environment — Sustentabilidade
15. Values — Meio ambiente, privacidade, acessibilidade

---

## 2. PALETA DE CORES

### Cores Base (Design Tokens CSS)
| Token | Valor | Uso |
|-------|-------|-----|
| `--sk-body-text-color` | `rgb(29,29,31)` | Texto principal |
| `--sk-body-background-color` | `rgb(255,255,255)` | Fundo principal |
| `--sk-body-link-color` | `rgb(0,102,204)` | Links (#06c) |
| `--sk-focus-color` | `#0071e3` | Foco acessibilidade |
| `--sk-glyph-gray-secondary` | `rgb(110,110,115)` | Texto secundário |
| `--sk-glyph-gray-tertiary` | `rgb(134,134,139)` | Texto terciário |
| `--sk-fill-tertiary` | `rgb(245,245,247)` | Fundo terciário (#f5f5f7) |
| `--sk-fill-blue` | `rgb(0,113,227)` | Azul CTA (#0071e3) |
| `--sk-fill-orange` | `rgb(245,99,0)` | Laranja badge |
| `--sk-fill-green` | `rgb(3,161,14)` | Verde |
| `--sk-fill-red` | `rgb(227,0,0)` | Vermelho |
| `--sk-enviro-green` | `rgb(0,217,89)` | Verde ambiental |

### Tema Dark
- Background: `#161617`, `#18181a`
- Texto: `#e8e8ed`
- Links: `#2997ff`
- Cinzas: `#333336`, `#424245`, `#6e6e73`

### Gradiente Apple Intelligence
```css
--gt-gradient: #0090f7, #ba62fc, #f2416b, #f55600
```
Azul → roxo → rosa → laranja, aplicado como texto gradient.

---

## 3. TIPOGRAFIA

### Font Stack
```css
/* Texto corrido */
font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;

/* Headings/Display */
font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
```

### Escala Tipográfica Completa (Desktop → Tablet → Mobile)

| Classe | Desktop | Tablet (≤1068px) | Mobile (≤734px) |
|--------|---------|-------------------|-----------------|
| welcome-headline-elevated | 80px / 1.05 / **700** / -0.015em | 64px / 1.0625 / 700 | 48px / 1.083 / 700 |
| ps-headline-standalone | 96px / 1.042 / 600 / -0.015em | 80px / 1.05 / 600 | 48px / 1.083 / 600 |
| marquee-headline-elevated | 80px / 1.05 / 600 / -0.015em | 64px / 1.0625 / 600 | 40px / 1.1 / 600 |
| marquee-headline-base | 64px / 1.0625 / 600 / -0.009em | 56px / 1.071 / 600 | 32px / 1.125 / 600 |
| section-header-headline | 48px / 1.083 / 600 / -0.003em | 40px / 1.1 / 600 | 32px / 1.125 / 600 |
| marquee-eyebrow-elevated | 32px / 1.125 / 600 / .004em | 28px / 1.143 / 600 | 24px / 1.167 / 600 |
| marquee-tagline-base | 28px / 1.143 / 600 / .007em | 24px / 1.167 / 600 | 21px / 1.19 / 600 |
| label | 24px / 1.167 / 600 / .009em | — | — |
| caption-tile | 17px / 1.235 / 600 / -.022em | — | 14px / 1.429 / 600 |
| marquee-detail | 17px / 1.235 / 400 / -.022em | — | 14px / 1.286 / 400 |
| body-reduced-tight | 14px / 1.286 / 400 / -.016em | — | — |
| caption | 12px / 1.333 / 400 / -.01em | — | — |

**Padrões:**
- Font-size base: `106.25%` (17px)
- Headings sempre `font-weight: 600` (semibold), hero usa `700`
- Letter-spacing **negativo** para títulos grandes (até -0.015em)
- Letter-spacing **positivo** para tamanhos pequenos
- SF Pro Display para ≥20px; SF Pro Text para <20px

---

## 4. GRID E LAYOUT

### CSS Grid de 12 Colunas
```css
.grid {
  --sk-cssgrid-columns: 12;
  --sk-cssgrid-column-gutter-inner: 24px;
  --sk-cssgrid-column-gutter-outer: 24px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
```

### Breakpoints
| Nome | Media Query | Uso |
|------|-------------|-----|
| xsmall | max-width: 480px | Celulares pequenos |
| small | max-width: 734px | Celulares |
| medium | max-width: 1068px | Tablets |
| large | Default | Desktop |
| xlarge | min-width: 1441px | Monitores grandes |

### Border Radius
- Tiles/Cards: `28px`
- Botões primários: `980px` (pill)
- Botões secundários: `8px`
- Badges: `6px`
- Modal: `28px`
- Product viewer: `28px`

---

## 5. ANIMAÇÕES E INTERAÇÕES

### Sistema StartFrame/EndFrame
Em vez de vídeo para pequenas animações:
1. Duas imagens: `startframe` (inicial) e `endframe` (final)
2. JS controla opacidade baseado no scroll
3. `transition: opacity 200ms ease-out`
4. Classes: `.start-frame.show`, `.end-frame`, `.loaded`, `.ended`

### StaggeredFadeIn
```css
--staggered-translate-y-duration: 0.7;
--staggered-opacity-duration: 0.9;
animation: fade-in calc(var(--staggered-opacity-duration) * 0.5s) both;
```

### MediaCardGallery (Carrossel)
```css
--animation-duration: 4s;  /* autoplay */
--transition-multiplier-media: 0.45;
--transition-multiplier-caption: -0.45;
/* Parallax nos captions */
transform: translateX(var(--caption-parallax-x));
```

### Hover (Cards)
```css
.card-hover {
  transition: transform .3s cubic-bezier(0,0,0.5,1),
              background-color .344s ease;
}
a.product-tile-image-link:hover {
  transform: scale(1.0161);
}
```

### Gradiente Animado em Texto
```css
.gradient-text span {
  background: linear-gradient(var(--gt-direction, 0deg), var(--gt-gradient))
              no-repeat 0% 0% / 100% 200%;
  background-clip: text;
  color: transparent;
}
html.enhanced .gradient-text {
  transition: background-position 2s linear;
}
```

### Header
- **Sticky** com `backdrop-filter: blur(20px)`
- Permanece fixo durante toda a navegação
- Local nav (sub-navegação) também sticky abaixo do header

### Vídeo
- Formato: **HLS (M3U8)** streaming adaptativo
- Player proprietário: `ac-films` v7.4.1
- Loading spinner: `animation: inline-media-spin .85s steps(8) infinite`

### AR (Realidade Aumentada)
Link para modelo 3D `.usdz` para visualização em AR no iOS.

---

## 6. PADRÕES DE UX

### Hierarquia Visual
1. Hero headline maior (80px, weight 700) — impacto emocional
2. Section headers reduzem (48px → 40px → 32px)
3. Body text em 17px (tamanho ótimo)
4. Captions em 12-14px

### Ritmo Claro/Escuro
1. Hero — **CLARO**
2. Highlights — **CLARO**
3. Design — **ESCURO** (vídeo)
4. Product Viewer — **CLARO**
5. Performance — **MISTO**
6. Display — **CLARO**
7. Apple Intelligence — **ESCURO** (gradiente)
8. macOS — **CLARO**
9. Security — **ESCURO**
10. Incentive — **CLARO** (#f5f5f7)
11. Footer — **CLARO**

### CTAs
- **Primário:** Botão pill azul (`#0071e3`), border-radius: 980px
- **Secundário:** Links azuis "Saiba mais ›" (#06c)
- **Frequência:** CTA no hero, "Saiba mais" em cada seção, CTA compra no compare

### Storytelling (Arco Narrativo Apple)
1. **Emoção** (Hero) — "Olá, Neo"
2. **Resumo** (Highlights) — 7 cards pra quem quer comprar rápido
3. **Desejo** (Design) — cores vibrantes, aspiracional
4. **Detalhe** (Product Viewer) — specs para o analítico
5. **Contexto** (Performance) — cenários reais
6. **Diferencial** (Display/Camera) — números
7. **Inovação** (Apple Intelligence) — IA
8. **Ecossistema** (macOS + Continuity) — lock-in
9. **Objeções** (New to Mac) — responde quem vem de PC
10. **Confiança** (Security) — privacidade
11. **Ação** (Incentive + Compare) — facilitadores
12. **Valores** (Environment) — ética

### White Space
- Hero: padding generoso (60-100px)
- Grid gutters: 24px padrão
- Line-height títulos: apertado (1.05-1.15) → compactness
- Line-height body: aberto (1.23-1.43) → legibilidade

---

## 7. PERFORMANCE

### Carregamento
- JS crítico no head (apenas detecção de features)
- JS principal no final do body
- Lazy loading via `data-lazy` + IntersectionObserver
- Vídeo HLS só carrega quando visível
- Preços dinâmicos assíncronos

### Imagens
- JPG para fotos, PNG para transparência
- SVG inline para ícones do nav
- 3 tamanhos por imagem (`_xlarge`, `_large`, `_small`)
- CDN com conversão automática baseada no header `Accept`

### CSS
- Minificado e concatenado
- Custom properties para theming
- `will-change` e `isolation: isolate` para compositing
- `contain` properties para limitar repaints

### Preferências do Usuário
```css
@media (prefers-reduced-motion) { ... }
@media (prefers-contrast: more) { ... }
@media (inverted-colors: inverted) { ... }
@media (prefers-reduced-transparency) { ... }
```

---

## 8. RESUMO PARA REPLICAÇÃO

### Essenciais
1. **Fonte:** Inter ou similar (SF Pro não é licenciada fora do ecossistema Apple)
2. **Paleta mínima:** `#ffffff`, `#f5f5f7`, `#161617`, `#1d1d1f`, `#6e6e73`, `#0071e3`, `#06c`
3. **Grid:** CSS Grid 12 colunas, gap 24px, breakpoints 480/734/1068/1441px
4. **Border-radius:** 28px cards, 980px botões pill
5. **Animações:** IntersectionObserver para reveal, crossfade start/end frames, parallax captions, staggered fade-in
6. **Glassmorphism:** `backdrop-filter: blur(20px)` no header sticky
7. **Tipografia:** Escala 96→80→64→56→48→40→32→28→24→21→17→14→12, letter-spacing negativo em grandes, positivo em pequenos

### Já Aplicados na Landing Page da Leticia
- [x] `clamp()` para tipografia fluida
- [x] Breakpoints 480px e 1441px
- [x] Border-radius 28px
- [x] Hover scale(1.016) com cubic-bezier Apple
- [x] Gradiente animado em texto
- [x] `prefers-contrast: more`
- [x] Header sticky com backdrop-filter blur(20px)
- [x] Leaflet movido para final do body

### Ainda Possível Implementar
- [ ] `<picture>` + srcset (3 tamanhos por imagem)
- [ ] Sistema startframe/endframe para galeria
- [ ] Tab navigation para seção de tratamentos
- [ ] Vídeo HLS (streaming adaptativo)
- [ ] Grid 12 colunas completo
- [ ] Minificação de CSS/JS para produção
