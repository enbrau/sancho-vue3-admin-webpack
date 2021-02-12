module.exports = [
  {
    url: '/login',
    type: 'post',
    response: () => {
      return {
        flag: 0,
        data: 'MOCKTOKEN',
        msg: null
      }
    }
  }
]
