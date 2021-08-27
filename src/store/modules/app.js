/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { getInitialLocale, getInitialThemeMode } from '@/utils/framework'

const TOGGLE_THEME_MODE = 'TOGGLE_THEME_MODE'
const SET_THEME_MODE    = 'SET_THEME_MODE'
const SET_LOCALE        = 'SET_LOCALE'

const state = {
  themeMode: getInitialThemeMode(),
  locale: getInitialLocale()
}

const mutations = {
  [TOGGLE_THEME_MODE]: (state) => {
    state.themeMode = state.themeMode !== 'lignt' ? 'lignt' : 'dark'
  },
  [SET_THEME_MODE]: (state, themeMode) => {
    state.themeMode = themeMode
  },
  [SET_LOCALE]: (state, locale) => {
    state.locale = locale
  }
}

const actions = {
  toggleThemeMode({ commit }) {
    commit(TOGGLE_THEME_MODE)
  },
  setThemeMode({ commit }, themeMode) {
    commit(SET_THEME_MODE, themeMode)
  },
  setLocale({ commit }, locale) {
    commit(SET_LOCALE, locale)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
