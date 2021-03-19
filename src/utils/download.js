const baseURL = process.env.VUE_APP_BASE_API

const download = function({url}) {
  window.open(baseURL + url)
  return
}

export default download
