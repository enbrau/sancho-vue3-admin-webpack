import lodash from 'lodash'

export default function(app) {
  return new Promise((resolve) => {
    app.config.globalProperties['$locash'] = lodash
    resolve()
  })
}