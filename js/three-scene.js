/* ============================================================
   NETWORK BG — Interactive neural network animation
   Pure Canvas 2D — Three.js removed, no external CDN needed
   ============================================================ */

(function initNetworkBg() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();

  const COUNT      = W < 768 ? 50 : 85;
  const CONNECT_D  = 155;
  const MOUSE_R    = 210;
  const SPEED_CAP  = 1.1;

  let mouseX = W / 2, mouseY = H / 2;

  function Node() {
    this.x     = Math.random() * W;
    this.y     = Math.random() * H;
    this.vx    = (Math.random() - 0.5) * 0.5;
    this.vy    = (Math.random() - 0.5) * 0.5;
    this.r     = Math.random() * 1.6 + 0.7;
    this.phase = Math.random() * Math.PI * 2;
    this.spd   = 0.016 + Math.random() * 0.022;
    this.cyan  = Math.random() > 0.38;
  }

  Node.prototype.update = function () {
    this.phase += this.spd;
    const dx = mouseX - this.x, dy = mouseY - this.y;
    const d  = Math.hypot(dx, dy);
    if (d < MOUSE_R && d > 1) {
      const f = ((MOUSE_R - d) / MOUSE_R) * 0.013;
      this.vx += (dx / d) * f;
      this.vy += (dy / d) * f;
    }
    this.vx *= 0.984; this.vy *= 0.984;
    const spd = Math.hypot(this.vx, this.vy);
    if (spd > SPEED_CAP) { this.vx *= SPEED_CAP / spd; this.vy *= SPEED_CAP / spd; }
    this.x += this.vx; this.y += this.vy;
    if (this.x < -20) this.x = W + 20;
    if (this.x > W + 20) this.x = -20;
    if (this.y < -20) this.y = H + 20;
    if (this.y > H + 20) this.y = -20;
  };

  Node.prototype.draw = function () {
    const pulse  = 0.5 + 0.5 * Math.sin(this.phase);
    const radius = this.r + pulse * 1.1;
    const grd    = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, radius * 6);
    const base   = this.cyan ? '0,245,255' : '57,255,20';
    grd.addColorStop(0, `rgba(${base},${0.55 + pulse * 0.3})`);
    grd.addColorStop(1, `rgba(${base},0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius * 6, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${base},${0.85 + pulse * 0.15})`;
    ctx.fill();
  };

  const nodes = Array.from({ length: COUNT }, () => new Node());

  let animId = null;
  function animate() {
    animId = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist >= CONNECT_D) continue;
        const alpha = Math.pow(1 - dist / CONNECT_D, 1.4) * 0.5;
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        const ca = a.cyan ? '0,245,255' : '57,255,20';
        const cb = b.cyan ? '0,245,255' : '57,255,20';
        g.addColorStop(0, `rgba(${ca},${alpha})`);
        g.addColorStop(1, `rgba(${cb},${alpha})`);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = g;
        ctx.lineWidth   = (1 - dist / CONNECT_D) * 1.3;
        ctx.stroke();
      }
    }
    for (const n of nodes) { n.update(); n.draw(); }
  }

  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(animId); animId = null; }
    else if (!animId) animate();
  });
  document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  window.addEventListener('resize', resize);
})();
