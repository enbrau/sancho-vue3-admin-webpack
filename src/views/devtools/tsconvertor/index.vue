<template>
  <div class="app-container">
    <el-row>
      <el-input
        v-model="origin"
        type="textarea"
        :rows="6"
        placeholder="请输入要转换的字符串"
      />
    </el-row>
    <el-row style="margin: 10px 0">
      <el-button
        type="primary"
        effect="dark"
        size="small"
        @click="convertToTrad"
      >
        轉換爲繁體
      </el-button>
      <el-button
        type="primary"
        effect="dark"
        size="small"
        @click="convertToSimp"
      >
        转换为简体
      </el-button>
    </el-row>
    <el-row>
      <el-input
        v-model="convertion"
        type="textarea"
        :rows="6"
      />
    </el-row>
  </div>
</template>

<script>
import cnchar from 'cnchar'
import 'cnchar-trad'

export default {
  name: 'TSConvertor',
  data() {
    return {
      origin: '',
      convertion: ''
    }
  },
  methods: {
    convertToTrad() {
      this.convertion = cnchar.convert.simpleToTrad(this.origin)
    },
    convertToSimp() {
      this.convertion = cnchar.convert.tradToSimple(this.origin)
    }
  }
}
</script>
