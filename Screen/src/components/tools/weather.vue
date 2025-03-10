<!--
 * @Author: your name
 * @Date: 2022-04-01 20:58:53
 * @LastEditTime: 2022-04-02 19:53:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\components\tools\weather.vue
-->
<!-- weather -->
<template>
    <div class="weather">
        <div class="tip">
            <span>
                <info-outlined :style="{ color: 'aqua ' }" />
                实时时间
                <el-switch active-color="#3fae7f" v-model="isRealTime" @change="toggleRealTime"></el-switch>
            </span>
        </div>
        <a-divider orientation="left" style="border-color: #ddd; color: #fff" dashed> 天气</a-divider>
        <div class="weathertype">
            <div @click="WeatherClick(item)" class="type" v-for="item in WeatherType" :key="item.name">
                <img :src="item.icon" alt="" />
                {{ item.name }}
            </div>
        </div>
        <a-divider orientation="left" style="border-color: #ddd; color: #fff" dashed>时间</a-divider>
        <div class="weathertype">
            <div class="type" @click="TimeTypeClick(item)" v-for="item in TimeType" :key="item.name">
                <img :src="item.icon" alt="" />
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Dayjs from 'dayjs'

import { useAirCityStore } from '@/stores/aircity'
import { useToolsStore } from '@/stores/tools'
import { InfoOutlined, EyeInvisibleOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { toTree } from './layerTree'
const AirCityStore: any = useAirCityStore()
const ToolsStore: any = useToolsStore()
const HuanjingId = ref()

let isRealTime = ref(false)

const toggleRealTime = (val: boolean) => {
    if (val) {
        let date_time = Dayjs().format('HH-mm').split('-')
        console.log(date_time, 'date_time')

        __g.weather.setDateTime(2022, 4, 2, Number(date_time[0]), Number(date_time[1]), false)
    }
}
const WeatherType = ref([
    {
        name: '晴天',
        icon: require('./img/晴天.png')
    },
    {
        name: '多云',
        icon: require('./img/多云.png')
    },
    {
        name: '下雨',
        icon: require('./img/下雨.png')
    },
    {
        name: '下雪',
        icon: require('./img/下雪.png')
    }
])
const WeatherClick = (val: any) => {
    switch (val.name) {
        case '晴天':
            // 禁用雨雪效果;
            __g.weather.disableRainSnow()
            __g.weather.setCloudDensity(0.1)

            break
        case '多云':
            // 禁用雨雪效果;
            __g.weather.disableRainSnow()
            //  设置云层密度
            __g.weather.setCloudDensity(0.65)
            //  设置云层厚度
            __g.weather.setCloudThickness(0.5)
            //  云层高度单位：公里
            __g.weather.setCloudHeight(2)

            break
        case '下雨':
            //设置云层厚度
            __g.weather.setCloudThickness(2)
            //设置完云层厚度后才能开启雨效
            __g.weather.setRainParam(1, 1, 1)

            break
        case '下雪':
            //设置云层厚度
            __g.weather.setCloudThickness(2)
            //设置完云层厚度后才能开启雪效
            __g.weather.setSnowParam(1, 1, 1)

            break

        default:
            break
    }
}
const TimeType = ref([
    {
        name: '早晨',
        icon: require('./img/早晨.png')
    },
    {
        name: '中午',
        icon: require('./img/中午.png')
    },
    {
        name: '傍晚',
        icon: require('./img/傍晚.png')
    },
    {
        name: '夜晚',
        icon: require('./img/夜晚.png')
    }
])
const TimeTypeClick = async (val: any) => {
    isRealTime.value = false
    const { hour }: any = await __g.weather.getDateTime()
    switch (val.name) {
        case '早晨':
            __g.weather.simulateTime(hour, 8, 2)
            break
        case '中午':
            __g.weather.simulateTime(hour, 14, 2)
            // __g.weather.setDateTime(2022, 4, 2, 14, 8, false);
            break
        case '傍晚':
            // __g.weather.setDateTime(2022, 4, 2, 18, 8, false);
            __g.weather.simulateTime(hour, 18, 2)

            break
        case '夜晚':
            // __g.weather.setDateTime(2022, 4, 2, 24, 8, false);
            __g.weather.simulateTime(hour, 24, 2)

            break

        default:
            break
    }
}
// const timer: any = await __g.weather.getDateTime();

// watch(
//   () => timer,
//   () => {
//     console.log(timer, "timer");
//   },
//   { deep: true, immediate: true }
// );
onMounted(() => {
    AirCityStore.$state.TreeInfo.forEach((item: any) => {
        if (item.name === '环境') {
            HuanjingId.value = item.iD
        }
    })
})
</script>
<style lang="scss" scoped>
.weather {
    position: absolute;
    @include Width(300);
    @include hHeight(300);
    @include Top(130);
    @include Right(200);
    @include Padding(10, 10, 10, 10);
    border-radius: 2%;
    margin: auto;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
    background: rgb(28, 39, 52);
    .tip {
        @include FontSize(12);
        .colsehuanjing {
            @include Padding(3.5, 5, 5, 5);

            cursor: pointer;
            &:hover {
                color: aqua;
            }
        }
        // color: aqua;
    }
    .weathertype {
        width: 100%;
        @include hHeight(50);
        display: flex;
        justify-content: space-around;
        align-items: center;
        .type {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @include Padding(10, 15, 10, 15);
            cursor: pointer;
            img {
                display: inline-block;

                @include MarginBottom(7);
                @include Width(20);
            }
            &:hover {
                background: rgba(0, 0, 0, 0.24);
            }
        }
    }
}
.el-switch {
    @include Width(30);

    @include wHeight(12);

    ::v-deep(.el-switch__core) {
        @include wHeight(12);
        @include Width(30);
    }
    ::v-deep(.el-switch__action) {
        @include wHeight(10);
        @include Width(10);
    }
}
</style>
