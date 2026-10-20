"""Our own Magic Kingdom map for the planner, drawn from OpenStreetMap (no Disney artwork).

Every feature goes through the same GPS → map formula as the planner (GEO_ANCHORS + GEO_FIT + geoPx in
public/disney/index.html), so the result lands in the 2060x2124 frame the pins, path and walkway grid use,
and nothing else in the planner has to move.

    python3 scripts/park_map.py            # uses scripts/data/mk-osm.json (fetch it with --fetch)
    python3 scripts/park_map.py --fetch    # download fresh OpenStreetMap data first

Writes public/disney/park-map.webp (1400x1443, like MK-live-map.webp).
    python3 scripts/park_map.py --walk     # print WALK_BITS_OSM (needs numpy + scipy) for the planner's routing
Map data © OpenStreetMap contributors, ODbL; the planner shows the credit.
"""
import json, math, re, sys, pathlib, urllib.parse, urllib.request
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGE = ROOT / "public/disney/index.html"
DATA = ROOT / "scripts/data/mk-osm.json"
OUT = ROOT / "public/disney/park-map.webp"
W, H = 2060, 2124          # the planner's map frame
K = 2                      # supersampling
OUT_SIZE = (1400, 1443)

BBOX = "28.4120,-81.5890,28.4240,-81.5740"
QUERY = f"""[out:json][timeout:90];(
way["highway"]({BBOX});way["building"]({BBOX});way["natural"]({BBOX});relation["natural"="water"]({BBOX});
way["water"]({BBOX});way["landuse"]({BBOX});way["leisure"]({BBOX});way["railway"]({BBOX});way["waterway"]({BBOX}););out geom;"""

# palette: the planner's light theme
C = dict(ground="#e3ecd9", grass="#d3e6c4", garden="#cbe2bb", wood="#b9d4a6", water="#a8d4e8", water_edge="#8cc0d8",
         building="#e9dfcd", building_edge="#cdbda1", walk="#fbf8f0", walk_edge="#d9cfba", plaza="#f4eee0",
         service="#efe9dc", rail="#8a6d4b", monorail="#9aa5ab", label="#1d2a26")
LANDS = {1: ("Tomorrowland", "#5b4fc4", (1727, 1000)), 2: ("Fantasyland", "#c0408f", (1388, 470)),
         3: ("Liberty Square", "#2f68b0", (790, 690)), 4: ("Frontierland", "#b0611f", (372, 820)),
         5: ("Adventureland", "#2f8a3a", (560, 1210)), 6: ("Main Street", "#b8860b", (1110, 1440))}


def guest_walk(t):
    """A walkway guests can use: backstage paths (access or foot = private/no) are left out of the map and the routing."""
    return (t.get("highway") in ("footway", "pedestrian", "path", "steps", "living_street")
            and t.get("access") not in ("private", "no") and t.get("foot") not in ("private", "no"))


def fetch():
    req = urllib.request.Request("https://overpass-api.de/api/interpreter",
                                 data=urllib.parse.urlencode({"data": QUERY}).encode(),
                                 headers={"User-Agent": "ParkPlanner-map-build/1.0 (joel@embry.dev)"})
    DATA.parent.mkdir(parents=True, exist_ok=True)
    DATA.write_bytes(urllib.request.urlopen(req, timeout=180).read())


def geo_fit():
    """Port of GEO_FIT + geoPx from index.html, reading the same anchors."""
    src = PAGE.read_text()
    block = re.search(r"const GEO_ANCHORS=\[(.*?)\];", src, re.S).group(1)
    A = [tuple(map(float, m)) for m in re.findall(r"\[([-\d.]+),([-\d.]+),([-\d.]+),([-\d.]+)\]", block)]
    rows = [(1, la - 28.419, ln + 81.581) for la, ln, _, _ in A]
    S = [[sum(r[i] * r[j] for r in rows) for j in range(3)] for i in range(3)]

    def solve(b):
        M = [S[i][:] + [b[i]] for i in range(3)]
        for c in range(3):
            p = max(range(c, 3), key=lambda r: abs(M[r][c])); M[c], M[p] = M[p], M[c]
            for r in range(3):
                if r != c:
                    f = M[r][c] / M[c][c]
                    for k in range(c, 4): M[r][k] -= f * M[c][k]
        return [M[i][3] / M[i][i] for i in range(3)]

    cx = solve([sum(r[i] * a[2] for r, a in zip(rows, A)) for i in range(3)])
    cy = solve([sum(r[i] * a[3] for r, a in zip(rows, A)) for i in range(3)])
    aff = lambda la, ln: (cx[0] + cx[1] * (la - 28.419) + cx[2] * (ln + 81.581),
                          cy[0] + cy[1] * (la - 28.419) + cy[2] * (ln + 81.581))
    res = [(la, ln, x - aff(la, ln)[0], y - aff(la, ln)[1]) for la, ln, x, y in A]

    def metres(a, b):
        k = math.cos(math.radians((a[0] + b[0]) / 2))
        return math.hypot((a[0] - b[0]) * 111320, (a[1] - b[1]) * 111320 * k)

    def px(la, ln):
        p = aff(la, ln); w = dx = dy = 0.0
        for a, b, rx, ry in res:
            d = metres((la, ln), (a, b))
            if d < 1: return (p[0] + rx, p[1] + ry)
            k = 1 / (d * d); w += k; dx += k * rx; dy += k * ry
        return (p[0] + dx / w, p[1] + dy / w)
    return px


