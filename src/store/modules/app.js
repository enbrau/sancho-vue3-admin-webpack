import { getSidebarState, setSidebarState } from '@/utils/framework'

const state = {
  sidebar: getSidebarState(),
  withoutAnimation: false,
  device: 'desktop',
  loading: false
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
