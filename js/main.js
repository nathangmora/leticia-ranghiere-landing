// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loadingScreen');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 400);
    setTimeout(() => loader.remove(), 1000);
  }
});

// ===== LENIS SMOOTH SCROLL =====
let lenis;
if (typeof Lenis !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

// ===== HERO TEXT REVEAL =====
(function() {
  const heroTitle = document.getElementById('heroTitle');
  if (!heroTitle) return;
  const text = heroTitle.textContent.trim();
  heroTitle.innerHTML = text.split(' ').map(w => `<span class="word"><span>${w}</span></span>`).join(' ');
  setTimeout(() => {
    heroTitle.classList.add('revealed');
    document.querySelectorAll('.hero-reveal').forEach(el => el.classList.add('visible'));
  }, 300);
})();

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress() {
  if (!scrollProgress) return;
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + '%';
}

// ===== NAVBAR SHOW/HIDE =====
const navbar = document.getElementById('navbar');
function updateNavbar() {
  const currentScroll = window.scrollY;
  if (currentScroll > window.innerHeight * 0.8) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }

  // Dark mode for navbar over dark sections
  const darkSections = document.querySelectorAll('.resultados, .localizacao, .cta-final');
  let isOverDark = false;
  const navBottom = 72; // navbar height
  darkSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < navBottom && rect.bottom > 0) {
      isOverDark = true;
    }
  });
  navbar.classList.toggle('dark', isOverDark);
}

// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  const isOpen = menu.classList.toggle('open');
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }
}

// ===== PARALLAX =====
function updateParallax() {
  if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  // Hero depth parallax — subtle for split layout
  if (scrollY < vh * 1.2) {
    const heroPhoto = document.querySelector('.hero-photo');
    const heroContent = document.querySelector('.hero-content');
    if (heroPhoto) heroPhoto.style.transform = 'translate3d(0,' + (scrollY * 0.15) + 'px,0)';
    if (heroContent) {
      heroContent.style.transform = 'translate3d(0,' + (scrollY * -0.05) + 'px,0)';
      heroContent.style.opacity = Math.max(0, 1 - scrollY / (vh * 0.9));
    }
  }

  // Existing parallax elements
  document.querySelectorAll('[data-parallax-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.parallaxSpeed);
    el.style.transform = 'translate3d(0,' + (scrollY * speed) + 'px,0)';
  });
}

// ===== SCROLL-DRIVEN REVEAL (replaces IntersectionObserver) =====
const revealElements = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
const staggerParents = document.querySelectorAll('#difGrid,#faqAccordion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// If reduced motion, just show everything
if (reducedMotion) {
  revealElements.forEach(el => el.classList.add('visible'));
  staggerParents.forEach(p => p.querySelectorAll('.stagger-item').forEach(i => i.classList.add('visible')));
}

function getRevealTransform(el, enterProgress, exitProgress) {
  const SLIDE = window.innerWidth < 768 ? 30 : 120; // menor no mobile

  if (exitProgress > 0) {
    // Saindo — desloca para cima + escala reduz (funciona com overflow:hidden)
    const ep = exitProgress;
    if (el.classList.contains('reveal-left')) return `translateX(${-SLIDE * 0.3 * ep}px) translateY(${-30 * ep}px) scale(${1 - 0.08 * ep})`;
    if (el.classList.contains('reveal-right')) return `translateX(${SLIDE * 0.3 * ep}px) translateY(${-30 * ep}px) scale(${1 - 0.08 * ep})`;
    if (el.classList.contains('reveal-scale')) return `scale(${1 - 0.15 * ep})`;
    return `translateY(${-40 * ep}px) scale(${1 - 0.05 * ep})`;
  }

  // Entrando — desliza do lado
  if (el.classList.contains('reveal-left')) return `translateX(${-SLIDE * (1 - enterProgress)}px)`;
  if (el.classList.contains('reveal-right')) return `translateX(${SLIDE * (1 - enterProgress)}px)`;
  if (el.classList.contains('reveal-scale')) return `scale(${0.85 + 0.15 * enterProgress})`;
  return `translateY(${40 * (1 - enterProgress)}px)`;
}

function updateScrollReveal() {
  if (reducedMotion) return;
  const vh = window.innerHeight;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    // Enter: começa quando o topo do elemento está a 110% da viewport (fora da tela)
    // Completa quando está a 50% (centro da tela)
    const enterProgress = Math.max(0, Math.min(1, (vh * 1.1 - rect.top) / (vh * 0.6)));

    // Exit: começa quando o TOPO do elemento chega a 20% da viewport
    // Completa quando topo sai da tela por cima
    const exitProgress = Math.max(0, Math.min(1, (vh * 0.2 - rect.top) / (vh * 0.2)));

    const enterEased = 1 - Math.pow(1 - enterProgress, 3);
    const exitEased = exitProgress * exitProgress; // ease-in quadratic

    // Opacidade: fade in na entrada, fade out na saída
    const opacity = exitProgress > 0 ? Math.max(0, 1 - exitEased) : enterEased;

    el.style.opacity = opacity;
    el.style.transform = getRevealTransform(el, enterEased, exitEased);
  });

  staggerParents.forEach(parent => {
    const rect = parent.getBoundingClientRect();
    const parentProgress = Math.max(0, Math.min(1, (vh * 0.95 - rect.top) / (vh * 0.35)));
    if (parentProgress > 0) {
      const items = parent.querySelectorAll('.stagger-item');
      items.forEach((item, i) => {
        const itemProgress = Math.max(0, Math.min(1, parentProgress * items.length - i));
        const eased = 1 - Math.pow(1 - itemProgress, 3);
        item.style.opacity = eased;
        item.style.transform = `translateY(${40 * (1 - eased)}px)`;
      });
    }
  });
}

