---
name: cloudflare-deployment
description: Guidelines for Cloudflare Pages static site deployment, security headers (_headers), SPA routing (_redirects), wrangler configuration, and build optimization.
---

# Cloudflare Pages Deployment Guidelines

## Cloudflare Deployment Files

### 1. `public/_headers`
Enforce security headers and CSP meta synchronization:
```http
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:;
```

### 2. `public/_redirects`
SPA client-side routing fallback rule:
```http
/*  /index.html  200
```

### 3. `wrangler.jsonc`
Cloudflare Workers / Pages asset configuration:
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "personal-trainer-app",
  "compatibility_date": "2026-09-08",
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS"
  }
}
```

### 4. Build Configurations
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `20.x` or higher
