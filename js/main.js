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
  document.querySelectorAll('[data-parallax-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.parallaxSpeed);
    el.style.transform = 'translate3d(0,' + (scrollY * speed) + 'px,0)';
  });
}

// ===== INTERSECTION OBSERVER: REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px 50px 0px' });

document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.clip-reveal,.clip-reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ===== INTERSECTION OBSERVER: STAGGER =====
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const parent = entry.target;
      const items = parent.querySelectorAll('.stagger-item');
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, i * 150);
      });
      staggerObserver.unobserve(parent);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('#depoGrid,#difGrid,#faqAccordion').forEach(el => {
  staggerObserver.observe(el);
});

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter-number');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const suffix = counter.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        function animate(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.floor(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.sobre-counters').forEach(el => {
  counterObserver.observe(el);
});

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').style.maxHeight = '0';
  });

  // Open clicked (if wasn't open)
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ===== VIDEO PLAYER =====
const videoPlay = document.getElementById('videoPlay');
const mainVideo = document.getElementById('mainVideo');
if (videoPlay) {
  videoPlay.addEventListener('click', () => {
    mainVideo.play();
    videoPlay.style.display = 'none';
    mainVideo.controls = true;
  });
  mainVideo.addEventListener('pause', () => {
    videoPlay.style.display = 'flex';
    mainVideo.controls = false;
  });
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
    panels.forEach(p => p.classList.remove('active'));
    tabs[index].classList.add('active');
    panels[index].classList.add('active');
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