// Clip reveals still use IntersectionObserver (clip-path can't interpolate via JS easily)
const clipObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      clipObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px 50px 0px' });
document.querySelectorAll('.clip-reveal,.clip-reveal-right').forEach(el => clipObserver.observe(el));

// Initial render for elements already in viewport
updateScrollReveal();

// ===== SCROLL-LINKED COUNTERS =====
(function() {
  const counterSection = document.querySelector('.sobre-counters');
  if (!counterSection) return;

  const counters = counterSection.querySelectorAll('.counter-number');
  const targets = Array.from(counters).map(c => ({
    el: c,
    target: parseInt(c.dataset.target),
    suffix: c.dataset.suffix || ''
  }));

  function updateCounters() {
    const rect = counterSection.getBoundingClientRect();
    const vh = window.innerHeight;

    // Progress: 0 when section enters bottom, 1 when section is 60% up
    const start = vh * 1.0;
    const end = vh * 0.6;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);

    targets.forEach(({el, target, suffix}) => {
      el.textContent = Math.floor(target * eased) + suffix;
    });
  }

  let cTicking = false;
  window.addEventListener('scroll', () => {
    if (!cTicking) {
      requestAnimationFrame(() => {
        updateCounters();
        cTicking = false;
      });
      cTicking = true;
    }
  }, { passive: true });

  // Initial
  updateCounters();
})();

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').style.maxHeight = '0';
    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  // Open clicked (if wasn't open)
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
  }
}

// ===== VIDEO PLAYER =====
const videoPlay = document.getElementById('videoPlay');
const mainVideo = document.getElementById('mainVideo');
if (videoPlay && mainVideo) {
  videoPlay.addEventListener('click', () => {
    mainVideo.muted = false;
    mainVideo.play();
    videoPlay.style.display = 'none';
    mainVideo.controls = true;
  });
  mainVideo.addEventListener('pause', () => {
    videoPlay.style.display = 'flex';
    mainVideo.controls = false;
  });

  // Auto-play muted when visible
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mainVideo.muted = true;
        mainVideo.play().catch(() => {});
      } else {
        mainVideo.pause();
      }
    });
  }, { threshold: 0.5 });
  videoObserver.observe(mainVideo);
}

// ===== HERO PARTICLES =====
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay = Math.random() * 5 + 's';
    p.style.animation = 'float ' + (4 + Math.random() * 4) + 's ease-in-out infinite';
    container.appendChild(p);
  }
}
createParticles();

// ===== SCROLL EVENT =====
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateNavbar();
      updateParallax();
      updateScrollReveal();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ===== MAGNETIC BUTTONS =====
