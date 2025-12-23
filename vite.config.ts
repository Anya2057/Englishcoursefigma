import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Englishcoursefigma/',

  plugins: [
    // React и Tailwind нужны — не удаляем
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // alias @ → src
      '@': path.resolve(__dirname, './src'),
    },
  },
})
