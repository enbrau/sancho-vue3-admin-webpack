const path = require('path')
const settings = require('./src/settings')

const port = process.env.port || process.env.npm_config_port || 9528

const resolve = function(dir) {
  return path.join(__dirname, dir)
}

const entries = require('./build/utils/entries')

module.exports = {
  publicPath: './',
  outputDir: settings.buildPath,
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      title: settings.title
    },
    ...entries
  },
  productionSourceMap: false,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    open: true,
    port,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API === '/mock-api' ? `http://127.0.0.1:${port}/mock` : `${process.env.VUE_APP_BASE_HOST}${process.env.VUE_APP_BASE_API}`,
        changeOrigin: true,
        ws: true,
        secure: false,
        logLevel: 'debug',
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: require('./mock/index.js')
  },
  configureWebpack: {
    devtool: 'source-map',
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: settings.title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
