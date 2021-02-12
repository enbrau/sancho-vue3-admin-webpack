import { createApp } from 'vue'
import lodash from 'lodash'
import { getClientInfo } from '@/utils/browser'

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
      logger(`[ARK][${tag}] - `, data)
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

export function init(settings, initJobs, rootComponent, callback) {
  // NProgress.start()
  const log = new Log(settings)
  log.info(getClientInfo())
  return Promise.all(initJobs)
    .then(res => {
      let data = { log, settings }
      for (const globalProperty of res) {
        data = lodash.extend(data, globalProperty)
      }
      // Create Vue3 Instance
      const app = createApp(rootComponent)
      for (const key in data) {
        app.config.globalProperties['$' + key] = data[key]
      }
      callback(app)
      // NProgress.done()
    })
    .catch(err => {
      log.error(err)
    })
}

import { SESSION } from './enums'
import settings from '@/settings'

export function getSidebarState() {
  let val = window.sessionStorage.getItem(SESSION.SIDEBAR)
  if (!val) {
    val = settings.collapseSidebar ? 'collapse' : 'opened'
    window.sessionStorage.setItem(SESSION.SIDEBAR, val)
  }
  return val === 'opened'
}

export function setSidebarState(opened) {
  window.sessionStorage.setItem(SESSION.SIDEBAR, opened ? 'opened' : 'collapse')
}
