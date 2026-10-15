// Reading order for the system map on a narrow screen. The LikeC4 picture is a wide
// canvas; this stacks the same boxes, in the same top-to-bottom order, with each
// arrow written out under its source. A "[...]" label is LikeC4 bundling several
// arrows into one — those open when you go into the view, so they are left off.
import { systemsHref } from './systems.js';

export function anchorId(id) {
  return 'map-' + String(id).replace(/[^A-Za-z0-9_-]/g, '-');
}

function contains(node, group) {
  if (node.id === group.id) return false;
  const cx = node.x + node.width / 2;
  const cy = node.y + node.height / 2;
  return cx >= group.x && cy >= group.y && cx <= group.x + group.width && cy <= group.y + group.height;
}

function byPosition(a, b) {
  return a.y - b.y || a.x - b.x;
}

export function mobileBlocks(view, views) {
  const compounds = view.nodes.filter((n) => n.group);
  const containers = compounds.filter((g) => view.nodes.some((n) => contains(n, g)));
  const containerIds = new Set(containers.map((g) => g.id));
  const byId = Object.fromEntries(view.nodes.map((n) => [n.id, n]));

  function owner(node) {
    let best = null;
    let area = Infinity;
    for (const group of containers) {
      if (!contains(node, group)) continue;
      const size = group.width * group.height;
      if (size < area) {
        best = group;
        area = size;
      }
    }
    return best;
  }

  function viewHref(node) {
    const id = node?.navigateTo;
    if (id && id !== view.id && views[id]) return systemsHref(id);
    return null;
  }

  function relationsFrom(nodeId) {
    const relations = [];
    for (const edge of view.edges) {
      if (edge.source !== nodeId || !edge.label || edge.label === '[...]') continue;
      const target = byId[edge.target];
      if (!target) continue;
      const href = viewHref(target) ?? `#${anchorId(target.id)}`;
      relations.push({
        label: edge.label,
        title: target.title,
        href,
        external: !href.startsWith('#'),
      });
    }
    return relations;
  }

  function cardFor(node) {
    return {
      anchor: anchorId(node.id),
      kind: node.kind,
      title: node.title,
      technology: node.technology,
      description: node.description,
      titleHref: viewHref(node),
      relations: relationsFrom(node.id),
    };
  }

  const children = new Map(containers.map((g) => [g.id, []]));
  const loose = [];
  for (const node of view.nodes) {
    if (containerIds.has(node.id)) continue;
    const group = owner(node);
    (group ? children.get(group.id) : loose).push(node);
  }

  const blocks = [
    ...containers.map((group) => ({
      kind: 'group',
      y: group.y,
      x: group.x,
      id: anchorId(group.id),
      title: group.title,
      relations: relationsFrom(group.id),
      cards: children.get(group.id).sort(byPosition).map(cardFor),
    })),
    ...loose.map((node) => ({ kind: 'card', y: node.y, x: node.x, card: cardFor(node) })),
  ];
  blocks.sort(byPosition);
  return blocks.filter((block) => block.kind === 'card' || block.cards.length > 0);
}
