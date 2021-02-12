/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

const regs = {
  package: /^([a-zA-Z.])+$/,
  englishText: /^([a-zA-Z])+$/,
  money: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/,
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
  phone: /^((0\d{2,3}-)|\d{7,8})|(1[3584]\d{9})$/,
  positiveDigit: /^[+]?(0|([1-9]\d*))(\.\d+)?$/,
  negativeDigit: /^[-]?(0|([1-9]\d*))(\.\d+)?$/,
  digit: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/,
  positiveInteger: /^[+]?(0|([1-9]\d*))$/,
  negativeInteger: /^[-]?(0|([1-9]\d*))$/,
  integer: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/,
  mobile: /^1\d{10}$/
}

/**
 * reg validate
 * @param {Object} rule
 * @param {Object | String} value
 * @param {Function} callback
 */
export function validateByReg(rule, value, callback) {
  if (value === '' || value === null || value === undefined) {
    callback()
  }
  const reg = regs[rule.regName]
  if (!reg.test(value)) {
    callback(new Error(rule.message))
  } else {
    callback()
  }
}
