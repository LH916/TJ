<template>
  <div class="right-container">
    <LeaseTitle icon="tingchechang">巡检分类
      <template v-slot:slot-bottom>Parking management</template>

    </LeaseTitle>
    <div class="row-content">
      <div class="traffic-data">
        <div class="row">
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_things@2x.png">
            </IconBox>
            <div class="traffic-content">
              <div class="label">正常巡检</div>
              <div class="value">
                212
                <div class="suffix">个</div>
              </div>

            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="41" height="41">
              <img src="@/assets/images/home/icon_health@2x.png">
            </IconBox>
            <div class="traffic-content">
              <div class="label">道路巡检</div>
              <div class="value">135
                <div class="suffix">个</div>
              </div>
            </div>
          </div>

          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_alarm@2x.png">
            </IconBox>
            <div class="traffic-content">
              <div class="label">故障巡视</div>
              <div class="value">68
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_accident@2x.png">
            </IconBox>
            <div class="traffic-content">
              <div class="label">夜间巡视</div>
              <div class="value">
                56
                <div class="suffix">个</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!--      <Box width="360" height="220">-->
      <!--        &lt;!&ndash;        <V3Echarts :options="option6" height="180"/>&ndash;&gt;-->
      <!--      </Box>-->
    </div>
    <div class="row-content">
      <Box width="360" height="250">
        <SubTitle title-text="工单完成率"></SubTitle>
        <V3Echarts :options="option" height="280"/>
      </Box>
      <Box width="360" height="250">
        <SubTitle title-text="巡检现场视频"></SubTitle>
        <video src="/video/xunjian.mp4" muted autoplay loop></video>
      </Box>
    </div>

    <!--    <SubTitle title-text="工单完成率"></SubTitle>-->
    <LeaseTitle>巡检养护计划
      <template v-slot:slot-bottom>Alarm collection</template>
    </LeaseTitle>
    <div class="row-content">
      <Box width="700" height="200">
        <v3-echarts :options="option7()" height="180"/>
      </Box>
    </div>

    <LeaseTitle class="title-box">巡检问题趋势
      <template v-slot:slot-bottom>
        Personnel statistics
      </template>
      <template v-slot:right-box>
        <div></div>
      </template>
    </LeaseTitle>
    <div class="row-content">
      <Box width="360">
        <v3-echarts :options="option8()"/>
      </Box>
      <Box width="360" height="250">
        <!--        <SubTitle title-text="工单完成率"></SubTitle>-->
        <div class="table-box">
          <div class="table-head">
            <div class="head-item">设备检测时间</div>
            <div class="head-item">设备名称</div>
            <!--          <div class="head-item">起飞</div>-->
            <div class="head-item">上报人</div>
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
        <!--        <V3Echarts :options="option" height="280"/>-->
      </Box>
    </div>
    <!--    <V3Echarts :options="option5" height="305"/>-->
  </div>

</template>

<script>
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import LeaseTitle from '@/components/Lease_title'
import V3Echarts from '@/components/V3Echarts'
import {option1, option2, option5, option, option6, option7, option8} from "./chartOpt";
import {getIdByName, startMarquee} from "@/utils";
import {
  defaultMakerOpt,
  defaultMarker3DOpt,
  pollutionArea1,
  pollutionArea2,
  pollutionArea3,
  pollutionArea4, pollutionSourcePoint
} from "@/Views/home/OverAll/Left/airCityOpt";
import _ from "lodash";
import HeadBar from "@/components/headBar";

import Box from '@/components/Box/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'
import IconBox from '@/components/IconBox/index.vue'

export default defineComponent({
  name: "index",
  components: {LeaseTitle, V3Echarts, IconBox, Box, SubTitle},
  setup() {
    const self = reactive({

      tableList: [
        {
          id: 1,
          name: "2022-08-10 10:00",
          time: "王大伟",
          local: "BOG压缩机",
          status: 1,
        },
        {
          id: 2,
          name: "2022-08-10 10:00",
          time: "刘思佳",
          local: "LNG储罐",
          status: 0,
        },
        {
          id: 3,
          name: "2022-08-10 10:00",
          time: "樊伟伟",
          local: "再冷凝器",
          status: 2,
        },
        {
          id: 4,
          name: "2022-08-10 10:00",
          time: "曹恩迪",
          local: "缓冲罐",
          status: 1,
        },
        {
          id: 5,
          name: "2022-08-10 10:00",
          time: "高小军",
          local: "压力表",
          status: 0,
        },
        {
          id: 6,
          name: "2022-08-10 10:00",
          time: "王德军",
          local: "温湿度传感器",
          status: 1,
        },
        {
          id: 7,
          name: "2022-08-10 10:00",
          time: "冯伟",
          local: "开关面板",
          status: 0,
        }],
    })
    const tableStatusList = [
      {
        color: '#41A5A0',
        label: '一般'
      }, {
        color: '#FFCE7F',
        label: '警告'
      }, {
        color: '#FF8A95',
        label: '严重'
      }
    ]
    onMounted(() => {
      startMarquee("table-body-warp1", ".row1");
    })
    return {
      option1, option2, option5, option, option6, tableStatusList, option7, option8,
      ...toRefs(self)
    }
  }
})
</script>

<style scoped lang="scss">
.right-container {
  .table-box {
    width: 100%;
    @include wHeight(190);
    display: flex;
    flex-direction: column;
    @include FontSize(14);
    box-sizing: border-box;
    @include Padding(0, 11, 0, 0);
    @include MarginBottom(30);
    @include MarginTop(0);

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

  //.table-box {
  //  width: 100%;
  //  @include hHeight(260);
  //  display: flex;
  //  flex-direction: column;
  //  @include FontSize(14);
  //  box-sizing: border-box;
  //  @include Padding(25, 40, 0, 40);
  //  box-sizing: border-box;
  //
  //  .table-head {
  //    height: 2em;
  //    display: flex;
  //    background: #ffffff30;
  //    line-height: 2em;
  //    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  //
  //    .head-item {
  //      flex: 1;
  //      text-align: center;
  //    }
  //  }
  //
  //  .table-body {
  //    flex: 1;
  //    overflow-y: hidden;
  //    //@include wHeight(252);
  //
  //    .row2 {
  //      display: flex;
  //      width: 100%;
  //      @include Padding(10, 0, 10, 0);
  //      box-sizing: border-box;
  //
  //
  //      .col {
  //        flex: 1;
  //        text-align: center;
  //      }
  //
  //      &:nth-child(even) {
  //        background: #ffffff20;
  //        // color: burlywood;
  //      }
  //    }
  //  }
  //}

  .title-box {
    @include MarginTop(25);
  }

  .row-content {
    display: flex;

    video {
      @include Width(360);
      @include hHeight(200);
    }
  }

  .traffic-data {
    @include Padding(16, 0, 0, 0);
    width: 100%;

    .row {
      display: flex;

      .traffic-item {
        display: flex;
        @include MarginRight(29);
        flex: 1;

        &:last-child {
          margin-right: 0;
        }

        .traffic-content {
          display: flex;
          flex-direction: column;
          @include MarginLeft(11);

          .label {
            @include FontSize(14);
            color: #FFFFFF;
            @include MarginBottom(5);

          }

          .value {
            @include FontSize(26);
            color: #FFCE7F;
            display: flex;
            font-family: Tencent, serif;


            .suffix {
              @include FontSize(16);
              justify-self: flex-end;
              align-self: flex-end;
              color: #93C0EC;
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
}

.top-box {
  @include Padding(0, 15, 0, 15);
  box-sizing: border-box;
  @include hHeight(200)
}
</style>