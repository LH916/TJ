<template>

  <LeaseTitle>水位数据</LeaseTitle>
  <V3Echarts :options="option1" :height="280"/>
  <LeaseTitle>
    降雨统计
  </LeaseTitle>
  <V3Echarts :options="option5" :height="280"/>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  onBeforeUnmount,
  computed,
} from "vue";
import {useAirCityStore} from "@/stores/aircity";
import V3Echarts from '@/components/V3Echarts/index.vue'
import {option1, option5} from "@/Views/home/IntelligentSecurity/equa/Right/chartOpt";

export default defineComponent({
  name: "",
  components: {V3Echarts},
  setup(props, content) {
    const self = reactive({});


    const AirCityStore = useAirCityStore();
    const treeInfo: any = computed(() => AirCityStore.$state?.TreeInfo);
    const handleAlertListClick = async () => {
    };


    return {
      ...toRefs(self),
      option1,
      option5,
      handleAlertListClick,
    };
  },
});
</script>
<style lang="scss" scoped>


</style>