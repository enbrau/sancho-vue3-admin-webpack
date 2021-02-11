const path = require('path')
const PATH = path.resolve(__dirname, '../../src/entries')
const glob = require('glob')
const settings = require('../../src/settings')

const scanForEntries = () => {
  const map = {}
  const files = glob.sync(PATH + '/*')
  files.forEach((f) => {
    const key = f.substring(f.lastIndexOf('\/') + 1, f.length)
    map[key] = {
      entry: 'src/entries/' + key + '/main.js',
      template: 'src/index.html',
      filename: key + '.html',
      chunks: ['chunk-vendors', 'chunk-common', key],
      title: settings.title
    }
  })
  return map
}

module.exports = scanForEntries()
