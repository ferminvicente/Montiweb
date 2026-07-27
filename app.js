/* ==========================================================================
   INTERACTIVE LOGIC - MONTIPAGE MEDIA GROUP
   ========================================================================== */

// 0. PARTIALS LOADER (shared header/footer)
async function loadPartials() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url);
      let html = await res.text();

      // Replace template placeholders based on data attributes
      const isHome = el.dataset.isHome === 'true';
      const prefix = isHome ? '#' : 'index.html#';
      const homeLink = isHome ? '#hero' : 'index.html';
      const root = isHome ? '' : 'index.html';

      html = html.replace(/\{HOME_LINK\}/g, homeLink);
      html = html.replace(/\{PREFIX\}/g, prefix);
      html = html.replace(/\{ROOT\}/g, root || 'index.html');

      // Active nav link highlighting
      const activePage = el.dataset.activePage || '';
      const activeClass = 'nav-link-active';
      const activeStyle = 'color: var(--color-light);';

      // Map active page to the {ACTIVE_*} placeholder
      const activeMap = {
        'inicio': 'ACTIVE_INICIO',
        'nosotros': 'ACTIVE_NOSOTROS',
        'escolares': 'ACTIVE_ESCOLARES',
        'wedding': 'ACTIVE_WEDDING',
        'social': 'ACTIVE_SOCIAL',
        'logros': 'ACTIVE_LOGROS'
      };

      // Replace only the matching active placeholder with the active style
      const target = activeMap[activePage] || '';
      html = html.replace(new RegExp(`\\{${target}\\}`, 'g'), activeStyle);
      // Clear all other active placeholders
      for (const key of Object.values(activeMap)) {
        if (key !== target) {
          html = html.replace(new RegExp(`\\{${key}\\}`, 'g'), '');
        }
      }

      el.outerHTML = html;
    } catch (err) {
      console.warn('Failed to load partial:', url, err);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Load shared partials first
  loadPartials().then(() => {
    // Re-initialize after partials are loaded
    initApp();
  });
});

function initApp() {

  // 1. STICKY HEADER SCROLL CLASS
  const header = document.getElementById('header');
  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run on load and on scroll
  checkScroll();
  window.addEventListener('scroll', checkScroll, { passive: true });


  // 2. MOBILE MENU DRAWER
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Lock body scroll when menu is active on mobile
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });


  // 3. SCROLL REVEAL ANIMATIONS (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once animated to avoid recalculating
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // adjust bottom margin slightly for visual balance
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  // 4. STATISTICS COUNTER ANIMATION
  const statNumbers = document.querySelectorAll('.stat-number');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds animation
    const stepTime = 16; // approx 60fps
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;
    let current = 0;
    let stepCount = 0;

    const updateValue = () => {
      current += increment;
      stepCount++;

      if (stepCount >= steps) {
        // Guarantee final exact target value is written with +/plus formatting
        el.textContent = target >= 1000 ? `+${target.toLocaleString()}` : `+${target}`;
        if (target === 9) {
          el.textContent = `9`; // 9 years in practice doesn't need "+" prefix
        }
      } else {
        el.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  // Observe numbers to animate them only when they appear on screen
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  statNumbers.forEach(num => {
    counterObserver.observe(num);
  });


  // 5. FOOTER WHATSAPP SENDER
  const wpBtn = document.getElementById('footer-wp-btn');
  if (wpBtn) {
    wpBtn.addEventListener('click', function (e) {
      const msgEl = document.getElementById('footer-wp-message');
      const message = msgEl.value.trim();
      const defaultMsg = 'Hola Monti, estoy interesado en sus servicios. ¿qué necesitas para comenzar a trabajar con nosotros?';
      const text = message || defaultMsg;
      const url = 'https://wa.me/18097124444?text=' + encodeURIComponent(text);

      // Visual feedback
      const originalText = this.innerHTML;
      this.innerHTML = '✓ Abriendo WhatsApp...';
      this.disabled = true;
      this.style.opacity = '0.7';

      // Open WhatsApp
      window.location.href = url;

      // Restore button after 2s
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
        this.style.opacity = '1';
      }, 2000);
    });
  }


  // 6. CAROUSEL LAZY LOADING (hero + wedding)
  // Loads first 2 images immediately, then queues rest with 100ms intervals
  // so they load progressively without blocking initial render.
  const lazyLoadCarousel = (selector) => {
    const items = document.querySelectorAll(selector);
    if (items.length === 0) return;

    const setBg = (el) => {
      const src = el.getAttribute('data-src');
      if (src && !el.style.backgroundImage) {
        el.style.backgroundImage = `url('${src}')`;
      }
    };

    // Load first 2 immediately
    setBg(items[0]);
    if (items[1]) setBg(items[1]);

    // Queue remaining with 100ms intervals (all start loading within ~1.5s)
    for (let i = 2; i < items.length; i++) {
      setTimeout(() => setBg(items[i]), i * 100);
    }
  };

  lazyLoadCarousel('.hero-carousel-bg');
  lazyLoadCarousel('.wedding-hero-bg');
}
