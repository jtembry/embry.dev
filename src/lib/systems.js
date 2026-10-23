// Link to one view of the system map. Links go to the plain /map pages, not the LikeC4 app at
// /systems/: that app crashed iPhone Safari ("A problem repeatedly occurred"). Each /map page
// links on to the interactive version for computers.
// The overview is the flow page at /map/; every other view has its own detail page.
export const systemsHref = (viewId) => (!viewId || viewId === 'index' ? '/map' : `/map/${viewId}`);
