// ============================================================
// Images Client — Runtime Configuration
// ============================================================
// Typed accessor layer over process.env. The Vault service is
// the single source of truth — next.config.ts hydrates
// process.env from the Vault before any module imports run.
//
// This file contains NO defaults, NO secrets, and NO hardcoded
// URLs. All public domain URLs come from the vault registry
// (projects.json → IMAGES_SERVICE_PUBLIC_URL).
//
// Browser requests must NEVER hit localhost or LAN IPs when loaded
// from a public domain — that triggers Chrome's Private Network
// Access (PNA) prompt.
//
// Strategy:
//   Production (*.rod.dev):
//     • IMAGES_SERVICE_URL → IMAGES_SERVICE_PUBLIC_URL from vault
//
//   Local dev (localhost):
//     • IMAGES_SERVICE_URL → vault value (LAN IP — same network)
//
//   Server-side (SSR):
//     • All URLs use full values from vault (LAN IPs for Docker)
// ============================================================

const IS_BROWSER = typeof window !== "undefined";

export const IS_PRODUCTION =
  IS_BROWSER && window.location.hostname.endsWith(".dev");
export const IS_LOCALHOST = !IS_PRODUCTION;

export const PROJECT_NAME = IS_PRODUCTION ? "images-client" : "images-client-dev";

export const IMAGES_CLIENT_PORT =
  process.env.NEXT_PUBLIC_IMAGES_CLIENT_PORT || process.env.IMAGES_CLIENT_PORT;

// ── Raw values from process.env ────────────────────────────────
const RAW_SERVICE_URL =
  process.env.NEXT_PUBLIC_IMAGES_SERVICE_URL || process.env.IMAGES_SERVICE_URL;

// ── Public URL from vault (browser production override) ────────
const PUBLIC_SERVICE_URL =
  process.env.NEXT_PUBLIC_IMAGES_SERVICE_PUBLIC_URL ||
  process.env.IMAGES_SERVICE_PUBLIC_URL;

// ── Images Service URL ─────────────────────────────────────────
function resolveServiceUrl() {
  if (!IS_BROWSER) return RAW_SERVICE_URL;
  if (IS_PRODUCTION && PUBLIC_SERVICE_URL) return PUBLIC_SERVICE_URL;
  return RAW_SERVICE_URL;
}

export const IMAGES_SERVICE_URL = resolveServiceUrl();
