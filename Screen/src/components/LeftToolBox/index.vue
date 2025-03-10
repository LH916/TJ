<template>
  <div class="left-tool-box" ref="LeftToolBox">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";

export default defineComponent({
  name: "index",
  setup() {
    const LeftToolBox = ref()
    onMounted(() => {
      setTimeout(() => {
        document.querySelector('.left_box>.content')?.appendChild(LeftToolBox.value)
      }, 500)
    })
    onBeforeUnmount(() => {
      document.querySelector('.left_box>.content')?.removeChild(LeftToolBox.value)
    })
    return {
      LeftToolBox
    }
  }
})
</script>

<style scoped lang="scss">
.left-tool-box {
  position: absolute;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;

  width: 46px;
  @include Padding(10, 0, 10, 0);
}
</style>