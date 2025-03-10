<template>
  <div class="left-container">
    <LeaseTitle imgSrc="icon_warning@2x.png"
    >站场治理
      <template v-slot:slot-bottom>Integrated warning message</template>
    </LeaseTitle>
    <div class="row-content">
      <Box height="285">
        <SubTitle title-text="事件总数"/>
        <div class="total-events">
          <IconBox/>
          <div class="event-num">3580 <span>件</span></div>
          <div class="compare-box">
            <div class="row">同比 <span class="red">2.3%</span></div>
            <div class="row">环比 <span class="green">5%</span></div>
          </div>
        </div>
        <SubTitle title-text="事件办结分析"/>
        <div class="event-progress-bar">
          <div class="progress-item">
            <div class="progress">
              <span class="title">占比</span>
              <div class="value">45%</div>
            </div>
            <div class="progress-right">
              <div class="title">未办结</div>
              <div class="value">145</div>
              <span class="suffix-bg">件</span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress">
              <span class="title">占比</span>
              <div class="value">55%</div>
            </div>
            <div class="progress-right">
              <div class="title">已办结</div>
              <div class="value">165</div>
              <span class="suffix-bg">件</span>
            </div>
          </div>
        </div>

      </Box>
      <Box height="285">
        <SubTitle title-text="事件智能办结率"/>
        <div class="total-events">
          <IconBox>
            <img src="@/assets/images/home/icon_thingsucces@2x.png">
          </IconBox>
          <div class="event-num">3580 <span>件</span></div>
          <div class="compare-box">
            <div class="row">同比 <span class="red">2.3%</span></div>
            <div class="row">环比 <span class="green">5%</span></div>
          </div>
        </div>

        <SubTitle title-text="高发事件类型占比"/>
        <div class="event-progress-bar">
          <div class="progress-item tops-event">
            <div class="progress">
              <div class="title">占比</div>
              <div class="value">55%</div>
            </div>
            <div class="progress-legend">
              <div class="legend-item" v-for="(item,index) in progressLegend" :key="index">
                <span :style="'background-color:'+item.color"></span>
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>

      </Box>
    </div>
    <LeaseTitle>站场运行</LeaseTitle>
    <div class="row-content">
      <Box height="220" width="420">
        <SubTitle title-text="站场数据感知"/>
        <div class="traffic-data">
          <div class="row">
            <div class="traffic-item">
              <IconBox width="34" height="34">
                <img src="@/assets/images/home/icon_traffic@2x.png">
              </IconBox>
              <div class="traffic-content">
                <div class="label">站场运营指数</div>
                <div class="value">3.3</div>
              </div>
            </div>
            <div class="traffic-item">
              <IconBox width="34" height="34">
                <img src="@/assets/images/home/icon_stuck@2x.png">
              </IconBox>
              <div class="traffic-content">
                <div class="label">管道建设里程</div>
                <div class="value">
                  4.5
                  <div class="suffix">km</div>
                </div>

              </div>
            </div>
          </div>
          <div class="row">
            <div class="traffic-item">
              <IconBox width="34" height="34">
                <img src="@/assets/images/home/icon_stuckcount@2x.png">
              </IconBox>
              <div class="traffic-content">
                <div class="label">站场建设总数</div>
                <div class="value">32
                  <div class="suffix">个</div>
                </div>

              </div>
            </div>
            <div class="traffic-item">
              <IconBox width="34" height="34">
                <img src="@/assets/images/home/icon_stucktime@2x.png">
              </IconBox>
              <div class="traffic-content">
                <div class="label">平均运行时长</div>
                <div class="value">
                  90
                  <div class="suffix">min</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box height="220">
        <SubTitle title-text="站场设备分析"/>
        <div class="table-box">
          <div class="table-head">
            <div class="head-item">设备检测时间</div>
            <div class="head-item">设备名称</div>
            <!--          <div class="head-item">起飞</div>-->
            <div class="head-item">运行时长</div>
            <div class="head-item">等级</div>
          </div>
          <div class="table-body">
            <div class="table-body-warp1">
              <div
                  :class="['row', item.status == 1 ? '' : 'error']"
                  style="color: #ffffffdd"
                  v-for="(item, index) in tableList"
                  :key="index"
              >
                <div class="col">{{ item.name }}</div>
                <div class="col">{{ item.local }}</div>
                <div class="col">{{ item.time }}</div>
                <div class="col" :style="`color:${tableStatusList[item.status].color}`">
                  {{ tableStatusList[item.status].label }}
                </div>
                <!--          <div class="col">离线</div>-->
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
    <LeaseTitle>联动指挥
      <template v-slot:right-box>
        <div></div>
      </template>
    </LeaseTitle>
    <div class="row-content">
      <Box width="400">
        <sub-title title-text="救援力量分析"/>
        <div class="analysis-box">
          <div class="analysis-row">
            <div class="analysis-item">
              <div class="label">
                救援队伍
                <div class="suffix">队</div>
              </div>
              <div class="value">
                10
              </div>
            </div>
            <div class="analysis-item">
              <div class="label">
                避难场所
                <div class="suffix">处</div>
              </div>
              <div class="value">
                10
              </div>
            </div>
          </div>
          <div class="analysis-row">
            <div class="analysis-item">
              <div class="label">
                应急物资
                <div class="suffix">件</div>
              </div>
              <div class="value">
                350
              </div>
            </div>
            <div class="analysis-item">
              <div class="label">
                专家队伍
                <div class="suffix">队</div>
              </div>
              <div class="value">
                350
              </div>
            </div>
          </div>
        </div>

        <sub-title title-text="风险预警分析"/>
        <div class="analysis-box">
          <div class="analysis-row">
            <div class="analysis-item">
              <div class="label">
                风险隐患
                <div class="suffix">件</div>
              </div>
              <div class="value">
                10
              </div>
            </div>
            <div class="analysis-item">
              <div class="label">
                防护目标
                <div class="suffix">件</div>
              </div>
              <div class="value">
                350
              </div>
            </div>
          </div>

        </div>
      </Box>
      <Box>
        <sub-title title-text="设备异常分布">
          <SwitchBox width="120" height="28" :switch-list="['本日','本周']"/>
        </sub-title>
        <V3Echarts :options="option" height="250"/>
      </Box>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue'
