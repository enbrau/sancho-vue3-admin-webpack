import { SESSION } from "@/utils/enums"
import { markRaw } from "@vue/reactivity"

const modulesFiles = require.context('./custom', true, /\.vue$/)
const dashboards = []
modulesFiles.keys().reduce((modules, modulePath) => {
  const dashboard = modulesFiles(modulePath).default
  dashboards.push(markRaw(dashboard))
  return modules
}, {})

export function getDashboards() {
  return dashboards
}

export function getDashboardsInfo() {
  const info = {}
  for (const dashboard of dashboards) {
    info[dashboard.name] = dashboard.desc
  }
  return info
}

export function getDashboard(name) {
  for (const dashboard of dashboards) {
    if (name === dashboard.name) {
      return dashboard
    }
  }
}

export function getDefaultDashboard() {
  return window.sessionStorage.getItem(SESSION.DASHBOARD, name) || dashboards[0].name
}
