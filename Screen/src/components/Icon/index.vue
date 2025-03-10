<template>
  <i v-if="isElementUiIcon" :class="iconName"> </i>
  <span :title="title" v-else>
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </span>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref, toRefs, watchEffect,} from "vue";

export default defineComponent({
  name: "icon",
  props: ["title", "icon", "fontSize", "color"],
  setup(props: { icon: string | string[] }) {
    const _this = reactive({
      iconName: computed(() => {
        if (props.icon.includes("el-icon")) {
          return props.icon;
        }
        return `#icon-${props.icon}`;
      }),
    });

    const isElementUiIcon = ref(false);
    watchEffect(() => {
      isElementUiIcon.value = _this.iconName.includes("el-icon");
    });

    return {
      ...toRefs(_this),
      isElementUiIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
i {
  font-size: calc(1vw * #{$heightRatio} * v-bind(fontSize));
  color: v-bind(color);
}

span {
  // font-size: 16px;
  font-size: calc(1vw * #{$heightRatio} * v-bind(fontSize));
  color: v-bind(color);
  transition: color 0.3s;
  display: flex;
  align-items: center;
}

.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
</style>
