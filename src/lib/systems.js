// Link into the interactive map at /systems/. The map's script files get new hashed names on
// every rebuild, so a phone holding a cached /systems/ page asked for files that were gone and
// showed a blank map. The ?v= stamp changes each deploy, so every link fetches the page fresh.
const stamp = Date.now().toString(36);
export const systemsHref = (viewId) => `/systems/?v=${stamp}#/view/${viewId ?? 'index'}/`;
