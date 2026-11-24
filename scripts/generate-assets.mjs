import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "src/assets/projects");
const APP = path.join(process.cwd(), "src/app");
const W = 1600;
const H = 1000;
const PAPER = "#e9e4d8";
const PAPER_LIGHT = "#f3f0e8";
const INK = "#171714";
const ACCENT = "#b4461f";
const MUTED = "#6b6960";
const SERIF = "Instrument Serif";
const MONO = "DejaVu Sans Mono";

const esc = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function frame({ dark = false, index, category, year, acronym, title, diagram, accent = ACCENT }) {
  const bg = dark ? INK : PAPER;
  const fg = dark ? PAPER_LIGHT : INK;
  const sub = dark ? "#a8a397" : MUTED;
  const line = dark ? "rgba(243,240,232,0.14)" : "rgba(23,23,20,0.14)";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <g stroke="${line}" stroke-width="1">
    ${Array.from({ length: 15 }, (_, i) => `<line x1="${i * 100 + 50}" y1="0" x2="${i * 100 + 50}" y2="${H}"/>`).join("")}
    ${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 100 + 50}" x2="${W}" y2="${i * 100 + 50}"/>`).join("")}
  </g>
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="none" stroke="${line}" stroke-width="1.5"/>

  <g font-family="${MONO}" font-size="18" letter-spacing="3" fill="${sub}">
    <text x="64" y="80">M. ARIF / SYSTEMS INDEX</text>
    <text x="${W - 64}" y="80" text-anchor="end">${esc(category.toUpperCase())} · ${esc(year)}</text>
    <text x="64" y="${H - 62}">PORTFOLIO / ${esc(acronym)}</text>
    <text x="${W - 64}" y="${H - 62}" text-anchor="end">ILLUSTRATIVE COVER</text>
  </g>

  <text x="${W - 52}" y="${H - 90}" font-family="${SERIF}" font-size="620" fill="${fg}" opacity="${dark ? "0.055" : "0.06"}" text-anchor="end">${esc(index)}</text>

  ${diagram}

  <g font-family="${MONO}" font-size="17" letter-spacing="2.6" fill="${accent}">
    <text x="64" y="806">${esc(acronym)}</text>
  </g>
  <text x="64" y="892" font-family="${SERIF}" font-size="90" fill="${fg}">${esc(title)}</text>
  <line x1="64" y1="766" x2="390" y2="766" stroke="${accent}" stroke-width="4"/>
</svg>`;
}

const diagrams = {
  skm: `
  <g transform="translate(830 300)">
    <circle cx="330" cy="230" r="210" fill="none" stroke="${ACCENT}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="330" cy="230" r="154" fill="none" stroke="${ACCENT}" stroke-width="1.5" opacity="0.35"/>
    <path d="M 330 20 A 210 210 0 0 1 540 230" fill="none" stroke="${ACCENT}" stroke-width="16"/>
    <path d="M 330 76 A 154 154 0 0 1 484 230" fill="none" stroke="${ACCENT}" stroke-width="16" opacity="0.4"/>
    <text x="330" y="252" font-family="${SERIF}" font-size="110" fill="${ACCENT}" text-anchor="middle">IKM</text>
    <text x="330" y="292" font-family="${MONO}" font-size="16" letter-spacing="4" fill="${MUTED}" text-anchor="middle">SERVICE QUALITY</text>
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
      const x = -210 + i * 30;
      const h = [68, 92, 54, 118, 76, 102, 60, 86, 70][i];
      return `<rect x="${x}" y="${300 - h}" width="14" height="${h}" fill="${i === 3 ? ACCENT : MUTED}" opacity="${i === 3 ? 1 : 0.45}"/>`;
    }).join("")}
    <text x="-210" y="336" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${MUTED}">9 SERVICE ELEMENTS</text>
    <line x1="-210" y1="312" x2="170" y2="312" stroke="${MUTED}" opacity="0.3"/>
  </g>`,
  ppid: `
  <g transform="translate(850 250)">
    <g transform="rotate(-6 260 200)">
      <rect x="0" y="30" width="390" height="500" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <rect x="28" y="70" width="120" height="10" fill="${ACCENT}"/>
      <rect x="28" y="110" width="300" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="28" y="140" width="260" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="28" y="170" width="290" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="28" y="200" width="230" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="28" y="250" width="334" height="150" fill="${INK}" opacity="0.05"/>
      <text x="28" y="460" font-family="${MONO}" font-size="16" letter-spacing="2" fill="${MUTED}">DIP / PERIODIC</text>
    </g>
    <g transform="rotate(4 260 200)">
      <rect x="120" y="10" width="390" height="500" fill="${PAPER}" stroke="${INK}" stroke-width="2"/>
      <rect x="148" y="48" width="90" height="10" fill="${ACCENT}"/>
      <rect x="148" y="92" width="300" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="148" y="122" width="250" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="148" y="152" width="286" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="148" y="220" width="260" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="148" y="250" width="220" height="3" fill="${INK}" opacity="0.18"/>
      <rect x="148" y="330" width="334" height="120" fill="${ACCENT}" opacity="0.12"/>
      <text x="148" y="390" font-family="${MONO}" font-size="20" letter-spacing="3" fill="${ACCENT}">REQUEST · TRACKED</text>
    </g>
    <circle cx="500" cy="540" r="34" fill="${ACCENT}"/>
    <path d="M 486 540 l 10 10 l 20 -22" stroke="${PAPER_LIGHT}" stroke-width="4" fill="none"/>
  </g>`,
  ptsp: `
  <g transform="translate(810 270)">
    ${[0, 1, 2, 3].map((i) => {
      const x = i * 105;
      const y = i % 2 === 0 ? 40 : 110;
      return `<g transform="translate(${x} ${y}) rotate(${i % 2 === 0 ? -3 : 3})">
        <rect width="92" height="280" fill="${i === 0 ? ACCENT : PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
        <text x="46" y="74" font-family="${MONO}" font-size="16" fill="${i === 0 ? PAPER_LIGHT : MUTED}" text-anchor="middle">A-00${i + 1}</text>
        <text x="46" y="190" font-family="${SERIF}" font-size="72" fill="${i === 0 ? PAPER_LIGHT : INK}" text-anchor="middle">${i + 1}</text>
        <line x1="18" y1="220" x2="74" y2="220" stroke="${i === 0 ? PAPER_LIGHT : MUTED}" opacity="0.5"/>
        <text x="46" y="252" font-family="${MONO}" font-size="12" fill="${i === 0 ? PAPER_LIGHT : MUTED}" text-anchor="middle">PTSP</text>
      </g>`;
    }).join("")}
    <g transform="translate(0 460)">
      <line x1="0" y1="0" x2="430" y2="0" stroke="${INK}" stroke-width="2"/>
      <line x1="0" y1="14" x2="430" y2="14" stroke="${INK}" stroke-width="1" opacity="0.3"/>
      <text x="0" y="54" font-family="${MONO}" font-size="17" letter-spacing="3" fill="${ACCENT}">NOW SERVING · A-001</text>
      <text x="430" y="54" font-family="${MONO}" font-size="17" letter-spacing="3" fill="${MUTED}" text-anchor="end">COUNTER 03</text>
    </g>
    <g transform="translate(500 40)">
      <rect width="180" height="360" fill="${INK}" opacity="0.06"/>
      <text x="24" y="46" font-family="${MONO}" font-size="14" letter-spacing="2" fill="${MUTED}">PRIORITY</text>
      <text x="24" y="136" font-family="${SERIF}" font-size="64" fill="${ACCENT}">P</text>
      <path d="M 24 190 l 0 120" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="6 8"/>
    </g>
  </g>`,
  agen: `
  <g transform="translate(790 240)">
    <g>
      ${Array.from({ length: 7 }, (_, col) =>
        Array.from({ length: 4 }, (_, row) => {
          const active = (col + row) % 5 === 0;
          return `<rect x="${col * 76}" y="${row * 76}" width="64" height="64" fill="${active ? ACCENT : "none"}" stroke="${INK}" stroke-width="1.5" opacity="${active ? 1 : 0.4}"/>`;
        }).join(""),
      ).join("")}
      <text x="0" y="356" font-family="${MONO}" font-size="16" letter-spacing="3" fill="${MUTED}">WEEKLY ROSTER / 28 SESSIONS</text>
    </g>
    <g transform="translate(480 40) rotate(3)">
      <rect width="300" height="420" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <text x="28" y="54" font-family="${MONO}" font-size="14" letter-spacing="2" fill="${ACCENT}">JURNAL MENGAJAR</text>
      <line x1="28" y1="78" x2="272" y2="78" stroke="${INK}" opacity="0.25"/>
      ${[0, 1, 2, 3, 4].map((i) => `<line x1="28" y1="${112 + i * 34}" x2="${i === 4 ? 200 : 272}" y2="${112 + i * 34}" stroke="${INK}" opacity="0.18" stroke-width="3"/>`).join("")}
      <rect x="200" y="300" width="72" height="72" fill="${INK}"/>
      ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 5 }, (_, c) => `<rect x="${210 + c * 10}" y="${310 + r * 10}" width="7" height="7" fill="${PAPER_LIGHT}" opacity="${(r * 5 + c) % 3 === 0 ? 1 : 0}"/>`).join("")).join("")}
      <text x="28" y="392" font-family="${MONO}" font-size="12" letter-spacing="2" fill="${MUTED}">VERIFIED PDF</text>
    </g>
    <circle cx="150" cy="520" r="5" fill="${ACCENT}"/>
    <line x1="150" y1="525" x2="150" y2="590" stroke="${ACCENT}" stroke-width="2"/>
    <text x="168" y="560" font-family="${MONO}" font-size="14" letter-spacing="2" fill="${MUTED}">JTM / REPORT</text>
  </g>`,
  sipadu: `
  <g transform="translate(800 260)">
    <line x1="280" y1="230" x2="540" y2="90" stroke="${ACCENT}" stroke-width="2"/>
    <line x1="280" y1="230" x2="540" y2="370" stroke="${ACCENT}" stroke-width="2"/>
    <line x1="280" y1="230" x2="540" y2="230" stroke="${ACCENT}" stroke-width="1" opacity="0.4" stroke-dasharray="7 9"/>
    <circle cx="280" cy="230" r="118" fill="${INK}"/>
    <circle cx="280" cy="230" r="96" fill="none" stroke="${PAPER_LIGHT}" stroke-width="1" opacity="0.4"/>
    <text x="280" y="222" font-family="${SERIF}" font-size="40" fill="${PAPER_LIGHT}" text-anchor="middle">SIPADU</text>
    <text x="280" y="258" font-family="${MONO}" font-size="12" letter-spacing="2" fill="${PAPER_LIGHT}" text-anchor="middle" opacity="0.65">IDENTITY PROVIDER</text>
    ${[0, 1, 2, 3].map((i) => `<circle cx="${280 + Math.cos((i * Math.PI) / 2) * 118}" cy="${230 + Math.sin((i * Math.PI) / 2) * 118}" r="8" fill="${ACCENT}"/>`).join("")}
    <g transform="translate(540 40)">
      <rect width="230" height="120" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <text x="22" y="46" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${ACCENT}">ARENA</text>
      <text x="22" y="82" font-family="${MONO}" font-size="13" fill="${MUTED}">CBT / EXAMS</text>
    </g>
    <g transform="translate(540 330)">
      <rect width="230" height="120" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <text x="22" y="46" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${ACCENT}">AGEN</text>
      <text x="22" y="82" font-family="${MONO}" font-size="13" fill="${MUTED}">TEACHING JOURNAL</text>
    </g>
    <g transform="translate(540 195)">
      <rect width="230" height="70" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="4 6"/>
      <text x="22" y="42" font-family="${MONO}" font-size="13" letter-spacing="2" fill="${MUTED}">SSO / MASTER DATA</text>
    </g>
    <g fill="${ACCENT}">
      <circle cx="410" cy="150" r="5"/><circle cx="480" cy="205" r="5"/><circle cx="410" cy="310" r="5"/>
    </g>
  </g>`,
  rfid: `
  <g transform="translate(820 290)">
    ${[80, 130, 180, 230].map((r, i) => `<circle cx="150" cy="210" r="${r}" fill="none" stroke="${ACCENT}" stroke-width="2" opacity="${0.55 - i * 0.1}" stroke-dasharray="10 14"/>`).join("")}
    <rect x="60" y="150" width="180" height="120" rx="4" fill="${INK}"/>
    <rect x="84" y="176" width="86" height="10" fill="${PAPER_LIGHT}" opacity="0.75"/>
    <rect x="84" y="200" width="54" height="6" fill="${PAPER_LIGHT}" opacity="0.4"/>
    <circle cx="198" cy="212" r="14" fill="${ACCENT}"/>
    <line x1="430" y1="210" x2="610" y2="210" stroke="${INK}" stroke-width="2"/>
    <path d="M 610 210 l -18 -10 l 0 20 z" fill="${INK}"/>
    <g transform="translate(560 110)">
      <ellipse cx="100" cy="40" rx="100" ry="34" fill="${ACCENT}"/>
      <rect x="0" y="40" width="200" height="170" fill="${ACCENT}"/>
      <ellipse cx="100" cy="210" rx="100" ry="34" fill="${ACCENT}"/>
      <ellipse cx="100" cy="40" rx="100" ry="34" fill="none" stroke="${PAPER_LIGHT}" stroke-width="2" opacity="0.4"/>
      <text x="100" y="128" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${PAPER_LIGHT}" text-anchor="middle">ATTENDANCE</text>
      <text x="100" y="162" font-family="${SERIF}" font-size="50" fill="${PAPER_LIGHT}" text-anchor="middle">LIVE</text>
    </g>
    <text x="60" y="520" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${MUTED}">DEVICE EVENT → BACKEND → WEB RECORD</text>
  </g>`,
  sarang: `
  <g transform="translate(850 260)">
    ${[0, 1, 2].map((i) => `<circle cx="310" cy="250" r="${210 - i * 62}" fill="none" stroke="${i === 0 ? ACCENT : INK}" stroke-width="${i === 0 ? 10 : 1.5}" opacity="${i === 0 ? 0.9 : 0.25}"/>`).join("")}
    <circle cx="310" cy="250" r="40" fill="${INK}"/>
    <path d="M 310 210 l 0 -34 M 310 290 l 0 34" stroke="${ACCENT}" stroke-width="6"/>
    <text x="310" y="262" font-family="${SERIF}" font-size="40" fill="${PAPER_LIGHT}" text-anchor="middle">25</text>
    <g transform="translate(560 90)">
      <rect width="210" height="300" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <text x="24" y="44" font-family="${MONO}" font-size="13" letter-spacing="2" fill="${ACCENT}">DAILY NOTE</text>
      <line x1="24" y1="66" x2="186" y2="66" stroke="${INK}" opacity="0.2"/>
      ${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="24" y1="${100 + i * 28}" x2="${i === 5 ? 130 : 186}" y2="${100 + i * 28}" stroke="${INK}" opacity="0.16" stroke-width="3"/>`).join("")}
      <circle cx="166" cy="260" r="18" fill="none" stroke="${ACCENT}" stroke-width="2"/>
      <path d="M 158 260 l 6 7 l 12 -14" stroke="${ACCENT}" stroke-width="2.5" fill="none"/>
    </g>
    <g font-family="${MONO}" font-size="14" letter-spacing="2" fill="${MUTED}">
      <text x="100" y="540">FOCUS / ASSIST / REFLECT</text>
    </g>
  </g>`,
  chatbot: `
  <g transform="translate(820 260)">
    <g transform="translate(0 40)">
      <rect width="300" height="120" rx="2" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <text x="24" y="52" font-family="${MONO}" font-size="13" letter-spacing="2" fill="${MUTED}">STUDENT</text>
      <text x="24" y="88" font-family="${MONO}" font-size="18" fill="${INK}">Where is my academic data?</text>
    </g>
    <g transform="translate(130 210)">
      <rect width="360" height="150" fill="${ACCENT}"/>
      <text x="24" y="48" font-family="${MONO}" font-size="13" letter-spacing="2" fill="${PAPER_LIGHT}" opacity="0.7">STUDENT CARE</text>
      <text x="24" y="88" font-family="${MONO}" font-size="17" fill="${PAPER_LIGHT}">I can help with that.</text>
      <text x="24" y="118" font-family="${MONO}" font-size="17" fill="${PAPER_LIGHT}">Choose a topic below.</text>
    </g>
    <g transform="translate(410 430)">
      ${[0, 1, 2].map((i) => `<circle cx="${i * 34}" cy="0" r="6" fill="${ACCENT}"/>`).join("")}
    </g>
    <g transform="translate(480 70)">
      <rect width="140" height="140" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="5 7"/>
      <text x="70" y="62" font-family="${MONO}" font-size="12" letter-spacing="2" fill="${MUTED}" text-anchor="middle">DIALOGFLOW</text>
      <text x="70" y="92" font-family="${SERIF}" font-size="34" fill="${INK}" text-anchor="middle">NLP</text>
    </g>
    <path d="M 300 160 C 400 160 390 120 480 120" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="7 8"/>
  </g>`,
  faculty: `
  <g transform="translate(830 220)">
    <g stroke="${INK}" stroke-width="1.5" fill="none">
      <rect x="0" y="0" width="520" height="520" opacity="0.22"/>
      ${[1, 2, 3, 4].map((i) => `<line x1="${i * 104}" y1="0" x2="${i * 104}" y2="520" opacity="0.18"/>`).join("")}
      ${[1, 2, 3, 4].map((i) => `<line x1="0" y1="${i * 104}" x2="520" y2="${i * 104}" opacity="0.18"/>`).join("")}
      <path d="M 0 420 L 260 260 L 520 420" opacity="0.5"/>
      <path d="M 0 520 L 260 360 L 520 520" opacity="0.3"/>
      <rect x="130" y="130" width="260" height="260" fill="${PAPER_LIGHT}" opacity="0.9"/>
      <rect x="130" y="130" width="260" height="260" opacity="0.7"/>
      <line x1="130" y1="200" x2="390" y2="200" opacity="0.3"/>
      <line x1="130" y1="320" x2="390" y2="320" opacity="0.3"/>
    </g>
    <text x="260" y="250" font-family="${SERIF}" font-size="118" fill="${INK}" text-anchor="middle">FST</text>
    <text x="260" y="296" font-family="${MONO}" font-size="13" letter-spacing="3" fill="${ACCENT}" text-anchor="middle">SCIENCE &amp; TECHNOLOGY</text>
    <text x="260" y="376" font-family="${MONO}" font-size="12" letter-spacing="2" fill="${MUTED}" text-anchor="middle">FACULTY PROFILE</text>
    <g fill="${ACCENT}">
      <circle cx="0" cy="0" r="6"/><circle cx="520" cy="0" r="6"/><circle cx="0" cy="520" r="6"/><circle cx="520" cy="520" r="6"/>
    </g>
  </g>`,
  network: `
  <g transform="translate(800 240)">
    <g stroke="${INK}" stroke-width="1.5" opacity="0.45">
      <line x1="300" y1="250" x2="80" y2="80"/><line x1="300" y1="250" x2="540" y2="90"/>
      <line x1="300" y1="250" x2="90" y2="440"/><line x1="300" y1="250" x2="530" y2="440"/>
      <line x1="300" y1="250" x2="300" y2="500"/>
      <line x1="80" y1="80" x2="540" y2="90" stroke-dasharray="5 8"/>
      <line x1="90" y1="440" x2="530" y2="440" stroke-dasharray="5 8"/>
    </g>
    <g>
      <rect x="230" y="180" width="140" height="140" fill="${INK}"/>
      <text x="300" y="238" font-family="${MONO}" font-size="13" letter-spacing="2" fill="${PAPER_LIGHT}" text-anchor="middle">SWITCH</text>
      <text x="300" y="266" font-family="${MONO}" font-size="12" fill="${PAPER_LIGHT}" opacity="0.6" text-anchor="middle">LAB CORE</text>
    </g>
    ${[
      [80, 80],
      [540, 90],
      [90, 440],
      [530, 440],
      [300, 500],
    ].map(([x, y], i) => `<g transform="translate(${x} ${y})">
      <rect x="-48" y="-38" width="96" height="76" fill="${PAPER_LIGHT}" stroke="${INK}" stroke-width="2"/>
      <rect x="-30" y="-18" width="60" height="34" fill="${i === 4 ? ACCENT : INK}" opacity="${i === 4 ? 1 : 0.12}"/>
      <text x="0" y="52" font-family="${MONO}" font-size="12" letter-spacing="1" fill="${MUTED}" text-anchor="middle">PC-0${i + 1}</text>
    </g>`).join("")}
    <text x="0" y="600" font-family="${MONO}" font-size="15" letter-spacing="2" fill="${MUTED}">TOPOLOGY / DEVICE INVENTORY / DOCUMENTATION</text>
  </g>`,
};

