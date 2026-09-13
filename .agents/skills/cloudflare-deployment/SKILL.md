---
name: cloudflare-deployment
description: Guidelines for Cloudflare Pages and Workers static site deployment, security headers (_headers), SPA routing, wrangler configuration, and build optimization.
---

# Cloudflare Deployment Guidelines

This skill documents critical standards and fixes for deploying web applications (Vite, React, HTML/TS) to Cloudflare without build failures, redirect loops, or schema errors.

---

## ⚠️ Two Cloudflare Deployment Models — Understand Which You Are Using

| Setting / Feature | Model A: Cloudflare Pages (Git Integration) | Model B: Cloudflare Workers + Static Assets (New App UI) |
|---|---|---|
| **Dashboard Build Command** | `npm run build` | `npm run build` |
| **Dashboard Deploy Command** | *(Leave completely BLANK)* | `npx wrangler deploy` |
| **Dashboard Output Directory**| `dist` | *(configured in `wrangler.jsonc`)* |
| **`wrangler.jsonc` Structure**| `"pages_build_output_dir": "./dist"` | `"assets": { "directory": "./dist", "not_found_handling": "single-page-application" }` |

---

## 🚫 Critical Mistakes & How to Avoid Them

### 1. `not_found_handling` Enum Value Must Be `"single-page-application"`
- ❌ **Wrong**: `"single-page-app"` (fails with `Expected "assets.not_found_handling" field to be one of ["single-page-application","404-page","none"]`)
- ✅ **Correct**: `"single-page-application"`

### 2. Never Use `/* /index.html 200` in `public/_redirects` for Worker Assets
- ❌ **Wrong**: Putting `/* /index.html 200` in `public/_redirects` causes:
  `Line 1: Infinite loop detected in this rule. This would cause a redirect to strip .html or /index and end up triggering this rule again. [code: 100324]`
- ✅ **Correct**: Delete `public/_redirects` or comment it out. Handle SPA routing natively inside `wrangler.jsonc` using:
  ```json
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
  ```

### 3. Avoid Broken Remote `$schema` URLs in `wrangler.jsonc`
- ❌ **Wrong**: `"https://raw.githubusercontent.com/cloudflare/workers-sdk/main/packages/wrangler/config-schema.json"` (returns 404) or `"node_modules/..."` when wrangler is only executed via `npx`.
- ✅ **Correct**: Omit `$schema` unless `wrangler` is installed in project `devDependencies`.

### 4. Build Must Precede Deploy
- ❌ **Wrong**: `Build command: None` and `Deploy command: npx wrangler deploy` causes `The directory specified by the "assets.directory" field in your configuration file does not exist: /opt/buildhome/repo/dist`.
- ✅ **Correct**: Always set `Build command: npm run build` so `./dist` is built before wrangler attempts deployment.

### 5. Never Run `npx wrangler pages deploy dist` inside Cloudflare CI
- ❌ **Wrong**: Setting `Deploy command: npx wrangler pages deploy dist` in Pages projects causes `Authentication error [code: 10000]` because Cloudflare's internal build token lacks administrative deployment API permissions.
- ✅ **Correct**: Leave the Deploy Command completely blank in Cloudflare Pages.

---

## 📄 Standard Configuration Files

### `wrangler.jsonc` (for Cloudflare Worker Static Site / New Unified App Setup)
```json
{
  "name": "project-name",
  "compatibility_date": "2026-09-08",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

### `public/_headers`
```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:;
```

### `package.json` Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "deploy": "npm run build && npx wrangler deploy",
    "preview": "vite preview"
  }
}
```
