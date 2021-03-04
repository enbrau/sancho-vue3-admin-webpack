<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-row>
          <el-input
            v-model="decryptedData"
            type="textarea"
            :rows="6"
            placeholder="请输入要加密的文本"
          />
        </el-row>
        <el-row style="margin: 10px 0">
          <el-select v-model="alg" size="small">
            <el-option
              v-for="(encryptor, $key) in encryptors"
              :key="$key"
              :label="$key"
              :value="$key"
              :title="encryptor.desc || ''"
            />
          </el-select>
          <el-input
            v-if="showSecretPhrase"
            v-model="secretPhrase"
            show-password
            placeholder="秘钥"
            size="small"
            style="width: 200px; margin-left: 10px"
          />
          <el-button
            :disabled="!decryptable"
            type="primary"
            effect="dark"
            size="small"
            style="margin-left: 20px"
            @click="decrypt"
          >
            解密
          </el-button>
          <el-button
            :disabled="!encryptable"
            type="primary"
            effect="dark"
            size="small"
            @click="encrypt"
          >
            加密
          </el-button>
        </el-row>
        <el-row>
          <el-input
            v-model="encryptedData"
            type="textarea"
            :rows="6"
            placeholder="请输入要解密的文本"
          />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crypto from 'crypto-js'
import { sm2, sm3 } from 'sm-crypto'

// https://cryptojs.gitbook.io/docs/
const encryptors = {
  'MD5': {
    desc: '【Hashing Algorithm】MD5 is a widely used hash function. It\'s been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn\'t suitable for applications like SSL certificates or digital signatures that rely on this property.',
    encrypt(data) {
      return crypto.MD5(data)
    }
  },
  'SHA1': {
    desc: '【Hashing Algorithm】SHA-1 is the most established of the existing SHA hash functions, and it\'s used in a variety of security applications and protocols. Though, SHA-1\'s collision resistance has been weakening as new attacks are discovered or improved.',
    encrypt(data) {
      return crypto.SHA1(data)
    }
  },
  'SHA2-256': {
    desc: '【Hashing Algorithm】SHA-256 is one of the four variants in the SHA-2 set. It isn\'t as widely used as SHA-1, though it appears to provide much better security.',
    encrypt(data) {
      return crypto.SHA256(data)
    }
  },
  'SHA2-512': {
    desc: '【Hashing Algorithm】SHA-512 is largely identical to SHA-256 but operates on 64-bit words rather than 32.',
    encrypt(data) {
      return crypto.SHA512(data)
    }
  },
  'SHA3': {
    desc: '【Hashing Algorithm】SHA-3 is the winner of a five-year competition to select a new cryptographic hash algorithm where 64 competing designs were evaluated.',
    encrypt(data) {
      return crypto.SHA3(data)
    }
  },
  'RIPEMD-160': {
    encrypt(data) {
      return crypto.RIPEMD160(data)
    }
  },
  'HMAC-MD5': {
    desc: '【HMAC】',
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.HmacMD5(data, secret)
    }
  },
  'HMAC-SHA1': {
    desc: '【HMAC】',
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.HmacSHA1(data, secret)
    }
  },
  'HMAC-SHA256': {
    desc: '【HMAC】',
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.HmacSHA256(data, secret)
    }
  },
  'HMAC-SHA512': {
    desc: '【HMAC】',
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.HmacSHA512(data, secret)
    }
  },
  'AES': {
    desc: '【Cipher Algorithm】The Advanced Encryption Standard (AES) is a U.S. Federal Information Processing Standard (FIPS). It was selected after a 5-year process where 15 competing designs were evaluated.',
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.AES.encrypt(data, secret).toString()
    },
    decrypt(data, secret) {
      return crypto.AES.decrypt(data, secret).toString(crypto.enc.Utf8)
    }
  },
  'DES': {
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.DES.encrypt(data, secret).toString()
    },
    decrypt(data, secret) {
      return crypto.DES.decrypt(data, secret).toString(crypto.enc.Utf8)
    }
  },
  'Triple DES': {
    showSecretPhrase: true,
    encrypt(data, secret) {
      return crypto.TripleDES.encrypt(data, secret).toString()
    },
    decrypt(data, secret) {
      return crypto.TripleDES.decrypt(data, secret).toString(crypto.enc.Utf8)
    }
  },
  'SM2': {
    showSecretPhrase: true,
    encrypt(data, secret) {
      const cipherMode = 0
      return '04' + sm2.doEncrypt(data, secret, cipherMode)
    },
    decrypt(data, secret) {
      const cipherMode = 0
      return sm2.doDecrypt(data, secret, cipherMode)
    }
  }
}

export default {
  data() {
    return {
      encryptors,
      alg: 'MD5',
      decryptedData: '',
      encryptedData: '',
      secretPhrase: '',
      privateKey: '',
      publicKey: ''
    }
  },
  computed: {
    encryptable() {
      const encryptor = this.encryptor()
      return encryptor.encrypt
    },
    decryptable() {
      const encryptor = this.encryptor()
      return encryptor.decrypt
    },
    showSecretPhrase() {
      const encryptor = this.encryptor()
      return encryptor.showSecretPhrase
    }
  },
  methods: {
    encrypt() {
      const encryptor = this.encryptor()
      const result = encryptor.encrypt(this.decryptedData, this.secretPhrase)
      this.encryptedData = result
    },
    decrypt() {
      const encryptor = this.encryptor()
      const result = encryptor.decrypt(this.encryptedData, this.secretPhrase)
      this.decryptedData = result
    },
    encryptor() {
      return this.encryptors[this.alg]
    }
  }
}
</script>
