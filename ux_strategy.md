# UX Strategy - Landing Page Dra. Leticia Ranghiere
## Documento de Estrategia Parallax & Conversao

---

## 1. MAPA DE SCROLL COMPLETO

### Ordem das Secoes e Alturas

| #  | Secao          | Altura Desktop | Altura Mobile | Scroll Acumulado |
|----|----------------|---------------|---------------|-----------------|
| 01 | Hero           | 100vh         | 100vh         | 0-100vh         |
| 02 | Sobre Mim      | 120vh         | 150vh         | 100-220vh       |
| 03 | Servicos       | 100vh         | 180vh         | 220-320vh       |
| 04 | Resultados     | 90vh          | 120vh         | 320-410vh       |
| 05 | Depoimentos    | 80vh          | 100vh         | 410-490vh       |
| 06 | Video          | 70vh          | 60vh          | 490-560vh       |
| 07 | Diferenciais   | 80vh          | 120vh         | 560-640vh       |
| 08 | FAQ            | 60vh          | 80vh          | 640-700vh       |
| 09 | Localizacao    | 70vh          | 80vh          | 700-770vh       |
| 10 | CTA Final      | 50vh          | 60vh          | 770-820vh       |

**Total estimado: ~820vh desktop / ~1050vh mobile**

### Diagrama ASCII - Fluxo de Scroll

```
VIEWPORT TOP
|
|  ╔══════════════════════════════════════════════╗
|  ║  01 HERO                              100vh ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │ BG Image (parallax 0.4)         │        ║
|  ║  │         ┌──────────────┐        │        ║
|  ║  │         │ Headline     │        │        ║
|  ║  │         │ Subtitle     │        │        ║
|  ║  │         │ [CTA >>>>]   │ speed 1.0       ║
|  ║  │         └──────────────┘        │        ║
|  ║  └─────────────────────────────────┘        ║
|  ║  --- scroll 80vh: headline fades out ---    ║
|  ╠══════════════════════════════════════════════╣
|  ║  02 SOBRE MIM                       120vh   ║
|  ║  ┌────────────┬────────────────────┐        ║
|  ║  │ Foto       │ Texto bio          │        ║
|  ║  │ (sticky)   │ (scroll normal)    │        ║
|  ║  │            │ Counters animados  │        ║
|  ║  └────────────┴────────────────────┘        ║
|  ║  --- reveal on scroll, foto sticky ---      ║
|  ╠══════════════════════════════════════════════╣
|  ║  03 SERVICOS                        100vh   ║
|  ║  ┌──────┬──────┬──────┐                     ║
|  ║  │Card 1│Card 2│Card 3│  stagger fade-in    ║
|  ║  └──────┴──────┴──────┘                     ║
|  ║  ┌──────┬──────┬──────┐                     ║
|  ║  │Card 4│Card 5│Card 6│  200ms delay each   ║
|  ║  └──────┴──────┴──────┘                     ║
|  ╠══════════════════════════════════════════════╣
|  ║  04 RESULTADOS                       90vh   ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │  Slider Antes/Depois            │        ║
|  ║  │  ◄═══════╪═══════►             │        ║
|  ║  │  BG parallax (0.3)              │        ║
|  ║  └─────────────────────────────────┘        ║
|  ╠══════════════════════════════════════════════╣
|  ║  05 DEPOIMENTOS                      80vh   ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │  Carousel horizontal            │        ║
|  ║  │  ← [Card] [Card] [Card] →      │        ║
|  ║  │  Aspas decorativas parallax     │        ║
|  ║  └─────────────────────────────────┘        ║
|  ╠══════════════════════════════════════════════╣
|  ║  06 VIDEO                             70vh  ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │  ┌───────────────────┐          │        ║
|  ║  │  │    ▶ Play         │ scale-in │        ║
|  ║  │  └───────────────────┘          │        ║
|  ║  └─────────────────────────────────┘        ║
|  ╠══════════════════════════════════════════════╣
|  ║  07 DIFERENCIAIS                      80vh  ║
|  ║  ┌──┐ ┌──┐ ┌──┐ ┌──┐                       ║
|  ║  │01│ │02│ │03│ │04│  reveal sequencial     ║
|  ║  └──┘ └──┘ └──┘ └──┘                       ║
|  ║  [CTA Secundario]                           ║
|  ╠══════════════════════════════════════════════╣
|  ║  08 FAQ                               60vh  ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │  Accordion items                │        ║
|  ║  │  + Pergunta 1                   │        ║
|  ║  │  + Pergunta 2                   │        ║
|  ║  │  + Pergunta 3                   │        ║
|  ║  └─────────────────────────────────┘        ║
|  ╠══════════════════════════════════════════════╣
|  ║  09 LOCALIZACAO                       70vh  ║
|  ║  ┌────────────┬────────────────────┐        ║
|  ║  │ Mapa dark  │ Info contato       │        ║
|  ║  │            │ Endereco           │        ║
|  ║  └────────────┴────────────────────┘        ║
|  ╠══════════════════════════════════════════════╣
|  ║  10 CTA FINAL                         50vh  ║
|  ║  ┌─────────────────────────────────┐        ║
|  ║  │  Headline impactante            │        ║
|  ║  │  [AGENDAR AVALIACAO >>>>]       │        ║
|  ║  │  BG parallax final (0.2)        │        ║
|  ║  └─────────────────────────────────┘        ║
|  ╚══════════════════════════════════════════════╝
|
VIEWPORT BOTTOM (~820vh)
```

