import { createApp } from 'vue'
import lodash from 'lodash'
import { getClientInfo } from '@/utils/browser'
import defaultSettings from '@/settings'

export const Log = function(settings) {
  const _log = function(tag, data) {
    if (settings.debug) {
      let logger
      switch (tag) {
        case 'DEBUG':
          logger = console.debug
          break
        case 'WARN':
          logger = console.warn
          break
        case 'ERROR':
          logger = console.error
          break
        case 'INFO':
        default:
          logger = console.log
          break
      }
      logger(`[SANCHO][${tag}] - `, data)
    }
  }
  this.debug = function(data) {
    _log('DEBUG', data)
  }
  this.info = function(data) {
    _log('INFO', data)
  }
  this.warn = function(data) {
    _log('WARN', data)
  }
  this.error = function(data) {
    _log('ERROR', data)
  }
  return this
}

import { SESSION } from './enums'

export function getSidebarState() {
  let val = window.sessionStorage.getItem(SESSION.SIDEBAR)
  if (!val) {
    val = finalSettings.collapseSidebar ? 'collapse' : 'opened'
    window.sessionStorage.setItem(SESSION.SIDEBAR, val)
  }
  return val === 'opened'
}

export function setSidebarState(opened) {
  window.sessionStorage.setItem(SESSION.SIDEBAR, opened ? 'opened' : 'collapse')
}

export function getLocale() {
  let val = window.sessionStorage.getItem(SESSION.LOCALE)
  if (!val) {
    val = navigator.language || navigator.userLanguage || 'zh-CN'
    window.sessionStorage.setItem(SESSION.LOCALE, val)
  }
  return val
}

export function setLocale(locale) {
  window.sessionStorage.setItem(SESSION.LOCALE, locale)
}

let finalSettings = {}
import preloadHook from '@/hook/preload'

export function init(settings, rootComponent, callback) {
  finalSettings = lodash.extend(defaultSettings, settings)
  // NProgress.start()
  const log = new Log(finalSettings)
  log.info(getClientInfo())
  // Create Vue3 Instance
  const app = createApp(rootComponent)
  return preloadHook.promise(app).then(() => {
    console.log('done');
    // Create Vue3 Instance
    app.config.globalProperties['$settings'] = finalSettings
    app.config.globalProperties['$log'] = log
    callback(app)
  })
}
