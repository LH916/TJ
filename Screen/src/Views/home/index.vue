<!--
 * @Author: your name
 * @Date: 2021-11-18 22:05:57
 * @LastEditTime: 2022-05-24 21:49:03
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fdaircityinit\src\Views\home\index.vue
-->
<template>
    <Player />
    <transition appear name="custom-classes-transition" enter-active-class="animate__animated  animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <Header v-if="!UIShow" />
    </transition>
    <transition appear name="custom-classes-transition" enter-active-class="animate__animated  animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <div class="back" @click="back" v-if="UIShow">
            <el-tooltip class="box-item" effect="dark" content="返回" placement="bottom">
                <Icon :color="UIShow ? '#7afafe' : '#fff'" :font-size="30" icon="back" />
            </el-tooltip>
        </div>
    </transition>
    <transition appear name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutDown">
        <HeaderLink v-if="IsOnReady && !LayerTreeShow && !AnimationShow && !SkyBoxShow && !WeatherShow && !UIShow" />
    </transition>
    <!--  <transition-->
    <!--    appear-->
    <!--    name="custom-classes-transition"-->
    <!--    enter-active-class="animate__animated   animate__fadeInUp"-->
    <!--    leave-active-class="animate__animated  animate__fadeOutDown"-->
    <!--  >-->
    <!--    <Footer-->
    <!--      v-if="-->
    <!--        path !== '/home/OverAll' &&-->
    <!--        !LayerTreeShow &&-->
    <!--        !AnimationShow &&-->
    <!--        !SkyBoxShow &&-->
    <!--        !WeatherShow-->
    <!--      "-->
    <!--    />-->
    <!--  </transition>-->

    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutDown">
        <LayerTree v-if="LayerTreeShow" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInRight" leave-active-class="animate__animated  animate__fadeOutRight">
        <Animation v-if="AnimationShow" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInRight" leave-active-class="animate__animated  animate__fadeOutRight">
        <Skybox v-if="SkyBoxShow" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInRight" leave-active-class="animate__animated  animate__fadeOutRight">
        <Weather v-if="WeatherShow" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <Build v-if="IsOnReady" v-show="BuildShow" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <Flood v-if="IsOnReady && FloodShow" />
    </transition>
    <router-view v-if="IsOnReady && !LayerTreeShow && !AnimationShow && !SkyBoxShow && !WeatherShow && !UIShow"></router-view>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import Player from '@/components/player/player.vue'
import Header from '@/components/header/index.vue'
import { getMockData } from '@/api/connect'
import { computed, onMounted, ref } from 'vue'

import { useAirCityStore } from '@/stores/aircity'
import HeaderLink from '@/components/headerlink/index.vue'
// import Footer from "@/components/footer/index.vue";
import { useRoute } from 'vue-router'
import { useToolsStore } from '@/stores/tools'
import LayerTree from '@/components/tools/layerTree.vue'
import Animation from '@/components/tools/Animation.vue'
import Skybox from '@/components/tools/skybox.vue'
import Weather from '@/components/tools/weather.vue'
import Dialog from '@/components/Dialog/index.vue'
// import { backBtn } from '@/Views/home/Fourth/funcs/clouds'
// 添加摄像头
import { CameraList, zhajiList } from './IntelligentSecurity/tools/EquaList'
import { AddCameraList, AddMarkerList } from './IntelligentSecurity/tools/marker'
import Build from '@/components/tools/build.vue'
import Flood from '@/components/tools/flood.vue'

import { useDialogStore } from '@/stores/dialog'
// import Echarts from "./echarts/index.vue";
const Route = useRoute()
const path = computed(() => Route.path)
const ToolsStore = useToolsStore()
const LayerTreeShow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)
const SkyBoxShow = computed(() => ToolsStore.$state.SkyBoxShow)
const WeatherShow = computed(() => ToolsStore.$state.WeatherShow)
const BuildShow = computed(() => ToolsStore.$state.BuildShow)
const FloodShow = computed(() => ToolsStore.$state.FloodShow)
const UIShow = computed(() => ToolsStore.$state.UIShow)
onMounted(() => {
    console.log(Route.path, 'route')
})
defineProps({
    msg: {
        type: String,
        required: false
    }
})

const back = () => {
    const val = !UIShow.value
    ToolsStore.$state.UIShow = false
    __g.settings.setMainUIVisibility(false)
}
const AirCityStore = useAirCityStore()
const IsOnReady = computed(() => AirCityStore.$state.IsOnReady)
onMounted(async () => {
    // const result = await getMockData()
    // console.log(result)
    setTimeout(() => {
        AddCameraList(CameraList)
    }, 1000)
})
const poiName = ref()
</script>
<style lang="scss" scoped>
.dialog-content {
    @include LineHeight(30);
    @include FontSize(16);
    .el-row {
        @include MarginBottom(10);

        @include Padding(0, 30, 0, 30);
    }
    ::v-deep(.el-input) {
        .el-input__suffix {
            @include Right(10);
            cursor: pointer;
        }
        .el-input__inner {
            background: transparent;
            color: #fff;
            @include BorderRadius(0);
            @include Width(150);
            @include wHeight(30);
            &:focus {
                outline: 0;
                border-color: #fff;
            }
        }
    }
}
.back {
    position: fixed;
    @include Top(20);
    @include Right(220);
    z-index: 102;
}
</style>
