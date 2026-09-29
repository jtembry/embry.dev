// Animated knowledge graph for a hero background. Nodes are born slowly, link up, settle under a
// small force simulation, hold, fade, and start over with a new layout. Scales to the canvas size
// (fewer, closer nodes on phones). Pauses off-screen or when the tab is hidden.
// Reduced motion: renders one settled graph and stops.
export function startGraph(canvas) {
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, k = 1;
  const measure = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    k = Math.max(0.45, Math.min(1.1, W / 1280)); // spacing scale
  };
  measure();
  const phone = W < 640;
  const HUBS = phone ? 5 : 7, N = phone ? 60 : 105;
  const cx = () => W * (W < 640 ? 0.5 : W < 1000 ? 0.62 : 0.68);
  const cy = () => H * 0.5;

  let s = 20260928;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const nodes = [], edges = [];
  for (let i = 0; i < N; i++) {
    const hub = i < HUBS;
    nodes.push({ x: 0, y: 0, vx: 0, vy: 0, fx: 0, fy: 0, r: hub ? 6.5 + rnd() * 4 : 2 + rnd() * 2.4, hub, group: hub ? i : Math.floor(rnd() * HUBS), born: 0 });
  }
  for (let i = HUBS; i < N; i++) {
    if (rnd() < 0.93) edges.push([i, nodes[i].group]);
    if (rnd() < 0.42) edges.push([i, HUBS + Math.floor(rnd() * (N - HUBS))]);
  }
  for (let h = 0; h < HUBS; h++) { edges.push([h, (h + 1) % HUBS]); if (rnd() < 0.5) edges.push([h, (h + 3) % HUBS]); }
  const relayout = () => {
    for (const n of nodes) {
      const a = rnd() * Math.PI * 2, d = (n.hub ? 90 + rnd() * 140 : 60 + rnd() * 240) * k;
      n.x = cx() + Math.cos(a) * d; n.y = cy() + Math.sin(a) * d * 0.7; n.vx = n.vy = 0;
    }
  };
  relayout();
  window.addEventListener('resize', () => { const w = W; measure(); if (Math.abs(w - W) > 40) relayout(); });

  // Timing. Slow on purpose: ~75 s to build, 25 s hold, 5 s fade. Cycle ≈ 1 m 45 s.
  const HUB_GAP = 2500, SAT_GAP = phone ? 1000 : 600, HOLD = 25000, FADE = 5000, POP = 2000, LINK = 2500;
  const order = nodes.map((_, i) => i);
  for (let i = N - 1; i > HUBS; i--) { const j = HUBS + Math.floor(rnd() * (i - HUBS + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  let cycleStart = 0;
  const schedule = (t) => {
    cycleStart = t;
    order.forEach((idx, j) => { nodes[idx].born = t + (j < HUBS ? j * HUB_GAP : HUBS * HUB_GAP + (j - HUBS) * SAT_GAP); });
  };
  const buildEnd = () => cycleStart + HUBS * HUB_GAP + (N - HUBS) * SAT_GAP;
  schedule(performance.now());
  if (reduce) nodes.forEach((n) => { n.born = -Infinity; });

  const physics = (now, strength) => {
    const alive = nodes.filter((n) => now >= n.born);
    const range = 150 * k, rep = 700 * k * k;
    for (const n of alive) { n.fx = (cx() - n.x) * 0.0025; n.fy = (cy() - n.y) * 0.0035; }
    for (let i = 0; i < alive.length; i++) for (let j = i + 1; j < alive.length; j++) {
      const a = alive[i], b = alive[j];
      let dx = b.x - a.x, dy = b.y - a.y; const d2 = dx * dx + dy * dy + 1;
      if (d2 < range * range) { const d = Math.sqrt(d2), f = rep / d2; dx /= d; dy /= d; a.fx -= dx * f; a.fy -= dy * f; b.fx += dx * f; b.fy += dy * f; }
    }
    for (const [i, j] of edges) {
      const a = nodes[i], b = nodes[j]; if (now < a.born || now < b.born) continue;
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
      const want = (a.hub && b.hub ? 190 : 52) * k; const f = (d - want) * 0.012;
      a.fx += (dx / d) * f; a.fy += (dy / d) * f; b.fx -= (dx / d) * f; b.fy -= (dy / d) * f;
    }
    for (const n of alive) {
      n.fx += (rnd() - 0.5) * 0.035; n.fy += (rnd() - 0.5) * 0.035; // idle drift
      n.vx = (n.vx + n.fx * strength) * 0.9; n.vy = (n.vy + n.fy * strength) * 0.9;
      n.x += n.vx; n.y += n.vy;
    }
  };
  const draw = (now, alpha = 1) => {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;
    for (const [i, j] of edges) {
      const a = nodes[i], b = nodes[j]; if (now < a.born || now < b.born) continue;
      const age = Math.min(1, (now - Math.max(a.born, b.born)) / LINK);
      ctx.strokeStyle = a.hub && b.hub ? `rgba(232,112,42,${0.45 * age})` : `rgba(232,112,42,${0.22 * age})`;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    for (const n of nodes) {
      if (now < n.born) continue;
      const age = Math.min(1, (now - n.born) / POP);
      const r = n.r * age * (1 + (1 - age) * 1.8);
      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = n.hub ? `rgba(255,177,135,${0.95 * age})` : `rgba(230,232,236,${0.78 * age})`;
      ctx.fill();
      if (n.hub) { ctx.beginPath(); ctx.arc(n.x, n.y, r + 7, 0, Math.PI * 2); ctx.strokeStyle = `rgba(232,112,42,${0.4 * age})`; ctx.stroke(); }
    }
  };

  if (reduce) { for (let i = 0; i < 240; i++) physics(0, 1); draw(0); return; }

  let visible = true, raf = 0;
  const frame = (now) => {
    raf = 0;
    let alpha = 1;
    const fadeAt = buildEnd() + HOLD;
    if (now > fadeAt) {
      alpha = 1 - (now - fadeAt) / FADE;
      if (alpha <= 0) { relayout(); schedule(now); alpha = 1; }
    }
    physics(now, 0.7);
    draw(now, Math.max(0, alpha));
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const kick = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }, { threshold: 0.05 }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
  kick();
}
