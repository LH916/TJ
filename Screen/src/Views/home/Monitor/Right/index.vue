<template>
  <div class="right-container">
    <LeaseTitle>站场运营</LeaseTitle>
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
      <Box width="360" height="187">
        <SubTitle title-text="天然气零售总额" />
        <V3Echarts :options="option" height="150" />
      </Box>
      <Box width="360" height="187">
        <SubTitle title-text="进出口总额" />
        <V3Echarts :options="option2" height="150" />
      </Box>
    </div>
    <LeaseTitle>站场环保</LeaseTitle>
    <div class="row-content">
      <Box width="360" height="220">
        <SubTitle title-text="本月AQI变化趋势" />
        <V3Echarts :options="option3" height="180" />
      </Box>
      <Box width="360" height="220">
        <SubTitle title-text="站场环保排查月历" />
        <V3Echarts :options="option4" height="180" />
      </Box>
    </div>
    <LeaseTitle>站场安全</LeaseTitle>

    <div class="row-content">
      <div class="traffic-data">
        <div class="row">
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_things@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">事件总数</div>
              <div class="value">
                56
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="41" height="41">
              <img src="@/assets/images/home/icon_health@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">站场事件数</div>
              <div class="value">
                48
                <div class="suffix">个</div>
              </div>
            </div>
          </div>

          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_alarm@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">设备异常总数</div>
              <div class="value">
                2
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
          <div class="traffic-item">
            <IconBox width="34" height="34">
              <img src="@/assets/images/home/icon_accident@2x.png" />
            </IconBox>
            <div class="traffic-content">
              <div class="label">站场安全事故数</div>
              <div class="value">
                10
                <div class="suffix">个</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-content">
      <Box width="360" height="245">
        <SubTitle title-text="站场安全事件类型分析"></SubTitle>
        <V3Echarts :options="option6" height="180" />
      </Box>
      <Box width="360" height="245">
        <SubTitle title-text="事故造成直接损失统计"></SubTitle>
        <V3Echarts :options="option5" height="180" />
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import LeaseTitle from "@/components/Lease_title/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import {
  option,
  option2,
  option3,
  option4,
  option5,
  option6,
} from "./chartOpt";
import Box from "@/components/Box/index.vue";
import IconBox from "@/components/IconBox/index.vue";
import SubTitle from "@/components/SubTitle/SubTitle.vue";

export default defineComponent({
  name: "index",
  components: { LeaseTitle, V3Echarts, IconBox, SubTitle, Box },
  setup() {
    const self = reactive({
      List: [
        {
          name: "监测点A",
          leave: 3,
          local: "A区",
        },
        {
          name: "监测点B",
          leave: 2,
          local: "A区",
        },
        {
          name: "监测点C",
          leave: 1,
          local: "A区",
        },
        {
          name: "监测点D",
          leave: 3,
          local: "B区",
        },
        {
          name: "监测点E",
          leave: 3,
          local: "A区",
        },
        {
          name: "监测点F",
          leave: 2,
          local: "A区",
        },
        {
          name: "监测点G",
          leave: 1,
          local: "A区",
        },
        {
          name: "监测点H",
          leave: 3,
          local: "B区",
        },
      ],
    });
    onMounted(() => {});
    const focusPoi = (e: any) => {
      if (e.target.innerText === "查看") {
        __g.marker.focus(e.target.dataset.poi, 50, 0.5);
      }

      // __g.marker3d.focus(id)
    };
    return {
      option,
      option2,
      option3,
      option4,
      option5,
      option6,
      ...toRefs(self),
      focusPoi,
    };
  },
});
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
  }

  .row-content:nth-last-child(2) {
    .traffic-data {
      .row {
        .traffic-item {
          .traffic-content {
            .label {
              width: 8em;
            }
          }
        }
      }
    }
  }
}
</style>
