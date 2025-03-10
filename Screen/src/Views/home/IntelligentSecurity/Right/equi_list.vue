<template>
  <div class="table-box">
    <div class="table-head">
      <div class="head-item">发生时间</div>
      <div class="head-item">路段名称</div>
      <!--          <div class="head-item">起飞</div>-->
      <div class="head-item">拥堵时长</div>
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
          <div
            class="col"
            :style="`color:${tableStatusList[item.status].color}`"
          >
            {{ tableStatusList[item.status].label }}
          </div>
          <!--          <div class="col">离线</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs } from "vue";
import { startMarquee } from "@/utils";

const tableList = [
  {
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
        }
];
const tableStatusList = [
  {
    color: "#41A5A0",
    label: "畅通",
  },
  {
    color: "#FFCE7F",
    label: "缓行",
  },
  {
    color: "#FF8A95",
    label: "拥堵",
  },
];
onMounted(() => {
  startMarquee("table-body-warp1", ".row", 15, 500);
});
</script>

<style lang="scss" scoped>
.table-box {
  width: 100%;
  @include wHeight(175);
  display: flex;
  flex-direction: column;
  @include FontSize(14);
  box-sizing: border-box;
  @include Padding(0, 11, 10, 0);
  // @include MarginBottom(30);
  @include MarginTop(17);

  .table-head {
    @include wHeight(28);
    display: flex;
    background: #0a3f78;
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
</style>
