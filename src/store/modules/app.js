const state = {
  themeMode: 'light'
}

const mutations = {
  TOGGLE_THEME_MODE: (state) => {
    state.themeMode = state.themeMode !== 'lignt' ? 'lignt' : 'dark'
  }
}

const actions = {
  toggleThemeMode({ commit }) {
    commit('TOGGLE_THEME_MODE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
