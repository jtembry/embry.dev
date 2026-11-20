// HomeADE shots: the stand-in's /app page in headless Chromium, Agents screen, both looks.
// usage: node shoot-homeade.mjs   (server.mjs must be running; writes /tmp/fa-shots/homeade-{pro,dos}.png)
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://127.0.0.1:8789';
const OUT = '/tmp/fa-shots';
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
for (const look of ['pro', 'dos']) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 814 }, deviceScaleFactor: 2, colorScheme: 'dark' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  await page.addInitScript((l) => {
    localStorage.setItem('homeade.look', l);
    localStorage.setItem('homeade.section', 'agents');
  }, look);
  await page.goto(`${BASE}/app#t=demo`);
  // Click the row once the list is in, so the header carries the title and the scripted chat plays.
  await page.waitForTimeout(3000);
  await page.locator('#chatlist .chatrow .title', { hasText: 'FieldADE' }).first().click();
  await page.mouse.move(1100, 700);
  await page.waitForTimeout(8000);
  await page.screenshot({ path: `${OUT}/homeade-${look}.png` });
  console.log(look, 'errors:', errors.length ? errors.join(' | ') : 'none');
  await ctx.close();
}
await browser.close();
