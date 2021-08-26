import { defineConfig, ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 9528

const mode = process.env.NODE_ENV

export default defineConfig(({mode}) => {
  require('dotenv').config({ path: `./.env.${mode}` });
  return {
    plugins: [
      vue(),
      // svg icon support
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        logger: true,
        mockPath: '/mock'
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
          target: process.env.VITE_BASE_URL === '/mock' ? `http://127.0.0.1:${port}/mock` : `${process.env.VITE_BASE_URL}`,
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
