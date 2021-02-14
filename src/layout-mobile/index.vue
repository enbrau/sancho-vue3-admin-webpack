<template>
  <van-overlay :show="loading">
    <div class="wrapper">
      <van-loading
        class="block"
        size="24px"
        vertical
      >
        加载中...
      </van-loading>
    </div>
  </van-overlay>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <Navbar />
    <section class="app-main">
      <router-view
        :key="key"
        v-slot="{ Component }"
      >
        <transition
          name="fade-transform"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<script>
import { Navbar } from './components'
import { mapState } from 'vuex'

export default {
  name: 'MobileLayout',
  components: { Navbar },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    }),
    showNavbar() {
      return this.$route.path !== '/dashboard'
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 120px;
}
</style>
