import dayjs from 'dayjs'

export default function(app) {
  return new Promise((resolve) => {
    app.config.globalProperties['$dayjs'] = dayjs
    resolve()
  })
}
