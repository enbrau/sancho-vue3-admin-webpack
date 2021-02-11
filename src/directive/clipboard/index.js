import { createApp } from 'vue'
import clipboard from './clipboard'

const install = function() {
  const app = createApp({})
  app.directive('clipboard', clipboard)
}

clipboard.install = install
export default clipboard
