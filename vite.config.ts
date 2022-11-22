import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'https://hbv1-db.herokuapp.com',
            changeOrigin: true,
            secure: false
        },
        '/oauth2': {
            target: 'https://hbv1-db.herokuapp.com',
            changeOrigin: true,
            secure: false
        }
    }
},
})
