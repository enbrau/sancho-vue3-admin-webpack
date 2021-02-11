import Clipboard from 'clipboard'

const config = {
  autoSetContainer: false,
  appendToBody: true,
}
export function copyText(text, container, callback) {
  const fakeElement = document.createElement('button')
  const clipboard = new Clipboard(fakeElement, {
    text: function () {
      return text
    },
    action: function () {
      return 'copy'
    },
    container: typeof container === 'object' ? container : document.body,
  })
  clipboard.on('success', function (e) {
    clipboard.destroy()
    callback(undefined, e)
  })
  clipboard.on('error', function (e) {
    clipboard.destroy()
    callback(e, undefined)
  })
  if (config.appendToBody) document.body.appendChild(fakeElement)
  fakeElement.click()
  if (config.appendToBody) document.body.removeChild(fakeElement)
}

export default {
  mounted: function (el, binding) {
    if (binding.arg === 'success') {
      el._vClipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._vClipboard_error = binding.value
    } else {
      const clipboard = new Clipboard(el, {
        text: function () {
          return binding.value
        },
        action: function () {
          return binding.arg === 'cut' ? 'cut' : 'copy'
        },
        container: config.autoSetContainer ? el : undefined,
      })
      clipboard.on('success', function (e) {
        const callback = el._vClipboard_success
        callback && callback(e)
      })
      clipboard.on('error', function (e) {
        const callback = el._vClipboard_error
        callback && callback(e)
      })
      el._vClipboard = clipboard
    }
  },
  updated: function (el, binding) {
    if (binding.arg === 'success') {
      el._vClipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._vClipboard_error = binding.value
    } else {
      el._vClipboard.text = function () {
        return binding.value
      }
      el._vClipboard.action = function () {
        return binding.arg === 'cut' ? 'cut' : 'copy'
      }
    }
  },
  unmounted: function (el, binding) {
    if (binding.arg === 'success') {
      delete el._vClipboard_success
    } else if (binding.arg === 'error') {
      delete el._vClipboard_error
    } else {
      el._vClipboard.destroy()
      delete el._vClipboard
    }
  }
}
