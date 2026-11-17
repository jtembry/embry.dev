#!/bin/sh
# Build the private LikeC4 system map into map-dist/map, then deploy. Never commit map-dist (public repo).
set -e
here="$(cd "$(dirname "$0")" && pwd)"
rm -rf "$here/map-dist"
cd "$HOME/Projects/system-map"
npx likec4 build src -o "$here/map-dist/map" --base /map/ --use-hash-history --title "System map" --build-webcomponent false
cd "$here" && npx wrangler deploy
