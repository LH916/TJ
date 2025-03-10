<template>
  <div class="sub-title-reverse">
    {{ titleText }}
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "SubTitleReverse",
  props: {
    width: {
      type: Number,
      default: 181
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
.sub-title-reverse {
  @include boxWidth(v-bind("props.width"));
  background: url("~@/assets/images/基础/二级标题/小标题_右w180@2x.png") no-repeat;
  background-size: 100% 100%;
  @include wHeight(24);
  @include PaddingRight(26.51);
  box-sizing: border-box;
  @include LineHeight(18);
  color: #fff;
  text-align: right;
  @include FontSize(16);

}
</style>