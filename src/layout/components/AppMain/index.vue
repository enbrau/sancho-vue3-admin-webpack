<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="decideComponent(Component)" :key="key" />
      </keep-alive>
    </router-view>
  </section>
</template>

<script>
import { markRaw } from '@vue/reactivity'

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
    decideComponent(component) {
      // 解决嵌套路由问题
      if (this.$settings.useNestedRoute || (this.$route.meta && this.$route.meta.nested)) {
        return markRaw(this.$route.matched[this.$route.matched.length - 1].components.default)
      } else {
        return component
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  // background-color: #f7f7f7;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
