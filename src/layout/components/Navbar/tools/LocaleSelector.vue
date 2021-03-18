<template>
  <!-- <el-tooltip class="right-menu-item hover-effect" :content="$t('common.locale')" effect="dark" placement="bottom"> -->
  <el-dropdown class="right-menu-item hover-effect" trigger="click" @command="switchLocale">
    <svg-icon icon-class="locale" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(locale, $key) in locales" :key="$key" :command="$key" :disabled="$key === currentLocale">
          {{ locale.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- </el-tooltip> -->
</template>

<script>
import { locales, currentLocale } from '@/i18n'
import { setLocale } from '@/utils/framework'

export default {
  name: 'LocaleSelector',
  data() {
    return {
      locales,
      currentLocale
    }
  },
  methods: {
    switchLocale(locale) {
      setLocale(locale)
      location.reload()
    }
  }
}
</script>
