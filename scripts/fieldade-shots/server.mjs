// Stand-in home base for screenshots: fixed sample data, one scripted chat.
import http from 'node:http';
import fs from 'node:fs';
import { WebSocketServer } from 'ws';

const PORT = 8789;
const mission = () => JSON.parse(fs.readFileSync('./mission.json', 'utf8'));

// HomeADE shots (2026-11-20): the Mac window is the home base's own web page, so this stand-in
// also serves that page (GET /app, /app/<file>) from the real repo's web/ folder. The page then
// asks this server for its data, and sees the same made-up rows the phone shots use.
import path from 'node:path';
import os from 'node:os';
const WEB = process.env.WEB_DIR || path.join(os.homedir(), 'RemoteAgentMac', 'web');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json; charset=utf-8' };
// The footer shows the released desktop app's version (src/data/homeade-releases.json, newest first).
const version = (() => { try { return JSON.parse(fs.readFileSync('../../src/data/homeade-releases.json', 'utf8'))[0].version; } catch { return '0.4.0'; } })();
function serveWeb(url, res) {
  const rel = url.pathname === '/app' || url.pathname === '/app/' ? 'index.html' : url.pathname.slice('/app/'.length);
  const file = path.resolve(WEB, rel);
  if (!file.startsWith(WEB + path.sep) || !TYPES[path.extname(file)] || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] });
  fs.createReadStream(file).pipe(res);
}

const models = [
  { id: 'claude-fable-5-1', label: 'Fable 5.1', kind: 'claude', effort: true, effortDefault: 'high' },
  { id: 'claude-opus-5-5', label: 'Opus 5.5', kind: 'claude', effort: true, effortDefault: 'medium' },
  { id: 'grok-4.7', label: 'Grok 4.7', kind: 'grok', effort: false, effortDefault: null },
];
const now = Date.now();
const sessions = [
  { id: 'claude-1', kind: 'claude', title: 'FieldADE', sessionId: 'a', model: 'claude-fable-5-1', modelLabel: 'Fable 5.1', models, state: 'connected', mode: null, approval: 'ask', activity: 'permission', replyAt: now - 40e3, path: '~/RemoteAgentIOS' },
  { id: 'claude-2', kind: 'claude', title: 'Henderson quote', sessionId: 'b', model: 'claude-opus-5-5', modelLabel: 'Opus 5.5', models, state: 'connected', mode: null, approval: 'ask', activity: 'working', replyAt: now - 3 * 60e3, path: '~/second_brain' },
  { id: 'grok-1', kind: 'grok', title: 'Site copy', sessionId: 'c', model: 'grok-4.7', modelLabel: 'Grok 4.7', models, state: 'disconnected', mode: null, approval: 'ask', activity: 'idle', replyAt: now - 2 * 3600e3, path: '~/Projects/embry-dev-site' },
  { id: 'claude-3', kind: 'claude', title: 'Truck service', sessionId: 'd', model: 'claude-fable-5-1', modelLabel: 'Fable 5.1', models, state: 'disconnected', mode: null, approval: 'ask', activity: 'idle', replyAt: now - 26 * 3600e3, path: '~' },
];

