import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // __dirname 物理路径
  root: path.join(__dirname, 'src'),
  plugins: [react()]
})
