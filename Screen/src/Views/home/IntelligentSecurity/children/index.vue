<!--
 * @Author: your name
 * @Date: 2022-04-06 10:17:52
 * @LastEditTime: 2022-04-06 16:15:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\Views\home\IntelligentSecurity\children\index.vue
-->
<!--  -->
<template>
  <Left_box>
    <Lease_title>设备分析</Lease_title>
    <Box :height="250">
      <V3Echarts
        :height="250"
        :options="Option2()"
        container="IntelligentSecuritylbox1"
      ></V3Echarts>
    </Box>
    <Lease_title>会议室使用记录</Lease_title>
    <Box :height="300">
      <div class="table-box">
        <div class="table-head">
          <div class="head-item">名称</div>
          <div class="head-item">使用时间</div>
          <!--          <div class="head-item">起飞</div>-->
          <div class="head-item">结束时间</div>
          <div class="head-item">事件等级</div>
        </div>
        <div class="table-body">
          <div class="table-body-warp2">
            <div
              class="row2"
              style="color: #ffffffdd"
              v-for="(item, index) in List"
              :key="index"
            >
              <div class="col">{{ item.name }}</div>
              <div class="col">{{ item.local }}</div>
              <div class="col">{{ item.time }}</div>
              <div class="col">{{ item.leave > 1 ? "一般" : "严重" }}</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
    <Lease_title>会议室预约</Lease_title>
    <Box :height="250">
      <div class="table-box">
        <div class="table-head">
          <div class="head-item">名称</div>
          <div class="head-item">使用时间</div>
          <!--          <div class="head-item">起飞</div>-->
          <div class="head-item">结束时间</div>
          <div class="head-item">事件等级</div>
        </div>
        <div class="table-body">
          <div class="table-body-warp3">
            <div
              class="row3"
              style="color: #ffffffdd"
              v-for="(item, index) in List"
              :key="index"
            >
              <div class="col">{{ item.name }}</div>
              <div class="col">{{ item.local }}</div>
              <div class="col">{{ item.time }}</div>
              <div class="col">{{ item.leave > 1 ? "一般" : "严重" }}</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  </Left_box>
  <Right_box>
    <Lease_title>设备状态</Lease_title>
    <Box class="rbox1" :height="300">
      <div v-for="(item, index) in DJJList" :key="index" class="djj">
        <div class="top">
          <div class="left">
            <Icon
              :color="item.status ? '#fff' : 'red'"
              font-size="50"
              icon="duijiangji"
            ></Icon>
          </div>
          <div class="right">
            <p>
              {{ item.name }}
            </p>
            <div class="go">
              <Icon
                :color="item.status ? '#fff' : 'red'"
                font-size="20"
                icon="maikefeng"
              ></Icon>
              对讲
            </div>
          </div>
        </div>
        <div class="bottom">
          <Icon color="#fff" font-size="12" icon="locus"></Icon>
          <span> 轨迹 </span>
          <span> 查看 > </span>
        </div>
      </div>
    </Box>
    <Lease_title>中转台信息</Lease_title>
    <Box :height="250">
      <Rotation3D />
    </Box>
    <Lease_title>安全度检测</Lease_title>
    <Box :height="250">
      <V3Echarts
        :height="250"
        :options="Option1()"
        container="IntelligentSecurityrbox3"
      ></V3Echarts
    ></Box>
  </Right_box>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Lease_title from "@/components/Lease_title/index.vue";
import Box from "@/components/Box/index.vue";
import { nextTick, onMounted, ref } from "vue";
import { startMarquee } from "@/utils";
import Rotation3D from "./rotation3D.vue";
import Icon from "@/components/Icon/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { Option1, Option2 } from "./echartsoption";
const List = ref([
  {
    name: "----",
    leave: 3,
    time: "10:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 2,
    time: "20:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 1,
    time: "8:10",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "10:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 2,
    time: "20:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 1,
    time: "8:10",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
  {
    name: "----",
    leave: 3,
    time: "9:20",
    local: "00:00",
  },
]);
const DJJList = ref([
  {
    name: "安保部001",
    status: true,
    data: [],
  },
  {
    name: "安保部002",
    status: false,
    data: [],
  },
  {
    name: "工程部001",
    status: true,
    data: [],
  },
  {
    name: "工程部002",
    status: true,
    data: [],
  },
  {
    name: "客服部001",
    status: true,
    data: [],
  },
  {
    name: "客服部002",
    status: true,
    data: [],
  },
]);
onMounted(() => {
  nextTick(() => {
    startMarquee("table-body-warp2", ".row2");
    startMarquee("table-body-warp3", ".row3");
  });
});
</script>
<style lang="scss" scoped>
.table-box {
  width: 100%;
  @include hHeight(280);
  display: flex;
  flex-direction: column;
  @include FontSize(14);
  box-sizing: border-box;
  @include Padding(25, 40, 0, 40);
  box-sizing: border-box;

  .table-head {
    height: 2em;
    display: flex;
    background: #ffffff30;
    line-height: 2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .head-item {
      flex: 1;
      text-align: center;
    }
  }

  .table-body {
    flex: 1;
    overflow-y: hidden;
    //@include wHeight(252);

    .row2,
    .row3 {
      display: flex;
      width: 100%;
      @include Padding(10, 0, 10, 0);
      box-sizing: border-box;

      .col {
        flex: 1;
        text-align: center;
      }

      &:nth-child(even) {
        background: #ffffff20;
        // color: burlywood;
      }
    }
  }
}
.rbox1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  .djj {
    @include Width(120);
    @include MarginBottom(10);
    border: 1px solid rgba(255, 255, 255, 0.527);
    border-radius: 10%;
    @include Padding(5, 5, 5, 5);

    .top {
      @include Width(110);

      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        @include Width(35);
        // background: #415d85;
      }
      .right {
        @include Width(75);
        @include Padding(0, 1, 0, 0);

        @include FontSize(12);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .go {
          border: 1px solid #fff;
          border-radius: 15%;
          @include FontSize(12);
          @include MarginTop(20);
          @include Padding(2, 2, 2, 2);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .bottom {
      @include hHeight(30);
      @include FontSize(12);
      @include Padding(0, 2, 0, 2);
      @include MarginTop(10);

      display: flex;
      justify-content: flex-start;
      align-items: center;
      span:nth-of-type(3) {
        display: inline-block;
        @include MarginLeft(28);
      }
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.644);
      }
    }
  }
}
</style>
