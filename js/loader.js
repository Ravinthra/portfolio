/* ============================================================
   LOADER — Cinematic intro + Hero name reveal + Typewriter
   Returning visitors get an instant load (sessionStorage check)
   ============================================================ */

(function initLoader() {
  const loaderEl    = document.getElementById('loader');
  const loaderName  = document.getElementById('loaderName');
  const heroNameEl  = document.getElementById('heroName');
  const heroRoleEl  = document.getElementById('heroRole');

  if (!loaderEl || !loaderName) return;

  const isReturning = sessionStorage.getItem('portfolio_visited');

  // Load the background canvas animation (pure Canvas 2D — no CDN required)
  function loadBgScene() {
    const s = document.createElement('script');
    s.src = 'js/three-scene.js';
    document.body.appendChild(s);
  }

  // --- Returning visitor: skip loader entirely ---
  if (isReturning) {
    loaderEl.style.display = 'none';
    revealHeroName(true);  // instant reveal
    startTypewriter();
    loadBgScene();
    return;
  }

  // --- First visit: full cinematic intro ---
  sessionStorage.setItem('portfolio_visited', '1');

  // Letter-by-letter loader name
  const name = 'RAVINTHRA A';
  name.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = (i * 0.07) + 's';
    loaderName.appendChild(span);
  });

  // After loader finishes, reveal the page
  const LOADER_DURATION = 2800;

  setTimeout(() => {
    loaderEl.classList.add('hidden');

    // Restore body scroll
    document.body.style.overflow = '';

    // Load background canvas animation
    loadBgScene();

    // Init hero animations after loader hides
    setTimeout(() => {
      revealHeroName(false);
      startTypewriter();
    }, 200);
  }, LOADER_DURATION);

  // Lock scroll during loader
  document.body.style.overflow = 'hidden';

  // --- Hero Name: staggered letter reveal ---
  function revealHeroName(instant) {
    if (!heroNameEl) return;

    const text = 'RAVINTHRA A';
    heroNameEl.innerHTML = '';

    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char === ' ' ? '\u00A0' : char;

      if (!instant) {
        span.style.transitionDelay = (i * 0.055) + 's';
      }

      heroNameEl.appendChild(span);
    });

    if (instant) {
      // Show all letters immediately — no animation
      heroNameEl.querySelectorAll('.letter').forEach(l => l.classList.add('visible'));
    } else {
      // Trigger after a micro-delay so transitions fire
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          heroNameEl.querySelectorAll('.letter').forEach(l => l.classList.add('visible'));
        });
      });
    }
  }

  // --- Typewriter role cycling ---
  function startTypewriter() {
    if (!heroRoleEl) return;

    const roles = [
      'Backend Engineer',
      'ML Engineer',
      'Python Developer',
      'API Architect',
      'Django & FastAPI Dev'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Create text and cursor spans
    const textSpan   = document.createElement('span');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor-blink';

    heroRoleEl.innerHTML = '';
    heroRoleEl.appendChild(textSpan);
    heroRoleEl.appendChild(cursorSpan);

    function tick() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        // Typing
        textSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          // Pause at end of word
          isDeleting = true;
          setTimeout(tick, 2000);
          return;
        }
        setTimeout(tick, 70 + Math.random() * 30);
      } else {
        // Deleting
        textSpan.textContent = currentRole.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 35);
      }
    }

    tick();
  }
})();
