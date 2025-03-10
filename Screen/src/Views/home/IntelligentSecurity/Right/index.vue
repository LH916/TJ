<template>
  <div class="right-container">
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <div class="traffic-data">
        <div class="row">
          <div class="traffic-item">
            <IconBox width="41" height="41">
              <img src="@/assets/images/home/icon_gdp@2x.png" />
            </IconBox>
            <div class="traffic-content">
               <div class="label">GDP总额</div>
              <div class="value">
                1
                <div class="suffix">亿元</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_income@2x.png" />
            </IconBox>
            <div class="traffic-content">
             <div class="label">站场均收入</div>
              <div class="value">
                1000
                <div class="suffix">万元</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_traffic@2x.png" />
            </IconBox>
            <div class="traffic-content">
             <div class="label">站场设备投入</div>
              <div class="value">
                500
                <div class="suffix">万元</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_stuck@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">站场运营收入</div>
              <div class="value">
                2
                <div class="suffix">亿元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-content">
      <Box width="360" height="245">
        <SubTitle title-text="站场事件类型分析"></SubTitle>
        <equi_list />
      </Box>
      <Box width="360" height="245">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <V3Echarts :options="option2" height="180" />
      </Box>
    </div>
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <Box width="720" height="245">
        <SubTitle title-text="站场事件类型分析"></SubTitle>
        <V3Echarts :options="option6" height="200" />
      </Box>
    </div>
    <LeaseTitle>站场安全</LeaseTitle>
    <div class="row-content">
      <Box width="360" height="245">
        <SubTitle title-text="站场事件类型分析"></SubTitle>
        <V3Echarts :options="option3" height="180" />
      </Box>
      <Box width="360" height="245">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <video src="/video/test.mp4" autoplay loop muted></video>
        <!-- <V3Echarts :options="option5" height="180" /> -->
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import LeaseTitle from '@/components/Lease_title/index.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import { option1, option2, option6, option3 } from './chartOpt/index'
import Box from '@/components/Box/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'
import equi_list from './equi_list.vue'
import IconBox from '@/components/IconBox/index.vue'

export default defineComponent({
  components: { LeaseTitle, Box, SubTitle, V3Echarts, equi_list, IconBox },
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
      option2: option2(),
      option6: option6(),
      option3: option3(),
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
          title: '街面秩序',
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
          title: '市容环境',
          color: '#DD9D6A',
        },
        {
          title: '宣传广告',
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
.right-container {
  .row-content {
    display: flex;
    .traffic-data {
      @include Padding(16, 0, 0, 0);
      width: 100%;

      .row {
        display: flex;

        .traffic-item {
          display: flex;
          @include MarginRight(29);

          &:last-child {
            margin-right: 0;
          }

          .traffic-content {
            display: flex;
            flex-direction: column;
            @include MarginLeft(11);

            .label {
              @include FontSize(14);
              color: #ffffff;
              @include MarginBottom(5);
            }

            .value {
              @include FontSize(26);
              color: #ffce7f;
              display: flex;
              font-family: Tencent, serif;

              .suffix {
                @include FontSize(16);
                justify-self: flex-end;
                align-self: flex-end;
                color: #93c0ec;
                @include MarginLeft(12.7);
                font-family: Oppo, serif;
              }
            }
          }
        }

        .traffic-item:first-child {
          @include MarginBottom(25);
        }
      }
    }
    video{
      @include Width(360);
      @include hHeight(180);
      object-fit: fill;
      @include MarginTop(10);
    }
  }
}
</style>
