module.exports = {

  /**
   * @type {string} build path
   */
  buildPath: 'dist',

  /**
   * @type {boolean} true | false
   */
  enableMultiEntries: true,

  /**
   * @type {string} title
   * @description Title of the application
   */
  title: 'Sancho Vue3 Admin',

  /**
   * @type {boolean} true | false
   */
  debug: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description Whether close sidebar at beginning
   */
  collapseSidebar: true,

  // =========================================================================================
  // !!! The following options cannot be overwritten by other entry files
  // =========================================================================================

  /**
   * @type {boolean} true | false
   */
  showDemoPages: true,

  /**
   * @type {boolean} true | false
   */
  showBetaPages: false,

  /**
   * @type {boolean} true | false
   */
  showDevTools: true,

  enableI18n: true,

  enableFullScreen: true,

  enableDarkMode: false,

  /**
   * Client infomation
   */
  client: {

    with_credentials: true,

    timeout: 100000

  },

  security: {

    /**
     * @type {string} 'header' | 'cookie'
     */
    token_strategy: 'cookie',

    /**
     * Name for JWT
     */
    token_key: {

      header: 'Access-Token',

      cookie: 'ACCESS_TOKEN',

      param: 'token'

    }

  }

}
