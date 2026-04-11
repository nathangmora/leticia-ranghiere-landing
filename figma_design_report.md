# Design Report - Landing Page Dra. Leticia Ranghiere

---

## Status: HTML de Alta Fidelidade Criado

O Figma MCP nao suporta criacao programatica de layouts completos (apenas leitura e edicoes pontuais em arquivos existentes). Por isso, foi criado um **HTML de alta fidelidade** que serve como spec visual definitiva.

## Como Abrir

1. Navegue ate `/Users/nathanmora/projects/Leticia Ranghiere/`
2. Abra `landing_page_leticia.html` no navegador
3. Para melhor experiencia, use Chrome/Safari em tela cheia

Ou via terminal:
```bash
open "/Users/nathanmora/projects/Leticia Ranghiere/landing_page_leticia.html"
```

---

## Secoes Implementadas (10 secoes)

### 01. Hero (100vh)
- **Foto**: `WhatsApp Image 2026-04-02 at 15.48.55.jpeg` como background full-bleed
- **Parallax**: Background move a 0.4x da velocidade do scroll
- **Overlay**: Gradiente lateral (desktop) / gradiente inferior (mobile)
- **Headline**: "Realce a beleza que ja e sua." — Instrument Serif 72px
- **CTA**: Botao WhatsApp com shimmer animation
- **Particulas douradas**: 20 particulas com float animation
- **Scroll indicator**: Seta pulsante no bottom

### 02. Sobre Mim (sticky photo)
- **Foto sticky**: `PHOTO-2026-04-04-20-00-52.jpg` no lado esquerdo (sticky scroll)
- **Texto**: Bio completa do copywriter com reveal animations
- **Counters animados**: 1000+ pacientes, 5+ anos, 100% dedicacao (count-up on scroll)
- **CTA**: "Quero conhecer a Dra. Leticia"

### 03. Servicos (6 cards)
- **Layout**: Grid 2 colunas (desktop), 1 coluna (mobile)
- **Cards**: Neumorfismo suave com icones SVG inline
- **Stagger**: Cards aparecem escalonados com 150ms de delay
- **Hover**: translateY(-4px) + scale(1.01) + shadow expand
- **Servicos**: Harmonizacao Facial, Lentes, Botox, Preenchimento, Bioestimuladores, Limpeza

### 04. Resultados (dark section)
- **Background**: #1A1A18 para contraste dramatico
- **Gallery**: 3 fotos com overlay gradient e texto poetico
- **Fotos usadas**: sorriso close-up, antes/depois, sorriso com espelho
- **Labels**: "Antes & Depois" badge em uma das fotos
- **Hover**: Scale sutil nas imagens

### 05. Depoimentos (5 testimonials)
- **Aspas decorativas**: Caractere gigante com parallax (0.5x speed)
- **Grid**: 3 colunas (desktop) — 2 na primeira linha, overflow gracioso
- **Stars**: 5 estrelas SVG preenchidas com cor nude
- **5 depoimentos reais** do copywriter com nome, idade e servico

### 06. Video
- **Poster**: `PHOTO-2026-04-04-20-23-41.jpg` (planejamento digital)
- **Player**: Custom play button com animacao de scale
- **Scale-in**: Video entra com scale de 0.9 para 1.0
- **Lazy load**: preload="none" para performance

### 07. Diferenciais (6 cards)
- **Layout**: Grid 3 colunas com icones SVG em nude
- **6 diferenciais**: Formacao, Pacientes, Humanizado, Natural, Produtos, Ambiente
- **Stagger**: Reveal sequencial
- **Icone containers**: 64px com shadow inset (neumorfismo)

### 08. FAQ (8 perguntas)
- **Accordion**: Primeiro item ja aberto por padrao
- **Interacao**: Click para expand/collapse com max-height transition
- **Icone**: "+" que rotaciona 45deg para virar "x"
- **8 perguntas** completas do copywriter

### 09. Localizacao (dark section)
- **Mapa**: `mapa_dark_rota.png` (ja estilizado)
- **Grid**: Mapa + info lado a lado
- **Info**: Endereco, WhatsApp, horarios
- **Social icons**: Instagram + WhatsApp com hover effect

### 10. CTA Final
- **Background**: Gradiente sutil com foto de fundo (opacity .08)
- **Headline**: "Sua transformacao comeca com uma conversa."
- **Botao**: WhatsApp com glow pulse continuo
- **Divider ornamental**: Losango dourado entre linhas

---

## Elementos Globais

