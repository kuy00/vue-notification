import vue from 'rollup-plugin-vue'
import image from '@rollup/plugin-image'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.common.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      exports: 'auto',
    },
  ],
  plugins: [
    vue({
      preprocessStyles: true,
      css: false,
      compileTemplate: true,
    }),
    postcss(),
    image(),
    alias({
      entries: [
        { find: '@', replacement: 'src' },
      ],
    }),
    resolve(),
  ],
}
