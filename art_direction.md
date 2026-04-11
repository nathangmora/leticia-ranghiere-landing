# Art Direction - Landing Page Dra. Leticia Ranghiere

---

## 1. MOODBOARD CONCEITUAL

### Palavras-chave
**Sofisticação** | **Naturalidade** | **Confiança**

### Atmosfera Visual
A landing page deve evocar a sensação de entrar em uma clínica premium de alto padrão em Ribeirão Preto. O mood é de **luxo silencioso** (*quiet luxury*) — nada ostensivo, tudo cuidadosamente curado. A paleta neutra e terrosa transmite acolhimento e confiança, enquanto os detalhes dourados comunicam exclusividade sem exagero.

### Referências Descritivas
- **Texturas**: Linho cru, mármore carrara com veios dourados, couro nude acetinado, superfícies cerâmicas mates
- **Iluminação**: Luz natural suave de fim de tarde — *golden hour* difusa, sem sombras duras. Iluminação indireta LED quente como na clínica (visível nas fotos)
- **Materiais**: Madeira clara (carvalho natural), metais dourados escovados, vidro fosco, porcelana
- **Ambientação**: Minimalismo aquecido — espaços limpos mas não frios. A clínica da Dra. Leticia já comunica isso perfeitamente nas fotos (tons de madeira clara, mármore, iluminação indireta)

### Mood Geral
A página deve sentir como uma **consulta premium**: a paciente se sente acolhida, segura e em mãos de uma profissional que domina tanto a técnica quanto a arte. Cada elemento visual deve reforçar que beleza natural e ciência caminham juntas.

---

## 2. PALETA EXPANDIDA

### Cores Primárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Bege Ambiente** | `#EDEBE8` | 237, 235, 232 | Background principal da página |
| **Off-White** | `#F4F2EF` | 244, 242, 239 | Cards, surfaces elevadas, seções alternadas |
| **Nude Dourado** | `#C8A88E` | 200, 168, 142 | Accent principal: CTAs, links, destaques, overlines |
| **Grafite Escuro** | `#2C2C2A` | 44, 44, 42 | Headings, textos principais, seções dark |

### Cores Secundárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Gray Warm** | `#8A8880` | 138, 136, 128 | Texto secundário, subtítulos, parágrafos |
| **Gray Light** | `#B5B3AD` | 181, 179, 173 | Captions, labels, metadata, placeholders |
| **Nude Light** | `#D9C4B0` | 217, 196, 176 | Hover de accent, bordas sutis, dividers |
| **Nude Deep** | `#B8936F` | 184, 147, 111 | Active state do accent, ícones em destaque |
| **Cream** | `#FAF8F5` | 250, 248, 245 | Background de modais, tooltips, hero overlay |

### Cores para Seções Dark

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Dark BG** | `#1A1A18` | 26, 26, 24 | Background seções escuras (resultados, mapa) |
| **Dark Surface** | `#242422` | 36, 36, 34 | Cards sobre fundo dark |
| **Dark Elevated** | `#2E2E2C` | 46, 46, 44 | Hover de cards em seção dark |

### Gradientes

```css
/* CTA Principal (WhatsApp) */
--gradient-whatsapp: linear-gradient(135deg, #2BD96B, #25D366);

/* Hero overlay (texto sobre foto) */
--gradient-hero-bottom: linear-gradient(to top, rgba(26,26,24,0.85) 0%, rgba(26,26,24,0.4) 50%, transparent 100%);

/* Hero overlay lateral */
--gradient-hero-side: linear-gradient(to right, rgba(26,26,24,0.7) 0%, transparent 60%);

/* Accent sutil para backgrounds */
--gradient-nude: linear-gradient(145deg, #D9C4B0, #C8A88E);

/* Seção de transição claro → escuro */
--gradient-section-dark: linear-gradient(to bottom, #EDEBE8 0%, #2C2C2A 100%);

/* Shimmer para botões */
--gradient-shimmer: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);

/* Card premium highlight */
--gradient-card-glow: linear-gradient(135deg, rgba(200,168,142,0.08) 0%, transparent 60%);
```

### Estados Interativos

