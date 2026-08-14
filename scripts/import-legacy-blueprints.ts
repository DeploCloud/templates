/**
 * One-shot import of the catalog Deplo used to ship inside its own repo
 * (`templates/catalog.json` + `templates/blueprints/<id>/`) into this repo's
 * source layout (`src/templates/<slug>/`).
 *
 *   bun run scripts/import-legacy-blueprints.ts <deplo-checkout>
 *
 * Kept in the repo as the record of where the initial catalog came from. It is
 * not part of the build: `bun run generate` is.
 */
import { categories as CATEGORIES } from "../src/categories";
import { slugify } from "../src/utils/strings";

const source = process.argv[2];
if (!source) {
  console.error("usage: bun run scripts/import-legacy-blueprints.ts <deplo-checkout>");
  process.exit(1);
}

const outputDirectory = `${import.meta.dir}/../src/templates`;
const STAMP = new Date("2026-08-14T00:00:00.000Z");
const SUBMITTED_BY = { label: "Deplo", url: "https://github.com/DeploCloud" };

/** Names the legacy ids collided on, or that were simply spelled wrong. */
const RENAMES: Record<string, string> = {
  commentoplusplus: "Commento Plus Plus",
  odoo_17: "Odoo 17",
  odoo_18: "Odoo 18",
  odoo_19: "Odoo 19",
  supabase: "Supabase",
  "pre0.22.5-supabase": "Supabase Legacy",
};

/**
 * Tag → category, first match wins, so the ordering IS the priority: a template
 * tagged both `ai` and `api` is an AI template, not a developer tool.
 */
const RULES: [keyof typeof CATEGORIES, string[]][] = [
  ["ai", ["ai", "llm", "llms", "chatbot", "ml", "machine-learning", "ollama", "rag", "vector", "openai", "gpt", "nlp", "stable-diffusion", "speech", "transcription", "agents"]],
  ["database", ["database", "databases", "postgres", "postgresql", "mysql", "mariadb", "redis", "mongodb", "mongo", "sqlite", "clickhouse", "sql", "nosql", "dbms", "key-value", "timeseries", "time-series", "valkey", "couchdb", "neo4j"]],
  ["security", ["security", "authentication", "auth", "sso", "oauth", "oauth2", "saml", "oidc", "identity", "authorization", "password", "passwords", "vault", "secrets", "2fa", "ldap", "firewall", "antivirus", "privacy", "encryption", "certificate"]],
  ["monitoring", ["monitoring", "observability", "metrics", "alerting", "alerts", "uptime", "logging", "logs", "tracing", "apm", "status", "statuspage", "healthcheck", "dashboard", "performance"]],
  ["analytics", ["analytics", "statistics", "bi", "business-intelligence", "tracking", "telemetry", "web-analytics", "data", "data-visualization", "reporting"]],
  ["email", ["email", "mail", "smtp", "imap", "newsletter", "mailserver", "transactional-email", "mailing-list"]],
  ["communication", ["chat", "messaging", "communication", "forum", "discussion", "community", "voice", "video-call", "videoconferencing", "conferencing", "matrix", "whatsapp", "telegram", "discord", "irc", "social", "notifications", "sms", "push", "bot", "comments"]],
  ["media", ["media", "video", "music", "audio", "streaming", "photos", "photo", "movies", "tv", "podcast", "ebook", "ebooks", "books", "torrent", "downloader", "youtube", "comics", "gallery", "images", "media system", "subtitles", "radio"]],
  ["cms", ["cms", "blog", "blogging", "website", "content-management", "ecommerce", "e-commerce", "shop", "store", "publishing", "landing-page", "portfolio", "static-site", "forms", "survey"]],
  ["productivity", ["productivity", "notes", "note-taking", "tasks", "todo", "calendar", "project-management", "kanban", "wiki", "knowledge-base", "documentation", "docs", "bookmarks", "collaboration", "spreadsheet", "crm", "erp", "office", "scheduling", "time-tracking", "recipes", "reading", "rss", "read-later", "whiteboard", "diagrams", "helpdesk", "support", "ticketing", "hr", "inventory"]],
  ["automation", ["automation", "workflow", "workflows", "low-code", "lowcode", "nocode", "no-code", "integration", "integrations", "scheduler", "cron", "rpa", "ifttt", "webhooks"]],
  ["development", ["development", "developer-tools", "git", "ci", "cd", "ci-cd", "devops", "code", "api", "testing", "docker", "kubernetes", "container", "containers", "registry", "sdk", "ide", "debugging", "scm", "package-manager", "deployment", "backend", "builder", "framework", "hosting", "infrastructure", "paas", "server", "cloud", "feature-flags", "translation", "i18n", "webhook"]],
  ["storage", ["storage", "s3", "object-storage", "backup", "backups", "file-sharing", "file-manager", "files", "sync", "cloud-storage", "nas", "drive", "cdn", "minio", "sharing", "link-sharing", "pastebin"]],
  ["networking", ["networking", "network", "proxy", "reverse-proxy", "vpn", "dns", "tunnel", "gateway", "dhcp", "adblock", "ad-blocker", "ssh", "load-balancer", "mesh", "wireguard", "ip"]],
  ["finance", ["finance", "accounting", "invoicing", "invoice", "budgeting", "budget", "payments", "billing", "banking", "crypto", "expense", "expenses", "money", "ledger", "subscriptions", "subscription-management", "pos", "trading"]],
];

