import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Relative base so GitHub Pages project sites work without hardcoding the repo name
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
})