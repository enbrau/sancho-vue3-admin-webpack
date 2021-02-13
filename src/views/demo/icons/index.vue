<template>
  <div class="app-container">
    <el-tabs
      lazy
      type="border-card"
    >
      <el-tab-pane label="SvgIcons">
        <div class="grid">
          <div
            v-for="item of svgIcons"
            :key="item"
            @click="handleClipboard(generateIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <template #content>
                <div>
                  {{ generateIconCode(item) }}
                </div>
              </template>
              <div class="icon-item">
                <svg-icon
                  :icon-class="item"
                  class-name="disabled"
                />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        lazy
        label="ElementPlus Icons"
      >
        <div class="grid">
          <div
            v-for="item of elementIcons"
            :key="item"
            @click="handleClipboard(generateElementIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <template #content>
                <div>
                  {{ generateElementIconCode(item) }}
                </div>
              </template>
              <div class="icon-item">
                <i :class="'el-icon-' + item" />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons,
      elementIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, event) {
      const clipboard = new Clipboard(event.target, {
        text: () => text
      })
      clipboard.on('success', () => {
        this.$message({
          message: this.$t('tips.copy_success'),
          type: 'success',
          duration: 1500
        })
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$message({
          message: this.$t('tips.copy_failure'),
          type: 'error'
        })
        clipboard.destroy()
      })
      clipboard.onClick(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  // margin: 10px 20px 0;
  // overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
