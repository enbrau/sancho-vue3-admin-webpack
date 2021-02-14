<template>
  <van-nav-bar
    v-if="showNavBtns"
    title="标题"
    left-text="返回"
    left-arrow
  >
    <template #right>
      <van-icon
        name="search"
        size="18"
      />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  computed: {
    showNavBtns() {
      return this.$route.path !== '/dashboard'
    }
  }
}
</script>