| Estado | Cor/Efeito | Contexto |
|--------|------------|----------|
| **Hover (light)** | `#B8936F` | Links, botões accent em fundo claro |
| **Hover (dark)** | `#D9C4B0` | Links em seção dark |
| **Active/Pressed** | `#A67D5B` | Press state de botões |
| **Focus ring** | `0 0 0 3px rgba(200,168,142,0.4)` | Outline de acessibilidade |
| **Disabled** | `#B5B3AD` com `opacity: 0.5` | Botões e inputs inativos |
| **Success** | `#25D366` | Confirmações, WhatsApp |
| **Error** | `#D94B4B` | Validação de formulários |

### Cores de Overlay para Fotos

```css
/* Overlay escuro para texto sobre foto */
--photo-overlay-dark: rgba(26, 26, 24, 0.55);

/* Overlay nude para efeito warm */
--photo-overlay-warm: rgba(200, 168, 142, 0.12);

/* Overlay para seção de resultados */
--photo-overlay-results: rgba(26, 26, 24, 0.70);

/* Duotone base */
--photo-duotone-shadow: #2C2C2A;
--photo-duotone-highlight: #D9C4B0;
```

### Tratamento de Cor para Fotos
- **Saturação**: Reduzir em 15-20% para uniformizar o tom quente
- **Temperatura**: Shift sutil para warm (+5-8%)
- **Contraste**: Levantar levemente (+5%) para manter nitidez sem agressividade
- **Filtro CSS global**: `filter: saturate(0.82) contrast(1.05) brightness(1.02)`

---

## 3. TIPOGRAFIA COMPLETA

### Font Stack
```css
--font-heading: 'Instrument Serif', Georgia, 'Times New Roman', serif;
--font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
```

### Rationale do Pairing
**Instrument Serif** é uma serifa editorial moderna com personalidade caligráfica (especialmente em itálico). Ela comunica sofisticação e feminilidade sem parecer datada. **DM Sans** é uma geométrica humanista que complementa com clareza e legibilidade, trazendo o lado técnico e confiável. O contraste serifa decorativa + sans limpa é o padrão da estética premium contemporânea.

### Hierarquia Tipográfica

#### Desktop (>1024px)

| Nível | Font | Peso | Tamanho | Line-Height | Letter-Spacing | Uso |
|-------|------|------|---------|-------------|----------------|-----|
| **Display** | Instrument Serif | 400 | 72px | 1.0 | -2px | Hero headline principal |
| **H1** | Instrument Serif | 400 | 56px | 1.08 | -1.5px | Título de seção principal |
| **H2** | Instrument Serif | 400 | 42px | 1.12 | -1px | Subtítulo de seção |
| **H3** | DM Sans | 600 | 28px | 1.3 | -0.5px | Título de card, subsection |
| **H4** | DM Sans | 600 | 22px | 1.35 | -0.3px | Título menor, FAQ question |
| **H5** | DM Sans | 500 | 18px | 1.4 | 0 | Labels, nomes em depoimentos |
| **H6** | DM Sans | 500 | 16px | 1.45 | 0 | Cabeçalhos terciários |
| **Body L** | DM Sans | 300 | 18px | 1.75 | 0 | Parágrafo principal, sobre mim |
| **Body** | DM Sans | 300 | 16px | 1.7 | 0 | Texto geral do corpo |
| **Body S** | DM Sans | 400 | 14px | 1.65 | 0 | Descrições de cards, detalhes |
| **Caption** | DM Sans | 300 | 13px | 1.5 | 0 | Notas de rodapé, CRO |
| **Overline** | DM Sans | 600 | 11px | 1.2 | 2.5px | Labels de seção (UPPERCASE) |
| **Overline L** | DM Sans | 600 | 13px | 1.2 | 3px | Labels de seção grandes |
| **Stat Number** | Instrument Serif | 400 | 48px | 1.0 | -1px | Contadores animados |
| **Stat Label** | DM Sans | 600 | 10px | 1.2 | 1.5px | Labels sob contadores |
| **Quote** | Instrument Serif Italic | 400 | 20px | 1.65 | 0 | Depoimentos, citações |
| **CTA** | DM Sans | 600 | 16px | 1.0 | 0.3px | Texto de botões |

#### Mobile (<768px)

