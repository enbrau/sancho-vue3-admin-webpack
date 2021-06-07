import { SESSION } from '@/utils/enums'
import { getSidebarState, setSidebarState, getSize, getLocale } from '@/utils/framework'
import { getDefaultDashboard } from '@/views/dashboard/utils'

const state = {
  sidebar: getSidebarState(),
  withoutAnimation: false,
  device: 'desktop',
  loading: false,
  locale: getLocale(),
  size: getSize(),
  dashboard: getDefaultDashboard(),
  darkMode: false,
  navbarReady: false
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar
    setSidebarState(state.sidebar)
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    setSidebarState(false)
    state.sidebar = false
    state.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  UPDATE_LOADING_STATUS: (state, status) => {
    state.loading = status
  },
  UPDATE_DASHBOARD: (state, dashboard) => {
    state.dashboard = dashboard
  },
  TOGGLE_DARKMODE: (state) => {
    state.darkMode = !state.darkMode
  },
  NAVBAR_READY: (state) => {
    state.navbarReady = true
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  updateLoadingStatus({ commit }, status) {
    commit('UPDATE_LOADING_STATUS', status)
  },
  updateDashboard({ commit }, dashboard) {
    window.sessionStorage.setItem(SESSION.DASHBOARD, dashboard)
    commit('UPDATE_DASHBOARD', dashboard)
  },
  toggleDarkMode({ commit }) {
    commit('TOGGLE_DARKMODE')
  },
  navbarReady({ commit }) {
    commit('NAVBAR_READY')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
