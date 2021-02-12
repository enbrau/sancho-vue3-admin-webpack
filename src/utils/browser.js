import UAParser from 'ua-parser-js'

export function getClientInfo() {
  const ua = new UAParser(window.navigator.userAgent)
  const info = ua.getResult()
  if (/MicroMessenger/.test(window.navigator.userAgent)) {
    info.browser.subName = 'WeChat'
  } else if (/AlipayClient/.test(window.navigator.userAgent)) {
    info.browser.subName = 'Alipay'
  }
  return info
}

export function isMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
