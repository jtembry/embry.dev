#!/bin/sh
# Build every private static site the admin Worker serves, then deploy. map-dist/ is gitignored: this repo
# is public and neither the system map nor the engineering wiki is.
#   map-dist/map   the LikeC4 system map from ~/Projects/system-map
#   map-dist/wiki  the engineering wiki from ~/Projects/embry-wiki-internal (private repo jtembry/embry-wiki-internal)
# Both are rebuilt every time, because the folder is wiped first. Pass --no-deploy to only build.
set -e
here="$(cd "$(dirname "$0")" && pwd)"
rm -rf "$here/map-dist"
mkdir -p "$here/map-dist"

cd "$HOME/Projects/system-map"
npx likec4 build src -o "$here/map-dist/map" --base /map/ --use-hash-history --title "System map" --build-webcomponent false

cd "$HOME/Projects/embry-wiki-internal"
npm run build >/dev/null
cp -R dist "$here/map-dist/wiki"

[ "$1" = "--no-deploy" ] && exit 0
cd "$here" && npx wrangler deploy
