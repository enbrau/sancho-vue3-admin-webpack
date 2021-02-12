const dicts = require('../data/dicts.js')

module.exports = [
  {
    url: '/common/dicts',
    type: 'get',
    response: () => {
      return {
        flag: 0,
        data: dicts,
        msg: null
      }
    }
  }
]