const json = (res, code, body) => {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', 'http://x');
  console.log(req.method, url.pathname);
  if (url.pathname === '/health') return json(res, 200, { ok: true });
  if (url.pathname === '/app' || url.pathname.startsWith('/app/')) return serveWeb(url, res);
  // What the web page asks for beyond the phone's routes: empty answers keep every screen quiet.
  if (url.pathname === '/peers') return json(res, 200, { peers: [] });
  if (/^\/sessions\/[^/]+\/history/.test(url.pathname)) return json(res, 200, { messages: [], more: false });
  if (/^\/sessions\/[^/]+\/desk/.test(url.pathname)) return json(res, 200, {});
  if (url.pathname === '/tags') return json(res, 200, { tags: [] });
  if (url.pathname === '/commands') return json(res, 200, { commands: [] });
  if (url.pathname === '/skills') return json(res, 200, { skills: [] });
  if (url.pathname === '/folders') return json(res, 200, { folders: [] });
  if (url.pathname === '/mail/accounts') return json(res, 200, { accounts: [] });
  if (url.pathname === '/task-models') return json(res, 200, { models: [] });
  if (url.pathname === '/vault') return json(res, 200, { path: '~/second_brain', vault: '~/second_brain' });
  // What the app asks first: name, features (turn on Mission Control, email, texts, scans), models.
  if (url.pathname === '/about') return json(res, 200, {
    ok: true, name: 'Mac', platform: 'darwin', models, relay: null, version: { version },
    features: { mission: true, grok: true, browser: false, usage: true, scripts: true, ingest: true,
                email: true, texts: true, scans: true, voice: false, terminal: true },
  });
  if (url.pathname === '/terminals' && req.method === 'GET') return json(res, 200, { terminals: [] });
  if (url.pathname === '/sessions' && req.method === 'GET') return json(res, 200, { sessions });
  if (url.pathname === '/mac-sessions') return json(res, 200, { sessions: [] });
  if (url.pathname === '/usage') return json(res, 200, {
    claude: { fiveHour: { percent: 19, resetsAt: now + 3600e3 }, week: { percent: 24, resetsAt: now + 4 * 86400e3 }, limited: false, at: now },
    grok: { percent: 57, period: 'week', resetsAt: now + 86400e3, tier: 'SuperGrok', at: now },
    turns: { today: { claude: { turns: 14, tokens: 182000 }, grok: { turns: 3, tokens: 21000 } },
             week: { claude: { turns: 96, tokens: 1310000 }, grok: { turns: 22, tokens: 160000 } } },
  });
  if (url.pathname === '/mission' && req.method === 'GET') return json(res, 200, mission());
  if (url.pathname.startsWith('/mission/')) return json(res, 202, { ok: true });
  json(res, 404, { error: 'not here' });
});

const wss = new WebSocketServer({ noServer: true });
server.on('upgrade', (req, socket, head) => {
  const url = new URL(req.url || '/', 'http://x');
  wss.handleUpgrade(req, socket, head, (ws) => {
    const send = (o) => ws.readyState === ws.OPEN && ws.send(JSON.stringify(o));
    ws.on('message', (d) => {
      let ev; try { ev = JSON.parse(d.toString()); } catch { return; }
      if (ev.type === 'ping') return send({ type: 'pong' });
      if (ev.type === 'stdin') { played = true; play(ev.sessionId); }
      if (ev.type === 'permissionReply') {
        send({ type: 'permissionDone', sessionId: ev.sessionId, requestId: ev.requestId });
      }
    });
    let played = false;
    const play = (sessionId) => {
      {
        send({ type: 'status', sessionId, state: 'connected', detail: 'working' });
        setTimeout(() => send({ type: 'stdout', sessionId, text:
`Add a dark mode toggle to the settings screen

On it. The settings screen already stores its values with @AppStorage, so the toggle fits there.

Plan:

- Add an "Appearance" section with a Dark mode switch.
- Save the choice so it survives a restart.
- Apply it to the whole app at launch.

Starting with the settings screen.` }), 800);
        setTimeout(() => send({ type: 'permission', sessionId, requestId: 'r1', tool: 'Edit', detail: 'RemoteAgent/SettingsView.swift' }), 1600);
      }
    };
    console.log('WS', url.pathname);
    if (url.pathname === '/mission') {
      send({ type: 'mission', data: mission() });
      return;
    }
    const m = url.pathname.match(/^\/sessions\/([^/]+)$/);
    if (m) {
      send({ type: 'status', sessionId: m[1], state: 'connected', detail: 'idle' });
      setTimeout(() => { if (!played) { played = true; play(m[1]); } }, 2500);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => console.log(`demo home base on ${PORT}`));
