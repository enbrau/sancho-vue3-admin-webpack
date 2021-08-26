export default [
  {
      url: '/api/getUser',
      method: 'get',
      response: () => {
          console.log('body>>>>>>>>')
          return {
              code: 0,
              message: 'ok',
              data: ['aa', 'bb']
          }
      }
  }
]
