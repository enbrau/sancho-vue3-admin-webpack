<template>
  <el-select
    ref="select"
    v-model="valueId"
    :clearable="clearable"
    :disabled="disabled"
    :placeholder="props.placeholder"
    @clear="clearHandle"
  >
    <el-input
      v-model="filterText"
      class="selectInput"
      :placeholder="placeholder"
    />
    <el-option
      :value="valueId"
      :label="selectedValueTitle"
      class="options"
    >
      <el-tree
        id="tree-option"
        ref="selectTree"
        :expand-on-click-node="false"
        :auto-expand-parent="true"
        :accordion="accordion"
        :data="options"
        :props="props"
        :node-key="props.value"
        :default-expanded-keys="defaultExpandedKeys"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'TreeSelect',
  props: {
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          value: 'id',
          label: 'title',
          children: 'children',
          placeholder: ''
        }
      }
    },
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => { return [] }
    },
    /* 初始值 */
    modelValue: {
      type: String,
      default: () => { return null }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => { return true }
    },
    /* 自动收起 */
    accordion: {
      type: Boolean,
      default: () => { return false }
    },
    placeholder: {
      type: String,
      default: () => { return '检索关键字' }
    },
    disabled: {
      type: Boolean,
      default: () => { return false }
    }
  },
  emits: ['update:modelValue', 'getValue'],
  data() {
    return {
      filterText: '',
      valueTitle: '',
      defaultExpandedKeys: []
    }
  },
  computed: {
    valueId: {
      get: function() {
        return this.modelValue
      },
      set: function(value) {
        this.$emit('update:modelValue', value)
      }
    },
    selectedValueTitle: {
      get: function() {
        return this.valueId ? this.valueTitle : ''
      }
    }
  },
  watch: {
    options() {
      const defaultExpandedKeys = []
      for (let i = 0; i < this.options.length; i++) {
        const option = this.options[i]
        defaultExpandedKeys.push(option[this.props.value])
      }
      this.defaultExpandedKeys = defaultExpandedKeys
    },
    modelValue(val) {
      this.valueId = val
      this.initHandle()
    },
    filterText(val) {
      this.$refs.selectTree.filter(val)
    }
  },
  mounted() {
    this.initHandle()
  },
  methods: {
    // 初始化值
    initHandle() {
      if (this.valueId) {
        this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label]
        this.$refs.selectTree.setCurrentKey(this.props.valueId)
        // this.defaultExpandedKeys = [this.valueId]
      }
      this.initScroll()
    },
    // 初始化滚动条
    initScroll() {
      this.$nextTick(() => {
        const scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
        const scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
        scrollWrap.style.cssText = 'margin: 0px max-height: none overflow: hidden'
        scrollBar.forEach(ele => { ele.style.width = 0 })
      })
    },
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label]
      this.valueId = node[this.props.value]
      this.$emit('getValue', this.valueId)
      // this.defaultExpandedKeys = []
      this.$refs.select.blur()
    },
    // 清除选中
    clearHandle() {
      this.valueTitle = ''
      this.valueId = null
      this.defaultExpandedKeys = []
      this.clearSelected()
      this.$emit('getValue', null)
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll('#tree-option .el-tree-node')
      allNode.forEach((element) => element.classList.remove('is-current'))
    },
    filterNode(value, data) {
      if (!value) return true
      return data[this.props.label].indexOf(value) !== -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal
}
ul li >>>.el-tree .el-tree-node__content {
  height:auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>>.is-current .el-tree-node__label {
  color: #409EFF;
  font-weight: 700;
}
.el-tree >>>.is-current .el-tree-node__children .el-tree-node__label {
  color:#606266;
  font-weight: normal;
}
.selectInput {
  padding: 0 5px;
  box-sizing: border-box;
}
</style>
