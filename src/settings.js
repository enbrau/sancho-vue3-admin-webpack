export default {

  /**
   * @type {string} build path
   */
  buildPath: 'dist',

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

  client: {

    withCredentials: true,

    timeout: 100000

  },

  theme: {

    enableAutoThemeModeDetect: false,

    defaultThemeMode: 'light'

  }

  // =========================================================================================
  // !!! The following options cannot be overwritten by other entry settings files
  // =========================================================================================



}