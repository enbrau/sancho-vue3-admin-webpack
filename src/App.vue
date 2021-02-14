<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$log.info(this.$settings)
  }
}
</script>
