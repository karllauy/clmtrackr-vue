import path from "path";
import fs from "fs";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  server: {
    host: "0.0.0.0",
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "server.crt"))
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cube-poc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/lib/clmtrackr.js" },
      { src: "/lib/dat.gui.min.js" },
      { src: "/lib/face_deformer.js" },
      { src: "/lib/Stats.js" },
      { src: "/lib/utils.js" },
      { src: "/lib/webgl-utils.js" },
      { src: "/model/model_pca_20_svm.js" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
