-- One row per day, file and source; n counts completed downloads. No IP addresses or user agents are stored.
CREATE TABLE IF NOT EXISTS downloads (
  day    TEXT NOT NULL,   -- UTC date, YYYY-MM-DD
  file   TEXT NOT NULL,   -- e.g. HomeBase-0.1.0.dmg or HomeBase-latest.dmg
  source TEXT NOT NULL,   -- web | brew
  n      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, file, source)
);
