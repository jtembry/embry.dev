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
