<!--
 * @Author: your name
 * @Date: 2022-04-01 10:21:30
 * @LastEditTime: 2022-04-01 10:52:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\components\tools\skybox.vue
-->

<!-- skybox -->
<template>
  <div class="skybox">
    <div
      @click="ChangeSkyBox(item)"
      class="box"
      v-for="(item, index) in status"
      :key="index"
    >
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="item.name"
        placement="bottom"
      >
        <Icon :font-size="26" :icon="item.icon" />
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BPFunction } from "@/utils/BPFunction";
import { ref } from "vue";
import Icon from "../Icon/index.vue";

// 日夜景切换
const status = ref([
  {
    name: "日景",
    icon: "taiyang",
    key: 6,
  },
  {
    name: "黄昏",
    icon: "huanghunbeifen",
    key: 2,
  },

  {
    name: "傍晚",
    icon: "bangwan-copy",
    key: 4,
  },
  {
    name: "夜晚",
    icon: "yejing",
    key: 1,
  },
  {
    name: "其他",
    icon: "qita",
    key: 5,
  },
  {
    name: "其他",
    icon: "qita",
    key: 3,
  },
  {
    name: "其他",
    icon: "qita",
    key: 7,
  },
]);
const ChangeSkyBox = (val: any) => {
  BPFunction(val.key);
};
</script>
<style lang="scss" scoped>
.skybox {
  position: absolute;
  @include Width(300);
  @include hHeight(50);
  @include Top(80);
  @include Right(50);

  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  //   background: rgb(0, 0, 0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box {
    @include Width(50);
    @include hHeight(50);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
