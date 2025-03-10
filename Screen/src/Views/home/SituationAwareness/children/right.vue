<!--
 * @Author: 张祥 17839092765@163.com
 * @Date: 2022-05-25 11:17:57
 * @LastEditors: 张祥 17839092765@163.com
 * @LastEditTime: 2022-05-25 14:53:56
 * @FilePath: \20220510_CGSY_FREEDO_SZ_MLSZHCSdemo\src\Views\home\SituationAwareness\children\right.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- right -->
<template>
  <Lease_title imgSrc="icon_warning@2x.png"
    >信息概览
    <template v-slot:slot-bottom>Integrated warning message</template>
  </Lease_title>
  <div class="cum">
    <SubTitle title-text="项目集成管理"></SubTitle>
    <div class="topview">
      <Box :width="350" :height="220">
        <V3Echarts :options="option2()" :height="200" />
      </Box>
      <Box :width="350" :height="220">
        <V3Echarts :options="option3()" :height="200" />
      </Box>
    </div>
  </div>
  <div class="cum">
    <SubTitle title-text="数据互联感知"></SubTitle>
    <div class="topview">
      <Box :width="350" :height="200">
        <V3Echarts @value="value1" :options="option4" :height="200" />
      </Box>
      <Box :width="350" :height="200">
        <V3Echarts @value="value2" :options="option5" :height="200" />
      </Box>
    </div>
  </div>
  <div class="cum">
    <SubTitle title-text="异常告警"></SubTitle>
    <div class="topview">
      <Box :width="350" :height="200">
        <V3Echarts :options="option6" :height="200" />
      </Box>
      <Box :width="350" :height="200">
        <div class="row-content">
          <div class="traffic-data">
            <div class="row">
              <div class="traffic-item">
                <IconBox width="50" height="50">
                  <img src="@/assets/images/home/icon_alarm@2x.png" />
                </IconBox>
                <div class="traffic-content">
                  <div class="label">告警设备数</div>
                  <div class="value">
                    68
                    <div class="suffix">个</div>
                  </div>
                </div>
              </div>
              <div class="traffic-item">
                <IconBox width="50" height="50">
                  <img src="@/assets/images/home/icon_accident@2x.png" />
                </IconBox>
                <div class="traffic-content">
                  <div class="label">类别4</div>
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
      </Box>
    </div>
    <div class="topview">
      <Box :width="350" :height="200">
        <V3Echarts :options="option6" :height="200" />
      </Box>
      <Box :width="350" :height="200">
        <div class="row-content">
          <div class="traffic-data">
            <div class="row">
              <div class="traffic-item">
                <IconBox width="50" height="50">
                  <img src="@/assets/images/home/icon_things@2x.png" />
                </IconBox>
                <div class="traffic-content">
                  <div class="label">异常设备数</div>
                  <div class="value">
                    212
                    <div class="suffix">个</div>
                  </div>
                </div>
              </div>
              <div class="traffic-item">
                <IconBox width="50" height="50">
                  <img src="@/assets/images/home/icon_accident@2x.png" />
                </IconBox>
                <div class="traffic-content">
                  <div class="label">类别4</div>
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
      </Box>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import { option2, option3, option4, option5, option6 } from "./echartopiton";
import SubTitle from "@/components/SubTitle/SubTitle.vue";
import Box from "@/components/Box/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import Equi_list from "./equi_list.vue";
import { onMounted, onUnmounted, ref } from "vue";
import IconBox from "../../../../components/IconBox/index.vue";
const option4_ref = ref();
const option5_ref = ref();
const value1 = (e: any) => {
  option4_ref.value = e;
};
const value2 = (e: any) => {
  option5_ref.value = e;
};
const timer1 = ref();
const timer2 = ref();
onMounted(() => {
  const app = {
    currentIndex: -1,
  };
  timer1.value = setInterval(function () {
    // console.log(1);

    const dataLen = option4.series[0].data.length;

    // 取消之前高亮的图形
    option4_ref.value.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    option4_ref.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    option4_ref.value.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: app.currentIndex,
    });
  }, 2000);
  const app2 = {
    currentIndex: -1,
  };
  timer2.value = setInterval(function () {
    const dataLen = option4.series[0].data.length;

    // 取消之前高亮的图形
    option5_ref.value.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: app2.currentIndex,
    });
    app2.currentIndex = (app2.currentIndex + 1) % dataLen;
    //console.log(app2.currentIndex);
    // 高亮当前图形
    option5_ref.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: app2.currentIndex,
    });
    // 显示 tooltip
    option5_ref.value.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: app2.currentIndex,
    });
  }, 2000);
});
onUnmounted(() => {
  clearInterval(timer1.value);
  clearInterval(timer2.value);
});
</script>
<style lang="scss" scoped>
.cum {
  .topview {
    display: flex;
  }
}
.row-content {
  display: flex;
  height: 100%;

  video {
    @include Width(360);
    @include hHeight(200);
  }
}
.traffic-data {
  @include Padding(16, 0, 0, 0);
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
  .row {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
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
        @include MarginLeft(8);

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
</style>
