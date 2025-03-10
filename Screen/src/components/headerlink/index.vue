<!--
 * @Author: your name
 * @Date: 2022-03-13 23:28:11
 * @LastEditTime: 2022-05-24 22:02:53
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHJT\src\components\footer\index.vue
-->
<!-- footer -->
<template>
  <div class="footer">
    <div class="footer_link">
      <div
        @click="LinkClick(item)"
        :class="PagePath.indexOf(item.path) !== -1 ? 'link isactive' : 'link'"
        v-for="item in Link"
        :key="item.key"
      >
        <div class="link-img">
          <transition
            appear
            name="custom-classes-transition"
            enter-active-class="animate__animated    animate__fadeIn"
            leave-active-class="animate__animated   animate__fadeOut"
          >
            <img
              :src="item.activeImg"
              alt=""
              v-if="PagePath.indexOf(item.path) !== -1"
            />
          </transition>
          <transition
            appear
            name="custom-classes-transition"
            enter-active-class="animate__animated    animate__fadeIn"
            leave-active-class="animate__animated   animate__fadeOut"
          >
            <img
              :src="item.img"
              alt=""
              v-if="PagePath.indexOf(item.path) === -1"
            />
          </transition>
        </div>

        <transition
          appear
          name="custom-classes-transition"
          enter-active-class="animate__animated animate__delay-1s   animate__fadeIn"
          leave-active-class="animate__animated   animate__fadeOut"
        >
          <div
            v-if="item.children && PagePath.indexOf(item.path) !== -1"
            class="toplinks"
            @click.stop
          >
            <div
              @click.stop="MonLinkClick(mon)"
              :class="
                PagePath.indexOf(mon.path) !== -1
                  ? 'toplink toplink_active'
                  : 'toplink'
              "
              v-for="mon in item.children"
              :key="mon.key"
            >
              <span>
                {{ mon.name }}
              </span>
            </div>
          </div>
        </transition>
        <div class="link_name">
          <img
            :src="
              PagePath.indexOf(item.path) !== -1 ? item.activeIcon : item.icon
            "
            alt=""
          />
          <span>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <div ref="link_icon" class="link_icon">
      <!--      <img-->
      <!--          src="@/assets/images/基础/header/一级菜单选中装饰@2x.png"-->
      <!--          alt=""-->
      <!--          srcset=""-->
      <!--      />-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
