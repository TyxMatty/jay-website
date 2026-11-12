# Jay website

**English** · [Português](README.pt-BR.md)

The website of the Jay line: one page that shows every Jay app ([Jay-C](https://github.com/TyxMatty/Jay-C), [Jay-A](https://github.com/TyxMatty/Jay-A), [Jay-E](https://github.com/TyxMatty/Jay-E), [Jay-S](https://github.com/TyxMatty/Jay-S), [Jay-H](https://github.com/TyxMatty/Jay-H)), with the apps' own look: the Calm, Neon and Soft styles (Soft, the orange one, by default), light and dark, in English and Portuguese.

- **Static, no build step:** HTML, CSS and plain JavaScript, ready for GitHub Pages or any static host.
- **Always the latest installers:** each download button asks GitHub for the app's latest release and links its `*_x64-setup.exe`. If GitHub doesn't answer, the button opens the releases page.
- **The same tokens as the apps:** `css/theme.css` is Jay-C's, unchanged; the wolf, the buttons and the glow follow the apps' `app.css`.

## Code

| Path | Contents |
|---|---|
| [`index.html`](index.html) | The page, with the English texts |
| [`js/site.js`](js/site.js) | Style, theme and language switches, the Portuguese texts and the latest releases |
| [`css/theme.css`](css/theme.css) | Jay-C's design tokens (copied as is) |
| [`css/site.css`](css/site.css) | The page's layout |
| [`assets/`](assets/) | The Inter font, the wolf masks and one screenshot per app (WebP) |
| [`social/`](social/) | The link-preview banner (1200×630): `banner.html` and `render.ps1`, which photographs it with headless Edge into `assets/social/banner.png` |
| [`test/`](test/) | Every text has its Portuguese, every app links its own repository |

## Running

```bash
npm run dev
```

Serves the folder at `http://localhost:5180` with Python's `http.server`. Any static server works too.

## Tests

```bash
npm test
```

## Adding a Jay app

Copy one `<article class="app">` in `index.html`: `id` is the app's id (`jay-x`) and `data-repo` its GitHub repository; add its texts to `PT` in `js/site.js` and its screenshot to `assets/shots/` as WebP. `npm test` says what is missing.

## License

MIT.
