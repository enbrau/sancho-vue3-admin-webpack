/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @param {Object} data
 * @param {Stirng} path
 * @param {Object} defaultValue
 * @returns {Object}
 */
export const getValueByPath = function(data, path, defaultValue) {
  if (!path) return path;
  const targets = path.split('.');
  let currentData = data;
  for (let i = 0; i < targets.length; i++) {
    if (!currentData) break;
    currentData = currentData[targets[i]]
  }
  return currentData || defaultValue
}

export function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime()+(exdays*24*60*60*1000))
  var expires = "expires="+d.toGMTString()
  document.cookie = cname + "=" + cvalue + "; " + expires
}

export function getCookie(cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length, c.length)
  }
  return ''
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * Check if string or array is empty
 * @param {String | Array} target
 * @returns {boolean}
 */
export function isEmpty(target) {
  if (target === undefined || target === null) {
    return true
  }
  if (typeof (target) === 'string' && target.trim() === '') {
    return true
  }
  return target instanceof Array && target.length === 0;
}
