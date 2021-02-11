import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
import { fetchProfile } from '@/api/user'
import { SUPER_ADMIN } from '@/utils/enums'
import { filterRoutes } from '@/utils/auth'

const state = {
  token: getToken(),
  profile: null,
  perms: [],
  routes: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_PERMS: (state, perms) => {
    state.perms = perms
  },
  SET_PROFILE: (state, profile) => {
    state.profile = profile
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}

const actions = {
  login({ commit }, loginInfo) {
    const { username, password } = loginInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data)
        setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateProfile({ commit }) {
    return new Promise((resolve, reject) => {
      fetchProfile().then(response => {
        const { data } = response
        commit('SET_PERMS', data.perms || [])
        commit('SET_PROFILE', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateRoutes({ state, commit }, routes) {
    return new Promise(resolve => {
      const perms = state.perms

      let accessibleRoutes
      if (perms.includes(SUPER_ADMIN)) {
        accessibleRoutes = routes
      } else {
        accessibleRoutes = filterRoutes(routes, perms)
      }

      commit('SET_ROUTES', accessibleRoutes)

      resolve(accessibleRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
