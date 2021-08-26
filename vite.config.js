import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 9528

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // Svg icon support
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port,
    strictPort: false,
    
    // This might cause trouble when you are coding on code server!
    // open: '/index.html'
  }
})
