const langs = {
  locale: 'zh-CN',
  messages: {}
}
const req = require.context('./lang', false, /\.js$/)
const requireAll = requireContext => {
  requireContext.keys().forEach(key => {
    const lang = key.replace('./', '').replace('.js', '')
    langs.messages[lang] = requireContext(key).default || requireContext(key)
  })
}
requireAll(req)

const getValueByPath = function(data, path) {
  if (!path) return path;
  const targets = path.split('.');
  let currentData = data;
  for (let i = 0; i < targets.length; i++) {
    if (!currentData) break;
    currentData = currentData[targets[i]]
  }
  return currentData
}

export const getZhValueByPath = function(path) {
  const data = langs.messages['zh-CN']
  return getValueByPath(data, path)
}

export default {
  install: (app, locale) => {
    app.config.globalProperties['$t'] = key => {
      if (!langs.messages[locale]) {
        console.warn(`Language package ${locale} is not provided!`)
        return key
      }
      return getValueByPath(langs.messages[locale], key) || key
    }
  }
}
