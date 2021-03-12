export function toAmount(val) {
  var str = (val).toFixed(2) + ''
  var intSum = str.substring(0,str.indexOf(".")).replace( /\B(?=(?:\d{3})+$)/g, ',' )
  var dot = str.substring(str.length,str.indexOf("."))
  var ret = intSum + dot
  return ret
}
