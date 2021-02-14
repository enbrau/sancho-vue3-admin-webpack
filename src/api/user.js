import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      data
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function fetchProfile() {
  return request({
    url: '/profile/info',
    method: 'get'
  })
}
