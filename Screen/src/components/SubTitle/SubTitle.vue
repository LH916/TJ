<template>
  <div class="sub-title">
    {{ titleText }}
    <div class="right-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "SubTitle",
  props: {
    width: {
      type: Number,
      default: 315
    },
    titleText: {
      type: String,
      default: '默认标题'
    }
  },
  setup(props) {
    const self = reactive({})
    return {
      props
    }
  }
}
</script>

<style scoped lang="scss">
.sub-title {
  @include boxWidth(v-bind("props.width"));
  background: url("~@/assets/images/基础/tiltle2_bg@2x.png") no-repeat;
  background-size: 100% 100%;
  @include wHeight(17.63);
  @include PaddingLeft(23.07);
  box-sizing: border-box;
  @include LineHeight(18);
  color: #BAE3FF;
  @include FontSize(18);
  text-shadow: 0 3px 4px #002440;
  display: flex;

  .right-box {
    margin-left: auto;
    position: relative;
    bottom: 80%;
  }
}
</style>