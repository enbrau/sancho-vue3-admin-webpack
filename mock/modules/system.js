const dicts = require('../data/dicts.js')
const user = require('../data/user')

module.exports = [
  {
    url: '/profile/info',
    type: 'get',
    response: () => {
      return {
        flag: 0,
        data: user,
        msg: null
      }
    }
  },
  {
    url: '/system/dicts',
    type: 'get',
    response: () => {
      return {
        flag: 0,
        data: dicts,
        msg: null
      }
    }
  },
  {
    url: '/system/menus',
    type: 'get',
    response: () => {
      return {
        flag: 0,
        data: [],
        msg: null
      }
    }
  }
]
