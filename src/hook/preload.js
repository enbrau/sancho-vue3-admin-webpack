const { AsyncParallelHook } = require('tapable')

const hook = new AsyncParallelHook(['app'])

const modulesFiles = require.context('./preload', true, /\.js$/)
modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const hookFunc = modulesFiles(modulePath).default
  hook.tapPromise(moduleName, (app) => {
    return hookFunc(app)
  })
  return modules
}, {})
// import Bus from '@/bus'
// hook.tapPromise('bus', (app)  => {
//   return new Promise((resolve) => {
//     app.config.globalProperties['$bus'] = Bus
//     resolve()
//   })
// })

export default hook
