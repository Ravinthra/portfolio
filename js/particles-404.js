/* ============================================================
   PARTICLES 404 — Minimal particle field for 404 page
   Moved to external file to comply with strict CSP policies.
   ============================================================ */

(function init404Particles() {
  const canvas = document.getElementById('canvas-404');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const CYAN  = 'rgba(0, 245, 255,';
  const GREEN = 'rgba(57, 255, 20,';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles(n) {
    particles = [];
    for (let i = 0; i < n; i++) {
      const isGreen = Math.random() < 0.25;
      particles.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    Math.random() * 1.5 + 0.3,
        vx:   (Math.random() - 0.5) * 0.25,
        vy:   (Math.random() - 0.5) * 0.25,
        a:    Math.random() * 0.6 + 0.1,
        color: isGreen ? GREEN : CYAN,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.a + ')';
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles(120);
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles(120);
  });
})();
