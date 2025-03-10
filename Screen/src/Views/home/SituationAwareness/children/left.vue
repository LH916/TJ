<!--
 * @Author: 张祥 17839092765@163.com
 * @Date: 2022-05-25 10:03:05
 * @LastEditors: 张祥 17839092765@163.com
 * @LastEditTime: 2022-05-25 17:25:45
 * @FilePath: \20220510_CGSY_FREEDO_SZ_MLSZHCSdemo\src\Views\home\SituationAwareness\children\left.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <Lease_title imgSrc="icon_warning@2x.png"
    >设备概览
    <template v-slot:slot-bottom>Integrated warning message</template>
  </Lease_title>
  <Box :width="700" :height="280">
    <SubTitle title-text="设备生命周期管理"></SubTitle>
    <V3Echarts :options="option1()" :height="240" />
  </Box>
  <Box :width="700" :height="140">
    <SubTitle title-text="设备类别管理"></SubTitle>
    <div class="row-content">
      <div class="traffic-data">
        <div class="row">
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_things@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">类别1</div>
              <div class="value">
                212
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="41" height="41">
              <img src="@/assets/images/home/icon_health@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">类别2</div>
              <div class="value">
                135
                <div class="suffix">个</div>
              </div>
            </div>
          </div>

          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_alarm@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">类别3</div>
              <div class="value">
                68
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
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
  <Box :width="700" :height="550">
    <SubTitle title-text="设备列表"></SubTitle>
    <Equi_list />
  </Box>
</template>

<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import { option1 } from "./echartopiton";
import SubTitle from "@/components/SubTitle/SubTitle.vue";
import Box from "@/components/Box/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import Equi_list from "./equi_list.vue";
import IconBox from "../../../../components/IconBox/index.vue";
</script>
<style lang="scss" scoped>
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
  img {
    width: 100%;
  }
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
