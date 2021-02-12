import $lodash from 'lodash'
import settings from '@/settings'
import { dynamicRoutes } from '@/router'
import { getZhValueByPath } from '@/i18n'
import { deepClone } from '@/utils'
import { fetchMenus } from '@/api/system/menus'
import { fetchPermissions } from '@/api/system/permissions'

export async function getMenus() {
  let menu_list = []
  if (settings.system.menu.mode === 'frontend') {
    const routes = deepClone([...dynamicRoutes])
    const filter = function(routes, path) {
      const menus = []
      for (let i = 0; i < routes.length; i++) {
        const obj = routes[i]
        if ((obj.isMenu === undefined || obj.isMenu) && obj.name) {
          const menu = { id: obj.name, name: obj.meta ? getZhValueByPath(obj.meta.title) : obj.path, status: true }
          if (obj.meta) {
            menu.perms = obj.meta.role
            menu.icon = obj.meta.icon
          }
          menu.url = (path || '') + (obj.path.charAt(0) === '/' ? '' : '/') + obj.path
          if (obj.children) {
            menu.children = filter(obj.children, menu.url)
          }
          menus.push(menu)
        }
      }
      return menus
    }
    menu_list = filter(routes)
  }
  if (settings.system.menu.mode === 'backend') {
    const { data } = await fetchMenus()
    menu_list = data
  }
  return new Promise((resolve) => {
    resolve(menu_list)
  })
}

export async function getPermissions() {
  let perm_list = []
  if (settings.system.perm.mode === 'frontend' || settings.system.perm.mode === 'mixed') {
    perm_list = $lodash.union(perm_list, [])
  }
  if (settings.system.perm.mode === 'backend' || settings.system.perm.mode === 'mixed') {
    const { data } = await fetchPermissions()
    perm_list = $lodash.union(perm_list, data.datalist)
  }
  return new Promise((resolve) => {
    resolve(perm_list)
  })
}
