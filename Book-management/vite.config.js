import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/BookStore_management/Book-management",
  plugins: [react()],
})