| Nível | Tamanho | Line-Height |
|-------|---------|-------------|
| **Display** | 42px | 1.05 |
| **H1** | 36px | 1.1 |
| **H2** | 30px | 1.15 |
| **H3** | 24px | 1.3 |
| **H4** | 20px | 1.35 |
| **H5** | 17px | 1.4 |
| **H6** | 15px | 1.45 |
| **Body L** | 17px | 1.7 |
| **Body** | 15px | 1.7 |
| **Body S** | 13px | 1.6 |
| **Caption** | 12px | 1.5 |
| **Overline** | 10px | 1.2 |
| **Stat Number** | 32px | 1.0 |
| **Quote** | 17px | 1.6 |
| **CTA** | 15px | 1.0 |

#### Tablet (768px-1024px)
Interpolar linearmente entre mobile e desktop usando `clamp()`:
```css
/* Exemplo */
font-size: clamp(36px, 4vw + 12px, 56px);
```

---

## 4. GRID E ESPACAMENTO

### Sistema de Grid

```
Desktop (>1200px):
  Colunas: 12
  Gutter: 32px
  Margin lateral: 80px
  Max-width conteudo: 1200px

Tablet (768px-1200px):
  Colunas: 8
  Gutter: 24px
  Margin lateral: 48px
  Max-width conteudo: 100%

Mobile (<768px):
  Colunas: 4
  Gutter: 16px
  Margin lateral: 20px
  Max-width conteudo: 100%
```

### Breakpoints

| Nome | Valor | Uso |
|------|-------|-----|
| **xs** | 0-479px | Mobile pequeno |
| **sm** | 480-767px | Mobile grande |
| **md** | 768-1023px | Tablet |
| **lg** | 1024-1199px | Laptop |
| **xl** | 1200-1439px | Desktop |
| **2xl** | 1440px+ | Telas grandes |

### Scale de Espacamento (base 4px)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Micro gaps (ícone-texto inline) |
| `--space-2` | 8px | Gap entre elementos inline |
| `--space-3` | 12px | Padding interno de badges |
| `--space-4` | 16px | Gap entre items de lista, padding de input |
| `--space-5` | 20px | Padding de mobile containers |
| `--space-6` | 24px | Padding de cards, gap de grid |
| `--space-8` | 32px | Gap entre blocos de conteudo |
| `--space-10` | 40px | Margem entre subsections |
| `--space-12` | 48px | Separacao entre componentes |
| `--space-16` | 64px | Separacao entre secoes (mobile) |
| `--space-20` | 80px | Separacao entre secoes (desktop) |
| `--space-24` | 96px | Padding vertical de secoes |
| `--space-32` | 128px | Hero spacing, grandes separacoes |

### Max-widths

```css
--max-content: 1200px;      /* Container principal */
--max-text: 680px;           /* Blocos de texto (sobre mim, FAQ) */
--max-heading: 800px;        /* Headings de secao */
--max-card-grid: 1040px;     /* Grid de cards de servico */
```

---

## 5. TRATAMENTO FOTOGRAFICO

### Inventario e Direcionamento por Foto

#### Foto 1 — Retrato Profissional (Hero)
**Arquivo**: `WhatsApp Image 2026-04-02 at 15.48.55.jpeg`
**Descricao**: Dra. Leticia de frente, blusa preta, fundo neutro, postura confiante
**Uso**: **Hero section** — imagem principal da landing page
**Tratamento**:
- Crop: 16:9 (desktop) com ponto focal no rosto, 3:4 (mobile) centralizado
- Overlay: `--gradient-hero-side` partindo da esquerda para colocar texto
- Saturacao: -15%, brightness +3%, contraste +5%
- Fundo neutro original e perfeito — nao alterar
- Em desktop, a imagem ocupa 55% da largura a direita, texto a esquerda
- Em mobile, imagem full-width com gradient de baixo para cima e texto sobre

#### Foto 2 — Procedimento (Harmonizacao)
**Arquivo**: `WhatsApp Image 2026-04-03 at 23.22.57.jpeg`
**Descricao**: Dra. Leticia aplicando injecao facial em paciente, ambiente clinico sofisticado
**Uso**: **Secao Sobre Mim** ou **Servicos** — demonstra competencia tecnica
**Tratamento**:
- Crop: 4:3 (desktop), 1:1 (card em mobile)
- Filtro warm sutil: `sepia(0.08) saturate(0.85)`
- A iluminacao da clinica ja esta excelente (LED quente) — preservar
- Border-radius: 24px
- Sombra neumorfismo suave

