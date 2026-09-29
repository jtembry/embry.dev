// Animated knowledge graph for a hero background: nodes are born over a few seconds,
// link up, and settle under a small force simulation, then drift gently.
// Pauses when off-screen or the tab is hidden. Reduced motion: renders the settled graph once.
export function startGraph(canvas) {
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  let s = 20260928;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const HUBS = 7, N = 105;
  const cx = () => W * (W < 640 ? 0.55 : 0.68), cy = () => H * 0.5;
  const nodes = [], edges = [];
  for (let i = 0; i < N; i++) {
    const hub = i < HUBS;
    const a = rnd() * Math.PI * 2, d = hub ? 90 + rnd() * 140 : 60 + rnd() * 240;
    nodes.push({ x: cx() + Math.cos(a) * d, y: cy() + Math.sin(a) * d * 0.7, vx: 0, vy: 0, fx: 0, fy: 0,
      r: hub ? 6.5 + rnd() * 4 : 2 + rnd() * 2.4, hub, group: hub ? i : Math.floor(rnd() * HUBS), born: 0 });
  }
  for (let i = HUBS; i < N; i++) {
    if (rnd() < 0.93) edges.push([i, nodes[i].group]);
    if (rnd() < 0.42) edges.push([i, HUBS + Math.floor(rnd() * (N - HUBS))]);
  }
  for (let h = 0; h < HUBS; h++) { edges.push([h, (h + 1) % HUBS]); if (rnd() < 0.5) edges.push([h, (h + 3) % HUBS]); }

  // Birth schedule: hubs first, then satellites in a shuffled order, ~8 s total.
  const order = nodes.map((_, i) => i);
  for (let i = N - 1; i > HUBS; i--) { const j = HUBS + Math.floor(rnd() * (i - HUBS + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  const start = performance.now();
  order.forEach((idx, k) => { nodes[idx].born = start + (k < HUBS ? k * 220 : 1400 + (k - HUBS) * 70); });
  if (reduce) nodes.forEach((n) => { n.born = -Infinity; });

  const physics = (now, strength) => {
    const alive = nodes.filter((n) => now >= n.born);
    for (const n of alive) { n.fx = (cx() - n.x) * 0.0025; n.fy = (cy() - n.y) * 0.0035; }
    for (let i = 0; i < alive.length; i++) for (let j = i + 1; j < alive.length; j++) {
      const a = alive[i], b = alive[j];
      let dx = b.x - a.x, dy = b.y - a.y; const d2 = dx * dx + dy * dy + 1;
      if (d2 < 150 * 150) { const d = Math.sqrt(d2), f = 700 / d2; dx /= d; dy /= d; a.fx -= dx * f; a.fy -= dy * f; b.fx += dx * f; b.fy += dy * f; }
    }
    for (const [i, j] of edges) {
      const a = nodes[i], b = nodes[j]; if (now < a.born || now < b.born) continue;
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
      const want = a.hub && b.hub ? 190 : 52; const f = (d - want) * 0.012;
      a.fx += (dx / d) * f; a.fy += (dy / d) * f; b.fx -= (dx / d) * f; b.fy -= (dy / d) * f;
    }
    for (const n of alive) {
      n.fx += (rnd() - 0.5) * 0.08; n.fy += (rnd() - 0.5) * 0.08; // idle drift
      n.vx = (n.vx + n.fx * strength) * 0.86; n.vy = (n.vy + n.fy * strength) * 0.86;
      n.x += n.vx; n.y += n.vy;
    }
  };
  const draw = (now) => {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    for (const [i, j] of edges) {
      const a = nodes[i], b = nodes[j]; if (now < a.born || now < b.born) continue;
      const age = Math.min(1, (now - Math.max(a.born, b.born)) / 700);
      ctx.strokeStyle = a.hub && b.hub ? `rgba(232,112,42,${0.45 * age})` : `rgba(232,112,42,${0.22 * age})`;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    for (const n of nodes) {
      if (now < n.born) continue;
      const age = Math.min(1, (now - n.born) / 500);
      const r = n.r * age * (1 + (1 - age) * 1.8);
      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = n.hub ? `rgba(255,177,135,${0.95 * age})` : `rgba(230,232,236,${0.78 * age})`;
      ctx.fill();
      if (n.hub) { ctx.beginPath(); ctx.arc(n.x, n.y, r + 7, 0, Math.PI * 2); ctx.strokeStyle = `rgba(232,112,42,${0.4 * age})`; ctx.stroke(); }
    }
  };

  if (reduce) { for (let k = 0; k < 240; k++) physics(0, 1); draw(0); return; }

  let visible = true, raf = 0;
  const frame = (now) => {
    raf = 0;
    physics(now, 1);
    draw(now);
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const kick = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }, { threshold: 0.05 }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
  kick();
}
