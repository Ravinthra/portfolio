/* ============================================================
   CURSOR — Canvas comet-trail cursor with glow + lerped ring
   ============================================================ */

(function initCursor() {
  // Touch/no-hover devices: skip entirely, show default cursor
  if (window.matchMedia('(hover: none)').matches) return;
  document.body.style.cursor = 'none';

  // Fullscreen canvas overlay
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:10001;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  let mouseX = -300, mouseY = -300;
  let isHovering = false, pageActive = false;

  // Comet history positions
  const TRAIL_LEN = 16;
  const trail = [];

  document.addEventListener('mousemove', (e) => {
    pageActive = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    trail.unshift({ x: mouseX, y: mouseY });
    if (trail.length > TRAIL_LEN) trail.length = TRAIL_LEN;
  });

  const TARGETS = 'a, button, .btn, .badge, .project-card, .contact-card, .hamburger, .nav-logo, [role="button"]';
  document.addEventListener('mouseover', (e) => { if (e.target.closest(TARGETS)) isHovering = true; });
  document.addEventListener('mouseout',  (e) => { if (e.target.closest(TARGETS)) isHovering = false; });
  document.addEventListener('mouseleave', () => { pageActive = false; });
  document.addEventListener('mouseenter', () => { pageActive = true; });

  // Lerped ring that lags behind dot
  let ringX = mouseX, ringY = mouseY;

  // Smooth size targets
  let dotR = 4, ringR = 22;
  const tDotR   = () => isHovering ? 7   : 4;
  const tRingR  = () => isHovering ? 30  : 22;

  let animId = null;

  function animate() {
    animId = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);
    if (!pageActive) return;

    // Lerp values
    dotR  += (tDotR()  - dotR)  * 0.14;
    ringR += (tRingR() - ringR) * 0.14;
    ringX += (mouseX   - ringX) * 0.1;
    ringY += (mouseY   - ringY) * 0.1;

    const cyan  = '0,245,255';
    const green = '57,255,20';
    const col   = isHovering ? green : cyan;

    // ── Comet trail ──
    for (let i = trail.length - 1; i >= 1; i--) {
      const t       = 1 - i / TRAIL_LEN;
      const alpha   = t * t * 0.45;
      const radius  = dotR * t * 0.85;
      ctx.beginPath();
      ctx.arc(trail[i].x, trail[i].y, Math.max(radius, 0.5), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${alpha})`;
      ctx.fill();
    }

    // ── Main glow dot ──
    ctx.save();
    ctx.shadowBlur  = 18;
    ctx.shadowColor = `rgba(${col},0.9)`;
    const grd = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, dotR * 3.5);
    grd.addColorStop(0, `rgba(${col},1)`);
    grd.addColorStop(1, `rgba(${col},0)`);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, dotR * 3.5, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, dotR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${col},1)`;
    ctx.fill();
    ctx.restore();

    // ── Lagging outer ring ──
    ctx.beginPath();
    ctx.arc(ringX, ringY, ringR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${col},${isHovering ? 0.6 : 0.35})`;
    ctx.lineWidth   = isHovering ? 1.5 : 1;
    ctx.stroke();

    // Ring inner tick marks (4 corners — reticle feel)
    const tick = 5;
    [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].forEach((angle) => {
      const ox = ringX + Math.cos(angle) * ringR;
      const oy = ringY + Math.sin(angle) * ringR;
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(
        ox + Math.cos(angle) * tick,
        oy + Math.sin(angle) * tick
      );
      ctx.strokeStyle = `rgba(${col},${isHovering ? 0.9 : 0.55})`;
      ctx.lineWidth   = isHovering ? 2 : 1.5;
      ctx.stroke();
    });
  }

  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(animId); animId = null; }
    else if (!animId) animate();
  });
  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
})();
