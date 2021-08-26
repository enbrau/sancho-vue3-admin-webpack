import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `${process.env.VITE_BASE_URL}/api/getUser`,
    method: 'get',
    statusCode: 200,
    response: () => {
      return {
        flag: 0,
        data: { id: 'admin' },
        message: null
      }
    }
  }
] as MockMethod[]
