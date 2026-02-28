import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/mypromt/',
  server: {
    port: 5999,
    open: true,
    host: 'localhost'
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      injectManifest: {
        swDest: 'dist/sw.js'
      },
      manifest: {
        name: "My promt generator",
        short_name: "My promt",
        theme_color: "#ffffff",
        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
    })
  ]
})
