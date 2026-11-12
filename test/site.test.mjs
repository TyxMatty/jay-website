import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PT, ICONS, pickInstaller, megabytes } from '../js/site.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('every data-i18n key in index.html has Portuguese', () => {
  const keys = [...html.matchAll(/data-i18n(?:-label|-alt)?="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(keys.length > 40, `only ${keys.length} keys found`);
  assert.deepEqual(keys.filter((k) => !PT[k]?.trim()), []);
});

test('every data-icon in index.html exists', () => {
  const names = [...html.matchAll(/data-icon="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(names.filter((n) => !ICONS[n]), []);
});

test('every app links its own repository and releases', () => {
  for (const [, id, repo] of html.matchAll(/<article class="app" id="([^"]+)" data-repo="([^"]+)"/g)) {
    assert.equal(id, repo.split('/')[1].toLowerCase(), repo);
    assert.ok(html.includes(`https://github.com/${repo}/releases/latest" data-download="${id}"`), `${repo}: download link`);
  }
});

test('the link-preview banner exists at the size the tags announce', () => {
  const image = html.match(/property="og:image" content="https:\/\/tyxmatty\.github\.io\/jay-website\/([^"]+)"/)?.[1];
  assert.ok(image, 'og:image missing');
  const png = readFileSync(new URL(`../${image}`, import.meta.url));
  // PNG header: width and height are big-endian at bytes 16 and 20.
  assert.deepEqual([png.readUInt32BE(16), png.readUInt32BE(20)], [1200, 630]);
  assert.match(html, /og:image:width" content="1200"[\s\S]*og:image:height" content="630"/);
});

// The shape of Jay-C's v0.5.4 release (api.github.com), trimmed.
test('pickInstaller takes the x64 setup and the version without the v', () => {
  const release = {
    tag_name: 'v0.5.4',
    assets: [
      { name: 'notes.txt', browser_download_url: 'x', size: 1 },
      { name: 'Jay-C_0.5.4_x64-setup.exe', browser_download_url: 'https://github.com/TyxMatty/Jay-C/releases/download/v0.5.4/Jay-C_0.5.4_x64-setup.exe', size: 2302415 },
    ],
  };
  assert.deepEqual(pickInstaller(release), { version: '0.5.4', url: release.assets[1].browser_download_url, size: 2302415 });
  assert.equal(pickInstaller({ tag_name: 'v1', assets: [] }), null);
  assert.equal(pickInstaller(null), null); // GitHub said 404 or the rate limit hit
  assert.equal(megabytes(2302415), '2.2 MB');
});