if (window.innerWidth > 768) {
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ===== NAVBAR ACTIVE LINK =====
const navSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

navSections.forEach(section => activeObserver.observe(section));

// ===== BEFORE/AFTER SLIDER =====
(function() {
  const slider = document.getElementById('baSlider');
  if (!slider) return;
  const afterDiv = slider.querySelector('.ba-after');
  const handle = document.getElementById('baHandle');
  let isDragging = false;

  function setPosition(x) {
    const rect = slider.getBoundingClientRect();
    let pos = ((x - rect.left) / rect.width) * 100;
    pos = Math.max(5, Math.min(95, pos));
    afterDiv.style.width = pos + '%';
    handle.style.left = pos + '%';
    handle.setAttribute('aria-valuenow', Math.round(pos));
  }

  slider.addEventListener('mousedown', (e) => { isDragging = true; setPosition(e.clientX); });
  slider.addEventListener('touchstart', (e) => { isDragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove', (e) => { if (isDragging) setPosition(e.clientX); });
  window.addEventListener('touchmove', (e) => { if (isDragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('touchend', () => { isDragging = false; });
})();

// ===== SERVICE TAB NAVIGATION =====
(function() {
  const tabNav = document.getElementById('serviceTabNav');
  if (!tabNav) return;

  const tabs = tabNav.querySelectorAll('.tabnav-item');
  const panels = document.querySelectorAll('.service-panel');
  let activeIndex = 0;
  let autoplayTimer;

  function switchTab(index) {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => {
      p.classList.remove('active', 'orbit-prev', 'orbit-next');
    });

    tabs[index].classList.add('active');
    panels[index].classList.add('active');

    // Adjacent panels visible but blurred
    const prevIndex = (index - 1 + panels.length) % panels.length;
    const nextIndex = (index + 1) % panels.length;
    panels[prevIndex].classList.add('orbit-prev');
    panels[nextIndex].classList.add('orbit-next');

    activeIndex = index;

    // Scroll tab into view on mobile
    if (window.innerWidth <= 768) {
      tabs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // Click handlers
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      switchTab(i);
      resetAutoplay();
    });
  });

  // Autoplay (Apple-style, cycle every 5s)
  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const next = (activeIndex + 1) % tabs.length;
      switchTab(next);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Start autoplay when section is visible
  const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoplay();
      } else {
        clearInterval(autoplayTimer);
      }
    });
  }, { threshold: 0.3 });

  tabObserver.observe(document.getElementById('servicos'));

  // Keyboard navigation
  tabNav.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      switchTab((activeIndex + 1) % tabs.length);
      resetAutoplay();
    } else if (e.key === 'ArrowLeft') {
      switchTab((activeIndex - 1 + tabs.length) % tabs.length);
      resetAutoplay();
    }
  });

  // Swipe support on panels
  let touchStartX = 0;
  const panelContainer = document.getElementById('servicePanels');
  panelContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  panelContainer.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) switchTab((activeIndex + 1) % tabs.length);
      else switchTab((activeIndex - 1 + tabs.length) % tabs.length);
      resetAutoplay();
    }
  }, { passive: true });

  // Initial orbit setup
  switchTab(0);
})();

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: 0 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ===== APPLE-STYLE SCROLL GALLERY =====
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('.resultado-card:not(.ba-slider)');
  if (!cards.length) return;

  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      const card = entry.target;
      const img = card.querySelector('img');
      const overlay = card.querySelector('.overlay');

      if (img) {
        const scale = 0.92 + (ratio * 0.08);
        const brightness = 0.7 + (ratio * 0.3);
        img.style.transform = `scale(${scale})`;
        img.style.filter = `brightness(${brightness})`;
      }
      if (overlay) {
        overlay.style.opacity = ratio;
        overlay.style.transform = `translateY(${(1 - ratio) * 20}px)`;
      }
    });
  }, { threshold: Array.from({length: 20}, (_, i) => i / 19) });

  cards.forEach(card => galleryObserver.observe(card));
})();

// ===== SEQUENTIAL OVERLINE → HEADLINE REVEAL =====
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.section-header').forEach(header => {
    const overline = header.querySelector('.overline');
    const h2 = header.querySelector('h2');
    const p = header.querySelector('p');

    if (overline) {
      overline.classList.remove('reveal');
      overline.style.opacity = '0';
      overline.style.transform = 'translateY(12px)';
      overline.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
      overline.dataset.seqReveal = 'overline';
    }
    if (p) {
      p.dataset.seqReveal = 'body';
    }
  });

  function updateSeqReveal() {
    document.querySelectorAll('[data-seq-reveal="overline"]').forEach(overline => {
      const rect = overline.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh * 0.85) {
        overline.style.opacity = '1';
        overline.style.transform = 'translateY(0)';
      }
    });
  }

  let seqTicking = false;
  window.addEventListener('scroll', () => {
    if (!seqTicking) {
      requestAnimationFrame(() => { updateSeqReveal(); seqTicking = false; });
      seqTicking = true;
    }
  }, { passive: true });

  updateSeqReveal();
})();

// ===== SCROLL-DRIVEN TEXT REVEAL =====
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const headings = document.querySelectorAll('.section-header h2, .cta-final h2');

  headings.forEach(h2 => {
    // Skip if already processed (hero)
    if (h2.querySelector('.word')) return;

    const text = h2.textContent.trim();
    h2.innerHTML = text.split(' ').map(w => `<span class="sr-word" style="opacity:0.4;transition:opacity 0.3s ease">${w}</span>`).join(' ');
    h2.dataset.scrollReveal = 'true';
  });

  function updateTextReveal() {
    document.querySelectorAll('[data-scroll-reveal]').forEach(h2 => {
      const rect = h2.getBoundingClientRect();
      const vh = window.innerHeight;

      // Start revealing when element is 80% from top, complete when at 30%
      const start = vh * 0.85;
      const end = vh * 0.35;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

      const words = h2.querySelectorAll('.sr-word');
      const totalWords = words.length;

      words.forEach((word, i) => {
        const wordProgress = (progress * totalWords - i);
        const opacity = Math.max(0.4, Math.min(1, wordProgress));
        word.style.opacity = opacity;
      });
    });
  }

  // Add to scroll loop
  let srTicking = false;
  window.addEventListener('scroll', () => {
    if (!srTicking) {
      requestAnimationFrame(() => {
        updateTextReveal();
        srTicking = false;
      });
      srTicking = true;
    }
  }, { passive: true });

  // Initial call
  updateTextReveal();
})();

