import { createStore } from 'vuex'

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export const getters = {
  sidebar: state => state.app.sidebar,
  perms: state => state.user.perms,
  menus: state => state.user.menus,
  token: state => state.user.token,
  sid: state => state.user.sid
}

const store = createStore({
  modules,
  getters
})

export default store
