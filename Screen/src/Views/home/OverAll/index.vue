<!--
 * @Author: your name
 * @Date: 2022-03-28 16:38:12
 * @LastEditTime: 2022-05-25 16:03:44
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\Views\OverAll\index.vue
-->
<!-- OverAll -->
<template>
  <div id="overall">
    <Left_box>
      <Left />
    </Left_box>
    <Right_box>
      <Right />
    </Right_box>
    <div
      @click="Addrandom"
      :class="isactive ? 'addmarker isactive' : 'addmarker'"
    >
      <BuildOutlined />
      <span> 批量显隐 </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Left from "./Left/index.vue";
import Right from "./Right/index.vue";
import { onMounted, onUnmounted, reactive, Ref, ref } from "vue";
import { getIdByName, waitFor } from '@/utils'
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import { BuildOutlined } from "@ant-design/icons-vue";
import { AnimationType, playInitAnimation } from "@/utils/animation";
const isactive = ref(false);
const Ids = ref();
const Addrandom = () => {
  if (!isactive.value) {
    if (Ids.value) {
      __g.marker.show(Ids.value);
    } else {
      AddMarker(true);
    }
    isactive.value = true;
  } else {
    if (!Ids.value) {
      AddMarker(false);
    } else {
      __g.marker.hide(Ids.value);
    }
    isactive.value = false;
  }
};
const AddMarker = (boolean: boolean) => {
  if (boolean) {
    const rood = GetrandomMarker();
    // console.log(rood);
    const idS: Array<any> = [];
    const Ms = rood.map((item, index) => {
      idS.push(`plxy${index}`);
      return {
        id: `plxy${index}`,
        coordinate: item, //坐标位置
        coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        range: [0, 1000000], //可视范围
        GroupID: "areaId",
        anchors: [-(108 / 2.5), 142 / 2.5],
        // imagePath: window.location.origin + "/img/markerTag.png", //显示图片路径
        imagePath: window.location.origin + "/img/重点项目.png", //显示图片路径

        imageSize: [108 / 2.5, 142 / 2.5], //图片的尺寸
        text: `poi${index}`, //显示的文字
        useTextAnimation: true, //打开文字展开动画效果
        textRange: [0, 4000], //文本可视范围[近裁距离, 远裁距离]
        textBackgroundColor: [0, 0, 0, 0.5], //文本背景颜色
        fontSize: 13, //字体大小
        textOffset: [0, -15], // 文本偏移
        showLine: false,
        autoHeight: false,
        fontColor: Color.White, //字体颜色
        // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
        displayMode: 2, //显示模式
        occlusionCull: false,
      };
    });
    Ids.value = idS;
    __g.marker.add(Ms);
  } else {
    __g.marker.clear();
  }
};
// 随机添加5000个点位
const GetrandomMarker = () => {
  let x: any;
  let y: any;
  let arr: Array<any>;
  const Arrdata: Ref<Array<any>> = ref([]);
  for (let i = 0; i < 5000; i++) {
    x = 633524 + Math.round(Math.random() * 20000);
    y = 2690308 + Math.round(Math.random() * 20000);
    arr = [x, y, 1434.3453369140625];
    Arrdata.value.push(arr);
  }
  return Arrdata.value;
};
onMounted(async() => {
  __g.camera.set(
    644392.332813,
    2700469.775469,
    1510.866875,
    -4.185847,
    -141.170761,
    1.5
  );
            await waitFor(2000)
            playInitAnimation(AnimationType.sthj)
            await waitFor(500)
            await __g.camera.stopAnimation()
});
</script>
<style lang="scss" scoped>
@keyframes fidein {
  0% {
    background: #000000;
    position: absolute;
  }
  50% {
    background: #00000070;
  }
  100% {
    background: #00000000;
    position: static;
  }
}

#overall {
  width: 100%;
  height: 100%;
  //   background: #000000;
  //   transition: all 2s;
  // animation: fidein 4s ease-in-out forwards;
  .addmarker {
    position: absolute;
    @include Width(150);
    @include wHeight(60);
    background: rgba(0, 0, 0, 0.404);
    @include Right(800);
    @include Bottom(100);
    z-index: 10;
    @include FontSize(20);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    border-radius: 5%;
    > span {
      @include MarginRight(5);
    }
    &.isactive {
      > span {
        color: aquamarine;
      }
    }
  }
}
</style>
