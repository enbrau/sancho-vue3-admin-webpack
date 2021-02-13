<template>
  <el-card
    class="app-container"
    shadow="never"
  >
    <template #header>
      <div class="clearfix">
        <span>二维码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="8">
        <QrCode
          v-model="url"
          v-model:size="size"
          v-model:color="color"
          v-model:bgColor="bgColor"
        />
      </el-col>
      <el-col :span="16">
        <el-form label-width="80px">
          <el-form-item label="数据内容">
            <el-input v-model="url" />
          </el-form-item>
          <el-form-item label="尺寸">
            <el-slider
              v-model="size"
              :max="500"
            />
          </el-form-item>
          <el-form-item label="前景色">
            <el-color-picker v-model="color" />
          </el-form-item>
          <el-form-item label="背景色">
            <el-color-picker v-model="bgColor" />
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import QrCode from '@/components/QrCode'

export default {
  name: 'QrCodeDemo',
  components: { QrCode },
  data() {
    return {
      url: 'http://www.enbrau.com',
      size: 220,
      color: '#000000',
      bgColor: '#ffffff'
    }
  }
}
</script>