#### Foto 3 — Clinica com Paciente (Espelho)
**Arquivo**: `PHOTO-2026-04-04-20-00-52.jpg`
**Descricao**: Dra. Leticia atendendo paciente que segura espelho, clinica de madeira clara
**Uso**: **Secao Sobre Mim** — mostra acolhimento e humanidade
**Tratamento**:
- Crop: 3:4 (vertical) ou 1:1
- Esta foto comunica o ambiente premium da clinica — excelente para mostrar o espaco
- Manter tons naturais — a madeira e a iluminacao ja estao no mood certo
- Filtro: `saturate(0.88) brightness(1.03)`

#### Foto 4 — Planejamento Digital
**Arquivo**: `PHOTO-2026-04-04-20-23-41.jpg`
**Descricao**: Dra. Leticia com caneta digital sobre tablet, planejando tratamento
**Uso**: **Secao Diferenciais** — tecnologia + planejamento
**Tratamento**:
- Crop: 16:9 ou 3:2
- Mostra o lado tecnologico e meticuloso — ideal para "Planejamento Digital"
- Manter sem filtro forte — a foto ja tem tom quente natural
- Pode receber overlay sutil nude: `rgba(200,168,142,0.06)`

#### Foto 5 — Retrato na Clinica (Tablet)
**Arquivo**: `PHOTO-2026-04-04-20-29-24.jpg`
**Descricao**: Dra. Leticia sorrindo na clinica, olhando para camera, tablet com casos
**Uso**: **CTA Final** ou **Hero alternativo** — excelente retrato acolhedor
**Tratamento**:
- Crop: 3:4 (mobile), 16:9 (desktop com crop no rosto/busto)
- Sorriso natural, ambiente premium — perfeita para seção de fechamento
- Filtro leve: `saturate(0.85) contrast(1.04)`
- Pode ser usada com overlay para CTA final

#### Foto 6 — Sorriso Close-up (Lentes)
**Arquivo**: `737e9af6e92200d67f74d1e2b3bc7e7c.jpg`
**Descricao**: Close de sorriso com dentes perfeitos e labios rosados
**Uso**: **Secao Resultados** ou card de "Lentes de Contato Dental"
**Tratamento**:
- Crop: 1:1 ou 4:5
- Saturacao: manter — os tons de pele e labios estao ricos
- Excelente para slider de antes/depois ou card destaque
- Border-radius: 24px, sem overlay

#### Foto 7 — Antes/Depois Clareamento
**Arquivo**: `86c9eb98732773b862390cd105130593.jpg`
**Descricao**: Split-screen de sorriso antes e depois de tratamento dental
**Uso**: **Secao Resultados** — prova visual
**Tratamento**:
- Manter o split original — ja esta no formato ideal
- Crop: 16:9 ou 3:2
- Adicionar label "Antes" e "Depois" com overline style
- Sem filtro — manter fidelidade clinica
- Border-radius: 24px

#### Foto 8 — Preenchimento Labial
**Arquivo**: `904521b47c29e903be7b18410c1d9b31.jpg`
**Descricao**: Close de labios recebendo injecao de preenchimento
**Uso**: Card de servico **"Preenchimento Labial"**
**Tratamento**:
- Crop: 1:1 (card) ou 4:5
- Saturacao: -10% para manter elegancia
- Imagem impactante — usar em card com hover reveal
- Border-radius: 24px

#### Foto 9 — Sorriso com Espelho Clinico
**Arquivo**: `bc0ff64b9c00a8cd12ec6bd2a9f6ebdb.jpg`
**Descricao**: Close de sorriso com espelho odontologico
**Uso**: Card de servico **"Estetica Dental"** ou background de secao
**Tratamento**:
- Crop: 3:4 (mobile card)
- Manter tons quentes — o tom de pele esta rico
- Pode receber overlay para texto: `rgba(26,26,24,0.6)`

