#!/bin/sh
# Kept for old habits: the map and the wiki share map-dist/, so a rebuild of one is a rebuild of both.
exec "$(cd "$(dirname "$0")" && pwd)/build-assets.sh" "$@"
