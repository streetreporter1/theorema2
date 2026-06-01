import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/theorema2/', // È fondamentale che sia esattamente così
  server: {
    port: 5173,
    host: true
  }
})