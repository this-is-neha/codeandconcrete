import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // host: true exposes the dev/preview server on the local network (phones, other PCs on the same Wi-Fi)
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
