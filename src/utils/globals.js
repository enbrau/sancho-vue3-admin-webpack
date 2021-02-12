import { fetchDicts } from '@/api/common'
import { getToken } from '@/utils/auth'

export const dict = new Promise((resolve, reject) => {
  const token = getToken()
  if (!token) {
    resolve()
    return
  }
  fetchDicts()
    .then(res => {
      const dicts = res.data
      dicts.convert = function(dictName, dictKey, fallbackDict) {
        const dict = dicts[dictName] || fallbackDict || {}
        return dict[dictKey] || dictKey
      }
      resolve({ dicts })
    })
    .catch(e => {
      reject(e)
    })
})

require('dayjs/locale/zh-cn')
const dayjs = require('dayjs')
export const day = new Promise((resolve) => {
  resolve({ day: dayjs.default || dayjs })
})

import _ from 'lodash'
export const lodash = new Promise((resolve) => {
  resolve({ lodash: _ })
})

import Bus from '@/bus'
export const bus = new Promise((resolve) => {
  resolve({ bus: Bus })
})
