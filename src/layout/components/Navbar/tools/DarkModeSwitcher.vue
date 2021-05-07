<template>
  <el-tooltip
    v-if="$settings.enableDarkMode"
    :content="$t(mode === 'light' ? 'common.to_dark_mode' : 'common.to_light_mode')"
    effect="dark"
    placement="bottom"
  >
    <div class="right-menu-item hover-effect">
      <svg-icon :icon-class="mode + '-mode'" @click="handleToggleMode" />
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'DarkModeSwitcher',
  computed: {
    mode() {
      return this.$store.state.app.darkMode ? 'dark' : 'light'
    }
  },
  methods: {
    handleToggleMode() {
      this.$store.dispatch('app/toggleDarkMode')
    }
  }
}
</script>
