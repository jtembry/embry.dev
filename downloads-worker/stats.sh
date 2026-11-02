#!/bin/bash
# Download counts for the Home Base installer. Usage: ./stats.sh   (run from this folder; needs wrangler logged in)
q() { npx wrangler d1 execute embry-downloads --remote --json --command "$1" 2>/dev/null | python3 -c '
import sys, json
for block in json.load(sys.stdin):
    rows = block.get("results", [])
    if not rows: print("  (none yet)"); continue
    for r in rows: print("  " + "  ".join(str(v) for v in r.values()))
'; }
echo "Total downloads:";            q "SELECT COALESCE(SUM(n),0) AS total FROM downloads"
echo "Last 7 days:";                q "SELECT COALESCE(SUM(n),0) AS n FROM downloads WHERE day >= date('now','-6 day')"
echo "By source (web = site and direct links, brew = Homebrew):"; q "SELECT source, SUM(n) AS n FROM downloads GROUP BY source"
echo "By file:";                    q "SELECT file, SUM(n) AS n FROM downloads GROUP BY file ORDER BY n DESC"
echo "By day (last 14):";           q "SELECT day, SUM(n) AS n FROM downloads GROUP BY day ORDER BY day DESC LIMIT 14"
