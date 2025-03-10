<!--
 * @Author: 张祥 17839092765@163.com
 * @Date: 2022-05-24 22:02:03
 * @LastEditors: 张祥 17839092765@163.com
 * @LastEditTime: 2022-05-26 03:56:59
 * @FilePath: \20220510_CGSY_FREEDO_SZ_MLSZHCSdemo\src\Views\home\SituationAwareness\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- situation awareness -->
<template>
  <div class="situationawareness">
    <Left_box>
      <Left />
    </Left_box>
    <Right_box>
      <Right />
    </Right_box>
    <div class="tools">
      <div class="top">
        <div
          @click="toolclick(item)"
          v-for="item in btnlist[0]"
          :key="item.key"
          :class="active === item.key ? 'tool active' : 'tool'"
        >
          <div class="tooltop">{{ item.name }}</div>
          <div class="toolbottom">
            <IconBox width="34" height="34">
              <img src="./设备.png" alt="" />
            </IconBox>
            <span> 设备数 </span>
            <span> {{ item.num }} </span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div
          @click="toolclick(item)"
          v-for="item in btnlist[1]"
          :key="item.key"
          :class="active === item.key ? 'tool active' : 'tool'"
        >
          <div class="tooltop">{{ item.name }}</div>
          <div class="toolbottom">
            <IconBox width="34" height="34">
              <img src="./设备.png" alt="" />
            </IconBox>
            <span> 设备数 </span>
            <span> {{ item.num }} </span>
          </div>
        </div>
      </div>
    </div>
    <div @click="back" v-if="active" class="back">
      <img src="./返回.png" alt="" />
    </div>
    <div v-if="active" class="legends">
      <div v-for="item in 3" :key="item" class="legend">
        <a-switch
          v-model:checked="checked[item - 1]"
          :checked-children="'类型' + item"
          :un-checked-children="'类型' + item"
          @change="change"
        />
      </div>
    </div>
    <Dialog
      v-if="
        groupId == 'SituationAwareness_6' || groupId == 'SituationAwareness_2'
      "
    >
      <div class="content">
        <video src="/video/xunjian.mp4" autoplay muted loop></video>
      </div>
    </Dialog>

    <Dialog
      v-if="
        groupId == 'SituationAwareness_1' || groupId == 'SituationAwareness_3'
      "
      title="详细信息"
      :width="450"
      class="birefDialog"
    >
      <div class="content">
        <img src="./电表.webp" alt="" />
        <div class="info">
          <p>名称：电表设备1</p>
          <p>所在区域：区域一</p>
          <p>月用电量：275(kW·h)</p>
          <p>今日用电量：19(kW·h)</p>
        </div>
      </div>
    </Dialog>
    <Dialog
      v-if="
        groupId == 'SituationAwareness_4' || groupId == 'SituationAwareness_5'
      "
      title="水表"
      :width="450"
      class="birefDialog"
    >
      <div class="content">
        <img src="./水表.webp" alt="" />
        <div class="info">
          <p>名称：水表设备1</p>
          <p>所在区域：区域一</p>
          <p>月用水量：103(吨))</p>
          <p>今日用水量：5(吨)</p>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Lease_title from "@/components/Lease_title/index.vue";
import Left from "./children/left.vue";
import Right from "./children/right.vue";
import { onMounted, onUnmounted, Ref, ref } from "vue";
import IconBox from "../../../components/IconBox/index.vue";
import { useDialogStore } from "@/stores/dialog";
import { computed } from "@vue/reactivity";
import Dialog from "@/components/Dialog/index.vue";
import { AnimationType, playInitAnimation } from "@/utils/animation";
const dialogStore = useDialogStore();
const groupId = computed(() => dialogStore.$state.tag);

