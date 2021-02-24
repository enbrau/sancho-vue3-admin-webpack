import { createI18n } from 'vue-i18n'

const locale = navigator.language || navigator.userLanguage || 'zh-CN'
const langs = {
  locale,
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

const i18n = createI18n(langs)

export default i18n
