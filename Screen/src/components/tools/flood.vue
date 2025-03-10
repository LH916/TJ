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
    <div class="flood">
        <!-- <div class="tip">
      {{ '水面高度:' + floodHeight + 'm' }}
    </div> -->
        <a-divider orientation="left" style="border-color: #ddd; color: #fff" dashed> {{ '水面高度:' + floodHeight + 'm' }}</a-divider>
        <div class="content">
            <V3Echarts :options="monitorOptions" height="200" width="400" />

            <el-slider vertical :max="10" :min="0" v-model="floodHeight" :step="0.5" @input="inputHandle" @change="changeHandle"></el-slider>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useAirCityStore } from '@/stores/aircity'
import { useToolsStore } from '@/stores/tools'
import _ from 'lodash'
let floodHeight = ref(3)
let options = {
    //607738.125, 2703845
    seed: [642919.3125, 2700988.5],
    min: [633319.875, 2689263.75],
    max: [652749.875, 2712706.25],
    elevation: 1418.4085693359375,
    color: [86 / 255, 112 / 255, 89 / 255, 0.5],
    precision: 0
}
onMounted(() => {
    setTimeout(() => {
        inputHandle(floodHeight.value)
    })
})

onBeforeUnmount(() => {
    __g.tools.stopFloodFill()
})

const inputHandle = (val: number) => {
    console.log(val, 'val')

    options.elevation = val + 1418.358642578125
    console.log(options, 'options')

    __g.tools.startFloodFill(options, null)
}
const changeHandle = (val: number) => {
    setMonitorOptions(val)
}
let monitorOptions = ref({
    color: ['rgba(29, 250, 250, 1)', 'rgba(34, 143, 254, 1)', 'rgba(241, 93, 35, 1)'],
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(35, 47, 76, 0.5)',
        textStyle: { color: 'rgba(124, 129, 173, 0.98)', fontSize: 12 },
        axisPointer: {
            type: 'shadow',
            label: { show: true, backgroundColor: 'transparent' },
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(100, 101, 171, 0)' },
                        { offset: 0.5, color: 'rgba(100, 101, 171, 0.2)' },
                        { offset: 0.999999, color: 'rgba(100, 101, 171, 1)' },
                        { offset: 1, color: 'rgba(100, 101, 171, 1)' }
                    ],
                    global: false
                }
            }
        }
    },
    legend: {
        bottom: 0,
        icon: 'circle',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 30,
        textStyle: { color: 'white', fontSize: 12 },
        selectedMode: false,
        type: 'scroll',
        pageIconColor: '#ffffff',
        pageIconInactiveColor: '#999999',
        pageTextStyle: { color: '#ffffff' },
        top: 18,
        data: ['含氧量', '含氮量', '含磷量']
    },
    grid: {
        top: '13%',
        left: '4%',
        right: '2%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: {
            show: true,
            lineStyle: { color: 'rgba(41, 164, 255, .39)', width: 3 }
        },
        axisLabel: { fontSize: 12, color: 'white' },
        data: ['30', '60', '90', '120', '150', '180', '210']
    },
    yAxis: [
        {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { fontSize: 12, color: 'white', formatter: '{value}m' },
            nameGap: 15,
            nameTextStyle: { align: 'right', color: '#333', padding: [0, 8, 0, 0] },
            axisLine: {
                show: true,
                lineStyle: { color: 'rgba(41, 164, 255, .39)', width: 3 }
            }
            // min: 10,
        }
    ],
    series: [
        {
            name: '含氧量',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' }
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false
                }
            },
            smooth: true,
            showSymbol: false,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '含氮量',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' }
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false
                }
            },
            smooth: true,
            showSymbol: false,
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '含磷量',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 3,
            lineStyle: { width: 1 },
            areaStyle: {
                opacity: 1,
                color: {
                    colorStops: [
                        { offset: 0, color: 'rgba(40, 237, 250, .3)' },
                        { offset: 1, color: 'rgba(20, 119, 125, .3)' }
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false
                }
            },
            smooth: true,
            showSymbol: false,
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
})
const setMonitorOptions = (height: number) => {
    if (height === 0) {
        height = 0.1
    }
    monitorOptions.value.series.forEach((seriesItem, seriesIndex) => {
        seriesItem.data = seriesItem.data.map((item, index) => {
            console.log(item, 111)

            let baseVal = (seriesItem.data.length - index) * 0.2 * height
            return +_.random(seriesIndex * 0.5, baseVal).toFixed(2)
        })
    })
}
</script>
<style lang="scss" scoped>
.flood {
    position: absolute;
    @include Width(400);
    @include hHeight(250);
    @include Top(150);
    @include Right(850);
    @include Padding(10, 10, 10, 10);
    border-radius: 2%;
    margin: auto;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
    background: rgba(28, 39, 52, 0.653);
    .content {
        display: flex;
        align-items: center;
        ::v-deep(.el-slider) {
            @include wHeight(150);
            .el-slider__runway {
                .el-slider__bar {
                    background-color: #33cccc;
                    ::v-deep(.el-slider__button) {
                        @include Border(2, solid, #33cccc);
                    }
                }
            }
        }
    }
    .tip {
        @include FontSize(14);
        @include LetterSpacing(1);
        .colsehuanjing {
            @include Padding(3.5, 5, 5, 5);

            cursor: pointer;
            &:hover {
                color: aqua;
            }
        }
        // color: aqua;
    }
    .ant-divider-dashed {
        @include Margin(0, 0, 0, 0);
        @include FontSize(14);
    }
}
</style>