#### Foto 10 — Paciente em Tratamento Dental
**Arquivo**: `065aa300e14fd2065a4341650d49040e.jpg`
**Descricao**: Paciente sorrindo no consultorio durante tratamento
**Uso**: **Secao Servicos** ou background
**Tratamento**:
- Tom azulado da cadeira odontologica — aplicar filtro warm para harmonizar
- `sepia(0.12) saturate(0.80) brightness(1.05)`
- Crop: 16:9 para banner, 1:1 para card

#### Foto 11 — Rugas/Linhas de Expressao
**Arquivo**: `6639665e7413c5d23e128738809593b5.jpg`
**Descricao**: Close de testa com linhas de expressao
**Uso**: Card de servico **"Botox"** ou secao de problemas (antes)
**Tratamento**:
- Crop: 1:1
- Desaturar levemente: `saturate(0.75) brightness(0.98)`
- Usar como "antes" em contexto de transformacao
- Overlay leve cinza para mood "problema a resolver"

#### Foto 12 — Procedimento Estetico (Microagulhamento)
**Arquivo**: `885997377971a48cd0460b282f358bff.jpg`
**Descricao**: Procedimento de microagulhamento facial
**Uso**: Card de servico **"Microagulhamento"** ou "Skinbooster"
**Tratamento**:
- Crop: 4:3 ou 1:1
- Filtro warm: `sepia(0.06) saturate(0.85)`
- A touca cirurgica comunica profissionalismo clinico

#### Mapa
**Arquivo**: `mapa_dark_rota.png`
**Uso**: Secao Localizacao (ja estilizado em dark mode)
**Tratamento**: Usar como esta — ja segue a paleta dark da marca

### Placeholder/Fallback Strategy
```css
/* Placeholder enquanto imagens carregam */
.img-placeholder {
  background: linear-gradient(135deg, #EDEBE8 0%, #D9C4B0 100%);
  animation: shimmer 2s ease-in-out infinite;
}

/* Fallback para fotos quebradas */
.img-fallback {
  background: #F4F2EF;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Monograma LR como fallback */
}
```

---

## 6. ELEMENTOS DECORATIVOS

### Border Radius System

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 8px | Badges, tags, small chips |
| `--radius-md` | 16px | Inputs, botoes menores, icone containers |
| `--radius-lg` | 24px | Cards, fotos, secoes elevadas |
| `--radius-xl` | 32px | Modais, hero image containers |
| `--radius-full` | 9999px | Pills, avatares, botao CTA arredondado |

### Shadow System (Neumorfismo Suave)

```css
/* Elevacao 1 — Cards, surfaces */
--shadow-sm: 3px 3px 8px rgba(190,186,180,0.35),
             -3px -3px 8px rgba(255,255,255,0.70);

/* Elevacao 2 — Cards em hover, botoes */
--shadow-md: 6px 6px 16px rgba(190,186,180,0.45),
             -6px -6px 16px rgba(255,255,255,0.80);

/* Elevacao 3 — Modais, popovers */
--shadow-lg: 10px 10px 30px rgba(190,186,180,0.50),
             -10px -10px 30px rgba(255,255,255,0.85);

/* Inset — Inputs, elementos pressionados */
--shadow-inset: inset 3px 3px 8px rgba(190,186,180,0.35),
               inset -3px -3px 8px rgba(255,255,255,0.70);

/* Sombra para secoes dark */
--shadow-dark-sm: 4px 4px 14px rgba(0,0,0,0.40),
                  -3px -3px 10px rgba(80,78,74,0.15);

/* Glow accent — CTA WhatsApp */
--shadow-glow-green: 4px 4px 14px rgba(37,211,102,0.35),
                     -2px -2px 8px rgba(255,255,255,0.15);

/* Glow nude — botoes accent */
--shadow-glow-nude: 0 4px 20px rgba(200,168,142,0.30);
```

### Linhas e Separadores

```css
/* Divider padrao */
.divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(200,168,142,0.15) 20%,
    rgba(200,168,142,0.15) 80%,
    transparent 100%
  );
}

/* Divider decorativo (entre secoes) */
.divider-ornament {
  display: flex;
  align-items: center;
  gap: 16px;
}
.divider-ornament::before,
.divider-ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(200,168,142,0.12);
}
.divider-ornament .diamond {
  width: 6px;
  height: 6px;
  background: var(--nude);
  transform: rotate(45deg);
  opacity: 0.4;
}

/* Vertical accent line */
.accent-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, var(--nude), transparent);
  border-radius: 2px;
}
```

