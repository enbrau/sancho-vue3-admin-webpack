import { createStore } from 'vuex'

const moduleFiles = import.meta.globEager('./modules/*.js')
const modules = {}
for (const moduleFileName in moduleFiles) {
  const module = moduleFiles[moduleFileName]
  const moduleName = moduleFileName.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/', '')
  const target = module.default
  modules[moduleName] = target
  console.log(`[Sancho] Storage unit loaded: ${moduleName}`)
}

const store = createStore({
  modules
})

export default store
