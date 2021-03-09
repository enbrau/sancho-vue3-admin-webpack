import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import settings from '@/settings'
import { removeToken } from '@/utils/auth'
import router from '@/router'
import requestHook from '@/hook/request'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: settings.with_credentials,
  timeout: settings.client.timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // Call hooks
    requestHook.call(config)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if (res instanceof Blob) {
    //   let filename = 'download'
    //   for (const key in response.headers) {
    //     const header = response.headers[key]
    //     if (header) {
    //       const header_arr = header.toLowerCase().split('filename=')
    //       if (header_arr.length > 1) {
    //         filename = header_arr[1]
    //         filename = decodeURI(filename)
    //         break
    //       }
    //     }
    //   }
    //   return handleBlob(response.data).then((result) => {
    //     createDownload(res, filename)
    //   }).catch((result) => {
    //     return Promise.reject(new Error(result.msg))
    //   })
    // }
    // if the custom flag is not 0, it is judged as an error.
    if (res.flag !== 0) {
      ElMessage({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // -6: Illegal token; -9: Token expired;
      if (res.flag === -6 || res.flag === -9) {
        // to re-login
        ElMessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    let message = error.message
    if (error.response) {
      const status = error.response.status
      if (status === 403 || status === 401) {
        removeToken()
        router.push('/')
      }
      if (error.response.data) {
        message = error.response.data.msg
      }
    }
    if (!message) {
      message = '服务请求失败：' + error.config.url
    }
    ElMessage({
      message,
      type: 'error',
      //iconClass: 'el-icon-warning',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