### Icones

**Fonte recomendada**: Phosphor Icons (estilo Light/Thin)
- Peso: Light (1.5px stroke)
- Tamanho padrao: 24px
- Cor: `var(--gray)` para normal, `var(--nude)` para destaque
- Container: 48px x 48px com `border-radius: 14px`, fundo `var(--bg)`, sombra `--shadow-inset`

**Alternativa**: Lucide Icons (mesma estetica fine-line)

**Icones necessarios**:
- Sorriso/Dente (servicos dentais)
- Seringa/Gota (harmonizacao)
- Estrela (resultados)
- Aspas (depoimentos)
- Play (video)
- Check/Shield (diferenciais)
- Interrogacao (FAQ)
- Pin/Mapa (localizacao)
- WhatsApp (CTA)
- Instagram (social)
- Seta direita (navegacao)
- Relogio (agendamento)

### Micro-Animacoes

```css
/* Float suave (avatar, elementos decorativos) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Entrada de elementos no viewport */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Shimmer em botoes CTA */
@keyframes shimmer {
  0% { left: -100%; }
  40%, 100% { left: 100%; }
}

/* Pulse para indicadores "online" */
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(3.5); opacity: 0; }
}

/* Counter roll-up */
@keyframes countUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Parallax de scroll (via JS) */
/* Velocidade de background: 0.3-0.5x do scroll */
/* Velocidade de foreground: 1x (normal) */

/* Hover scale sutil para cards */
.card:hover {
  transform: translateY(-4px) scale(1.01);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Easing padrao do projeto */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 7. COMPONENTES VISUAIS

### Botoes

#### Primary (CTA WhatsApp)
```
Background: linear-gradient(135deg, #2BD96B, #25D366)
Texto: #FFFFFF, DM Sans 600, 16px
Padding: 20px 28px
Border-radius: 24px
Shadow: 4px 4px 14px rgba(37,211,102,0.35)
Icone: WhatsApp a esquerda em container 48px com bg rgba(255,255,255,0.15)
Efeito: shimmer loop, scale(0.96) on press
Largura: 100% no mobile, auto com min-width 280px no desktop
```

#### Secondary (Accent)
```
Background: var(--nude) / linear-gradient(145deg, #D9C4B0, #C8A88E)
Texto: #FFFFFF, DM Sans 600, 15px
Padding: 14px 32px
Border-radius: 9999px (pill)
Shadow: var(--shadow-glow-nude)
Hover: background #B8936F, translateY(-2px)
Active: scale(0.97)
```

#### Ghost/Outline
```
Background: transparent
Border: 1.5px solid rgba(200,168,142,0.3)
Texto: var(--nude), DM Sans 500, 14px
Padding: 12px 24px
Border-radius: 9999px
Hover: background rgba(200,168,142,0.06), border-color var(--nude)
Active: background rgba(200,168,142,0.12)
```

#### Ghost Dark (sobre fundo escuro)
```
Background: transparent
Border: 1.5px solid rgba(200,168,142,0.2)
Texto: var(--nude-light), DM Sans 500, 14px
Hover: background rgba(200,168,142,0.08)
```

### Cards de Servicos

```
Layout: Grid 2 colunas (desktop), 1 coluna (mobile)
Background: var(--sf) (#F4F2EF)
Padding: 32px 28px
Border-radius: 24px
Shadow: var(--shadow-md)
Min-height: 280px

Estrutura interna:
  1. Container de icone (48x48, radius 14px, bg var(--bg), shadow inset)
  2. Titulo (H3, DM Sans 600, 22px, color grafite)
  3. Descricao (Body S, DM Sans 300, 14px, color gray)
  4. Imagem de fundo opcional (clip inferior, opacity 0.08)
  5. Seta de navegacao (canto inferior direito, circulo 28px)

Hover:
  transform: translateY(-4px) scale(1.01)
  shadow: var(--shadow-lg)
  Transicao: 0.4s var(--ease-bounce)

Card wide (full-width):
  Flexbox horizontal
  Icone a esquerda, texto ao centro, seta a direita
  Padding: 24px 28px
```

### Testimonial Cards

```
Background: var(--sf)
Padding: 28px
Border-radius: 24px
Shadow: var(--shadow-md)
Margin-bottom: 16px

Estrutura:
  1. Rating (5 estrelas SVG, fill var(--nude), 15px cada)
  2. Citacao (Instrument Serif Italic, 18px, color grafite, line-height 1.7)
  3. Divider sutil (1px, nude com 10% opacity)
  4. Autor (DM Sans 500, 13px, color gray-light)
  5. Servico realizado (Overline, 10px, color nude)

Layout desktop: grid 3 colunas (masonry-style com alturas variadas)
Layout mobile: stack vertical com scroll horizontal opcional

Interacao:
  Active: scale(0.98), shadow inset
```

### FAQ Accordion

```
Container: background var(--sf), radius 24px, shadow var(--shadow-sm)
Margin entre items: 0 (sem gap, divider interno)

Item fechado:
  Padding: 22px 28px
  Divider: 1px solid rgba(200,168,142,0.08) entre items
  Pergunta: DM Sans 500, 16px, color grafite
  Icone: "+" rotacionavel, 20px, color gray-light, a direita

Item aberto:
  Background: rgba(200,168,142,0.04) sutil
  Icone: "+" rotacionado 45deg para virar "x"
  Resposta: DM Sans 300, 15px, color gray, line-height 1.7
  Padding inferior extra: 24px

Animacao:
  max-height transition 0.4s ease
  Icone rotation 0.3s ease
```

### Navbar

```
Position: fixed top, z-index 100
Background: rgba(237,235,232,0.85)
Backdrop-filter: blur(20px) saturate(1.2)
Border-bottom: 1px solid rgba(200,168,142,0.06)
Height: 72px (desktop), 60px (mobile)
Padding: 0 80px (desktop), 0 20px (mobile)

Conteudo:
  Logo LR (Instrument Serif Italic, 28px, color nude) a esquerda
  Links de navegacao (DM Sans 400, 14px, color gray) ao centro (desktop only)
  CTA "Agendar" (pill button, secondary small) a direita

Scroll behavior:
  Aparece com slide-down apos scroll de 100vh (hero)
  Shadow sutil ao scrollar: 0 2px 20px rgba(0,0,0,0.04)

Mobile:
  Hamburger menu (3 linhas, 2px, color grafite)
  Menu fullscreen overlay com backdrop blur
  Links centralizados, Instrument Serif 32px
```

### Footer

```
Background: var(--graf) (#2C2C2A)
Padding: 64px 80px 32px (desktop), 48px 20px 24px (mobile)
Border-top: nenhum (secao dark ja faz transicao)

Estrutura:
  1. Logo LR grande (Instrument Serif Italic, 48px, color nude, float animation)
  2. Tagline (DM Sans 300, 14px, color gray-light)
  3. Grid 3 colunas: Links, Contato, Redes Sociais
  4. Divider decorativo
  5. Copyright + CRO (Caption, 11px, color gray-light)
  6. "Desenvolvido por" (Caption, 10px)

Links:
  DM Sans 300, 14px, color gray-light
  Hover: color nude, translateX(4px) com seta
```

### Progress/Scroll Bar

```
Position: fixed top
Height: 2px
Background: var(--nude)
Opacity: 0.7
Z-index: acima da navbar
Border-radius: 0 2px 2px 0
Width: calculada por JS (scroll position / total height)
```

---

## NOTAS TECNICAS

### Performance
- Fotos: servir em WebP com fallback JPEG, lazy loading nativo
- Fontes: `font-display: swap`, preload das variantes mais usadas
- Animacoes: usar `transform` e `opacity` exclusivamente (GPU-accelerated)
- Parallax: `will-change: transform` nos elementos com parallax

### Acessibilidade
- Contraste minimo AA para todos os textos sobre fundos
- Focus ring visivel em todos elementos interativos
- `prefers-reduced-motion`: desabilitar parallax e animacoes complexas
- Alt text descritivo em todas as fotos

### Consistencia com Biolink
A landing page e uma **expansao** do biolink existente, nao uma ruptura. Mesma paleta, mesmas fontes, mesma filosofia neumorfista. A diferenca e escala: o biolink e compacto/mobile-first; a LP e expansiva, com respiro visual, fotos grandes e parallax cinematico.
