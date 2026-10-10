CREATE TABLE IF NOT EXISTS rides (
  trip TEXT NOT NULL,
  id   INTEGER NOT NULL,
  pri  TEXT,             -- das | must | opt | wont
  pt   INTEGER NOT NULL DEFAULT 0,  -- when pri was set (client ms)
  done INTEGER,          -- 1 | 0
  dt   INTEGER NOT NULL DEFAULT 0,  -- when done was set (client ms)
  PRIMARY KEY (trip, id)
);
