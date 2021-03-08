import { SyncHook } from 'tapable'

const hook = new SyncHook(['config'])

const modulesFiles = require.context('./request', true, /\.js$/)
modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const hookFunc = modulesFiles(modulePath).default
  hook.tap(moduleName, (config) => {
    hookFunc(config)
  })
  return modules
}, {})

export default hook