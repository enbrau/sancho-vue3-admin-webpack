<template>
  <!-- <el-tooltip class="right-menu-item hover-effect" :content="$t('common.font_size')" effect="dark" placement="bottom"> -->
  <el-dropdown class="right-menu-item hover-effect" trigger="click" @command="switchFontSize">
    <svg-icon icon-class="font-size" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(size, $key) in sizes" :key="$key" :command="$key" :disabled="$key === currentSize">
          {{ size }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- </el-tooltip> -->
</template>

<script>
import { getSize, setSize } from '@/utils/framework'

export default {
  name: 'FontSizeSelector',
  data() {
    return {
      sizes: {
        mini: '极小',
        small: '小',
        medium: '中',
        large: '大'
      },
      currentSize: getSize()
    }
  },
  methods: {
    switchFontSize(size) {
      setSize(size)
      location.reload()
    }
  }
}
</script>
