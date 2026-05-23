/* ============================================================
   SCROLL — Progress bar, nav state, section reveals, timeline
   ============================================================ */

(function initScrollAnimations() {

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      progressBar.style.width = ((scrollTop / docHeight) * 100) + '%';
    }
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollTop > 60);
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // --- Section Heading Wipe Reveal ---
  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          headingObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('.reveal-heading').forEach((el) => {
    headingObserver.observe(el);
  });

  // --- Project Cards: Slide-in from alternating sides with zoom ---
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger slightly based on position in grid
          const cards = Array.from(entry.target.parentElement.children);
          const index = cards.indexOf(entry.target);
          const delay = index * 120;

          setTimeout(() => {
            entry.target.classList.add('card-visible');
            // Bind tilt effect now (after reveal) to avoid transform conflicts
            if (window._bindTiltEffect) window._bindTiltEffect(entry.target);
          }, delay);

          cardObserver.unobserve(entry.target);

          // Trigger counters inside this card
          entry.target.querySelectorAll('.counter').forEach(startCounter);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.project-card').forEach((card) => {
    const direction = card.dataset.direction === 'right' ? 1 : -1;
    card.style.opacity = '0';
    card.style.transform = `translateX(${direction * 60}px) scale(0.96)`;
    card.style.transition = `opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo)`;
    cardObserver.observe(card);
  });


  // --- Skill Cards: Staggered fade-up ---
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = Array.from(document.querySelectorAll('.skill-card'));
          const index = cards.indexOf(entry.target);
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 80);
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.skill-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.6s var(--ease-out-expo), transform 0.6s var(--ease-out-expo)';
    skillObserver.observe(card);
  });

  // --- Contact Cards: Staggered pop-in ---
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = Array.from(document.querySelectorAll('.contact-card'));
          const index = cards.indexOf(entry.target);
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }, index * 100);
          contactObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.contact-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    card.style.transition = 'opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-spring)';
    contactObserver.observe(card);
  });

  // --- Timeline Line Growth on Scroll ---
  const timeline     = document.getElementById('timeline');
  const timelineLine = document.getElementById('timelineLine');

  if (timeline && timelineLine) {
    function updateTimelineLine() {
      const rect = timeline.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Line starts growing when timeline enters viewport from bottom
      // and reaches full height when the bottom of the timeline hits mid-viewport
      const start = viewH;
      const end = -rect.height * 0.3;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      timelineLine.style.height = (progress * 100) + '%';
    }

    window.addEventListener('scroll', updateTimelineLine, { passive: true });
    updateTimelineLine();
  }

  // --- About Section Fade-in ---
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible');
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const aboutGrid = document.querySelector('.about-grid');
  if (aboutGrid) {
    aboutGrid.style.opacity = '0';
    aboutGrid.style.transform = 'translateY(40px)';
    aboutGrid.style.transition = 'opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo)';
    aboutObserver.observe(aboutGrid);
  }

  // --- Animated Number Counters ---
  function startCounter(el) {
    if (el.dataset.started) return;
    el.dataset.started = '1';

    const target   = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix   = el.dataset.prefix || '';
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (eased * target).toFixed(decimals);
      el.textContent = prefix + value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Expose for card observer
  window._startCounter = startCounter;

})();
