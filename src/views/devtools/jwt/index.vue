<template>
  <div class="app-container">
    <el-card shadow="never">
      <template #header>
        <div class="clearfix">
          <span>JSON Web Token (JWT) 查看器</span>
        </div>
      </template>
      <el-row :gutter="20">
        <el-col :span="12">
          <h4>Encoded</h4>
        </el-col>
        <el-col :span="12">
          <h4>Decoded</h4>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col
          :span="12"
          :style="{height: rightPanelHeight}"
        >
          <el-input
            v-model="jwt"
            type="textarea"
            :autosize="{ minRows: 12 }"
            style="margin-bottom: 10px"
            @blur="parseJWT"
          />
          <el-alert
            v-if="!validation"
            title="令牌校验通过"
            type="success"
            show-icon
            :closable="false"
          />
          <el-alert
            v-if="validation"
            :title="validation"
            type="error"
            show-icon
            :closable="false"
          />
        </el-col>
        <el-col
          ref="rightPanel"
          :span="12"
        >
          <el-card shadow="never">
            <template #header>
              <span style="text-indent: 10px">Header: </span>&nbsp;
              <span style="color: #909399">ALGORITHM & TOKEN TYPE</span>
            </template>
            <Coder
              ref="header"
              v-model="header"
              :min-lines="3"
              mode="json"
              :read-only="true"
            />
          </el-card>
          <el-card shadow="never">
            <template #header>
              <span style="text-indent: 10px">Payload: </span>&nbsp;
              <span style="color: #909399">DATA</span>
            </template>
            <Coder
              ref="payload"
              v-model="payload"
              :min-lines="6"
              mode="json"
              :read-only="true"
            />
          </el-card>
          <el-card shadow="never">
            <template #header>
              <span style="text-indent: 10px">Signature: </span>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Coder from '@/components/Coder'
const test = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWZhbmciLCJuYmYiOjE2MDk5MDI2MzAsImlzcyI6IkFSSy1GcmFtZXdvcmsiLCJwZXJtcyI6WyJTVVBFUl9BRE1JTiJdLCJpYXQiOjE2MDk5MDI2MzAsImp0aSI6Ik16MmtRUmlhIiwib3JnSWQiOiJERVBUMDAwNSJ9.q79_OSlw8Jp95HF-iapGmVyP9319AE7TOhRp5Fmqs1E'

export default {
  components: { Coder },
  data() {
    return {
      actives: ['header', 'payload', 'signature'],
      jwt: test,
      header: '',
      payload: '',
      signature: '',
      validation: ''
    }
  },
  computed: {
    rightPanelHeight() {
      console.log(this.$refs.rightPanel)
      return this.$refs.rightPanel ? this.$refs.rightPanel.height : 0
    },
    json_header() {
      return JSON.stringify(this.header || {}, null, 2)
    }
  },
  mounted() {
    if (this.jwt) {
      this.parseJWT()
    }
  },
  methods: {
    parseJWT() {
      const jwt = this.jwt

      if (jwt) {
        let jwt_arr
        try {
          jwt_arr = this.jwt.split('.')
          if (jwt_arr.length !== 3) {
            throw new Error()
          }
        } catch (error) {
          this.validation = '令牌结构异常！'
          return
        }

        try {
          const base64_header = jwt_arr[0]
          const json_header = atob(base64_header)
          const header = JSON.parse(json_header)
          this.header = JSON.stringify(header || {}, null, 2)
        }  catch (error) {
          this.validation = '令牌 Header 解码异常：' + error.message
          return
        }

        try {
          const base64_payload = jwt_arr[1]
          const json_payload = atob(base64_payload)
          const payload = JSON.parse(json_payload)
          this.payload = JSON.stringify(payload || {}, null, 2)
        } catch (error) {
          this.validation = '令牌 Payload 解码异常：' + error.message
          return
        }

        // TODO 对签名的验证
      }
    }
  }
}
</script>