def main():
    if "--fetch" in sys.argv or not DATA.exists(): fetch()
    els = json.loads(DATA.read_text())["elements"]
    px = geo_fit()
    im = Image.new("RGB", (W * K, H * K), C["ground"]); d = ImageDraw.Draw(im)
    pts = lambda g: [(x * K, y * K) for x, y in (px(p["lat"], p["lon"]) for p in g)]

    def geoms(e):   # ways have one ring; multipolygon relations have outer rings
        if e["type"] == "way" and "geometry" in e: return [e["geometry"]]
        return [m["geometry"] for m in e.get("members", []) if m.get("role") == "outer" and "geometry" in m]

    def area(e, fill, edge=None, ew=0):
        for g in geoms(e):
            if len(g) > 2: d.polygon(pts(g), fill=fill, outline=edge, width=ew * K if edge else 0)

    def line(e, color, w):
        for g in geoms(e):
            q = pts(g)
            if len(q) > 1:
                d.line(q, fill=color, width=int(w * K), joint="curve")
                r = w * K / 2
                for x, y in (q[0], q[-1]): d.ellipse([x - r, y - r, x + r, y + r], fill=color)

    T = lambda e: e.get("tags", {})
    closed = lambda e: e["type"] == "way" and e["geometry"][0] == e["geometry"][-1]
    by = lambda f: [e for e in els if f(T(e))]

    # ground cover, then water, then paths, then buildings on top
    for e in by(lambda t: t.get("landuse") in ("grass", "meadow", "recreation_ground", "village_green")): area(e, C["grass"])
    for e in by(lambda t: t.get("leisure") in ("garden", "park")): area(e, C["garden"])
    for e in by(lambda t: t.get("landuse") == "forest" or t.get("natural") in ("wood", "scrub")): area(e, C["wood"])
    for e in by(lambda t: t.get("natural") == "water" or "water" in t): area(e, C["water"], C["water_edge"], 2)
    for e in by(lambda t: t.get("waterway") in ("canal", "stream", "river")): line(e, C["water"], 14)
    for e in by(lambda t: t.get("highway") in ("service", "tertiary", "tertiary_link", "track")): line(e, C["service"], 9)
    walks = by(guest_walk)
    for e in walks:   # pedestrian squares drawn as areas
        if closed(e) and (T(e).get("area") == "yes" or T(e).get("highway") == "pedestrian"): area(e, C["plaza"], C["walk_edge"], 1)
    for e in walks:
        if not (closed(e) and T(e).get("area") == "yes"): line(e, C["walk_edge"], 17)
    for e in walks:
        if not (closed(e) and T(e).get("area") == "yes"): line(e, C["walk"], 12)
    for e in by(lambda t: "building" in t): area(e, C["building"], C["building_edge"], 2)
    for e in by(lambda t: t.get("railway") == "narrow_gauge"): line(e, C["rail"], 5)
    for e in by(lambda t: t.get("railway") == "monorail"): line(e, C["monorail"], 9)

    # land names, in the planner's land colors
    font = None
    for f in ("/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"):
        if pathlib.Path(f).exists(): font = ImageFont.truetype(f, 46 * K); break
    for name, color, (x, y) in LANDS.values():
        d.text((x * K, y * K), name.upper(), font=font, fill=color, anchor="mm", stroke_width=7 * K, stroke_fill="#ffffff")

    im = im.resize(OUT_SIZE, Image.LANCZOS)
    im.save(OUT, "WEBP", quality=88, method=6)
    print("wrote", OUT, OUT.stat().st_size // 1024, "KB")


if __name__ == "__main__" and "--walk" not in sys.argv:
    main()


def walk_grid():
    """WALK_BITS for the planner's routing, from OpenStreetMap footpaths instead of Disney's map art:
    a 350x360 grid of 4px cells over the 1400x1443 map image, inside the gates, one connected network."""
    import base64, numpy as np
    from scipy import ndimage as ndi
    els = json.loads(DATA.read_text())["elements"]
    px = geo_fit()
    sx, sy = OUT_SIZE[0] / W, OUT_SIZE[1] / H
    img = Image.new("L", OUT_SIZE, 0); d = ImageDraw.Draw(img)
    for e in els:
        t = e.get("tags", {})
        if not guest_walk(t): continue
        q = [(x * sx, y * sy) for x, y in (px(p["lat"], p["lon"]) for p in e["geometry"])]
        if len(q) < 2: continue
        if q[0] == q[-1] and (t.get("area") == "yes" or t.get("highway") == "pedestrian"): d.polygon(q, fill=255)
        d.line(q, fill=255, width=9, joint="curve")
    walk = np.asarray(img) > 0
    Hh, Ww = walk.shape
    yy, xx = np.mgrid[0:Hh, 0:Ww]
    walk &= ~((yy > 1240) | ((yy > 1150) & ((xx < 690) | (xx > 930))))   # inside the gates only (same cut as before)
    C = 4
    gh, gw = Hh // C, Ww // C
    grid = walk[:gh * C, :gw * C].reshape(gh, C, gw, C).mean((1, 3)) >= 0.3
    grid = ndi.binary_closing(grid, structure=np.ones((3, 3))) | grid
    lab, n = ndi.label(grid, structure=np.ones((3, 3))); sizes = ndi.sum(grid, lab, range(1, n + 1))
    grid = lab == (1 + int(np.argmax(sizes)))
    assert (gw, gh) == (350, 360)
    return grid, base64.b64encode(np.packbits(grid.astype(np.uint8).ravel()).tobytes()).decode()


if __name__ == "__main__" and "--walk" in sys.argv:
    g, b64 = walk_grid()
    print(b64)
