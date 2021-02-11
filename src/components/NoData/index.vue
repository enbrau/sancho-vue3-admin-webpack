<template>
  <div
    class="ark-nodata"
    :v-bind="$attrs"
  >
    <div class="ark-nodata-icon">
      <slot name="image">
        <svg-icon icon-class="empty" />
      </slot>
    </div>
    <div class="ark-nodata-text">
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
    </div>
    <div class="ark-nodata-button">
      <slot name="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ark-nodata {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 0;
  width: 100%;
}
.ark-nodata-icon {
  font-size: 72px;
  color: #EFEFEF;
}
.ark-nodata-text {
  margin-top: 20px;
  p {
    margin: 0;
    font-size: 14px;
    color: #909399;
  }
}
</style>
