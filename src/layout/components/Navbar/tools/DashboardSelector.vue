<template>
  <el-dropdown v-if="dashboardCount > 1" class="right-menu-item hover-effect" trigger="hover" @command="switchDashboard">
    <svg-icon icon-class="dashboard" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(title, $key) in dashboards" :key="$key" :command="$key" :disabled="$key === currentDashboard">
          {{ title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { getDashboardsInfo } from '@/views/dashboard/utils'

export default {
  name: 'DashboardSelector',
  computed: {
    dashboardCount() {
      // const dashboards = getDashboardsInfo()
      let i = 0
      for (const key in this.dashboards) {
        i++
      }
      return i
    },
    dashboards() {
      return getDashboardsInfo()
    },
    currentDashboard() {
      return this.$store.state.app.dashboard
    }
  },
  methods: {
    switchDashboard(name) {
      this.$store.dispatch('app/updateDashboard', name)
    }
  }
}
</script>
