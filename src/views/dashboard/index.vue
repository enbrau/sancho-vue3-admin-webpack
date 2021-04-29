<template>
  <div class="dashboard-wrapper">
    <component :is="activeDashboard" />
  </div>
</template>

<script>
import { getDashboard } from './utils'

export default {
  name: 'DashboardWrapper',
  data() {
    return {
      activeDashboard: null
    }
  },
  computed: {
    dashboardName() {
      return this.$store.state.app.dashboard
    }
  },
  watch: {
    dashboardName: {
      handler() {
        const name = this.dashboardName
        this.activeDashboard = getDashboard(name)
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.dashboard-wrapper {
  margin: 0;
  padding: 0;
}
</style>
