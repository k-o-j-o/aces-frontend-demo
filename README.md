# Aces LitElement Demo
Aces web layout rebuilt with native web components powered by [LitElement](https://lit-element.polymer-project.org/), styled with [Bulma](https://bulma.io/), and bundled with [Rollup](https://rollupjs.org/guide/en/).

The components are built with TypeScript and transpiled by Rollup into a [JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) so importing all of the components is as simple as adding `<script type="module" src="[path]"></script>` in the `head` tag.

The (S)CSS is bundled via a [PostCSS](https://postcss.org/) Rollup plugin to insert the Aces color palette into Bulma and to make use of the [Autoprefixer](https://github.com/postcss/autoprefixer) plugin.

## To get started
After cloning the repo:

1.`npm install`

2.`npm run build`

3.`npm run serve`

You can also use `npm run build:watch` to rerun the build when files are changed and/or `npm run serve:watch` to enable HMR on the local dev server.

## Notes on browser support
Though JavaScript modules are widely supported on evergreen browsers, they are not supported in IE. This could be addressed by changing the Rollup output format. It's a painless change, but I was excited to play around with modules. (see the [Can I Use stats](https://caniuse.com/es6-module))

In addition, native web components are not supported in any version of IE without [web componenent polyfills](https://www.webcomponents.org/polyfills).