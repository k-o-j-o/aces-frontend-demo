import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import multi from '@rollup/plugin-multi-entry';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import sassResources from './sass-resources.plugin';

export default [{
  input: './src/components/**/*.ts',
  output: { 
    file: './dist/components.mjs',
    sourcemap: true
  },
  plugins: [
    multi(),
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    sassResources('./src/styles/_vars.scss', './src/styles/_mixins.scss', '~bulma/sass/utilities/_all.sass'),
    postcss(),
    typescript(),
    alias({
      entries: {
        '@components': './src/components',
        '@styles': './src/styles',
        '@util': './src/util.ts'
      }
    }),
  ],
}, {
  input: './src/styles/bundle.js',
  output: {
    file: './dist/bundle.css'
  },
  plugins: [
    resolve(),
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [ autoprefixer ]
    })
  ]
}];
