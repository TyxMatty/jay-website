# Site do Jay

[English](README.md) · **Português**

O site da linha Jay: uma página que mostra todos os apps Jay ([Jay-C](https://github.com/TyxMatty/Jay-C), [Jay-A](https://github.com/TyxMatty/Jay-A), [Jay-E](https://github.com/TyxMatty/Jay-E), [Jay-S](https://github.com/TyxMatty/Jay-S), [Jay-H](https://github.com/TyxMatty/Jay-H)), com a cara dos próprios apps: os estilos Calmo, Neon e Suave, claro e escuro, em português e inglês.

- **Estático, sem build:** HTML, CSS e JavaScript puro, pronto para o GitHub Pages ou qualquer hospedagem estática.
- **Sempre os instaladores mais novos:** cada botão de download pede ao GitHub a última release do app e linka o `*_x64-setup.exe` dela. Se o GitHub não responder, o botão abre a página de releases.
- **Os mesmos tokens dos apps:** o `css/theme.css` é o do Jay-C, sem mudança; o lobo, os botões e as luzes seguem o `app.css` dos apps.

## Código

| Caminho | Conteúdo |
|---|---|
| [`index.html`](index.html) | A página, com os textos em inglês |
| [`js/site.js`](js/site.js) | Troca de estilo, tema e idioma, os textos em português e as últimas releases |
| [`css/theme.css`](css/theme.css) | Os tokens de design do Jay-C (copiados como estão) |
| [`css/site.css`](css/site.css) | O layout da página |
| [`assets/`](assets/) | A fonte Inter, as máscaras do lobo e uma captura de tela por app (WebP) |
| [`test/`](test/) | Todo texto tem o português, todo app linka o próprio repositório |

## Rodando

```bash
npm run dev
```

Serve a pasta em `http://localhost:5180` com o `http.server` do Python. Qualquer servidor estático também serve.

## Testes

```bash
npm test
```

## Adicionar um app Jay

Copie um `<article class="app">` no `index.html`: o `id` é o id do app (`jay-x`) e o `data-repo`, o repositório no GitHub; ponha os textos dele no `PT` do `js/site.js` e a captura em `assets/shots/` como WebP. O `npm test` diz o que falta.

## Licença

MIT.
