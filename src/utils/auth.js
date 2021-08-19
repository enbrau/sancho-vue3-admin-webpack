import Cookies from 'js-cookie'
import settings from '@/settings'
import { SESSION } from '@/utils/enums'
import store from '@/store'
import { SUPER_ADMIN, IP_RESTRAINED } from './enums'

export function getToken() {
  switch (settings.security.token_strategy) {
    case 'header':
      return window.sessionStorage.getItem(SESSION.TOKEN)
    case 'cookie':
      return Cookies.get(settings.security.token_key.cookie)
    default:
      return null
  }
}

export function setToken(token) {
  switch (settings.security.token_strategy) {
    case 'header':
      window.sessionStorage.setItem(SESSION.TOKEN, token)
      break
    case 'cookie':
      document.cookie = `${settings.security.token_key.cookie}=${token}; path=./`
      break
  }
}

export function removeToken() {
  switch(settings.security.token_strategy) {
    case 'header':
      window.sessionStorage.removeItem(SESSION.TOKEN)
      break
    case 'cookie':
      Cookies.remove(settings.security.token_key.cookie)
      break
  }
}

export function hasPermission(actionKey) {
  const perms = store.state.user.perms

  if (!actionKey || perms.includes(SUPER_ADMIN)) {
    return true
  }

  if (actionKey === IP_RESTRAINED) {
    // TODO
    return false
  } else {
    return perms.includes(actionKey)
  }
}

export function filterRoutes(routes, perms) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    
    if (!(tmp.isMenu) || (tmp.isMenu && hasPermission(tmp.name))) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, perms)
      }
      res.push(tmp)
    }
  })

  return res
}
