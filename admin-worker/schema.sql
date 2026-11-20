-- Snapshots pushed in from outside Cloudflare, one JSON document per name. 'prints' = ~/Documents/3d_printing/db/export_admin.py.
CREATE TABLE IF NOT EXISTS admin_blobs (
  name    TEXT PRIMARY KEY,
  json    TEXT NOT NULL,
  updated TEXT NOT NULL   -- UTC, YYYY-MM-DD HH:MM
);
