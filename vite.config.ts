import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Cambia 'artist-landing' por el nombre EXACTO de tu repositorio en GitHub.
  // Si vas a usar un dominio propio o repo tipo usuario.github.io, deja base: '/'
  base: '/portafolio/',
  plugins: [react(), tailwindcss()],
})
