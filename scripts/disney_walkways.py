"""Walkway mask for the Magic Kingdom Planner's Map tab (public/disney/index.html → WALK_BITS).

Traces guest walkways from the park map image itself: its cream paths and plazas, then hand-placed
links where the walkway is drawn in another colour (Main Street, bridges, Tomorrowland's plaza) or
broken by map art (number circles sitting on paths). Prints the base64 grid to paste into WALK_BITS.

    python3 -m pip install --target /tmp/pylib numpy scipy pillow
    PYTHONPATH=/tmp/pylib python3 scripts/disney_walkways.py > /tmp/walk_b64.txt
"""
import base64, pathlib, numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

MAP = pathlib.Path(__file__).resolve().parent.parent / "public/disney/MK-live-map.webp"
im = np.asarray(Image.open(MAP).convert("RGB")).astype(int)
H, W = im.shape[:2]; r, g, b = im[..., 0], im[..., 1], im[..., 2]
walk = (r >= 205) & (r <= 242) & (g >= 195) & (g <= 228) & (b >= 168) & (b <= 208) & (r >= b + 15)   # the map's cream walkway colour
yy, xx = np.mgrid[0:H, 0:W]
walk &= ~((yy > 1240) | ((yy > 1150) & ((xx < 690) | (xx > 930))))   # inside the gates only
walk = ndi.binary_closing(walk, structure=np.ones((3, 3)), iterations=2)   # patch holes left by icons

# hand-placed links (1400px map-image coords)
LINKS=[
 [(790,640),(790,1050)],                        # Main Street, across the hub
 [(770,1075),(728,1078)],                       # Town Square → City Hall
 [(760,1085),(742,1120),(742,1175)],            # under the train station, west
 [(820,1085),(845,1120),(845,1175)],            # under the train station, east
 [(800,1190),(800,1215)],                       # entrance plaza
 [(790,600),(790,425)],                         # through the castle
 [(665,738),(633,757),(600,762),(560,755),(520,745),(470,728),(440,718),(410,700)],  # hub bridge → Adventureland past #19 #20 #23 (number circles sit on the path)
 [(455,722),(425,708),(388,715),(365,742),(388,775),(425,785),(450,760),(455,722)],  # Adventureland plaza, walkable all round the Magic Carpets (drawn as art)
 [(448,722),(400,760),(330,800),(245,800)],     # Adventureland plaza → #16 #14 → #24
 [(245,800),(210,785)],                         # Adventureland → Frontierland, by #24
 [(232,548),(238,600)],                         # Big Thunder corner
 [(1105,600),(1110,660),(1170,690),(1215,700)], # Tomorrowland: by #84/#78 → #79
 [(975,722),(1000,730),(1040,746),(1095,770),(1150,812)],            # hub bridge → Tomorrowland plaza → #73
 [(1110,740),(1128,700),(1168,690),(1202,718),(1202,770),(1166,800),(1122,792),(1110,740)],  # Rockettower Plaza round Astro Orbiter (drawn blue-grey)
 [(1030,742),(1110,740)],                       # Laugh Floor #75 → the plaza
 [(1260,710),(1280,710)],                       # → Space Mountain
 [(1240,285),(1272,305),(1300,318),(1325,345),(1320,400),(1304,436)],  # Storybook Circus → TRON, under its canopy
 [(1280,655),(1272,560),(1290,470),(1304,436)],            # Space Mountain → TRON
]
img = Image.fromarray(walk.astype(np.uint8) * 255); d = ImageDraw.Draw(img)
for L in LINKS: d.line(L, fill=255, width=12, joint="curve")
walk = np.asarray(img) > 0
lab, n = ndi.label(walk); sizes = ndi.sum(walk, lab, range(1, n + 1)); walk = lab == (1 + int(np.argmax(sizes)))

C = 4   # 4px cells → 350×360 grid
gh, gw = H // C, W // C
grid = walk[:gh * C, :gw * C].reshape(gh, C, gw, C).mean((1, 3)) >= 0.35
grid = ndi.binary_closing(grid, structure=np.ones((3, 3))) | grid   # close one-cell gaps left by thin art (railings, lamp posts) across paths
lab, n = ndi.label(grid, structure=np.ones((3, 3))); sizes = ndi.sum(grid, lab, range(1, n + 1)); grid = lab == (1 + int(np.argmax(sizes)))
assert (gw, gh) == (350, 360)
print(base64.b64encode(np.packbits(grid.astype(np.uint8).ravel()).tobytes()).decode())
