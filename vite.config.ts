import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import csp from 'vite-plugin-csp-guard'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    csp({
      dev: {
        run: true,
        outlierSupport: ["tailwind"],
      },
      build: {
        sri: true,
      },
    }),
  ],
})