---

## 2. EFEITOS PARALLAX DETALHADOS

### Secao 01 - Hero (0-100vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao |
|--------------------|-----------|-----------|-----------|------------------------------|---------|
| BG Image (Dra.)    | speed     | 0.4       | 0%        | linear                       | Y-down  |
| Overlay gradient   | fade      | —         | 60%       | ease-out                     | opacity |
| Headline           | speed     | 1.0       | 0%        | linear                       | Y-up    |
| Subtitle           | speed     | 0.9       | 0%        | linear                       | Y-up    |
| CTA Button         | speed     | 0.85      | 0%        | linear                       | Y-up    |
| Particulas douradas| speed     | 0.2       | 0%        | linear                       | Y-down  |

**Comportamento**: A imagem da Dra. Leticia se move a 40% da velocidade do scroll, criando profundidade. O texto sobe mais rapido que o fundo, gerando separacao visual. Ao atingir 80vh de scroll, o headline faz fade-out com `opacity: 0` e `translateY: -30px`.

**CSS Transform**:
```
hero-bg:    translateY(calc(var(--scroll) * 0.4))
headline:   translateY(calc(var(--scroll) * -0.1))  + opacity fade
particles:  translateY(calc(var(--scroll) * 0.6))
```

### Secao 02 - Sobre Mim (100-220vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Foto profissional  | sticky    | —         | 20%       | —                            | fixed    |
| Texto biografia    | reveal    | —         | 30%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| Counters (numeros) | reveal    | —         | 50%       | ease-out                     | count-up |
| Linha decorativa   | reveal    | —         | 25%       | ease-in-out                  | X-right  |

