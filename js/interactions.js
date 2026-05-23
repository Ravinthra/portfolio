/* ============================================================
   INTERACTIONS — 3D card tilt, magnetic buttons, mobile nav
   ============================================================ */

(function initInteractions() {

  // --- 3D Card Tilt on Mouse Move ---
  // Bound individually after the card's scroll-reveal animation completes
  // to avoid transform conflicts with the slide-in effect.
  function bindTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0) scale(1)';
      card.style.transition = 'transform 0.5s var(--ease-out-expo), border-color 0.4s, box-shadow 0.4s';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s, border-color 0.4s, box-shadow 0.4s';
    });
  }
  // Expose so scroll.js card observer can call it after reveal
  window._bindTiltEffect = bindTiltEffect;

  // --- Magnetic Button Effect ---
  document.querySelectorAll('.btn, .project-cta').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s var(--ease-out-expo), all 0.35s var(--ease-out-expo)';
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.15s, all 0.35s var(--ease-out-expo)';
    });
  });

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
      if (navOverlay) navOverlay.classList.toggle('open', isOpen);

      // Prevent body scroll when nav is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on overlay click
    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // --- Active Nav Link Highlighting (IntersectionObserver) ---
  // Uses a class instead of inline styles so CSS specificity + underline animation work correctly.
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => navObserver.observe(s));

  // --- Skill Badge Spring Bounce ---
  document.querySelectorAll('.badge').forEach((badge) => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transition = 'all 0.35s var(--ease-spring)';
    });
    badge.addEventListener('mouseleave', () => {
      badge.style.transition = 'all 0.35s var(--ease-spring)';
    });
  });

  // --- Dynamic Footer Year ---
  // Moved here from inline <script> to comply with Content Security Policy.
  const footerEl = document.getElementById('footer-text');
  if (footerEl) {
    footerEl.innerHTML =
      `\u00a9 ${new Date().getFullYear()} <span>Ravinthra A</span> \u00b7 Crafted with precision`;
  }

})();
