import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/linkedin-engagement-insights/', // Inserisci qui il nome del tuo repository
  server: {
    port: 5173,
    host: true
  }
})