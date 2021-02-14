<template>
  <div
    ref="ace"
    class="ace-editor"
  />
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-json5'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/mode-graphqlschema'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'html'
    },
    theme: {
      type: String,
      default: 'light'
    },
    maxLines: {
      type: Number,
      default: 1000
    },
    minLines: {
      type: Number,
      default: 20
    },
    fontSize: {
      type: Number,
      default: 14
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editor: null
    }
  },
  watch: {
    modelValue: {
      handler: 'refresh',
      immediate: true
    },
    mode: {
      handler: 'refresh',
      immediate: true
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh() {
      const options = this.options()
      this.editor = ace.edit(this.$refs.ace, options)
      if (!this.editor) {
        this.editor = ace.edit(this.$refs.ace, options)
      } else {
        this.editor.setOptions(options)
      }
      this.editor.setValue(this.modelValue || '', -1)
    },
    options() {
      return {
        maxLines: this.maxLines,
        minLines: this.minLines,
        fontSize: this.fontSize,
        theme: `ace/theme/${this.theme === 'light' ? 'github' : 'dracula'}`,
        mode: `ace/mode/${this.mode}`,
        tabSize: 4,
        readOnly: this.readOnly
      }
    }
  }
}
</script>
