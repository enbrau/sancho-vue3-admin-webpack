import { fetchDicts } from '@/api/common'

export default function(app) {
  return new Promise((resolve) => {
    fetchDicts()
      .then(res => {
        const dicts = res.data || {}
        dicts.convert = function(dictName, dictKey, fallbackDict) {
          const dict = dicts[dictName] || fallbackDict || {}
          return dict[dictKey] || dictKey
        }
        app.config.globalProperties['$dicts'] = dicts
        resolve()
      })
    })
}