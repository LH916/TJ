<!--
 * @Author: your name
 * @Date: 2022-04-06 14:14:47
 * @LastEditTime: 2022-04-06 14:40:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\Views\home\IntelligentSecurity\children\rotation3D.vue
-->
<!--  -->
<template>
  <!--旋转3D-->
  <div id="rotation3D" class="rotation3D">
    <!--底座-->
    <div class="rotation3D-baseMap"></div>
    <button class="center">中心</button>
    <div class="itemList">
      <div
        class="rotation3D__item"
        :class="item.type"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <div class="scale">
          <div class="baseImg"></div>
          <div class="cont">
            <!-- <i class="iconfont" :class="item.icon"></i> -->
            <Icon :font-size="70" icon="taiyang"></Icon>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lineList">
      <div
        class="rotation3D__line"
        v-for="(item, index) in itemList"
        :key="index"
        :class="item.type"
      >
        <div v-if="item.type == 'blue'" class="pos">
          <svg width="10" height="400">
            <path id="path1" d="M0 400, 0 0" stroke-dasharray="5,10" />
          </svg>
          <div class="dot dot1 el-icon-caret-right"></div>
        </div>
        <div v-if="item.type == 'yellow'" class="pos">
          <svg width="10" height="400">
            <path id="path2" d="M0 400, 0 0" stroke-dasharray="5,10" />
          </svg>
          <div class="dot dot2"><i class="el-icon-close"></i></div>
        </div>
        <div v-if="item.type == 'green'" class="pos" style="left: -16px">
          <svg width="50" height="400">
            <path
              id="path3"
              d="M20 400 S 0 200, 20 0"
              stroke-dasharray="5,10"
            />
            <path
              id="path4"
              d="M20 400 S 40 200, 20 0"
              stroke-dasharray="5,10"
            />
          </svg>
          <div class="dot dot3 el-icon-caret-right"></div>
          <div class="dot dot4 el-icon-caret-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Icon from "@/components/Icon/index.vue";

const itemList = ref([
  { name: "人员管理", type: "blue", icon: "icon-renyuanguanli" },
  { name: "GPS服务", type: "green", icon: "icon-GPS" },
  { name: "路基施工", type: "yellow", icon: "icon-a-lujishigong2x" },
  { name: "数据服务中心", type: "blue", icon: "icon-shujufuwuzhongxin" },
  { name: "智慧梁场", type: "blue", icon: "icon-liangchang" },
  { name: "摊铺压实服务", type: "blue", icon: "icon-tanpuyashifuwu" },
  { name: "路面施工", type: "blue", icon: "icon-lumianshigong" },
  { name: "试验检测", type: "blue", icon: "icon-shiyanjiance" },
]);
onMounted(() => {
  new Rotation3D({
    id: "#rotation3D",
    farScale: 0.6,
    // farScale: 1,
    xRadius: 0, //x半径压缩
    yRadius: 220, //y半径压缩
    // yRadius: 0,  //y半径压缩
    autoPlay: true,
    autoPlayDelay: 1000,
  });
});
</script>
<style lang="scss" scoped>
.rotation3D-baseMap {
  position: absolute;
  left: 40px;
  right: 0;
  top: 0px;
  bottom: 0;
  margin: auto;
  width: 70%;
  height: 40%;
  background: url("/js/rotation3D/img/baseMap.png") no-repeat center/cover;
  //   transform: scale(0.5);
}
.rotation3D-baseMap::before {
  position: absolute;
  left: -23px;
  right: 0;
  top: -50px;
  bottom: 0;
  margin: auto;
  z-index: 99;
  width: 342px;
  height: 318px;
  // @include Width(342);
  // @include hHeight(318);
  display: block;
  content: "";
  background: url("/js/rotation3D/img/baseLogo.png");
  animation: 10s bounceUpDown infinite;
  transform: scale(0.5);
}

/*
  椭圆会使内部失真    transform: rotateX(50deg);
*/
.rotation3D {
  transform: scale(0.5);
  transform-origin: 0 0;
  position: relative;
  width: 700px;
  height: 700px;
  cursor: move;
  user-select: none;
  margin: 0 auto;
  margin-top: -40px;
  margin-left: 50px;
  /*border: 1px solid white; border-radius: 100%;*/
}
.rotation3D .center {
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.rotation3D .itemList {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
}
.rotation3D .lineList {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform-style: preserve-3d;
}

/*---------------------------点样式---------------------------*/
.rotation3D__item {
  position: absolute;
  display: block;
  cursor: pointer;
  width: 161px;
  height: 188px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: white;
  /*background: #2292ef; border-radius: 4px;*/
}
.rotation3D__item .scale {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.rotation3D__item .cont {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.rotation3D__item .cont .iconfont {
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 60px;
  display: block;
}
.rotation3D__item .cont p {
  color: #fff;
}

.rotation3D__item.blue {
  color: #01e9fc;
}
.rotation3D__item.green {
  color: #02e943;
}
.rotation3D__item.yellow {
  color: #ffd200;
}

/*底座*/
.rotation3D__item .baseImg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.rotation3D__item.blue .baseImg {
  background: url("/js/rotation3D/img/蓝底.png");
}
.rotation3D__item.green .baseImg {
  background: url("/js/rotation3D/img/绿底.png");
}
.rotation3D__item.yellow .baseImg {
  background: url("/js/rotation3D/img/黄底.png");
}

/*---------------------------
    线样式
    线高为总高的一般
---------------------------*/
.rotation3D__line {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 2px;
  height: 50%;
  padding-top: 60px;
  color: #fff;
  font-size: 50px;
  /*background: #fff;*/
  /*原点设置在中间*/
  transform-origin: 50% 0;
  transform-style: preserve-3d;
}
.rotation3D__line .pos {
  position: absolute;
  top: 0;
}
.rotation3D__line svg {
  position: absolute;
  top: 0;
}
.rotation3D__line svg path {
  stroke: #fff;
  fill: none;
  stroke-width: 3;
  animation: path-animation 100s linear 0s infinite normal;
}
@keyframes path-animation {
  0% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
.rotation3D__line .dot {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  /*width: 35px; height: 35px; font-size: 35px; */
  width: 24px;
  height: 24px;
  font-size: 24px;
}
.rotation3D__line .dot1,
.rotation3D__line .dot3,
.rotation3D__line .dot4 {
  animation: svg-path-animation 6s ease-in-out 0s infinite normal;
}
.rotation3D__line .dot1 {
  offset-path: path("M0 400, 0 0");
  offset-distance: 0%;
}
.rotation3D__line .dot2 {
  offset-path: path("M0 200, 0 0");
  offset-distance: 0%;
  background: #ffd200;
  border-radius: 100%;
  font-size: 22px;
  color: #000;
}
.rotation3D__line .dot3 {
  offset-path: path("M20 400 S 0 200, 20 0");
  offset-distance: 0%;
}
.rotation3D__line .dot4 {
  offset-path: path("M20 0 S 40 200, 20 400");
  offset-distance: 0%;
}
@keyframes svg-path-animation {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

/*颜色*/
.rotation3D__line.blue {
  color: #07b2f9;
}
.rotation3D__line.green {
  color: #00ff5b;
}
.rotation3D__line.yellow {
  color: #ffd500;
}

.rotation3D__line.blue svg path {
  stroke: #07b2f9;
}
.rotation3D__line.green svg path {
  stroke: #00ff5b;
}
.rotation3D__line.yellow svg path {
  stroke: #ffd500;
}
</style>
