import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
    proxy: {
        '/api': {
            target: 'https://dashboard.heroku.com/apps/hbv1-db',
            changeOrigin: true,
            secure: false
        },
        '/oauth2': {
            target: 'https://dashboard.heroku.com/apps/hbv1-db',
            changeOrigin: true,
            secure: false
        }
    }
},
})