import LeaseTitle from '@/components/Lease_title/index.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import {option} from './chartOpt/index'
import {startMarquee} from '@/utils'
import Box from '@/components/Box/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'
import IconBox from '@/components/IconBox/index.vue'
import SwitchBox from '@/components/Switch/index.vue'

export default defineComponent({
  components: {LeaseTitle, Box, SubTitle, IconBox, SwitchBox, V3Echarts},
  name: 'index',
  setup() {
    const tableStatusList = [
      {
        color: '#41A5A0',
        label: '畅通'
      }, {
        color: '#FFCE7F',
        label: '缓行'
      }, {
        color: '#FF8A95',
        label: '拥堵'
      }
    ]
    const self = reactive({
      option,
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
      tableList: [{
        id: 1,
        name: "2024-08-10 10:00",
        time: "60min",
        local: "BOG压缩机",
        status: 1,
      },
        {
          id: 2,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "LNG储罐",
          status: 0,
        },
        {
          id: 3,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "再冷凝器",
          status: 2,
        },
        {
          id: 4,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "缓冲罐",
          status: 1,
        },
        {
          id: 5,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "压力表",
          status: 0,
        },
        {
          id: 6,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "温湿度传感器",
          status: 1,
        },
        {
          id: 7,
          name: "2024-08-10 10:00",
          time: "60min",
          local: "开关面板",
          status: 0,
        }],
      progressLegend: [
        {
          title: '站场秩序',
          color: '#FFCE7F'
        }, {
          title: '施工管理',
          color: '#FFFFFF'
        }, {
          title: '突发事件',
          color: '#63B8FB'
        }, {
          title: '站场环境',
          color: '#DD9D6A'
        }, {
          title: '站场设施',
          color: '#41A5A0'
        }
      ]
    })
    onMounted(() => {
      startMarquee('table-body-warp1', '.row')
    })

    return {
      ...toRefs(self),
      tableStatusList
    }
  },
})
</script>

