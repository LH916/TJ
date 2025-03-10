<!--
 * @Author: your name
 * @Date: 2022-03-27 02:12:19
 * @LastEditTime: 2022-04-07 20:14:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\Views\home\EmergencyManagement\index.vue
-->
<!-- Emergency management 应急管理 -->
<template>
  <div class="emergency-management">
    <Left_box>
      <Box class="lbox1" :height="70">
        <p>
          <span> 疏散人员: </span>
          <span> 1563 </span>
        </p>
      </Box>
      <Lease_title>人员配置</Lease_title>
      <Box :height="270">
        <V3Echarts
          :height="260"
          :options="Option1"
          container="emergencylbox1"
        ></V3Echarts
      ></Box>
      <Lease_title>外围等待人员集聚数</Lease_title>
      <Box :height="270">
        <V3Echarts
          :height="270"
          :options="Option2()"
          container="emergencylbox2"
        ></V3Echarts>
      </Box>
      <LeaseTitle
        >报警汇总
        <template v-slot:slot-bottom>Alarm collection</template>
      </LeaseTitle>
      <div class="table-box">
        <div class="table-head">
          <div class="head-item">报警名称</div>
          <div class="head-item">发生时间</div>
          <!--          <div class="head-item">起飞</div>-->
          <div class="head-item">时间</div>
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
    </Left_box>
    <Right_box>
      <Lease_title>驻留人员</Lease_title>
      <Box :height="300">
        <V3Echarts
          :height="300"
          :options="Option3()"
          container="emergencyrbox1"
        ></V3Echarts>
      </Box>
      <Lease_title>出口实时通行人数</Lease_title>

      <Box :height="250">
        <V3Echarts
          :height="250"
          :options="Option4()"
          container="emergencyrbox2"
        ></V3Echarts>
      </Box>
      <Lease_title>出行累计通行人数</Lease_title>
      <Box :height="250">
        <V3Echarts
          :height="250"
          :options="Option5()"
          container="emergencyrbox3"
        ></V3Echarts>
      </Box>
    </Right_box>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Lease_title from "@/components/Lease_title/index.vue";
// import { ref } from "vue";
import Right_box from "@/components/right_box.vue";
import Box from "@/components/Box/index.vue";
import { Option1, Option2, Option3, Option4, Option5 } from "./echartsoptions";
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { startMarquee } from "@/utils";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { AddPolyline } from "./Add3d";
import { useAirCityStore } from "@/stores/aircity";
import { useToolsStore } from "@/stores/tools";
import { computed } from "@vue/reactivity";
const AirCityStore: any = useAirCityStore();
const ToolsStore: any = useToolsStore();
const List = ref([
  {
    name: "跑道入侵",
    leave: 3,
    time: "10:20",
    local: "A跑道",
  },
  {
    name: "跑道有异物",
    leave: 2,
    time: "20:20",
    local: "A跑道",
  },
  {
    name: "跑道有异物",
    leave: 1,
    time: "8:10",
    local: "A跑道",
  },
  {
    name: "跑道入侵",
    leave: 3,
    time: "9:20",
    local: "B跑道",
  },
  {
    name: "跑道入侵",
    leave: 3,
    time: "10:20",
    local: "A跑道",
  },
  {
    name: "跑道有异物",
    leave: 2,
    time: "20:20",
    local: "A跑道",
  },
  {
    name: "跑道有异物",
    leave: 1,
    time: "8:10",
    local: "A跑道",
  },
  {
    name: "跑道入侵",
    leave: 3,
    time: "9:20",
    local: "B跑道",
  },
]);
const HuoId = ref("");
const Dianti = ref("");
const IsStopRun = computed(() => ToolsStore.$state.Buildinfo.IsStopRun);
const IsOpen = computed(() => ToolsStore.$state.Buildinfo.IsOpen);
watch(
  () => IsStopRun.value && IsOpen.value,
  () => {
    ToolsStore.$state.Buildinfo.clickfoolr(1, true);

    __g.camera.set(393.048906, 947.58625, 126.136953, -36.460564, -2.771973, 3);
    AddPolyline(true);
  }
);
onMounted(async () => {
  AirCityStore.$state.TreeInfo.forEach((item: { name: string; iD: string }) => {
    if (item.name === "火焰粒子") {
      HuoId.value = item.iD;
    }
    if (item.name === "电梯") {
      Dianti.value = item.iD;
    }
  });
  ToolsStore.$state.Buildinfo.open();
  __g.camera.set(520.152891, 995.751504, 43.312158, -38.655552, -21.250198, 1);
  // setTimeout(() => {

  // }, 1500);
  __g.infoTree.show(HuoId.value);
  __g.infoTree.hide(Dianti.value);
  nextTick(() => {
    startMarquee("table-body-warp2", ".row2");
  });
});
onUnmounted(() => {
  __g.infoTree.hide(HuoId.value);
  __g.infoTree.show(Dianti.value);

  AddPolyline(false);
  ToolsStore.$state.Buildinfo.close();
});
</script>
<style lang="scss" scoped>
.lbox1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    width: 100%;
    @include hHeight(40);
    @include LineHeight(40);
    @include FontSize(18);
    text-indent: 2em;
    span:nth-of-type(2) {
      display: inline-block;
      color: rgb(58, 158, 172);
      font-family: Tencent;
      @include FontSize(24);
      @include LineHeight(40);
      font-weight: 600;
    }
  }
}
.table-box {
  width: 100%;
  @include hHeight(200);
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

    .row2 {
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
</style>