const projectCovers = [
  {
    file: "skm",
    index: "01",
    category: "Public Services",
    year: "2026",
    acronym: "e-SKM",
    title: "Satisfaction, measured.",
    diagram: diagrams.skm,
    dark: false,
  },
  {
    file: "ppid",
    index: "02",
    category: "Public Services",
    year: "2026",
    acronym: "PPID",
    title: "Information, disclosed.",
    diagram: diagrams.ppid,
    dark: true,
  },
  {
    file: "ptsp",
    index: "03",
    category: "Public Services",
    year: "2026",
    acronym: "PTSP",
    title: "A calmer queue.",
    diagram: diagrams.ptsp,
    dark: false,
  },
  {
    file: "agen",
    index: "04",
    category: "Education",
    year: "2026",
    acronym: "AGEN",
    title: "Teach once. Record once.",
    diagram: diagrams.agen,
    dark: false,
  },
  {
    file: "sipadu",
    index: "05",
    category: "System Integration",
    year: "2026",
    acronym: "SIPADU",
    title: "One source of truth.",
    diagram: diagrams.sipadu,
    dark: true,
  },
  {
    file: "rfid",
    index: "06",
    category: "IoT",
    year: "2025–2026",
    acronym: "RFID",
    title: "Presence, recorded.",
    diagram: diagrams.rfid,
    dark: false,
  },
  {
    file: "sarang",
    index: "07",
    category: "Product",
    year: "2025–Present",
    acronym: "ST",
    title: "Focus, then reflect.",
    diagram: diagrams.sarang,
    dark: true,
  },
  {
    file: "chatbot",
    index: "08",
    category: "AI",
    year: "2025",
    acronym: "ASC",
    title: "Answers, on demand.",
    diagram: diagrams.chatbot,
    dark: false,
  },
  {
    file: "faculty",
    index: "09",
    category: "Web",
    year: "Academic",
    acronym: "FST",
    title: "A faculty, presented.",
    diagram: diagrams.faculty,
    dark: true,
  },
  {
    file: "network",
    index: "10",
    category: "Infrastructure",
    year: "2025–2026",
    acronym: "NET",
    title: "The lab, mapped.",
    diagram: diagrams.network,
    dark: false,
  },
];