**Comportamento**: A foto da Dra. Leticia fica sticky no lado esquerdo enquanto o texto da biografia rola no lado direito. Os counters (5+ anos, 1000+ pacientes) fazem count-up animado ao entrar no viewport. Uma linha fina dourada (#C8A88E) se expande horizontalmente como separador.

**Counter Animation**:
```
0 → 1000+ pacientes  (duracao: 2s, easing: ease-out)
0 → 5+ anos          (duracao: 1.5s, easing: ease-out)
0 → 100% dedicacao   (duracao: 1.8s, easing: ease-out)
```

### Secao 03 - Servicos (220-320vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Titulo secao       | reveal    | —         | 20%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| Cards (6x)         | stagger   | —         | 30%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| BG pattern sutil   | speed     | 0.15      | 0%        | linear                       | Y-down   |

**Comportamento**: Cards aparecem em stagger (escalonados) com 150ms de delay entre cada. Cada card inicia em `translateY(40px) + opacity: 0` e anima para posicao final. No hover, card sobe 8px com sombra expandida.

**Stagger Timing**:
```
Card 1: delay 0ms
Card 2: delay 150ms
Card 3: delay 300ms
Card 4: delay 450ms
Card 5: delay 600ms
Card 6: delay 750ms
```

**Servicos sugeridos para os cards**:
1. Lentes de Contato Dental
2. Facetas em Porcelana
3. Clareamento Dental
4. Harmonizacao Facial
5. Botox e Preenchimento
6. Bichectomia

### Secao 04 - Resultados (320-410vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| BG textura         | speed     | 0.3       | 0%        | linear                       | Y-down   |
| Slider container   | reveal    | —         | 25%       | cubic-bezier(0.16,1,0.3,1)  | scale    |
| Badge "resultado"  | reveal    | —         | 40%       | ease-out-back                | scale    |

**Comportamento**: Secao com fundo escuro (#2C2C2A) para contraste. O slider antes/depois usa drag horizontal. Imagem entra com scale de 0.9 para 1.0. Background texture se move lentamente para criar profundidade.

### Secao 05 - Depoimentos (410-490vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Aspas decorativas  | speed     | 0.5       | 0%        | linear                       | Y-up     |
| Cards depoimento   | reveal    | —         | 25%       | cubic-bezier(0.16,1,0.3,1)  | X-left   |
| Estrelas rating    | stagger   | —         | 40%       | ease-out-back                | scale    |

**Comportamento**: Aspas gigantes (") em #C8A88E com opacity 0.1 fazem parallax sutil no fundo. Cards de depoimento entram deslizando da direita. Estrelas de avaliacao aparecem uma a uma com efeito bounce.

### Secao 06 - Video (490-560vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Video container    | reveal    | —         | 30%       | cubic-bezier(0.16,1,0.3,1)  | scale    |
| Play button        | reveal    | —         | 40%       | ease-out-back                | scale    |
| Moldura decorativa | reveal    | —         | 35%       | ease-out                     | opacity  |

**Comportamento**: Video entra com scale de 0.85 para 1.0. Play button faz pulse animation sutil ate ser clicado. Bordas arredondadas (24px) consistentes com a identidade visual. Video carrega em lazy-load.

### Secao 07 - Diferenciais (560-640vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Icones             | stagger   | —         | 25%       | ease-out-back                | scale    |
| Texto descritivo   | reveal    | —         | 30%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| Linha conectora    | reveal    | —         | 20%       | ease-in-out                  | X-right  |
| CTA Secundario     | reveal    | —         | 60%       | ease-out                     | Y-up     |

**Comportamento**: 4 diferenciais aparecem sequencialmente com icones que fazem scale bounce. Uma linha sutil conecta os itens. CTA secundario aparece ao final da secao.

**Diferenciais sugeridos**:
1. Planejamento Digital do Sorriso
2. Atendimento Humanizado
3. Tecnologia de Ponta
4. Resultados Naturais

### Secao 08 - FAQ (640-700vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Accordion items    | stagger   | —         | 20%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| Expand/collapse    | —         | —         | click     | cubic-bezier(0.4,0,0.2,1)   | Y-down   |

**Comportamento**: Items do accordion aparecem em stagger. Ao clicar, expand suave com max-height transition. Primeiro item ja vem aberto. Icone de + rotaciona 45 graus para virar x.

### Secao 09 - Localizacao (700-770vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| Mapa dark          | reveal    | —         | 25%       | cubic-bezier(0.16,1,0.3,1)  | X-left   |
| Info contato       | reveal    | —         | 30%       | cubic-bezier(0.16,1,0.3,1)  | X-right  |
| Pin animado        | reveal    | —         | 45%       | ease-out-back                | Y-down   |

**Comportamento**: Mapa e info entram de lados opostos. Pin do mapa faz bounce ao aparecer. Usar imagem estatica do mapa dark (mapa_dark_rota.png) em vez de embed do Google Maps para performance.

### Secao 10 - CTA Final (770-820vh)

| Layer              | Tipo       | Velocidade | Trigger   | Easing                      | Direcao  |
|--------------------|-----------|-----------|-----------|------------------------------|----------|
| BG gradient        | speed     | 0.2       | 0%        | linear                       | Y-down   |
| Headline           | reveal    | —         | 20%       | cubic-bezier(0.16,1,0.3,1)  | Y-up     |
| CTA Button         | reveal    | —         | 35%       | ease-out-back                | scale    |
| Glow effect        | reveal    | —         | 40%       | ease-in-out                  | pulse    |

**Comportamento**: Background com gradiente sutil de #EDEBE8 para #C8A88E. Botao principal com glow pulse continuo (#C8A88E com blur). Headline impactante com reveal. Botao link direto para WhatsApp.

---

## 3. ESTRATEGIA DE CONVERSAO

### 3.1 Mapa de Calor Esperado (Eye-tracking Projetado)

```
HERO:
╔══════════════════════════════════════╗
║                                      ║
║        ████████  ← Rosto Dra.        ║
║        ████████     (zona quente)     ║
║                                      ║
║     ▓▓▓▓▓▓▓▓▓▓▓▓  ← Headline        ║
║     ▓▓▓▓▓▓▓▓▓▓▓▓     (zona media)   ║
║                                      ║
║        ░░░░░░░  ← CTA Button         ║
║        ░░░░░░░     (zona acao)        ║
║                                      ║
╚══════════════════════════════════════╝

Legenda: ████ = Alta atencao
         ▓▓▓▓ = Media atencao
         ░░░░ = Zona de acao (clique)
```

**Padrao F invertido**: O olho segue rosto > headline > CTA. A foto da Dra. Leticia como ancora visual principal segura a atencao e direciona para o texto.

### 3.2 Posicionamento Estrategico dos CTAs

| CTA              | Secao      | Posicao    | Tipo       | Texto                              |
|------------------|-----------|------------|------------|-------------------------------------|
| CTA Primario     | Hero      | Centro     | Botao      | "Agendar Avaliacao"                |
| CTA Flutuante    | Global    | Bottom-right| Fab       | Icone WhatsApp                     |
| CTA Contextual   | Servicos  | Abaixo cards| Link      | "Saiba mais sobre [servico]"       |
| CTA Social Proof | Resultados| Apos slider| Botao      | "Quero meu sorriso tambem"        |
| CTA Urgencia     | Diferenciais| Final    | Botao      | "Agendar minha consulta"           |
| CTA Final        | CTA Final | Centro     | Botao grande| "Agendar pelo WhatsApp"           |

**Frequencia**: 1 CTA a cada ~200vh de scroll (nao invasivo, mas presente).

### 3.3 Micro-interacoes que Geram Engajamento

| Interacao              | Onde           | Trigger    | Efeito                          |
|------------------------|---------------|------------|----------------------------------|
| Hover cards servicos   | Secao 03      | mouseenter | translateY(-8px) + box-shadow    |
| Slider antes/depois    | Secao 04      | drag/touch | Revelacao horizontal interativa  |
| Counter count-up       | Secao 02      | scroll-in  | Numeros subindo de 0 ao valor    |
| Accordion expand       | Secao 08      | click      | Smooth height + icone rotation   |
| CTA hover glow         | Todos CTAs    | mouseenter | Box-shadow glow #C8A88E          |
| Fab WhatsApp pulse     | Global        | Interval   | Scale pulse a cada 5s            |
| Star rating appear     | Secao 05      | scroll-in  | Stars pop-in sequencial          |
| Play button pulse      | Secao 06      | Idle       | Scale 1.0→1.05→1.0 loop         |
| Pin bounce             | Secao 09      | scroll-in  | BounceIn do pin no mapa          |
| Scroll indicator       | Hero          | Idle       | Seta pulsando no bottom          |

### 3.4 Mobile-First - Adaptacoes dos Efeitos Parallax

**Regra geral**: Em mobile, parallax speed-based e DESATIVADO. Substituido por reveal animations (fade + translate) que sao mais performaticos em telas touch.

| Efeito Desktop               | Adaptacao Mobile                          |
|-------------------------------|-------------------------------------------|
| BG parallax speed 0.4        | Background fixo (background-attachment)    |
| Sticky foto (Sobre Mim)      | Foto acima do texto (layout empilhado)     |
| Stagger 6 cards lado a lado  | Stack vertical, 2 cards por vez            |
| Slider drag horizontal       | Swipe touch nativo                         |
| Carousel depoimentos         | Stack vertical com snap scroll             |
| Aspas parallax               | Aspas estaticas com opacity 0.05           |
| 4 diferenciais em linha      | 2x2 grid ou stack vertical                 |
| Mapa + info side by side     | Mapa em cima, info embaixo                 |

**prefers-reduced-motion**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .parallax-layer {
    transform: none !important;
  }
}
```

---

## 4. WIREFRAMES ASCII

### 4.1 Desktop (1440px) - Grid 12 colunas (120px cada)

**Grid Base**:
```
|  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  | 10  | 11  | 12  |
| gap | gap | gap | gap | gap | gap | gap | gap | gap | gap | gap | gap |
Container: max-width 1200px, margin 0 auto, padding 0 24px
Column gap: 24px
```

#### Hero (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: Foto Dra. Leticia (full-bleed, parallax layer)             │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  col 1-12                                                │   │
│  │                                                          │   │
│  │              ┌──────────────────────┐                    │   │
│  │              │  LOGO LR (monograma) │                    │   │
│  │              └──────────────────────┘                    │   │
│  │                                                          │   │
│  │         "Transformando sorrisos,                         │   │
│  │          elevando autoestima"                            │   │
│  │         Instrument Serif, 56px, #2C2C2A                  │   │
│  │                                                          │   │
│  │         Estetica Dental & Harmonizacao Facial            │   │
│  │         DM Sans, 18px, #8a8880                           │   │
│  │                                                          │   │
│  │              ┌─────────────────────┐                     │   │
│  │              │  AGENDAR AVALIACAO  │ btn                 │   │
│  │              │  bg:#C8A88E #fff    │ radius:24px         │   │
│  │              └─────────────────────┘                     │   │
│  │                                                          │   │
│  │                     ↓ (scroll indicator)                 │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

#### Sobre Mim (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #F4F2EF                                                     │
│                                                                  │
│  ┌────────────────────┐  ┌──────────────────────────────────┐   │
│  │  col 1-5           │  │  col 6-12                        │   │
│  │                    │  │                                    │   │
│  │  ┌──────────────┐  │  │  "Sobre a Dra. Leticia"           │   │
│  │  │              │  │  │  Instrument Serif, 40px            │   │
│  │  │  FOTO        │  │  │                                    │   │
│  │  │  PROFISSIONAL│  │  │  ─── linha dourada ───             │   │
│  │  │  (sticky)    │  │  │                                    │   │
│  │  │              │  │  │  Texto biografia com paixao pela   │   │
│  │  │  border-     │  │  │  odontologia estetica, formacao   │   │
│  │  │  radius:24px │  │  │  pela UNESP, especializacao...    │   │
│  │  │              │  │  │  DM Sans, 16px, #8a8880            │   │
│  │  └──────────────┘  │  │                                    │   │
│  │                    │  │  ┌────────┬────────┬────────┐      │   │
│  │                    │  │  │ 1000+  │  5+    │ 100%   │      │   │
│  │                    │  │  │pacient.│ anos   │ dedic. │      │   │
│  │                    │  │  │counter │counter │counter │      │   │
│  │                    │  │  └────────┴────────┴────────┘      │   │
│  │                    │  │  CRO/SP 133.036                    │   │
│  └────────────────────┘  └──────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

#### Servicos (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #EDEBE8                                                     │
│                                                                  │
│              "Tratamentos"                                       │
│              Instrument Serif, 40px, center                      │
│              "Seu sorriso merece o melhor"                       │
│              DM Sans, 16px, #8a8880                              │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  col 1-4     │  │  col 5-8     │  │  col 9-12    │          │
│  │  ┌────────┐  │  │  ┌────────┐  │  │  ┌────────┐  │          │
│  │  │ Icone  │  │  │  │ Icone  │  │  │  │ Icone  │  │          │
│  │  │ Lentes │  │  │  │Facetas │  │  │  │Clarear │  │          │
│  │  │        │  │  │  │        │  │  │  │        │  │          │
│  │  │ texto  │  │  │  │ texto  │  │  │  │ texto  │  │          │
│  │  └────────┘  │  │  └────────┘  │  │  └────────┘  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  col 1-4     │  │  col 5-8     │  │  col 9-12    │          │
│  │  ┌────────┐  │  │  ┌────────┐  │  │  ┌────────┐  │          │
│  │  │ Icone  │  │  │  │ Icone  │  │  │  │ Icone  │  │          │
│  │  │Harmoni.│  │  │  │ Botox  │  │  │  │Bichect.│  │          │
│  │  │        │  │  │  │        │  │  │  │        │  │          │
│  │  │ texto  │  │  │  │ texto  │  │  │  │ texto  │  │          │
│  │  └────────┘  │  │  └────────┘  │  │  └────────┘  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  Card style: bg #F4F2EF, border-radius 24px,                    │
│  shadow: 6px 6px 12px rgba(0,0,0,0.06)                          │
│  hover: translateY(-8px), shadow expand                          │
└──────────────────────────────────────────────────────────────────┘
```

#### Resultados (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #2C2C2A (dark section)                                      │
│                                                                  │
│              "Resultados Reais"                                  │
│              Instrument Serif, 40px, #F4F2EF, center             │
│              "Sorrisos transformados com dedicacao"               │
│              DM Sans, 16px, #b5b3ad                              │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  col 2-11 (centrado)                                     │   │
│  │  ┌──────────────────────────────────────────────────┐    │   │
│  │  │                    │                              │    │   │
│  │  │     ANTES          │         DEPOIS               │    │   │
│  │  │                    │                              │    │   │
│  │  │               ◄════╪════►                         │    │   │
│  │  │                 (slider drag)                      │    │   │
│  │  │                                                    │    │   │
│  │  └──────────────────────────────────────────────────┘    │   │
│  │  border-radius: 24px, overflow: hidden                    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│              ┌──────────────────────────┐                        │
│              │ QUERO MEU SORRISO TAMBEM │ btn outline #C8A88E    │
│              └──────────────────────────┘                        │
└──────────────────────────────────────────────────────────────────┘
```

#### Depoimentos (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #F4F2EF                                                     │
│  "  (aspas decorativas parallax, #C8A88E opacity 0.08)          │
│                                                                  │
│              "O que dizem nossos pacientes"                      │
│              Instrument Serif, 40px, center                      │
│                                                                  │
│  ◄  ┌──────────┐  ┌──────────┐  ┌──────────┐  ►               │
│     │  col 1-4 │  │  col 5-8 │  │ col 9-12 │                   │
│     │  ★★★★★   │  │  ★★★★★   │  │  ★★★★★   │                   │
│     │          │  │          │  │          │                   │
│     │ "Depoi-  │  │ "Depoi-  │  │ "Depoi-  │                   │
│     │  mento   │  │  mento   │  │  mento   │                   │
│     │  texto"  │  │  texto"  │  │  texto"  │                   │
│     │          │  │          │  │          │                   │
│     │ — Nome   │  │ — Nome   │  │ — Nome   │                   │
│     └──────────┘  └──────────┘  └──────────┘                   │
│                                                                  │
│                    ● ○ ○  (dots navegacao)                       │
└──────────────────────────────────────────────────────────────────┘
```

#### Video (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #EDEBE8                                                     │
│                                                                  │
│              "Conheca nosso trabalho"                            │
│              Instrument Serif, 40px, center                      │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  col 2-11 (centrado)                                     │   │
│  │  ┌──────────────────────────────────────────────────┐    │   │
│  │  │                                                    │    │   │
│  │  │                                                    │    │   │
│  │  │                    ▶                               │    │   │
│  │  │              (play button)                         │    │   │
│  │  │                                                    │    │   │
│  │  │                                                    │    │   │
│  │  └──────────────────────────────────────────────────┘    │   │
│  │  border-radius: 24px, aspect-ratio: 16/9                 │   │
│  │  poster: frame do video                                   │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

#### Diferenciais (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #F4F2EF                                                     │
│                                                                  │
│              "Por que a Dra. Leticia?"                           │
│              Instrument Serif, 40px, center                      │
│                                                                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐│
│  │  col 1-3   │  │  col 4-6   │  │  col 7-9   │  │ col 10-12  ││
│  │    ◎       │  │    ◎       │  │    ◎       │  │    ◎       ││
│  │ Planejam.  │  │ Atendim.   │  │ Tecnolog.  │  │ Resultad.  ││
│  │ Digital    │  │ Humanizado │  │ de Ponta   │  │ Naturais   ││
│  │            │  │            │  │            │  │            ││
│  │ descricao  │  │ descricao  │  │ descricao  │  │ descricao  ││
│  │ curta      │  │ curta      │  │ curta      │  │ curta      ││
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘│
│                                                                  │
│              ┌──────────────────────────┐                        │
│              │  AGENDAR MINHA CONSULTA  │ btn #C8A88E            │
│              └──────────────────────────┘                        │
└──────────────────────────────────────────────────────────────────┘
```

#### FAQ (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #EDEBE8                                                     │
│                                                                  │
│              "Perguntas Frequentes"                              │
│              Instrument Serif, 40px, center                      │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  col 3-10 (centrado, max-width 720px)                    │   │
│  │                                                          │   │
│  │  ┌────────────────────────────────────────────────┐      │   │
│  │  │  - Quanto tempo dura o tratamento?          ▼  │      │   │
│  │  │    Resposta expandida aqui...                   │      │   │
│  │  └────────────────────────────────────────────────┘      │   │
│  │  ┌────────────────────────────────────────────────┐      │   │
│  │  │  + O procedimento doi?                         │      │   │
│  │  └────────────────────────────────────────────────┘      │   │
│  │  ┌────────────────────────────────────────────────┐      │   │
│  │  │  + Qual o valor da consulta?                   │      │   │
│  │  └────────────────────────────────────────────────┘      │   │
│  │  ┌────────────────────────────────────────────────┐      │   │
│  │  │  + Aceita convenio?                            │      │   │
│  │  └────────────────────────────────────────────────┘      │   │
│  │  ┌────────────────────────────────────────────────┐      │   │
│  │  │  + Como funciona a primeira consulta?          │      │   │
│  │  └────────────────────────────────────────────────┘      │   │
│  └──────────────────────────────────────────────────────────┘   │
│  Item style: bg #F4F2EF, border-radius 16px, gap 12px           │
└──────────────────────────────────────────────────────────────────┘
```

#### Localizacao (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: #2C2C2A (dark section)                                      │
│                                                                  │
│              "Onde Estamos"                                      │
│              Instrument Serif, 40px, #F4F2EF, center             │
│                                                                  │
│  ┌────────────────────────┐  ┌──────────────────────────────┐   │
│  │  col 1-6               │  │  col 7-12                    │   │
│  │  ┌──────────────────┐  │  │                              │   │
│  │  │                  │  │  │  Ribeirao Preto, SP          │   │
│  │  │   MAPA DARK      │  │  │  [endereco completo]         │   │
│  │  │   (imagem)       │  │  │                              │   │
│  │  │       📍         │  │  │  ☎ (16) 99142-0404          │   │
│  │  │                  │  │  │                              │   │
│  │  └──────────────────┘  │  │  Horarios:                   │   │
│  │  border-radius: 24px   │  │  Seg-Sex: 8h-18h             │   │
│  └────────────────────────┘  │  Sab: 8h-12h                 │   │
│                              │                              │   │
│                              │  [Icone Instagram] [WhatsApp]│   │
│                              └──────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

#### CTA Final (Desktop 1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  BG: gradient #EDEBE8 → #C8A88E (20% opacity)                   │
│                                                                  │
│              "Seu novo sorriso                                   │
│               comeca aqui"                                       │
│              Instrument Serif, 48px, #2C2C2A, center             │
│                                                                  │
│              "Agende sua avaliacao e descubra                    │
│               o melhor tratamento para voce"                     │
│              DM Sans, 18px, #8a8880                              │
│                                                                  │
│              ┌────────────────────────────────┐                  │
│              │   AGENDAR PELO WHATSAPP  📱   │                  │
│              │   bg:#C8A88E, color:#fff       │                  │
│              │   padding: 20px 48px           │                  │
│              │   border-radius: 24px          │                  │
│              │   glow: 0 0 30px #C8A88E40     │                  │
│              └────────────────────────────────┘                  │
│                                                                  │
│  ─────────────────────────────────────────────────               │
│  Footer: DRA.LETICIA RANGHIERE - ODONTOLOGIA                    │
│  CRO/SP 133.036 | Todos os direitos reservados                  │
└──────────────────────────────────────────────────────────────────┘
```

### 4.2 Mobile (390px) - Grid 4 colunas

**Grid Base Mobile**:
```
|  1  |  2  |  3  |  4  |
Container: padding 0 20px
Column gap: 16px
```

#### Hero (Mobile 390px)

```
┌────────────────────┐
│ BG: Foto Dra.      │
│ (fixed, no parallax)│
│                    │
│  LOGO LR           │
│                    │
│  "Transformando    │
│   sorrisos,        │
│   elevando         │
│   autoestima"      │
│  Instrument Serif  │
│  36px              │
│                    │
│  Estetica Dental   │
│  & Harmonizacao    │
│  DM Sans, 14px     │
│                    │
│ ┌────────────────┐ │
│ │AGENDAR AVALIACAO│ │
│ │ full-width btn │ │
│ └────────────────┘ │
│                    │
│        ↓           │
└────────────────────┘
```

#### Sobre Mim (Mobile 390px)

```
┌────────────────────┐
│ BG: #F4F2EF        │
│                    │
│ ┌────────────────┐ │
│ │                │ │
│ │ FOTO           │ │
│ │ PROFISSIONAL   │ │
│ │ (nao sticky)   │ │
│ │ aspect: 4/5    │ │
│ └────────────────┘ │
│                    │
│ "Sobre a           │
│  Dra. Leticia"     │
│ Instrument Serif   │
│ 28px               │
│                    │
│ ── linha dourada ──│
│                    │
│ Texto bio...       │
│ DM Sans, 14px      │
│                    │
│ ┌─────┬─────┬─────┐│
│ │1000+│ 5+  │100% ││
│ │pac. │anos │ded. ││
│ └─────┴─────┴─────┘│
│ CRO/SP 133.036     │
└────────────────────┘
```

#### Servicos (Mobile 390px)

```
┌────────────────────┐
│ BG: #EDEBE8        │
│                    │
│ "Tratamentos"      │
│ 28px, center       │
│                    │
│ ┌───────┬────────┐ │
│ │Lentes │Facetas │ │
│ │       │        │ │
│ └───────┴────────┘ │
│ ┌───────┬────────┐ │
│ │Clarear│Harmon. │ │
│ │       │        │ │
│ └───────┴────────┘ │
│ ┌───────┬────────┐ │
│ │Botox  │Bichect.│ │
│ │       │        │ │
│ └───────┴────────┘ │
│                    │
│ Grid: 2 colunas    │
│ gap: 16px          │
└────────────────────┘
```

#### Demais secoes Mobile seguem o padrao:

```
Resultados:   Slider full-width, swipe touch
Depoimentos:  Stack vertical, scroll-snap horizontal
Video:        Full-width, aspect 16:9
Diferenciais: Stack vertical (1 por linha) ou 2x2
FAQ:          Full-width accordion
Localizacao:  Mapa full-width acima, info abaixo
CTA Final:    Botao full-width, texto centralizado
```

---

## 5. ESPECIFICACOES TECNICAS

### 5.1 Intersection Observer Configuration

```javascript
// Observer para reveal animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  {
    threshold: 0.2,      // 20% visivel = trigger
    rootMargin: '0px 0px -50px 0px'  // offset 50px do bottom
  }
);