const btnlist = ref([
  [
    {
      name: "启动区",
      num: 1000,
      key: 1,
    },
    {
      name: "起步区",
      num: 1500,
      key: 2,
    },
  ],
  [
    {
      name: "一区",
      num: 1200,
      key: 3,
    },
    {
      name: "二区",
      num: 800,
      key: 4,
    },
    {
      name: "三区",
      num: 2000,
      key: 5,
    },
  ],
]);
const active = ref(0);
const toolclick = async (val: any) => {
  if (active.value === val.key) return;
  active.value = val.key;
  // AddMarker(false);
  dialogStore.setDialogVisible(false);

  markertype_list.value = [[], [], []];
  checked.value = [true, true, true];
  switch (val.key) {
    case 1:
      __g.camera.set(
        646657.0075,
        2699964.157422,
        3132.649375,
        -30.858328,
        -165.402542,
        1
      );
      await waitFor();
      AddMarker(true, 1000);
      break;
    case 2:
      __g.camera.set(
        647102.669375,
        2702948.445313,
        3132.649375,
        -30.858335,
        -165.402466,
        1
      );
      await waitFor();
      AddMarker(true, 1500);
      break;
    case 3:
      __g.camera.set(
        643816.593906,
        2707055.560938,
        3351.828125,
        -35.458031,
        94.969635,
        1
      );
      await waitFor();
      AddMarker(true, 1200);
      break;
    case 4:
      __g.camera.set(
        647102.669375,
        2702948.445313,
        3132.649375,
        -30.858335,
        -165.402466,
        1
      );
      await waitFor();
      AddMarker(true, 800);
      break;
    case 5:
      __g.camera.set(
        647102.669375,
        2702948.445313,
        3132.649375,
        -30.858335,
        -165.402466,
        1
      );
      await waitFor();
      AddMarker(true, 2000);
      break;

    default:
      break;
  }
};
const waitFor = (timeout = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};
const back = () => {
  __g.camera.set(
    644593.299687,
    2699725.888613,
    1950.243438,
    -20.99753,
    -117.720131,
    1
  );

  AddMarker(false, 1800);
  active.value = 0;
  markertype_list.value = [[], [], []];
  checked.value = [true, true, true];
};
const checked = ref([true, true, true]);
const change = (e: any) => {
  console.log(e);
  console.log(checked.value);
  checked.value.forEach((item, index) => {
    if (item) {
      __g.marker.show(markertype_list.value[index]);
    } else {
      __g.marker.hide(markertype_list.value[index]);
    }
  });
};
const markertype_list: any = ref([[], [], []]);
const AddMarker = async (boolean: boolean, num?: number) => {
  if (boolean) {
    const rood1 = GetrandomMarker(200);
    const Ms1 = rood1.map((item, index) => {
      markertype_list.value[0].push(`SituationAwareness1-${index}`);

      return {
        id: `SituationAwareness1-${index}`,
        coordinate: item, //坐标位置
        coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        range: [0, 1000000], //可视范围
        GroupID: "SituationAwareness_1",
        anchors: [-(108 / 2.5), 142 / 2.5],
        // imagePath: window.location.origin + "/img/markerTag.png", //显示图片路径
        imagePath: window.location.origin + `/img/testimg/${1}.png`, //显示图片路径

        imageSize: [108 / 2.5, 142 / 2.5], //图片的尺寸
        text: `类型${1}-${index}`, //显示的文字
        useTextAnimation: true, //打开文字展开动画效果
        textRange: [0, 4000], //文本可视范围[近裁距离, 远裁距离]
        textBackgroundColor: [0, 0, 0, 0.5], //文本背景颜色
        fontSize: 13, //字体大小
        textOffset: [0, -15], // 文本偏移
        showLine: false,
        autoHeight: false,
        fontColor: Color.White, //字体颜色
        // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
        displayMode: 1, //显示模式
        occlusionCull: false,
      };
    });

    // todo ------------------
    const rood5 = GetrandomMarker(200);
    const Ms5 = rood5.map((item, index) => {
      markertype_list.value[1].push(`SituationAwareness5-${index}`);

      return {
        id: `SituationAwareness5-${index}`,
        coordinate: item, //坐标位置
        coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        range: [0, 1000000], //可视范围
        GroupID: "SituationAwareness_5",
        anchors: [-(108 / 2.5), 142 / 2.5],
        // imagePath: window.location.origin + "/img/markerTag.png", //显示图片路径
        imagePath: window.location.origin + `/img/testimg/${5}.png`, //显示图片路径

        imageSize: [108 / 2.5, 142 / 2.5], //图片的尺寸
        text: `类型${5}-${index}`, //显示的文字
        useTextAnimation: true, //打开文字展开动画效果
        textRange: [0, 4000], //文本可视范围[近裁距离, 远裁距离]
        textBackgroundColor: [0, 0, 0, 0.5], //文本背景颜色
        fontSize: 13, //字体大小
        textOffset: [0, -15], // 文本偏移
        showLine: false,
        autoHeight: false,
        fontColor: Color.White, //字体颜色
        // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
        displayMode: 1, //显示模式
        occlusionCull: false,
      };
    });
    const rood6 = GetrandomMarker(200);
    const Ms6 = rood6.map((item, index) => {
      markertype_list.value[2].push(`SituationAwareness6-${index}`);

      return {
        id: `SituationAwareness6-${index}`,
        coordinate: item, //坐标位置
        coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        range: [0, 1000000], //可视范围
        GroupID: "SituationAwareness_6",
        anchors: [-(108 / 2.5), 142 / 2.5],
        // imagePath: window.location.origin + "/img/markerTag.png", //显示图片路径
        imagePath: window.location.origin + `/img/testimg/${6}.png`, //显示图片路径

        imageSize: [108 / 2.5, 142 / 2.5], //图片的尺寸
        text: `类型${6}-${index}`, //显示的文字
        useTextAnimation: true, //打开文字展开动画效果
        textRange: [0, 4000], //文本可视范围[近裁距离, 远裁距离]
        textBackgroundColor: [0, 0, 0, 0.5], //文本背景颜色
        fontSize: 13, //字体大小
        textOffset: [0, -15], // 文本偏移
        showLine: false,
        autoHeight: false,
        fontColor: Color.White, //字体颜色
        // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
        displayMode: 1, //显示模式
        occlusionCull: false,
      };
    });
    // await __g.marker.add(Ms3);
    // await __g.marker.add(Ms2);
    await __g.marker.clear();
    await __g.marker.add(Ms1);
    await __g.marker.add(Ms5);
    await __g.marker.add(Ms6);
    // todo ------------------
  } else {
    __g.marker.clear();
  }
};
// 随机添加5000个点位
const GetrandomMarker = (num: number) => {
  let x: any;
  let y: any;
  let arr: Array<any>;
  const Arrdata: Ref<Array<any>> = ref([]);
  for (let i = 0; i < num; i++) {
    x = 640037.8125 + Math.round(Math.random() * 10000);
    y = 2698353.75 + Math.round(Math.random() * 10000);
    arr = [x, y, 1434.3];
    Arrdata.value.push(arr);
  }
  return Arrdata.value;
};
onMounted(async() => {
  __g.marker.clear();
                            await __g.camera.stopAnimation()
            // __g.camera.set(644201.214214, 2700384.737344, 1698.128594, -23.078224, -92.156746, 2)
            //                 await waitFor(1000)
                            await playInitAnimation(AnimationType.ztts)
                            await waitFor(500)
                            await __g.camera.stopAnimation()
});
onUnmounted(() => {
  dialogStore.setDialogVisible(false);
  __g.marker.clear();
});
</script>
<style lang="scss" scoped>
.tools {
  position: absolute;
  @include Bottom(200);
  left: 0;
  right: 0;
  margin: auto;
  @include Width(600);
  @include wHeight(120);
  z-index: 10;
  .top,
  .bottom {
    display: flex;
    justify-content: space-around;
    @include MarginBottom(20);
  }
  .tool {
    @include Width(190);
    @include wHeight(100);
    background: rgba(56, 56, 56, 0.747);
    border-radius: 5%;
    cursor: pointer;
    box-sizing: border-box;
    .tooltop {
      display: flex;
      justify-content: center;
      align-items: center;
      @include Padding(5, 0, 5, 0);
      background: rgba(14, 33, 61, 0.877);
    }
    &:hover .tooltop {
      background: rgba(107, 109, 110, 0.897);
    }
    &:hover {
      // background: rgba(82, 147, 191, 0.897);
      border: 1px solid #fff;
    }
    .toolbottom {
      display: flex;
      justify-content: center;
      align-items: center;
      @include Padding(15, 0, 5, 0);
      span:nth-of-type(1) {
        @include FontSize(18);
        color: #fff;
        font-weight: 600;
        display: inline-block;
        @include Margin(0, 5, 0, 5);
      }
      span:nth-of-type(2) {
        @include FontSize(20);
        color: #ffd11bd0;
        font-weight: 600;
      }
    }

    &.active .tooltop {
      background: rgba(82, 147, 191, 0.897);
    }
  }
}
.back {
  position: absolute;
  @include Left(800);
  z-index: 10;
  @include Width(100);
  @include wHeight(100);
  cursor: pointer;
  img {
    width: 100%;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.legends {
  position: absolute;
  @include Right(800);
  z-index: 10;
  @include Width(200);
  @include wHeight(260);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  .ant-switch {
    @include Padding(5, 10, 5, 10);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-switch-checked {
    background: #4d89b0;
  }
}

.birefDialog {
  .content {
    display: flex;
    overflow: hidden;
    @include wHeight(180);
    @include PaddingLeft(20);
    img {
      @include Width(150);
      @include wHeight(180);
    }
    .info {
      p {
        @include LineHeight(20);
        // @include wHeight(30);
        @include FontSize(18);
        @include Padding(20, 0, 0, 20);
      }
    }
  }
}

.content {
  video {
    // @include Width(200);
    width: 100%;
    @include hHeight(200);
    height: 100%;
  }
}
</style>