### Navbar
- **Comportamento**: Aparece apos scroll de 80vh (apos sair do hero)
- **Estilo**: Backdrop blur + fundo semi-transparente
- **Links**: Sobre, Tratamentos, Resultados, Depoimentos, FAQ, Localizacao
- **CTA**: Botao "Agendar" pill
- **Mobile**: Hamburger menu com overlay fullscreen

### FAB WhatsApp
- **Posicao**: Fixed bottom-right
- **Animacao**: Pulse ring continuo
- **Tooltip**: "Agendar pelo WhatsApp" on hover
- **Sempre visivel**: z-index 999

### Scroll Progress Bar
- **Posicao**: Fixed top, 2px
- **Cor**: var(--nude) com opacity .7
- **Comportamento**: Width proporcional ao scroll

---

## Direcao Visual Aplicada

### Paleta
- Background: #EDEBE8 (bege ambiente)
- Surface: #F4F2EF (off-white)
- Accent: #C8A88E (nude dourado)
- Dark: #2C2C2A / #1A1A18
- Grays: #8a8880, #b5b3ad

### Tipografia
- Headings: Instrument Serif 400 (72px hero → 56px H1 → 42px H2)
- Body: DM Sans 300-600 (18px body → 14px cards)
- Overlines: DM Sans 600, 11px, uppercase, letter-spacing 2.5px
- Quotes: Instrument Serif Italic

### Neumorfismo
- Cards: Shadow dual (luz + sombra)
- Icones: Shadow inset
- Hover: Shadow expand + translateY(-4px)

### Parallax
- Hero BG: 0.4x speed
- Aspas decorativas: 0.5x speed
- Mobile: Parallax desativado, substituido por reveal animations
- prefers-reduced-motion: Todas animacoes desativadas

---

## Fotos Utilizadas

| Foto | Secao | Uso |
|------|-------|-----|
| WhatsApp Image 2026-04-02 at 15.48.55.jpeg | Hero | Background full-bleed |
| PHOTO-2026-04-04-20-00-52.jpg | Sobre Mim | Foto sticky lateral |
| PHOTO-2026-04-04-20-23-41.jpg | Video | Poster do video |
| PHOTO-2026-04-04-20-29-24.jpg | CTA Final | Background sutil (8% opacity) |
| 737e9af6e92200d67f74d1e2b3bc7e7c.jpg | Resultados | Card 1 - sorriso close-up |
| 86c9eb98732773b862390cd105130593.jpg | Resultados | Card 2 - antes/depois |
| bc0ff64b9c00a8cd12ec6bd2a9f6ebdb.jpg | Resultados | Card 3 - sorriso espelho |
| mapa_dark_rota.png | Localizacao | Mapa estilizado |
| instagram.png | Localizacao | Icone social |
| whatsapp.png | Localizacao | Icone social |
| 38f26f0d188dc40183d3e896b8306a87_720w.mp4 | Video | Video institucional |

---

## Assets que Precisam ser Produzidos

1. **Logo SVG**: Converter o logo.png para SVG vetorial (para navbar e footer)
2. **Favicon**: Criar favicon a partir do monograma LR (16x16, 32x32, apple-touch-icon)
3. **OG Image**: Criar imagem 1200x630 para compartilhamento em redes sociais
4. **Fotos WebP**: Converter todas as fotos para WebP com fallback JPEG
5. **Fotos otimizadas**: Gerar srcset (390w, 768w, 1440w) para cada foto
6. **Video poster**: Extrair primeiro frame do video em alta qualidade

---

## Notas de Implementacao

### Performance
- Fontes com `font-display: swap` e preload
- Imagens com `loading="lazy"` (exceto hero)
- Video com `preload="none"`
- Animacoes usam apenas `transform` e `opacity` (GPU-accelerated)
- Parallax com `will-change: transform` e `requestAnimationFrame`
- Scroll listener com `{ passive: true }`

### Acessibilidade
- Todos CTAs com contraste AA+
- Focus ring em elementos interativos
- `aria-label` no FAB WhatsApp
- `alt` text em todas as imagens
- `prefers-reduced-motion` desativa todas animacoes

### Responsividade
- **Desktop**: 1200px max-width, grid 12 colunas, padding 80px
- **Tablet**: Grids reduzidos, padding 48px
- **Mobile**: Stack vertical, padding 20px, parallax desativado
- **Breakpoints**: 768px (mobile), 1024px (tablet)

### SEO
- Title tag e meta description otimizados
- Open Graph tags para compartilhamento
- Semantica HTML5 (section, nav, footer, article)
- Heading hierarchy correta (h1 > h2 > h3)
