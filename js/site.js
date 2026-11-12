// The Jay website: style, theme and language controls (the same tokens as the apps, css/theme.css),
// the Portuguese texts, and each app's latest release from GitHub for the download buttons.
// English lives in index.html; PT holds the Portuguese for every data-i18n key (test/site.test.mjs).

const svg = (body) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

/** The apps' icons (Jay-H's ui/icons.js), plus a few for the site. */
export const ICONS = {
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'),
  moon: svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
  download: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'),
  github: svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
  video: svg('<path d="M16 10l5-3v10l-5-3z"/><rect x="2" y="6" width="14" height="12" rx="2"/>'),
  waveform: svg('<path d="M2 12h2M6 8v8M10 4v16M14 7v10M18 10v4M22 12h-2"/>'),
  document: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>'),
  study: svg('<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
  apps: svg('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  code: svg('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
  shield: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  bolt: svg('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>'),
  palette: svg('<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c.93 0 1.5-.75 1.5-1.5 0-.39-.16-.74-.4-1-.24-.27-.4-.6-.4-1 0-.83.67-1.5 1.5-1.5H16a6 6 0 0 0 6-6c0-4.97-4.48-9-10-9z"/>'),
};

/** Portuguese for every data-i18n / data-i18n-label / data-i18n-alt key in index.html. */
export const PT = {
  skip: 'Pular para os apps',
  nav: 'Seções',
  navApps: 'Apps',
  navWhy: 'Por que Jay',
  style: 'Estilo',
  calm: 'Calmo',
  neon: 'Neon',
  soft: 'Suave',
  heroTitle: 'Apps leves que não atrapalham',
  heroLead: 'A linha Jay: chamadas, áudio, documentos e estudo para Windows. Open source, sem contas, sem anúncios, com o trabalho pesado feito em Rust.',
  heroCta: 'Baixe o Jay-H, o hub',
  heroSecondary: 'Ver os apps',
  heroHint: 'O Jay-H instala, atualiza e abre todos os apps Jay numa janela só.',
  appsTitle: 'Os apps',
  download: 'Baixar',
  cKicker: 'Chamadas e lives',
  cLead: 'Chamadas de voz e vídeo, lives de jogo e de tela em até 1080p60, e servidores com salas e canais de texto, num servidor seu ou de um amigo, em Docker.',
  c1: 'Voz limpa, que não abafa o som dos outros apps.',
  c2: 'Live de um jogo, de uma janela ou da tela inteira, com o som.',
  c3: 'Até 16 pessoas por sala. Sem contas, sem anúncios.',
  cAlt: 'Uma chamada no Jay-C: a live de uma pessoa em destaque, os cards de quem está na sala e a barra de controles',
  aKicker: 'Áudio',
  aLead: 'Filtros para o seu microfone, que o Jay-C pode usar nas chamadas, mais um soundboard com atalhos globais, um editor de áudio e um conversor em lote.',
  a1: 'Remoção de ruído por IA tira teclado, cliques e ventilador.',
  a2: 'Sua própria cadeia de filtro, gate, equalizador, compressor, de-esser e limitador.',
  a3: 'Fica na bandeja e só abre o microfone enquanto alguém usa.',
  aAlt: 'A cadeia de efeitos do Jay-A: remoção de ruído, filtro, gate, equalizador, compressor e de-esser',
  eKicker: 'Documentos e mídia',
  eLead: 'Leia, edite e converta documentos, imagens e vídeos sem precisar de um pacote office.',
  e1: 'Word, OpenDocument e PDF editados no próprio arquivo.',
  e2: 'Markdown e LaTeX com prévia ao vivo, com fórmulas.',
  e3: 'Converta fotos e vídeos em lote; corte e junte vídeos sem recodificar.',
  eAlt: 'O Jay-E com um artigo em LaTeX aberto: o código à esquerda e o PDF compilado à direita',
  sKicker: 'Estudo',
  sLead: 'Provas, simulados e flashcards feitos do seu próprio material pela Jay-AI, um modelo que roda no seu computador.',
  s1: 'Use PDFs, arquivos do Word, texto ou fotos das suas anotações.',
  s2: 'Estilos de prova como ENEM, UEPG e UEM, com gabarito e resultado analisado.',
  s3: 'Nada sai do seu PC.',
  sAlt: 'As provas do Jay-S: os vestibulares 2025 da UEPG, prontos para baixar ou fazer, cada um com o gabarito oficial',
  hKicker: 'O hub',
  hLead: 'Um app para instalar, atualizar e abrir todos os apps Jay, e que se atualiza do mesmo jeito.',
  h1: 'A versão instalada e a mais nova no GitHub, lado a lado.',
  h2: 'Os instaladores só rodam se o SHA-256 bater com o do GitHub.',
  h3: '"Atualizar tudo" com um clique.',
  hAlt: 'Os produtos no Jay-H: um card por app Jay com a versão instalada, a mais nova e o botão Atualizar',
  whyTitle: 'Por que Jay',
  w1Title: 'Open source',
  w1: 'Todos os apps são MIT, com o código no GitHub.',
  w2Title: 'Sem contas, sem anúncios',
  w2: 'Nada para cadastrar, nada rastreando você.',
  w3Title: 'Leve',
  w3: 'Tauri e Rust no lugar de um navegador embutido: instaladores pequenos, pouca memória.',
  w4Title: 'A mesma cara',
  w4: 'Os estilos Calmo, Neon e Suave, claro e escuro, em português e inglês, em todos os apps. Experimente lá em cima.',
  footer: 'Feito por TyxMatty. Licença MIT. Windows 10 ou mais novo, x64.',
  footerGithub: 'TyxMatty no GitHub',
  // Built in this file, not in index.html.
  lightMode: 'Mudar pro modo claro',
  darkMode: 'Mudar pro modo escuro',
  downloadVersion: 'Baixar {version}',
  title: 'Jay — apps leves para Windows',
};

/** Texts this file builds itself, in English (index.html holds the rest). */
const EN = {
  lightMode: 'Switch to light mode',
  darkMode: 'Switch to dark mode',
  downloadVersion: 'Download {version}',
  title: 'Jay — light apps for Windows',
};

/** The Windows installer of a GitHub release (`<App>_<version>_x64-setup.exe`), or null. */
export function pickInstaller(release) {
  const asset = release?.assets?.find((a) => /_x64-setup\.exe$/i.test(a.name));
  return asset ? { version: String(release.tag_name).replace(/^v/i, ''), url: asset.browser_download_url, size: asset.size } : null;
}

/** 2302415 → "2.2 MB". */
export const megabytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

// ---------- The page (skipped when the tests import this file in Node) ----------

if (globalThis.document) {
  const KEY = 'jay.site';
  const root = document.documentElement;
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) ?? '{}');
  } catch {}
  const save = (patch) => {
    saved = { ...saved, ...patch };
    try {
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {} // private mode: the choice lasts until the page closes
  };

  for (const el of document.querySelectorAll('[data-icon]')) el.innerHTML = ICONS[el.dataset.icon];

  // Language: the English in the HTML is kept, so switching back needs no reload.
  const english = new Map();
  let lang = saved.lang ?? (/^pt\b/i.test(navigator.language) ? 'pt-BR' : 'en');
  const t = (key, vars = {}) => ((lang === 'pt-BR' ? PT[key] : EN[key]) ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  const releases = {}; // app id → pickInstaller result, once GitHub answers

  function applyLanguage() {
    root.lang = lang;
    const pt = lang === 'pt-BR';
    for (const [attr, prop] of [['data-i18n', 'textContent'], ['data-i18n-label', 'aria-label'], ['data-i18n-alt', 'alt']]) {
      for (const el of document.querySelectorAll(`[${attr}]`)) {
        const key = el.getAttribute(attr);
        const current = prop === 'textContent' ? el.textContent : el.getAttribute(prop);
        if (!english.has(el)) english.set(el, current);
        const text = pt ? PT[key] : english.get(el);
        if (prop === 'textContent') el.textContent = text;
        else el.setAttribute(prop, text);
      }
    }
    document.title = t('title');
    const toggle = document.getElementById('lang-toggle');
    toggle.textContent = pt ? 'EN' : 'PT';
    toggle.lang = pt ? 'en' : 'pt-BR';
    toggle.setAttribute('aria-label', pt ? 'English' : 'Português');
    renderTheme();
    renderDownloads();
  }

  function renderTheme() {
    const dark = root.dataset.theme === 'dark';
    const button = document.getElementById('theme-toggle');
    button.innerHTML = dark ? ICONS.sun : ICONS.moon;
    button.setAttribute('aria-label', dark ? t('lightMode') : t('darkMode'));
    button.title = button.getAttribute('aria-label');
  }

  function renderStyle() {
    for (const b of document.querySelectorAll('[data-style-value]')) {
      const on = b.dataset.styleValue === root.dataset.style;
      b.setAttribute('aria-checked', String(on));
      b.tabIndex = on ? 0 : -1; // one tab stop; arrows move inside the group
    }
  }

  function renderDownloads() {
    for (const link of document.querySelectorAll('[data-download]')) {
      const release = releases[link.dataset.download];
      if (!release) continue; // keeps the releases page link and the plain "Download"
      link.href = release.url;
      link.title = `${release.url.split('/').pop()} · ${megabytes(release.size)}`;
      const label = link.querySelector('.dl-label');
      if (label) label.textContent = t('downloadVersion', { version: release.version });
    }
  }

  document.getElementById('theme-toggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    save({ theme: root.dataset.theme });
    renderTheme();
  });
  document.getElementById('lang-toggle').addEventListener('click', () => {
    lang = lang === 'pt-BR' ? 'en' : 'pt-BR';
    save({ lang });
    applyLanguage();
  });
  const styleGroup = document.querySelector('.style-switch');
  styleGroup.addEventListener('click', (e) => {
    const button = e.target.closest('[data-style-value]');
    if (!button) return;
    root.dataset.style = button.dataset.styleValue;
    save({ style: root.dataset.style });
    renderStyle();
  });
  // Arrow keys move between the styles, as in a radio group.
  styleGroup.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const buttons = [...styleGroup.querySelectorAll('[data-style-value]')];
    const next = buttons[(buttons.indexOf(document.activeElement) + step + buttons.length) % buttons.length];
    next.focus();
    next.click();
  });

  renderStyle();
  applyLanguage();

  // Latest releases, straight from GitHub (60 requests an hour per visitor is plenty for 5 apps).
  for (const article of document.querySelectorAll('[data-repo]')) {
    fetch(`https://api.github.com/repos/${article.dataset.repo}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => (r.ok ? r.json() : null))
      .then((release) => {
        const installer = pickInstaller(release);
        if (installer) (releases[article.id] = installer), renderDownloads();
      })
      .catch(() => {}); // offline or rate-limited: the buttons keep pointing at the releases page
  }
}