// ===== SCROLL-DRIVEN SECTION FOCUS =====
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return; // Skip on mobile for performance

  const sections = document.querySelectorAll('.sobre, .servicos, .video-section, .diferenciais, .faq');

  function updateSectionFocus() {
    const vh = window.innerHeight;
    const center = vh / 2;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(center - sectionCenter);
      const maxDistance = vh;

      // 1.0 when centered, 0.99 when far (subtle)
      const scale = 0.99 + 0.01 * Math.max(0, 1 - distance / maxDistance);
      // 1.0 when centered, 0.95 when far (subtle)
      const opacity = 0.95 + 0.05 * Math.max(0, 1 - distance / maxDistance);

      section.style.transform = `scale(${scale})`;
      section.style.opacity = opacity;
    });
  }

  let sfTicking = false;
  window.addEventListener('scroll', () => {
    if (!sfTicking) {
      requestAnimationFrame(() => {
        updateSectionFocus();
        sfTicking = false;
      });
      sfTicking = true;
    }
  }, { passive: true });

  updateSectionFocus();
})();

// ===== DEPOIMENTOS 3D ORBIT CAROUSEL =====
(function() {
  const grid = document.getElementById('depoGrid');
  const dots = document.querySelectorAll('.depo-dot');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.depo-card'));
  const total = cards.length;
  let currentIndex = 0;

  // Skip orbit on mobile — use native scroll
  if (window.innerWidth <= 768) {
    // Mobile: just update dots on scroll
    let dotTicking = false;
    grid.addEventListener('scroll', () => {
      if (!dotTicking) {
        requestAnimationFrame(() => {
          const scrollLeft = grid.scrollLeft;
          const cardWidth = grid.querySelector('.depo-card').offsetWidth + 16;
          const activeIndex = Math.round(scrollLeft / cardWidth);
          dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
          dotTicking = false;
        });
        dotTicking = true;
      }
    }, { passive: true });
    return;
  }

  function positionCards(index) {
    cards.forEach((card, i) => {
      card.className = 'depo-card';
      const diff = i - index;
      if (diff === 0) card.classList.add('orbit-center');
      else if (diff === -1) card.classList.add('orbit-left');
      else if (diff === 1) card.classList.add('orbit-right');
      else if (diff === -2) card.classList.add('orbit-far-left');
      else if (diff === 2) card.classList.add('orbit-far-right');
      else card.classList.add('orbit-hidden');
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentIndex = index;
  }

  // Initialize
  positionCards(0);

  // Click dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      positionCards(parseInt(dot.dataset.index));
    });
  });

  // Click side cards to navigate
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (i !== currentIndex) positionCards(i);
    });
  });

  // Arrow keys
  document.addEventListener('keydown', (e) => {
    const depoSection = document.getElementById('depoimentos');
    const rect = depoSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    if (e.key === 'ArrowRight' && currentIndex < total - 1) {
      positionCards(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      positionCards(currentIndex - 1);
    }
  });

  // Swipe support
  let touchStartX = 0;
  grid.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  grid.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < total - 1) positionCards(currentIndex + 1);
      else if (diff < 0 && currentIndex > 0) positionCards(currentIndex - 1);
    }
  }, { passive: true });

  // Autoplay
  let autoTimer = setInterval(() => {
    positionCards((currentIndex + 1) % total);
  }, 6000);

  grid.addEventListener('mouseenter', () => clearInterval(autoTimer));
  grid.addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => {
      positionCards((currentIndex + 1) % total);
    }, 6000);
  });
})();

// ===== CUSTOM CURSOR =====
(function() {
  if (window.innerWidth < 768 || 'ontouchstart' in window) return;

  const dot = document.createElement('div');
  dot.classList.add('cursor-dot');
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX - 4 + 'px';
    dot.style.top = mouseY - 4 + 'px';
    dot.classList.add('visible');
  });

  document.addEventListener('mouseleave', () => dot.classList.remove('visible'));

  const interactives = 'a, button, .depo-card, .dif-card, .resultado-card, .tabnav-item, .service-panel-cta, .faq-question';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hover'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
  });
})();