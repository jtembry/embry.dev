// Build-time SVG generators for parallax backgrounds. Each returns an SVG string.
// Colors come from CSS custom properties so they follow the palette.
const W = 1600, H = 900;
const svg = (inner, opts = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;

// Topographic contours: closed wobbly rings around a point right of center.
export function contours({ parity = 0, cx = 1120, cy = 450, rings = 12 } = {}) {
  let out = '';
  for (let k = 1; k <= rings; k++) {
    if (k % 2 !== parity) continue;
    const base = 50 + k * 62;
    let d = '';
    for (let i = 0; i <= 120; i++) {
      const t = (i / 120) * Math.PI * 2;
      const r = base + 22 * Math.sin(3 * t + k * 0.7) + 12 * Math.sin(7 * t - k * 0.4) + k * 2.5 * Math.sin(2 * t + 1);
      const x = cx + r * Math.cos(t), y = cy + r * 0.78 * Math.sin(t);
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    const op = Math.max(0.08, 0.55 - k * 0.035);
    out += `<path d="${d}Z" fill="none" stroke="var(--pattern-stroke)" stroke-width="1.4" opacity="${op.toFixed(2)}"/>`;
  }
  return svg(out);
}

// Print layers: horizontal beads following a vase-like silhouette, like a wall seen from the side.
export function layers({ parity = 0, cx = 1150, gap = 14, width = 6, scale = 1 } = {}) {
  let out = '';
  let row = 0;
  for (let y = 40; y < H - 20; y += gap, row++) {
    if (row % 2 !== parity) continue;
    const hw = (230 + 95 * Math.sin(y / 130) + 45 * Math.sin(y / 47 + 2) + 30 * Math.sin(y / 23)) * scale;
    const op = 0.18 + 0.32 * (0.5 + 0.5 * Math.sin(y / 90));
    out += `<line x1="${(cx - hw).toFixed(1)}" y1="${y}" x2="${(cx + hw).toFixed(1)}" y2="${y}" stroke="var(--pattern-stroke)" stroke-width="${width}" stroke-linecap="round" opacity="${op.toFixed(2)}"/>`;
  }
  return svg(out);
}

// Isometric grid with a few highlighted nodes: systems, wiring, structure.
export function grid({ parity = 0, spacing = 56 } = {}) {
  let out = '';
  if (parity === 0) {
    const tan = Math.tan(Math.PI / 6);
    for (let c = -H; c < W + H; c += spacing) {
      out += `<line x1="${c}" y1="0" x2="${c + H / tan}" y2="${H}" stroke="var(--pattern-stroke)" stroke-width="1" opacity="0.22"/>`;
      out += `<line x1="${c}" y1="${H}" x2="${c + H / tan}" y2="0" stroke="var(--pattern-stroke)" stroke-width="1" opacity="0.22"/>`;
    }
  } else {
    const nodes = [[980, 300], [1180, 190], [1320, 380], [1120, 520], [1400, 600], [900, 620], [1260, 740]];
    const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [3, 5], [4, 6], [3, 6]];
    for (const [a, b] of edges) out += `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" stroke="var(--pattern-stroke)" stroke-width="1.5" opacity="0.45"/>`;
    for (const [x, y] of nodes) out += `<circle cx="${x}" cy="${y}" r="7" fill="var(--pattern-fill)" opacity="0.9"/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="var(--pattern-stroke)" stroke-width="1.5" opacity="0.5"/>`;
  }
  return svg(out);
}

export const patterns = { contours, layers, grid };

// Graph view: hubs on a loose ring, satellites clustered around them, links between.
// Looks like a knowledge graph. parity 0 = links + satellites (back layer), 1 = hubs (front layer).
export function graph({ parity = 0, seed = 3, hubs = 7, satellites = 90, cx = 1080, cy = 450 } = {}) {
  let s = seed * 7919 + 17;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const nodes = [];
  for (let h = 0; h < hubs; h++) {
    const a = (h / hubs) * Math.PI * 2 + rnd() * 0.6;
    const d = 150 + rnd() * 130;
    nodes.push({ x: cx + Math.cos(a) * d * 1.25, y: cy + Math.sin(a) * d * 0.8, r: 9 + rnd() * 5, hub: true, group: h });
  }
  for (let i = 0; i < satellites; i++) {
    const g = Math.floor(rnd() * hubs), hub = nodes[g];
    const a = rnd() * Math.PI * 2, d = 35 + rnd() * 120;
    nodes.push({ x: hub.x + Math.cos(a) * d, y: hub.y + Math.sin(a) * d * 0.85, r: 2.2 + rnd() * 2.6, hub: false, group: g });
  }
  const edges = [];
  nodes.forEach((n, i) => {
    if (n.hub) { edges.push([i, (i + 1) % hubs]); if (rnd() < 0.5) edges.push([i, (i + 3) % hubs]); return; }
    if (rnd() < 0.93) edges.push([i, n.group]);
    if (rnd() < 0.4) edges.push([i, hubs + Math.floor(rnd() * satellites)]);
  });
  let out = '';
  if (parity === 0) {
    for (const [a, b] of edges) {
      const A = nodes[a], B = nodes[b];
      out += `<line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${B.x.toFixed(1)}" y2="${B.y.toFixed(1)}" stroke="${A.hub && B.hub ? 'var(--pattern-stroke)' : 'var(--pattern-node)'}" stroke-width="${A.hub && B.hub ? 1.2 : 0.7}" opacity="${A.hub && B.hub ? 0.5 : 0.16}"/>`;
    }
    for (const n of nodes) if (!n.hub) out += `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${(n.r * 0.85).toFixed(1)}" fill="var(--pattern-node)" opacity="0.6"/>`;
  } else {
    for (const n of nodes) if (n.hub) out += `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${(n.r * 0.7).toFixed(1)}" fill="var(--pattern-fill)" opacity="0.9"/><circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${(n.r + 6).toFixed(1)}" fill="none" stroke="var(--pattern-stroke)" stroke-width="0.8" opacity="0.5"/>`;
  }
  return svg(out);
}
patterns.graph = graph;

// Blueprint dot grid with crosshair ticks every 8th cell. The industrial base layer.
export function dots({ spacing = 28, tick = 8 } = {}) {
  let out = '';
  for (let y = spacing; y < H; y += spacing) for (let x = spacing; x < W; x += spacing) {
    const major = (x / spacing) % tick === 0 && (y / spacing) % tick === 0;
    out += major
      ? `<path d="M${x - 5} ${y}h10M${x} ${y - 5}v10" stroke="var(--pattern-node)" stroke-width="1" opacity="0.45"/>`
      : `<circle cx="${x}" cy="${y}" r="1" fill="var(--pattern-node)" opacity="0.32"/>`;
  }
  return svg(out);
}
patterns.dots = dots;
