// status + uptime
const statusEl = document.getElementById("status");
const uptimeEl = document.getElementById("uptime");

function pad(n) {
  return String(n).padStart(2, "0");
}

let seconds = 0;
setInterval(() => {
  seconds++;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  uptimeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}, 1000);

const statuses = ["linked", "stable", "signal drift", "re-routing…", "handshake ok"];
let si = 0;
setInterval(() => {
  si = (si + 1) % statuses.length;
  statusEl.textContent = statuses[si];
}, 2200);

// panes
const syslogEl = document.getElementById("syslog");
const packetsEl = document.getElementById("packets");
const layersEl = document.getElementById("layersPane");
const traceEl = document.getElementById("trace");

// content
const lines = {
  syslog: [
    "[boot] initializing interface",
    "[auth] anonymous session granted",
    "[fs] mounting /mem",
    "[net] dns resolved",
    "[notice] user data archived successfully"
  ],
  packets: [
    "TX 0001 -> 11001100 00101010",
    "RX 0002 <- 10100011 00011101",
    "TX 0003 -> SYN",
    "RX 0003 <- ACK",
    "TX 0004 -> keep-alive",
    "RX 0004 <- keep-alive"
  ],
  layers: [
    "layer 01: perception",
    "layer 02: distortion",
    "layer 03: recursion",
    "layer 04: echo",
    "layer 05: presence",
    "layer 06: silence"
  ],
  trace: [
    "trace: wired/entrance",
    "trace: layer/01",
    "trace: layer/02",
    "trace: protocol/handshake",
    "trace: protocol/persistence",
    "trace: loopback"
  ]
};

// drip function
function drip(el, arr, delay = 550) {
  let i = 0;
  el.textContent = "";

  const t = setInterval(() => {
    el.textContent += (i ? "\n" : "") + arr[i];
    i++;
    if (i >= arr.length) clearInterval(t);
  }, delay);
}

// start output
drip(syslogEl, lines.syslog, 600);
drip(packetsEl, lines.packets, 430);
drip(layersEl, lines.layers, 610);
drip(traceEl, lines.trace, 560);
