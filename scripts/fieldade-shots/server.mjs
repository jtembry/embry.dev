// Stand-in home base for screenshots: fixed sample data, one scripted chat.
import http from 'node:http';
import fs from 'node:fs';
import { WebSocketServer } from 'ws';

const PORT = 8789;
const mission = () => JSON.parse(fs.readFileSync('./mission.json', 'utf8'));

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
  if (url.pathname === '/sessions' && req.method === 'GET') return json(res, 200, { sessions });
  if (url.pathname === '/mac-sessions') return json(res, 200, { sessions: [] });
  if (url.pathname === '/usage') return json(res, 200, {
    claude: { fiveHour: { percent: 19, resetsAt: now + 3600e3 }, week: { percent: 24, resetsAt: now + 4 * 86400e3 }, limited: false, at: now },
    grok: { percent: 57, period: 'week', resetsAt: now + 86400e3, tier: 'SuperGrok', at: now },
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
