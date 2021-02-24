import { init } from '@/utils/framework'
// Settings
import settings from '@/settings'
// Global Variable Jobs
import { day, lodash, dict, bus } from '@/utils/globals'
// Main Component
import App from '@/App.vue'
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

init(settings, [day, lodash, dict, bus], App, app => {
  app
    .use(i18n)
    .use(icons)
    .use(router)
    .use(store)
    .use(ElementPlus, { locale: elementLocale })
    .mount('#app')
})
