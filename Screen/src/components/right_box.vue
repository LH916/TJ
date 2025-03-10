<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-05-25 17:26:27
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\right_box.vue
-->
<!-- right_box -->
<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInRight "
    leave-active-class="animate__animated animate__faster animate__fadeOutRight "
  >
    <div v-if="animate" class="right_box">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useAnimateStore } from "@/stores/animate";
import { computed } from "vue";

const animatestore = useAnimateStore();
const animate = computed(() => animatestore.$state.Animate);
</script>

<style lang="scss" scoped>
.right_box {
  position: absolute;
  // width: 350px;
  @include Width(1042);

  // height: calc(100% - 60px);
  // @include hHeightCalc(65);
  height: 100%;
  // pointer-events: none;

  // background: rgba(18, 123, 131, 0.911);
  // top: 30px;
  @include Top(0);
  @include Right(0);

  z-index: 10;
  background: url("../assets/images/one/右侧面板-黑透@2x.png") no-repeat
    center/cover;
  @include Padding(110, 51, 40, 253);
  box-sizing: border-box;
  pointer-events: none;
  .content {
    width: 100%;
    height: 100%;
    // border: 1px solid rgba(255, 255, 255, 0.527);
  }
}
</style>
