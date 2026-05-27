# Images Client

> Personal image library dashboard — browse, organize, view metadata, manage albums

## Overview

Next.js 16 App Router client for browsing and managing a personal image collection. Supports JPG, GIF, RAW, and more with EXIF metadata viewing, album organization, and tagging.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI Library**: `@rodrigo-barraza/components-library`
- **Styling**: CSS Modules with oklch() color system
- **Auth**: NextAuth.js (Google SSO)
- **Secrets**: Vault Service (build-time & runtime bootstrap)

## Development

```bash
npm install
npm run dev          # Next.js dev server (port 3013)
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run test         # vitest
```

## Deployment

```bash
npm run deploy              # full deploy to Synology NAS
npm run deploy -- --dry-run # validate without deploying
```
