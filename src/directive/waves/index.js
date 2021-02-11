import { createApp } from 'vue'
import waves from './waves'

const install = function() {
  const app = createApp({})
  app.directive('waves', waves)
}

waves.install = install
export default waves
