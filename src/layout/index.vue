<template>
  <div class="view-container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="decideComponent(Component)" :key="key" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { markRaw } from '@vue/reactivity'
import settings from '@/settings'

export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
    decideComponent(component) {
      // 解决嵌套路由问题
      if (settings.useNestedRoute || (this.$route.meta && !this.$route.meta.nested)) {
        return markRaw(this.$route.matched[this.$route.matched.length - 1].components.default)
      } else {
        return component
      }
    }
  }
}
</script>
