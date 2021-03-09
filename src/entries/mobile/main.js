import { init } from '@/utils/framework'
// Settings
import settings from './settings'
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
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import elementLocale from 'element-plus/lib/locale/lang/zh-cn'
// UI: Custom Styles
// import '@/styles/index.scss'

init(settings, App, app => {
  app
    .use(i18n)
    .use(icons)
    .use(router)
    .use(store)
    .use(Vant)
    .use(ElementPlus, { locale: elementLocale })
    .mount('body')
})
