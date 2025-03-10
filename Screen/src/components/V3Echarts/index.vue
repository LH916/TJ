<!--
 * @Author: your name
 * @Date: 2022-02-25 05:56:18
 * @LastEditTime: 2022-05-25 12:45:49
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\V3Echarts\index.vue
-->
<template>
  <div class="container" :id="container" ref="chartRef"></div>
</template>

<script lang="ts" setup>
import {
  markRaw,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from "vue";
import * as charts from "echarts";
// export default defineComponent({
const props = defineProps({
  options: {
    type: Object,
    require: true,
  },
  width: {
    type: Number,
    require: false,
  },
  height: {
    type: Number,
    default: 200,
  },
  top: {
    type: Number,
    default: 0,
  },
  isFirst: {
    type: Boolean,
    default: false,
  },
  container: {
    type: String,
    default: "container",
  },
});
const chartRef = ref();
const Aecharts: any = reactive({ value: "" });
const emit = defineEmits(["value"]);
const value = () => {
  // return  Aecharts.value;
  emit("value", Aecharts.value);
};
onMounted(() => {
  // setInterval(() => {
  //   let op = reactive({ value: document.getElementById(props.container) });
  //   if (op.value) {
  //     Aecharts.value = markRaw(charts.init(op.value));
  //   }
  //   Aecharts.value.setOption(props.options);
  //   console.log("changes");
  //   console.log(props.options);
  // }, 5000);
});

const changeEcharts = (options: any) => {
  Aecharts.value.setOption(options);
  value();
  if (props.isFirst) {
    let index = 0;
    Aecharts.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 0,
    });
    Aecharts.value.on("mouseover", (e: any) => {
      if (e.dataIndex !== index) {
        Aecharts.value.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
      } else {
        Aecharts.value.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });
      }
    });
    Aecharts.value.on("mouseout", (e: any) => {
      index = e.dataIndex;
      Aecharts.value.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e.dataIndex,
      });
    });
  }
};

watch(
  () => props.options,
  (newval) => {
    changeEcharts(newval);
  },
  {
    deep: true,
  }
);

watch(
  () => props.container,
  (newval) => {
    nextTick(() => {
      if (chartRef.value) {
        Aecharts.value = markRaw(charts.init(chartRef.value));
      }
      changeEcharts(props.options);
    });
  },
  {
    // deep: true,
    immediate: true,
  }
);
const Resize = () => {
  Aecharts.value.resize();
};
onMounted(() => {
  window.addEventListener("resize", Resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", Resize);
});
</script>

<style lang="scss" scoped>
.container {
  @include boxWidth(v-bind("props.width"));

  @include boxhHeight(v-bind("props.height"));

  @include boxMarginTop(v-bind("props.top"));
  //   background: #000;
  @include BorderRadius(8);
}
</style>
