import { createI18n } from 'vue-i18n'
import lodash from 'lodash'

const locale = navigator.language || navigator.userLanguage || 'zh-CN'
const langs = {
  locale,
  messages: {}
}

const req = require.context('./lang', true, /\.js$/)
const langPattern = /^[a-z]{2,2}-[A-Z]{2,2}$/
const requireAll = requireContext => {
  requireContext.keys().forEach(key => {
    const lang_arr = key.split('/')
    const lang = lang_arr[1]
    if (lang.match(langPattern)) {
      const pack = requireContext(key).default || requireContext(key)
      const name = lang_arr[2].substr(0, lang_arr[2].length - 3)
      lodash.set(langs.messages, lang + '.' + name, pack)
    }
  })
}
requireAll(req)

const i18n = createI18n(langs)

export default i18n