function categoryFor(tags: string[]): keyof typeof CATEGORIES {
  const set = new Set(tags.map((t) => t.toLowerCase()));
  for (const [category, keywords] of RULES)
    if (keywords.some((k) => set.has(k))) return category;
  return "other";
}

/** Who wrote the software: the GitHub owner, else whoever the links point at. */
function developedBy(name: string, links: Record<string, string | undefined>) {
  const github = links.github;
  if (github) {
    const owner = new URL(github).pathname.split("/").filter(Boolean)[0];
    if (owner && owner.length >= 2)
      return { label: owner, url: `https://github.com/${owner}` };
  }
  for (const url of [links.website, links.docs])
    if (url?.startsWith("https://"))
      return { label: new URL(url).hostname.replace(/^www\./, ""), url };
  return { label: name, url: "https://github.com" };
}

/** An ICO that wraps a PNG; anything else is left without a logo. */
function pngInsideIco(bytes: Uint8Array): Uint8Array | null {
  const offset = new DataView(bytes.buffer, bytes.byteOffset).getUint32(18, true);
  const magic = bytes.subarray(offset, offset + 4);
  const isPng = magic[0] === 0x89 && magic[1] === 0x50 && magic[2] === 0x4e && magic[3] === 0x47;
  return isPng ? bytes.subarray(offset) : null;
}

/** Source logos stay in their original format; only ICO has to be unwrapped. */
async function writeLogo(from: string, into: string) {
  const ext = from.slice(from.lastIndexOf(".")).toLowerCase();
  const bytes = new Uint8Array(await Bun.file(from).arrayBuffer());
  if (ext === ".ico") {
    const png = pngInsideIco(bytes);
    if (!png) return false;
    await Bun.write(`${into}/logo.png`, png);
    return true;
  }
  if (ext === ".svg") {
    // Rasterised in a child process: resvg aborts the whole runtime on a few
    // real-world SVGs, and one bad logo must not stop the import.
    const { exitCode } = Bun.spawnSync([
      "bun",
      "run",
      `${import.meta.dir}/svg-to-png.ts`,
      from,
      `${into}/logo.png`,
    ], { stdout: "ignore", stderr: "ignore" });
    return exitCode === 0;
  }
  await Bun.write(`${into}/logo${ext}`, bytes);
  return true;
}

const catalog: {
  id: string;
  name: string;
  description: string;
  tags: string[];
  logo: string | null;
  links: Record<string, string | undefined>;
}[] = await Bun.file(`${source}/templates/catalog.json`).json();

const counts = new Map<string, number>();
const withoutLogo: string[] = [];

for (const entry of catalog) {
  const name = RENAMES[entry.id] ?? entry.name;
  const slug = slugify(name);
  const from = `${source}/templates/blueprints/${entry.id}`;
  const into = `${outputDirectory}/${slug}`;

  // Only https links survive: the API refuses anything else, and a template's
  // links are rendered as clickable in the dashboard.
  const links = Object.fromEntries(
    Object.entries(entry.links ?? {}).filter(
      ([key, url]) =>
        ["github", "website", "docs"].includes(key) &&
        typeof url === "string" &&
        url.startsWith("https://"),
    ),
  ) as Record<string, string>;
  if (!Object.keys(links).length) throw new Error(`${slug}: no https link.`);

  const categoryKey = categoryFor(entry.tags ?? []);
  counts.set(categoryKey, (counts.get(categoryKey) ?? 0) + 1);
  const category = CATEGORIES[categoryKey];

  await Bun.write(`${into}/docker-compose.yml`, Bun.file(`${from}/docker-compose.yml`));
  await Bun.write(`${into}/template.toml`, Bun.file(`${from}/template.toml`));

  // The legacy catalog only ever carried a one-liner; description.md is where a
  // longer write-up goes from here on.
  await Bun.write(`${into}/description.md`, `${entry.description.trim()}\n`);

  if (entry.logo) {
    const ok = await writeLogo(`${source}/public${entry.logo}`, into);
    if (!ok) withoutLogo.push(slug);
  } else withoutLogo.push(slug);

  const meta = `import type { TemplateRaw } from "../../schemas";

export default {
  name: ${JSON.stringify(name)},
  shortDescription: ${JSON.stringify(entry.description.trim())},
  category: ${JSON.stringify(category)},
  developedBy: ${JSON.stringify(developedBy(name, links))},
  submittedBy: ${JSON.stringify(SUBMITTED_BY)},
  links: ${JSON.stringify(links)},
  lastUpdate: new Date(${JSON.stringify(STAMP.toISOString())}),
  createdAt: new Date(${JSON.stringify(STAMP.toISOString())}),
} satisfies TemplateRaw;
`;
  await Bun.write(`${into}/meta.ts`, meta);
}

console.log(`imported ${catalog.length} templates`);
console.log(
  [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([c, n]) => `${c}(${n})`).join(" "),
);
if (withoutLogo.length) console.log(`no logo: ${withoutLogo.join(", ")}`);
