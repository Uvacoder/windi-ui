const { appConfig } = require('./package.json')
const viteMainJs = require('vite-main-js')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const WindiCSS = require('vite-plugin-windicss')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    viteMainJs(),
    WindiCSS.default(),
    svelte({
      preprocess: [],
      emitCss: true,
      hot: !production,
    }),
  ],
}
