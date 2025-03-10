<template>
  <div class="left-container">
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <Box width="360" height="245">
        <SubTitle title-text="站场事故统计"></SubTitle>
        <V3Echarts :options="option3" height="190" />
      </Box>
      <Box width="360" height="245">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <V3Echarts :options="option2" height="200" />
      </Box>
    </div>
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <Box width="360" height="245">
        <SubTitle title-text="站场事故类型分析"></SubTitle>
        <V3Echarts :options="option1" height="180" />
      </Box>
      <Box width="360" height="245">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <V3Echarts :options="option6" height="180" />
      </Box>
    </div>
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <Box width="360" height="280">
        <SubTitle title-text="站场事故地点"></SubTitle>
        <V3Echarts :options="option4" height="230" />
      </Box>
      <Box width="360" height="280">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <V3Echarts :options="option5" height="250" />
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import LeaseTitle from '@/components/Lease_title/index.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import { option5, option1, option2, option3, option4,option6 } from './chartOpt/index'
import { startMarquee } from '@/utils'
import Box from '@/components/Box/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'

export default defineComponent({
  components: { LeaseTitle, Box, SubTitle, V3Echarts },
  name: 'index',
  setup() {
    const tableStatusList = [
      {
        color: '#41A5A0',
        label: '畅通',
      },
      {
        color: '#FFCE7F',
        label: '缓行',
      },
      {
        color: '#FF8A95',
        label: '拥堵',
      },
    ]
    const self = reactive({
      option1: option1(),
      option5,
      option2: option2(),
      option3: option3(),
      option4: option4(),
      option6:option6(),
      List: [
        {
          name: '雨量预警',
          num: 3,
        },
        {
          name: '设备预警',
          num: 2,
        },
        {
          name: '水位预警',
          num: 1,
        },
        {
          name: '雨量预警',
          num: 3,
        },
        {
          name: '设备预警',
          num: 3,
        },
        {
          name: '水位预警',
          num: 2,
        },
        {
          name: '雨量预警',
          num: 1,
        },
        {
          name: '设备预警',
          num: 3,
        },
      ],
      tableList: [
        {
          id: 1,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 1,
        },
        {
          id: 2,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 0,
        },
        {
          id: 3,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 2,
        },
        {
          id: 4,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 1,
        },
        {
          id: 5,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 0,
        },
        {
          id: 6,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 1,
        },
        {
          id: 7,
          name: '2022-08-10 10:00',
          time: '60min',
          local: '新兴路-西大街',
          status: 0,
        },
      ],
      progressLegend: [
        {
          title: '站场秩序',
          color: '#FFCE7F',
        },
        {
          title: '施工管理',
          color: '#FFFFFF',
        },
        {
          title: '突发事件',
          color: '#63B8FB',
        },
        {
          title: '站场环境',
          color: '#DD9D6A',
        },
        {
          title: '站场设施',
          color: '#41A5A0',
        },
      ],
    })
    onMounted(() => {})

    return {
      ...toRefs(self),
      tableStatusList,
    }
  },
})
</script>

<style scoped lang="scss">
.left-container {
  .row-content {
    display: flex;
  }
}
</style>
