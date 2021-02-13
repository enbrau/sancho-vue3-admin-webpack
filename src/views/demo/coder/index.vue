<template>
  <el-card
    class="app-container"
    shadow="never"
  >
    <template #header>
      <div class="clearfix">
        <span>代码编辑器</span>
      </div>
    </template>
    <el-radio-group
      v-model="mode"
      size="mini"
    >
      <el-radio-button label="html" />
      <el-radio-button label="javascript" />
      <el-radio-button label="xml" />
    </el-radio-group>
    <Coder v-model:mode="mode" />
  </el-card>
</template>

<script>
import Coder from '@/components/Coder'

export default {
  components: { Coder },
  data() {
    return {
      mode: 'javascript'
    }
  }
}
</script>
