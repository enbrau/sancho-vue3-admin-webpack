import request from '@/utils/request'

export function getLanguage(locale) {
  return request({
    url: '/common/language',
    method: 'get',
    params: { locale }
  })
}

export function fetchDicts() {
  return request({
    url: '/common/dicts',
    method: 'get'
  })
}

export function getParams() {
  return request({
    url: '/common/settings',
    method: 'get'
  })
}
