import Bus from '@/bus'

export default function(app) {
  return new Promise((resolve) => {
    app.config.globalProperties['$bus'] = Bus
    resolve()
  })
}
