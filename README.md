# HB Wiki Theme

Shared CSS and search JS for Hawthorn Bloom project wikis. Public repo so all project wikis can reference the theme via CDN without copying files.

## Usage

Add to any wiki HTML page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rajohnston/hb-wiki-theme@main/hb-wiki.css">
<script src="https://cdn.jsdelivr.net/gh/rajohnston/hb-wiki-theme@main/hb-wiki-search.js"></script>
```

## What's Included

- **hb-wiki.css** — Full wiki theme: warm tones, mobile-friendly, responsive typography (Atkinson Hyperlegible + DM Sans), dark mode, print styles, callouts, tables, status badges, flow diagrams, tag clouds, search styling
- **hb-wiki-search.js** — In-page search with text highlighting and scroll-to-match

## Update Propagation

Change the CSS or JS here, push to main. jsDelivr CDN picks up the change. Every wiki page across every project updates on next browser load. No files to copy, no repos to sync.

jsDelivr caches for ~24h. To bust cache immediately after a push, use a versioned URL:
```
https://cdn.jsdelivr.net/gh/rajohnston/hb-wiki-theme@main/hb-wiki.css?v=2
```
