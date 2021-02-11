<template>
  <!-- 弹出框 -->
  <el-popover
    ref="popover"
    v-model:visible="visible"
    :disabled="disabled"
    :placement="placement"
    popper-class="el-icon-popper"
    :width="width"
    trigger="click"
  >
    <template #reference>
      <div class="ui-fas">
        <el-input
          ref="input"
          v-model="value"
          :placeholder="placeholder"
          clearable
          :disabled="disabled"
          :readonly="readonly"
          @focus="_popoverShowFun"
        >
          <template #prepend>
            <svg-icon
              :icon-class="value || 'icon' "
              class-name="custom-class"
            />
          </template>
        </el-input>
      </div>
    </template>
    <el-input
      v-model="filterText"
      class="fas-icon-input"
      size="mini"
      clearable
      :placeholder="placeholder"
    />
    <el-scrollbar
      tag="ul"
      wrap-class="el-select-dropdown__wrap"
      view-class="el-select-dropdown__list"
      class="is-empty"
    >
      <li
        v-for="(item, index) in iconList"
        :key="index"
        class="el-select-dropdown__item"
        :class="{ selected: item === value }"
        @click="selectedIcon(item)"
      >
        <svg-icon
          :icon-class="item"
          class-name="custom-class"
        /> {{ item }}
      </li>
    </el-scrollbar>
  </el-popover>
</template>

<script>
import { on, off } from './utils/dom'
import svgIcons from './utils/svg-icon'
export default {
  name: 'IconSelect',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    placeholder: {
      type: String,
      default: () => { return '请输入图标名称' }
    },
    disabled: {
      type: Boolean,
      default: () => { return false }
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      iconList: svgIcons,
      filterText: '',
      readonly: true,
      visible: false,
      width: 200,
      value: this.modelValue
    }
  },
  watch: {
    modelValue: function(val) {
      this.value = val
    },
    filterText: function(val) {
      if (val) {
        const list = this.iconList
        this.iconList = list.filter((item) => item.indexOf(val) !== -1)
      } else {
        this.iconList = svgIcons
      }
    }
  },
  mounted() {
    this._updateW()
    this.$nextTick(() => {
      on(document, 'mouseup', this._popoverHideFun)
    })
  },
  beforeUnmount() {
    off(document, 'mouseup', this._popoverHideFun)
  },
  methods: {
    selectedIcon(item) {
      this.visible = false
      this.value = item
      this._emitFun()
    },
    // 更新宽度
    _updateW() {
      this.$nextTick(() => {
        this.width = this.$refs.input.$el.getBoundingClientRect().width
      })
    },
    // 显示弹出框的时候容错，查看是否和el宽度一致
    _popoverShowFun() {
      this._updateW()
    },
    // 点击控件外，判断是否隐藏弹出框
    _popoverHideFun(e) {
      const isInter = e.path.some(list => {
        const name = list.className
        return name && typeof (name) === 'string' && (name.indexOf('fas-icon-list') !== -1 || name.indexOf('fas-icon-input') !== -1)
      })
      if (!isInter) {
        this.visible = false
      }
    },
    // 判断类型，抛出当前选中id
    _emitFun() {
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.fas-icon-input {
  margin-bottom: 5px;
}
.el-popover.el-popper {
  padding: 0;
}
.fas-icon-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    width: 100%;
    height: 15px;
    margin: 5px 1px;
    &:hover {
      background-color: #1f2d3d;
    }
  }
}
</style>
