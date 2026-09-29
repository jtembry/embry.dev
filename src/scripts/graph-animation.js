// Knowledge graph that grows deliberately: hubs surface first, then each satellite travels out
// from its hub along its link, which draws as it goes. Positions come from a pre-settled layout,
// so there is no jitter; once placed, nodes breathe on slow sine curves. After a hold the graph
// retracts into its hubs and a new layout grows. Scales to the canvas; pauses off-screen.
// Reduced motion: one settled graph, drawn once.
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t) => Math.max(0, Math.min(1, t));

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
    k = Math.max(0.45, Math.min(1.1, W / 1280));
  };
  measure();
  const phone = W < 640;
  const HUBS = phone ? 5 : 7, N = phone ? 56 : 96;
  const cx = () => W * (W < 640 ? 0.5 : W < 1000 ? 0.62 : 0.68);
  const cy = () => H * 0.5;

  let s = 20260929;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const nodes = [], edges = [];
  for (let i = 0; i < N; i++) {
    const hub = i < HUBS;
    nodes.push({ hub, group: hub ? i : Math.floor(rnd() * HUBS), r: hub ? 5 + rnd() * 2.5 : 1.8 + rnd() * 1.6,
      rx: 0, ry: 0, x: 0, y: 0, ph: rnd() * Math.PI * 2, sp: 0.25 + rnd() * 0.25, amp: (2 + rnd() * 3), born: 0 });
  }
  for (let i = HUBS; i < N; i++) {
    edges.push({ a: nodes[i].group, b: i, primary: true });
    if (rnd() < 0.35) edges.push({ a: i, b: HUBS + Math.floor(rnd() * (N - HUBS)), primary: false });
  }
  for (let h = 0; h < HUBS; h++) { edges.push({ a: h, b: (h + 1) % HUBS, primary: false, hub: true }); if (rnd() < 0.5) edges.push({ a: h, b: (h + 3) % HUBS, primary: false, hub: true }); }

  // Settle a layout offline so the visible motion is only the growth, never physics jitter.
  const settle = () => {
    for (const n of nodes) {
      const a = rnd() * Math.PI * 2, d = (n.hub ? 110 + rnd() * 120 : 50 + rnd() * 200) * k;
      n.rx = cx() + Math.cos(a) * d; n.ry = cy() + Math.sin(a) * d * 0.7; n.vx = 0; n.vy = 0;
    }
    const range = 140 * k, rep = 600 * k * k;
    for (let step = 0; step < 260; step++) {
      for (const n of nodes) { n.fx = (cx() - n.rx) * 0.003; n.fy = (cy() - n.ry) * 0.004; }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = nodes[i], b = nodes[j]; let dx = b.rx - a.rx, dy = b.ry - a.ry; const d2 = dx * dx + dy * dy + 1;
        if (d2 < range * range) { const d = Math.sqrt(d2), f = rep / d2; dx /= d; dy /= d; a.fx -= dx * f; a.fy -= dy * f; b.fx += dx * f; b.fy += dy * f; }
      }
      for (const e of edges) {
        const a = nodes[e.a], b = nodes[e.b]; const dx = b.rx - a.rx, dy = b.ry - a.ry, d = Math.hypot(dx, dy) || 1;
        const want = (e.hub ? 200 : 48) * k, f = (d - want) * 0.012;
        a.fx += (dx / d) * f; a.fy += (dy / d) * f; b.fx -= (dx / d) * f; b.fy -= (dy / d) * f;
      }
      for (const n of nodes) { n.vx = (n.vx + n.fx) * 0.85; n.vy = (n.vy + n.fy) * 0.85; n.rx += n.vx; n.ry += n.vy; }
    }
  };
  settle();
  window.addEventListener('resize', () => { const w = W; measure(); if (Math.abs(w - W) > 40) settle(); });

  // Timing (ms). Hubs 2 s apart; satellites every 550 ms, each travelling 2.4 s; hold; retract 5 s.
  const HUB_GAP = 2000, SAT_GAP = phone ? 800 : 550, GROW = 2400, HUB_GROW = 1600, HOLD = 30000, RETRACT = 5000, GAP = 1500;
  const order = nodes.map((_, i) => i);
  for (let i = N - 1; i > HUBS; i--) { const j = HUBS + Math.floor(rnd() * (i - HUBS + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  let cycleStart = 0;
  const schedule = (t) => { cycleStart = t; order.forEach((idx, j) => { nodes[idx].born = t + (j < HUBS ? j * HUB_GAP : HUBS * HUB_GAP + (j - HUBS) * SAT_GAP); }); };
  const grown = () => cycleStart + HUBS * HUB_GAP + (N - HUBS) * SAT_GAP + GROW;
  schedule(performance.now());

  // Progress of a node in [0,1]: 0 = not yet, 1 = fully placed. Retract reverses it for everyone.
  const progressOf = (n, now, retract) => {
    const p = n.hub ? clamp01((now - n.born) / HUB_GROW) : clamp01((now - n.born) / GROW);
    return retract == null ? p : Math.min(p, 1 - retract);
  };
  const place = (n, now, t, retract) => {
    const p = progressOf(n, now, retract);
    const hub = n.hub ? n : nodes[n.group];
    const e = n.hub ? easeOut(p) : easeInOut(p);
    const bx = n.rx + Math.sin(t * n.sp + n.ph) * n.amp * k, by = n.ry + Math.cos(t * n.sp * 0.8 + n.ph) * n.amp * 0.7 * k;
    n.x = n.hub ? bx : hub.x + (bx - hub.x) * e; n.y = n.hub ? by : hub.y + (by - hub.y) * e; n.p = p;
  };

  const draw = (now) => {
    const t = now / 1000;
    const fadeStart = grown() + HOLD;
    let retract = null;
    if (now > fadeStart) { retract = easeInOut(clamp01((now - fadeStart) / RETRACT)); if (now > fadeStart + RETRACT + GAP) { settle(); schedule(now); retract = null; } }
    for (const n of nodes) if (n.hub) place(n, now, t, retract);
    for (const n of nodes) if (!n.hub) place(n, now, t, retract);
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    for (const e of edges) {
      const a = nodes[e.a], b = nodes[e.b];
      if (e.primary) { // hub → satellite, drawn as the satellite travels out
        if (b.p <= 0) continue;
        ctx.strokeStyle = `rgba(230,232,236,${0.16 * easeOut(b.p)})`; ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      } else { // cross links: draw once both ends are placed, growing from a to b
        const q = Math.min(a.p, b.p); if (q < 0.9) continue;
        const g = easeOut(clamp01((q - 0.9) / 0.1));
        ctx.strokeStyle = e.hub ? `rgba(232,112,42,${0.42 * g})` : `rgba(230,232,236,${0.1 * g})`; ctx.lineWidth = e.hub ? 1.1 : 0.7;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(a.x + (b.x - a.x) * g, a.y + (b.y - a.y) * g); ctx.stroke();
      }
    }
    for (const n of nodes) {
      if (n.p <= 0) continue;
      const e = easeOut(n.p);
      if (n.hub) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.9 + n.ph);
        ctx.beginPath(); ctx.arc(n.x, n.y, (n.r + 9 + pulse * 3) * e, 0, Math.PI * 2); ctx.strokeStyle = `rgba(232,112,42,${0.28 * e})`; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * e, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,177,135,${0.95 * e})`; ctx.fill();
      } else {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * e, 0, Math.PI * 2); ctx.fillStyle = `rgba(230,232,236,${0.8 * e})`; ctx.fill();
      }
    }
  };

  if (reduce) { nodes.forEach((n) => { n.born = -1e9; }); draw(performance.now()); return; }
  let visible = true, raf = 0;
  const frame = (now) => { raf = 0; draw(now); if (visible && !document.hidden) raf = requestAnimationFrame(frame); };
  const kick = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }, { threshold: 0.05 }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
  kick();
}
