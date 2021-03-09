import { init } from '@/utils/framework'
// Settings
import settings from './settings'
// Main Component
import App from '@/entries/main/App.vue'
// I18N
import i18n from '@/i18n'
// Icons
import icons from '@/icons'
// Router
import router from '@/router'
// Vuex
import store from '@/store'
// UI: ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import elementLocale from 'element-plus/lib/locale/lang/zh-cn'
// UI: Custom Styles
import '@/styles/index.scss'

init(settings, App, app => {
  app
    .use(i18n)
    .use(icons)
    .use(router)
    .use(store)
    .use(ElementPlus, { locale: elementLocale })
    .mount('#app')
})
