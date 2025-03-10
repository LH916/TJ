<!--
 * @Author: your name
 * @Date: 2022-04-07 17:44:17
 * @LastEditTime: 2022-04-07 19:49:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\components\tools\build.vue
-->
<!-- 楼宇拆解 -->
<template>
  <div class="build">
    <div v-if="buildClass" class="top">
      <div
          :style="{ color: buildClass.IsOpen ? 'aquamarine' : '#fff' }"
          @click="Open"
          class="open"
      >
        开启
      </div>
      <div
          v-if="buildClass && buildClass.IsOpen"
          :style="{ color: !buildClass.IsOpen ? 'aquamarine' : '#fff' }"
          @click="Close"
          class="close"
      >
        关闭
      </div>
    </div>
    <div v-if="buildClass && buildClass.IsOpen" class="bottom">
      <div
          :style="{ color: Foolr === 1 ? 'aquamarine' : '#fff' }"
          @click="Clickfoolr(1, true)"
      >
        1F
      </div>
      <div
          :style="{ color: Foolr === 2 ? 'aquamarine' : '#fff' }"
          @click="Clickfoolr(2, true)"
      >
        2F
      </div>
      <div
          :style="{ color: Foolr === 3 ? 'aquamarine' : '#fff' }"
          @click="Clickfoolr(3, true)"
      >
        3F
      </div>
      <div
          :style="{ color: Foolr === 4 ? 'aquamarine' : '#fff' }"
          @click="Clickfoolr(4, true)"
      >
        顶层
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAirCityStore} from "@/stores/aircity";
import {useToolsStore} from "@/stores/tools";
import {BuildByTiler} from "@/utils/buildByTiler";
import {computed, onMounted, ref} from "vue";

const buildClass = ref(new BuildByTiler());
const Foolr = ref(0);
const AirCityStore = useAirCityStore();
const Infotree = computed(() => AirCityStore.$state.TreeInfo);
const ToolsStore = useToolsStore();
onMounted(() => {
  buildClass.value.init(["L01", "1L", "2L", "3L"].reverse());
  ToolsStore.SetBuildinfo(buildClass.value);
  //   Infotree.value.forEach((Litem: any) => {
  //     if (item.name === "照明灯光") {
  //       LightId.value = item.iD;
  //     }
  //     if (item.name === "照明") {
  //       zhaomingId.value = item.iD;
  //     }
  //     if (item.name === "粒子特效") {
  //       LiZiId.value = item.iD;
  //     }
  //   });
});
const Open = async () => {
  //   __g.infoTree.hide(LightId.value);
  //   __g.infoTree.hide(LiZiId.value);
  //   __g.infoTree.hide(zhaomingId.value);

  //   console.log(Props.isshow);

  //   BuildByTiler("open");
  //   Props.isshow(false);
  //   await __g.camera.set(
  //     375.506409,
  //     -590.457825,
  //     516.756592,
  //     -13.833544,
  //     -67.236168,
  //     0.5
  //   );
  // buildClass.value.open();
  //   setTimeout(() => {
  //   }, 1000);
};
const Close = () => {
  //   BuildByTiler("close");
  //   __g.infoTree.show(LiZiId.value);

  //   __g.infoTree.show(LightId.value);
  //   __g.infoTree.show(zhaomingId.value);
  //   AddCtag_BuildFoolr(1, false);

  //   Props.isshow(true);
  Foolr.value = 0;

  //   __g.camera.set(
  //     1124.638184,
  //     -404.905151,
  //     723.247009,
  //     -35.728352,
  //     -116.648041,
  //     0.5
  //   );
  buildClass.value.close();
  //   setTimeout(() => {
  //   }, 1000);
};
const Clickfoolr = (val: number, bol: boolean) => {
  //   AddCtag_BuildFoolr(1, false);
  Foolr.value = val;
  switch (val) {
    case 1:
      //   __g.camera.set(
      //     929.415283,
      //     2.824766,
      //     124.819931,
      //     -24.346373,
      //     -117.190086,
      //     0.5
      //   );
      //   AddCtag_BuildFoolr(1, true);
      break;
    case 2:
      //   __g.camera.set(
      //     938.749512,
      //     -33.411327,
      //     314.960297,
      //     -48.021999,
      //     -117.801308,
      //     0.5
      //   );
      //   AddCtag_BuildFoolr(2, true);

      break;
    case 3:
      //   __g.camera.set(
      //     972.711426,
      //     -110.039452,
      //     421.115814,
      //     -37.999992,
      //     -115.999939,
      //     0.5
      //   );
      break;
    case 4:
      //   __g.camera.set(
      //     771.558777,
      //     206.416321,
      //     1605.567505,
      //     -76.080704,
      //     -116.192741,
      //     0.5
      //   );
      break;

    default:
      break;
  }
  setTimeout(() => {
    buildClass.value.clickfoolr(val, bol);
  }, 500);
};
</script>
<style lang="scss" scoped>
.build {
  @include Width(100);
  //   @include hHeight(400);
  @include BorderRadius(8);
  @include FontSize(14);
  background: linear-gradient(
          360deg,
          rgba(14, 26, 42, 0.4) 0%,
          rgba(14, 26, 42, 0.8) 100%
  );
  z-index: 100;
  border: 1px solid rgba(122, 250, 254, 0.562);
  position: absolute;
  @include Bottom(150);
  @include Left(462);
  transform: translateX(0) !important;

  .top {
    @include Width(50);
    margin: 0 auto;

    > div {
      @include Width(50);
      @include hHeight(30);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .bottom {
    @include Width(50);
    margin: 0 auto;
    @include BorderTop(1, solid, rgba(255, 255, 255, 0.76));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      @include Width(100);
      @include hHeight(30);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      //   color: aquamarine;
    }
  }
}
</style>
