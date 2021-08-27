<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