<style scoped lang="scss">
.left-container {

  .row-content {
    display: flex;

    .total-events {
      display: flex;
      @include Width(315);
      @include Padding(16, 0, 21, 17);

      .event-num {
        @include FontSize(40);
        color: #FFCE7F;
        font-family: Tencent, serif;
        @include MarginLeft(12);

        span {
          color: #93C0EC;
          @include FontSize(14);
          font-family: Oppo, serif;
        }
      }

      .compare-box {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        justify-content: center;


        .row {
          display: flex;
          flex: 1;
          @include LineHeight(21);

          text-align: right;
          @include FontSize(14);
          color: #CDE6FF;
          @include MarginBottom(5);

          &:last-child {
            margin-bottom: 0;
          }

          span {
            @include FontSize(18);
            width: 3em;
            font-family: Tencent, serif;
            @include LineHeight(16);
          }

          .red {
            color: #FF8080;
          }

          .green {
            color: #05B0AD;
          }
        }
      }
    }

    .event-progress-bar {
      @include Padding(27, 0, 0, 0);
      display: flex;

      .progress-item {
        display: flex;

        .progress {
          background: url("~@/assets/images/home/chart/综合态势_icon_安防@2x.png") no-repeat;
          background-size: 100% 100%;
          @include Width(78);
          @include wHeight(78);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #FFFFFF;
          @include MarginRight(15);

          .title {
            @include FontSize(14);

          }

          .value {
            @include FontSize(24);
            font-family: Tencent, serif;
          }
        }

        .progress-right {
          text-align: center;

          .value {
            font-family: Tencent, serif;
            @include FontSize(36);
            @include LineHeight(36);
          }

          .suffix-bg {
            position: relative;
            @include Top(5);

            &::after {
              content: '';
              position: absolute;
              background: url("~@/assets/images/home/flat_bg_s_5@2x.png") no-repeat;
              background-size: 100% 100%;
              @include Width(67.5);
              @include wHeight(5);
              left: 50%;
              top: 100%;
              transform: translateX(-50%);
            }
          }
        }
      }

      .progress-item:last-child {
        @include MarginLeft(31);

        .progress {
          background: url("~@/assets/images/home/chart/综合态势_icon_安防@2x(1).png") no-repeat;
          background-size: 100% 100%;
        }
      }

      .progress-item.tops-event {
        display: flex;


        .progress {
          background: url("~@/assets/images/home/chart/icon_car_outsiade@2x.png") no-repeat;
          background-size: 100% 100%;
          @include MarginRight(34);
        }


        .progress-legend {
          display: flex;
          flex-wrap: wrap;
          @include Width(176.5);
          @include hHeight(90);

          @include MarginTop(-5);


          .legend-item {
            @include Width(176/2);
            display: flex;
            align-items: center;
            font-family: Oppo, serif;
            @include FontSize(14);

            span {
              @include wHeight(11);
              @include Width(3);
              display: block;
              @include MarginRight(9.5);
            }
          }
        }
      }

    }

    .traffic-data {
      @include Padding(16, 0, 0, 17);

      .row {
        display: flex;

        .traffic-item {
          display: flex;
          @include MarginRight(27);

          .traffic-content {
            display: flex;
            flex-direction: column;
            @include MarginLeft(11);

            .label {
              @include FontSize(16);
              color: #BFDBFF;
              @include MarginBottom(10);
            }

            .value {
              @include FontSize(40);
              color: #FFCE7F;
              display: flex;

              .suffix {
                @include FontSize(16);
                justify-self: flex-end;
                align-self: flex-end;
              }
            }
          }
        }

        .traffic-item:first-child {
          @include MarginBottom(25);
        }
      }
    }

    .table-box {
      width: 100%;
      @include wHeight(145);
      display: flex;
      flex-direction: column;
      @include FontSize(14);
      box-sizing: border-box;
      @include Padding(0, 11, 0, 0);
      @include MarginBottom(30);
      @include MarginTop(17);

      .table-head {
        @include wHeight(28);
        display: flex;
        background: #0A3F78;
        @include LineHeight(28);
        //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .head-item {
          //flex: 1;
          text-align: center;

          &:first-child {
            @include Width(115);
          }

          &:nth-child(2) {
            @include Width(91);
          }

          &:nth-child(3) {
            @include Width(61);
          }

          &:nth-child(4) {
            @include Width(31);
          }
        }
      }

      .table-body {
        flex: 1;
        overflow-y: hidden;
        //@include wHeight(252);
        @include FontSize(13);

        .row {
          display: flex;
          width: 100%;
          @include Padding(6.5, 0, 6.5, 0);
          box-sizing: border-box;

          .col {
            //flex: 1;
            text-align: center;
            @include FontSize(12);

            &:first-child {
              @include Width(115);
            }

            &:nth-child(2) {
              @include Width(91);
            }

            &:nth-child(3) {
              @include Width(61);
            }

            &:nth-child(4) {
              @include Width(31);
            }
          }

          &:nth-child(even) {
            // background: #ffffff20;
            // color: burlywood;
            background: #233247;
          }
        }

        .error {
          //background: rgba(255, 130, 82, 0.1);
        }
      }
    }

    .analysis-box {
      @include Padding(19, 0, 0, 18);

      .analysis-row {
        display: flex;
        @include MarginBottom(20);

        .analysis-item {
          display: flex;
          position: relative;
          @include Width(150);
          @include wHeight(49);

          @include MarginRight(36);

          &:nth-child(even) {
            @include MarginRight(0);
          }

          &::after {
            content: '';
            background: url("~@/assets/images/home/flat_bg_s_6@2x.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            bottom: 0;
            width: 100%;
            @include wHeight(6);
          }

          .label {
            display: flex;
            flex-direction: column;
            color: #FFFFFF;
            @include FontSize(14);

            .suffix {
              color: #93C0EC;
              @include MarginTop(8);
            }
          }

          .value {
            @include FontSize(36);
            margin-left: auto;
            font-family: Tencent, serif;
            @include MarginBottom(5);
            background-image: -webkit-linear-gradient(top, #FFFFFF, #86C1FF);
            -webkit-background-clip: text;

            -webkit-text-fill-color: transparent;
          }
        }

      }
    }

  }
}
</style>
