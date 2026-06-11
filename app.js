/* ==========================================================================
   INTERACTIVE LOGIC - MONTIPAGE MEDIA GROUP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
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
});