// Observer para counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observer para stagger animations
const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.stagger-item');
        items.forEach((item, i) => {
          item.style.transitionDelay = `${i * 150}ms`;
          item.classList.add('revealed');
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
```

### 5.2 Parallax Scroll Handler

```javascript
// Performance-optimized parallax (rAF + will-change)
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;

  // Desativar parallax em mobile ou prefers-reduced-motion
  if (window.innerWidth < 768 || prefersReducedMotion()) return;

  document.querySelectorAll('[data-parallax-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.parallaxSpeed);
    const rect = el.getBoundingClientRect();
    const offset = (rect.top + scrollY) * speed;
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

### 5.3 CSS Scroll-Snap Points

```css
/* Scroll snap apenas no mobile para secoes principais */
@media (max-width: 767px) {
  .page-container {
    scroll-snap-type: y proximity; /* proximity, nao mandatory */
  }

  .section {
    scroll-snap-align: start;
    scroll-snap-stop: normal; /* permite pular secoes */
  }
}

/* Carousel depoimentos - snap horizontal */
.testimonials-track {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.testimonial-card {
  scroll-snap-align: center;
  flex: 0 0 85%; /* card ocupa 85% da tela */
}
```

### 5.4 Performance Budget

| Metrica               | Target         | Estrategia                                |
|------------------------|---------------|-------------------------------------------|
| FPS durante scroll     | 60fps         | will-change, translate3d, passive events  |
| First Contentful Paint | < 1.5s        | Critical CSS inline, font preload         |
| Largest Contentful Paint| < 2.5s       | Hero image otimizada, srcset, preload     |
| Total Blocking Time    | < 200ms       | Defer non-critical JS                     |
| Cumulative Layout Shift| < 0.1         | Aspect ratios definidos, font-display swap|
| Bundle JS              | < 50KB gzip   | Vanilla JS, sem framework pesado          |
| Total page weight      | < 2MB         | WebP images, lazy load, video poster      |

### 5.5 Otimizacoes de Performance

```
IMAGENS:
- Hero: WebP, max 1920px wide, quality 80, preload
- Fotos: WebP, srcset (390, 768, 1440), lazy load
- Mapa: WebP, max 800px, lazy load
- Logo: SVG inline (nao PNG)

FONTES:
- DM Sans: woff2, preload 400+500 weights
- Instrument Serif: woff2, preload 400 weight
- font-display: swap (evita FOIT)

VIDEO:
- Poster frame estatico (primeiro frame)
- Lazy load (nao carregar ate scroll near)
- Preload: none
- playsinline (mobile)

CSS:
- Critical CSS inline no <head> (hero + above fold)
- Restante: async load
- will-change apenas nos elementos parallax ativos
- Remover will-change apos animacao completa
```

### 5.6 Fallbacks para Dispositivos Lentos

```javascript
// Detectar dispositivos de baixa performance
function isLowEndDevice() {
  const memory = navigator.deviceMemory; // GB
  const cores = navigator.hardwareConcurrency;
  const connection = navigator.connection?.effectiveType;

  return (
    (memory && memory <= 2) ||
    (cores && cores <= 2) ||
    (connection && ['slow-2g', '2g'].includes(connection))
  );
}

// Estrategia de degradacao progressiva
if (isLowEndDevice() || prefersReducedMotion()) {
  // Nivel 1: Desativar parallax completamente
  document.documentElement.classList.add('no-parallax');

  // Nivel 2: Simplificar animacoes para fade simples
  document.documentElement.classList.add('simple-animations');

  // Nivel 3: Reduzir qualidade de imagens
  document.querySelectorAll('img[data-src-low]').forEach(img => {
    img.src = img.dataset.srcLow;
  });
}
```

```css
/* Fallback: sem parallax */
.no-parallax [data-parallax-speed] {
  transform: none !important;
}

/* Fallback: animacoes simples */
.simple-animations .reveal-item {
  transition: opacity 0.3s ease;
  transform: none;
}

.simple-animations .reveal-item.revealed {
  opacity: 1;
}
```

### 5.7 CSS Custom Properties (Design Tokens)

```css
:root {
  /* Cores */
  --color-bg:        #EDEBE8;
  --color-surface:   #F4F2EF;
  --color-accent:    #C8A88E;
  --color-dark:      #2C2C2A;
  --color-gray:      #8a8880;
  --color-light-gray:#b5b3ad;

  /* Tipografia */
  --font-body:       'DM Sans', sans-serif;
  --font-heading:    'Instrument Serif', serif;

  /* Espacamento */
  --section-padding:  120px 0;
  --container-max:    1200px;
  --border-radius:    24px;
  --card-radius:      24px;

  /* Sombras (neumorfismo suave) */
  --shadow-card:      6px 6px 12px rgba(0,0,0,0.06),
                      -4px -4px 8px rgba(255,255,255,0.8);
  --shadow-hover:     8px 8px 20px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,0.9);

  /* Animacao */
  --ease-reveal:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-bounce:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-reveal:  0.8s;
  --duration-stagger: 150ms;

  /* Mobile overrides */
  @media (max-width: 767px) {
    --section-padding: 80px 0;
  }
}
```

---

## RESUMO EXECUTIVO

### Principios de Design
1. **Elegancia sutil** - Parallax existe para criar profundidade, nao para impressionar
2. **Mobile-first** - Tudo funciona perfeitamente sem parallax
3. **Performance** - 60fps e nao-negociavel
4. **Conversao** - Cada elemento guia para o WhatsApp
5. **Acessibilidade** - Respeita prefers-reduced-motion

### Fluxo Emocional do Scroll
```
HERO:       Impacto visual → confianca imediata
SOBRE:      Conexao pessoal → credibilidade
SERVICOS:   Clareza → "isso e o que eu preciso"
RESULTADOS: Prova social visual → desejo
DEPOIMENTOS:Validacao social → seguranca
VIDEO:      Proximidade → humanizacao
DIFERENCIAL:Racional → justificativa da escolha
FAQ:        Remocao de objecoes → seguranca final
LOCAL:      Praticidade → "e perto de mim"
CTA FINAL:  Urgencia sutil → acao
```

### Metricas de Sucesso Esperadas
- **Scroll depth > 70%**: usuario engajado ate depoimentos
- **Click-through CTA**: 3-5% da hero, 8-12% do CTA final
- **Tempo na pagina**: 2-4 minutos (indica leitura real)
- **Bounce rate**: < 40% (mobile), < 30% (desktop)
