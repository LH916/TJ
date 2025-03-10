<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-05-25 17:26:21
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\left_box.vue
-->
<!-- left_box -->
<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInLeft "
    leave-active-class="animate__animated animate__faster animate__fadeOutLeft "
  >
    <div v-if="animate" class="left_box">
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
.left_box {
  position: absolute;
  @include Width(1042);
  height: 100%;
  background: url("~@/assets/images/one/左侧面板-黑透@2x.png") no-repeat;
  background-size: 100% 100%;
  @include Top(0);
  @include Left(0);
  box-sizing: border-box;

  //background: url("../assets/images/基础/left_bg@2x.png") no-repeat center/cover;
  @include Padding(110, 268, 40, 36);
  z-index: 10;
  pointer-events: none;
  .content {
    width: 100%;
    height: 100%;
    // border: 1px solid rgba(255, 255, 255, 0.527);
    box-sizing: border-box;
    position: relative;
  }
}
</style>
