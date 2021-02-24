import { init } from '@/utils/framework'
// Settings
import settings from './settings'
// Global Variable Jobs
import { day, lodash, dict } from '@/utils/globals'
// Main Component
import App from './App.vue'
// I18N
import i18n from '@/i18n'
// Icons
import icons from '@/icons'
// Router
import router from '@/router/mobile'
// Vuex
import store from '@/store'
// UI: ElementPlus
import Vant from 'vant'
import 'vant/lib/index.css'
// UI: Custom Styles
// import '@/styles/index.scss'

init(settings, [day, lodash, dict], App, app => {
  app
    .use(i18n)
    .use(icons)
    .use(router)
    .use(store)
    .use(Vant)
    .mount('body')
})