// 路由监听
onBeforeRouteUpdate((to) => {
  PagePath.value = to.path;
});
const Key = computed(() => {
  let key = ref();
  switch (PagePath.value.split("/")[2]) {
    case "EmergencyManagement":
      key.value = 75;
      break;
    case "IntelligentSecurity":
      key.value = 250;
      break;
    // case "PortOfDispatch":
    //   key.value = 425;
    //   break;
    case "EquipmentManagement":
      key.value = 595;
      break;

    default:
      break;
  }
  return key.value;
});
// 路由信息
const Link = reactive([
  {
    name: "站场概览",
    key: 1,
    path: "/home/Monitor",
    icon: require("@/assets/images/link/navigation2_ICON2_normal@2x.png"),
    activeIcon: require("@/assets/images/link/navigation2_ICON2_click@2x.png"),
    img: require("@/assets/images/link/btn_style2@2x.png"),
    activeImg: require("@/assets/images/link/btn_style2_choosed@2x.png"),
  },
  {
    name: "站场环境",
    key: 2,
    path: "/home/OverAll",

    icon: require("@/assets/images/link/navigation2_ICON1_normal@2x.png"),
    activeIcon: require("@/assets/images/link/navigation2_ICON1_click@2x.png"),
    img: require("@/assets/images/link/btn_style1@2x.png"),
    activeImg: require("@/assets/images/link/btn_style1_choosed@2x.png"),
  },
  {
    name: "站场总览",
    key: 3,
    path: "/home/IntelligentSecurity",
    icon: require("@/assets/images/link/navigation2_ICON3_normal@2x.png"),
    activeIcon: require("@/assets/images/link/navigation2_ICON3_click@2x.png"),
    img: require("@/assets/images/link/btn_style1@2x.png"),
    activeImg: require("@/assets/images/link/btn_style1_choosed@2x.png"),
  },
  {
    name: "整体态势",
    key: 4,
    path: "/home/SituationAwareness",
    icon: require("@/assets/images/link/navigation2_ICON3_normal@2x.png"),
    activeIcon: require("@/assets/images/link/navigation2_ICON3_click@2x.png"),
    img: require("@/assets/images/link/btn_style1@2x.png"),
    activeImg: require("@/assets/images/link/btn_style1_choosed@2x.png"),
  },
  // {
  //   name: "应急管理",
  //   key: 4,
  //   path: "/home/EmergencyManagement",
  //   icon: "rengongzhinengdanao",
  //   img: require("@/assets/images/link/icon_emergency@2x.png"),
  //   activeImg: require("@/assets/images/link/icon_emergency_click@2x.png"),
  // },
]);
const Router = useRouter();
const Route = useRoute();
const PagePath = ref("");
// 一级路由点击
const LinkClick = (val: {
  name: string;
  key: number;
  path: string;
  icon: string;
}) => {
  Router.push({
    path: val.path,
  });
  PagePath.value = val.path;
};
// 子路由点击
const MonLinkClick = (val: {
  name: string;
  key: string;
  path: string;
  icon: string;
}) => {
  Router.push({
    path: val.path,
  });
  PagePath.value = val.path;
};
const rain: any = ref([]);
const link_icon = ref();
onMounted(() => {
  console.log(link_icon.value, "link_icon");

  // console.log(rain.value, "rain");

  PagePath.value = Route.path;
});
</script>
<style lang="scss" scoped>
@mixin test($l) {
  left: calc(1vw * #{$l} / #{$widthRatio});
}

.footer {
  position: absolute;
  @include Bottom(15);
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 9;
  @include wHeight(114);
  background: url("~@/assets/images/link/bottom_bg@2x.png") no-repeat;
  background-size: 100% 100%;

  .footer_link {
    position: absolute;
    left: 0;
    right: 0;
    @include Bottom(25.11);
    @include wHeight(35);

    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .link {
      @include Width(153);
      @include wHeight(35);
      @include Margin(0, 3.33, 0, 0);
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      @include FontSize(18);
      flex-direction: column;
      transition: all 0.5s;
      .link-img {
        width: 100%;
        position: absolute;
        transition: all 0.3s;
        height: 100%;
        display: flex;
        justify-content: center;
        //bottom: 0;

        img {
          width: 100%;
          @include wHeight(35);
          transition: all 0.3s;
          position: absolute;
          //bottom: 0;
          // transform: translate(0, -90%);
        }
      }

      &.isactive {
        @include LetterSpacing(1);
        .link-img {
          width: 100%;
          position: absolute;
          transition: all 0.3s;
          height: 100%;
          display: flex;
          justify-content: center;
          //bottom: 0;

          img {
            width: 100%;
            @include wHeight(52);
            transition: all 0.3s;
            position: absolute;
            @include Bottom(-10);
            // transform: translate(0, -90%);
          }
        }

        .link_name {
          //@include FontSize(18);
          @include LetterSpacing(1);
          // color: #ffdeab;
        }
      }

      .link_name {
        display: flex;
        // @include Width(143);
        width: 100%;
        @include wHeight(35);
        text-align: center;
        @include FontSize(20);
        @include LetterSpacing(0.88);
        font-family: Oppo, serif;
        font-weight: 500;
        @include LineHeight(35);

        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
        color: #fff;

        opacity: 0.9;
        font-family: OPPOSans-R;
        font-weight: lighter;
        @include FontSize(13.33);
        color: #ffffff;
        text-shadow: 0 1.33px 2.67px #000101;
        img {
          @include Width(24);
          @include wHeight(24);
          @include MarginRight(5.5);
        }
      }

      .toplinks {
        //position: fixed;
        //@include Bottom(105);
        //left: 0;
        //right: 0;
        //margin: auto;
        //@include Width(800);
        //@include wHeight(40);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        .toplink {
          @include Width(160);
          @include wHeight(40);
          @include Margin(0, 20, 0, 20);
          @include FontSize(18);
          color: #ffffff98;
          display: flex;
          font-family: Oppo;

          justify-content: center;
          align-items: center;

          background-size: 100% 100%;

          &.toplink_active {
            //background: url("~@/assets/images/基础/header/btn_当前选中@2x.png") no-repeat center/cover;
            background-size: 100% 100%;
            color: #ffdeab;

            .svg_left {
              // font-size: 3000px;
              //color: #ffffff;
              //transform: scale(5);
            }
          }
        }
      }
    }
  }

  .link_icon {
    position: absolute;
    @include Width(36);
    @include wHeight(38);
    @include Bottom(-19);
    @include CalcLeft(v-bind(Key));

    // @if (v-bind(Key)) == 1 {
    //   @include CalcLeft(36);
    //   background: #000;
    // } @else if (v-bind(Key)) == 2 {
    //   @include CalcLeft(66);
    // } @else if (v-bind(Key)) == 3 {
    //   @include CalcLeft(86);
    // } @else {
    //   @include CalcLeft(0);
    // }
    transition: left 0.5s;

    img {
      width: 100%;
    }
  }
}
</style>
