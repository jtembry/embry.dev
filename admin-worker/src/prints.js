// Print stats from the prints database on brainpi. The Worker cannot reach brainpi, so the Mac pushes a
// snapshot into D1 (table admin_blobs, name 'prints') after every print: ~/Documents/3d_printing/db/export_admin.py.
// Grams, print time and cost stay here; the public site never shows them.
import { esc, money, num, cards, table, bars, lastDays, failed } from "./layout.js";

export async function prints(env) {
  const row = await env.DB.prepare("SELECT json, updated FROM admin_blobs WHERE name = 'prints'").first();
  return row ? { ...JSON.parse(row.json), updated: row.updated } : null;
}

const hours = (min) => (min == null ? "" : min >= 60 ? `${Math.floor(min / 60)} h ${min % 60} m` : `${min} m`);

export async function printsPage(env) {
  let p;
  try { p = await prints(env); } catch (e) { return failed("Prints", e.message); }
  if (!p) return `<div class="setup"><b>No print data yet.</b> Run <code>python3 ~/Documents/3d_printing/db/export_admin.py</code> on the Mac.</div>`;
  const t = p.totals;
  const perDay = {};
  for (const r of p.rows) if (r.outcome === "finished" && r.finished) perDay[r.finished.slice(0, 10)] = (perDay[r.finished.slice(0, 10)] || 0) + 1;
  const recent = p.rows.slice(0, 40).map((r) => [
    esc((r.finished || r.started || "").slice(0, 10)), esc(r.print_name), esc(r.outcome || ""),
    esc(hours(r.minutes)), r.grams == null ? "" : `${num(r.grams)} g`, r.filament_cost == null ? "" : money(Math.round(r.filament_cost * 100)),
  ]);
  return `${cards([[num(t.finished), "Prints finished"], [`${t.hours}`, "Hours printing"], [`${t.kilograms} kg`, "Filament, finished prints"], [money(Math.round((t.filament_cost || 0) * 100)), "Filament cost, all prints"]])}
${cards([[num(t.cancelled), "Cancelled"], [num(t.failed), "Failed"], [`${t.kilograms_not_finished} kg`, "Filament in prints that did not finish"]])}
<h2>Finished prints per day, last 30 days</h2>${bars(lastDays(perDay))}
<h2>Latest prints</h2><div class="wide">${table(recent, ["Date", "Print", "Result", "Time", "Filament", "Cost"], [3, 4, 5])}</div>
<p class="note">Snapshot of the prints database on brainpi, pushed ${esc(p.updated)} UTC. It refreshes after every print. Cost is filament only.</p>`;
}
