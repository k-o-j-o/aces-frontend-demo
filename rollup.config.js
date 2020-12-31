import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import multi from '@rollup/plugin-multi-entry';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default [{
  input: './src/components/*.ts',
  output: { 
    file: './dist/components.mjs',
    sourcemap: true
  },
  plugins: [
    multi(),
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    typescript()
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
