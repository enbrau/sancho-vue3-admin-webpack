import dayjs from 'dayjs'
import Duration from 'dayjs/plugin/duration'

dayjs.extend(Duration)

export default function(app) {
  return new Promise((resolve) => {
    app.config.globalProperties['$dayjs'] = dayjs
    resolve()
  })
}
