import { createI18n } from 'vue-i18n'
import lodash from 'lodash'
import { getLocale } from '@/utils/framework'

const locale = getLocale()
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

export const locales = (function() {
  const locales = {}
  for (const lang in langs.messages) {
    locales[lang] = langs.messages[lang].language
  }
  return locales
})()

export const currentLocale = locales.locale

export default createI18n(langs)