await mkdir(OUT, { recursive: true });
await mkdir(APP, { recursive: true });

for (const project of projectCovers) {
  const svg = frame(project);
  const svgPath = path.join(OUT, `${project.file}.svg`);
  const pngPath = path.join(OUT, `${project.file}.png`);
  await writeFile(svgPath, svg);
  await sharp(Buffer.from(svg), { density: 144 })
    .resize(W, H)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(pngPath);
  console.log(`generated ${project.file}.png`);
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <g stroke="rgba(23,23,20,0.12)" stroke-width="1">
    ${Array.from({ length: 13 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630"/>`).join("")}
    ${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="1200" y2="${i * 100}"/>`).join("")}
  </g>
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="rgba(23,23,20,0.2)"/>
  <g font-family="${MONO}" font-size="15" letter-spacing="3" fill="${MUTED}">
    <text x="64" y="78">PORTFOLIO / 2026</text>
    <text x="1136" y="78" text-anchor="end">PALEMBANG, ID</text>
  </g>
  <line x1="64" y1="112" x2="1136" y2="112" stroke="${ACCENT}" stroke-width="4"/>
  <text x="64" y="260" font-family="${SERIF}" font-size="96" fill="${INK}">Muhammad Arif</text>
  <text x="64" y="356" font-family="${SERIF}" font-size="96" fill="${INK}">Rahmad S.</text>
  <text x="66" y="420" font-family="${MONO}" font-size="22" letter-spacing="4" fill="${ACCENT}">FULL-STACK DEVELOPER</text>
  <g font-family="${MONO}" font-size="14" letter-spacing="2" fill="${MUTED}">
    <text x="64" y="524">WEB APPLICATIONS / SYSTEM INTEGRATION</text>
    <text x="64" y="552">IoT / APPLICATION SECURITY</text>
    <text x="1136" y="552" text-anchor="end">mhmmdarifrahmads@gmail.com</text>
  </g>
  <g transform="translate(930 200)" stroke="${ACCENT}" fill="none">
    <circle cx="90" cy="90" r="86" stroke-width="2" opacity="0.4"/>
    <circle cx="90" cy="90" r="58" stroke-width="8"/>
    <circle cx="90" cy="90" r="26" fill="${INK}" stroke="none"/>
    <line x1="90" y1="0" x2="90" y2="18" stroke-width="4"/>
    <line x1="90" y1="162" x2="90" y2="180" stroke-width="4"/>
    <line x1="0" y1="90" x2="18" y2="90" stroke-width="4"/>
    <line x1="162" y1="90" x2="180" y2="90" stroke-width="4"/>
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg), { density: 144 })
  .resize(1200, 630)
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(path.join(APP, "opengraph-image.png"));
await sharp(Buffer.from(ogSvg), { density: 144 })
  .resize(1200, 630)
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(path.join(APP, "twitter-image.png"));

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${INK}"/>
  <rect x="36" y="36" width="440" height="440" fill="none" stroke="${PAPER}" stroke-opacity="0.22" stroke-width="2"/>
  <text x="256" y="318" font-family="${SERIF}" font-size="232" fill="${PAPER}" text-anchor="middle">M</text>
  <rect x="176" y="356" width="160" height="8" fill="${ACCENT}"/>
</svg>`;

await sharp(Buffer.from(iconSvg), { density: 144 })
  .resize(512, 512)
  .png({ quality: 95 })
  .toFile(path.join(APP, "icon.png"));
await sharp(Buffer.from(iconSvg), { density: 144 })
  .resize(180, 180)
  .png({ quality: 95 })
  .toFile(path.join(APP, "apple-icon.png"));
const iconPath = path.join(APP, "icon.png");
try {
  execFileSync("convert", [
    iconPath,
    "-define",
    "icon:auto-resize=64,48,32,16",
    path.join(APP, "favicon.ico"),
  ]);
} catch {
  console.warn("ImageMagick not available; favicon.ico was not regenerated.");
}

console.log("generated OG, Twitter, and icon assets");
