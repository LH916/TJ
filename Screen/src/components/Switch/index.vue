<template>
  <div class="switch-box">
    <div class="switch-item" :class="{'switch-active':index===switchedIndex}"
         @click="handleSwitchChange(index)" v-for="(item,index ) in switchList" :key="index">{{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";


export default defineComponent({
  name: "index",
  props: {
    switchList: {
      type: Array,
      default: () => ['本月', '本年']
    },
    width: {
      type: [Number, String],
      default: (99 * 2)
    }
  },
  setup(props, context) {
    const self = reactive({
      switchedIndex: 0
    })
    const handleSwitchChange = (index: number) => {
      self.switchedIndex = index
      context.emit('switchChange', index)
    }
    return {
      ...toRefs(self), handleSwitchChange,
      props
    }
  }
})
</script>

<style scoped lang="scss">
.switch-box {
  display: flex;
  @include boxWidth(v-bind('props.width'));
  @include wHeight(28);

  .switch-item {
    flex: 1;
    background: #0E213D;
    //border: 1px solid #4F698B;
    @include Border(1, solid, #4F698B);
    //border-radius: 1px;
    @include BorderRadius(1);
    text-align: center;
    @include LineHeight(28);
    transition: all .3s;
    @include FontSize(16);
    color: #FFFFFF;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(136, 200, 255, 0.50);
    cursor: pointer;
  }

  .switch-active {
    background: #08335F;
    @include Border(1, solid, #7095F8);
    box-shadow: inset 0 0 10px 0 #1A67A5;
    //border-radius: 1px;
    @include BorderRadius(1);
    box-sizing: border-box;
  }
}
</style>