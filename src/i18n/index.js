import { createI18n } from 'vue-i18n'
import store from '@/store'
import lodash from 'lodash'

const locale = store.state.app.locale
const langs = {
  locale,
  messages: {}
}

const langFiles = import.meta.globEager('./lang/*/*.js')
const langPattern = /^[a-z]{2,2}-[a-z]{2,2}$/
for (const langFilePath in langFiles) {
  const langFile = langFiles[langFilePath]
  const path_arr = langFilePath.split('/')
  const lang = path_arr[2]
  const langFileName = path_arr[3]
  const langPackName = langFileName.replace(/\.js$/, '')
  if (lang.match(langPattern)) {
    lodash.set(langs.messages, lang + '.' + langPackName, langFile.default)
  }

  console.log(`[Sancho] Language pack loaded: ${lang}::${langPackName}`)
}

export default createI18n(langs)
