// Link to one view of the system map. Links go to the plain /map pages, not the LikeC4 app at
// /systems/: that app crashed iPhone Safari ("A problem repeatedly occurred"). Each /map page
// links on to the interactive version for computers.
export const systemsHref = (viewId) => `/map/${viewId ?? 'index'}`;
