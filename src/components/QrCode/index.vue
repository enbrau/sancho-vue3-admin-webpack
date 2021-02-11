<template>
  <canvas />
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QrCode',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 220
    },
    color: {
      type: String,
      default: '#000000'
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    }
  },
  watch: {
    modelValue: {
      handler: 'refresh',
      immediate: true
    },
    size: {
      handler: 'refresh',
      immediate: true
    },
    color: {
      handler: 'refresh',
      immediate: true
    },
    bgColor: {
      handler: 'refresh',
      immediate: true
    }
  },
  methods: {
    refresh() {
      const that = this
      this.$nextTick(() => {
        if (!this.modelValue) {
          return
        }
        const options = {
          errorCorrectionLevel: 'H',
          width: this.size,
          height: this.size,
          color: {
            dark: this.color,
            light: this.bgColor
          }
        }
        QRCode.toCanvas(this.$el, this.modelValue, options, function (error) {
          if (error) {
            that.$log.error(error)
          } else {
            that.$log.debug(`QrCode generated: ${that.modelValue}`)
          }
        })
      })
    }
  }
}
</script>
