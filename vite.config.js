import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 9528

const mode = process.env.NODE_ENV

export default defineConfig(() => {
  require('dotenv').config({ path: `./.env.${mode}` });
  return {
    plugins: [
      vue(),
      // svg icon support
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // https://github.com/anncwb/vite-plugin-mock/
      viteMockServe({
        mockPath: 'mock',
        supportTs: true,
        watchFiles: true,
        ignoreFiles: [],
        prodEnabled: false,
        logger: true
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
      proxy: {
        [process.env.VITE_BASE_URL]: {
          target: process.env.VITE_BASE_URL === '/mock' ? `http://127.0.0.1:${port}/mock` : `${process.env.VITE_HOST}${process.env.VITE_BASE_URL}`,
          changeOrigin: true,
          ws: true,
          secure: false,
          logLevel: 'debug',
          pathRewrite: {
            ['^' + process.env.VITE_BASE_URL]: ''
          }
        }
      },
      // this might cause trouble when you are coding on code server!
      // open: '/index.html',
    }
  }
})
