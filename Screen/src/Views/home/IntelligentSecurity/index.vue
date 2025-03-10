<!--
 * @Author: your name
 * @Date: 2022-03-27 02:13:29
 * @LastEditTime: 2022-05-18 10:27:25
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\Views\home\IntelligentSecurity\index.vue
-->
<!-- 智慧安防 -->
<template>
    <div class="intelligent-security">
        <HeadBar :list="list" @clicks="handleListClick" />

        <Left_Box>
            <LeftView />
        </Left_Box>
        <Right_Box>
            <RightView />
        </Right_Box>

        <Dialog v-if="groupId == 'Marker3D'">
            <div class="content">
                <video src="/video/车祸_Trim.mp4" autoplay muted loop></video>
            </div>
        </Dialog>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import LeftView from './Left/index.vue'
import RightView from './Right/index.vue'
import Left_Box from '@/components/left_box.vue'
import Right_Box from '@/components/right_box.vue'
import _, { cloneDeep } from 'lodash'
import HeadBar from '@/components/headBar/index.vue'
import { AddJCar, AddKCar, AddMarker3d } from '../OverAll/function'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
import { useAirCityStore } from '@/stores/aircity'
import { AnimationType, playInitAnimation } from '@/utils/animation'
import { waitFor } from '@/utils'

export default defineComponent({
    name: 'EquipmentManagement',
    components: { Right_Box, Left_Box, LeftView, RightView, HeadBar, Dialog },
    setup() {
        const dialogStore = useDialogStore()
        const AirCityStore = useAirCityStore()
        const InfoTree = computed(() => AirCityStore.TreeInfo)
        const groupId = computed(() => dialogStore.$state.tag)

        const self = reactive({
            list: [
                {
                    title: '空中巡检',
                    isActive: false,
                    timer: null as any,
                    cord: [
                        [642272.9375, 2700988.25, 1421],
                        [642365.4375, 2700984.5, 1421],
                        [642519.0625, 2700978.75, 1421],
                        [642694.125, 2700972.5, 1421],
                        [642847.875, 2700966.5, 1421],
                        [643030.125, 2700956.5, 1421],
                        [643255, 2700949, 1421],
                        [643452.125, 2700941.5, 1421],
                        [643627.375, 2700937, 1421],
                        [643781.4375, 2700932.25, 1421],
                        [643976.9375, 2700924.25, 1421],
                        [644155.1875, 2700919, 1421],
                        [644296.25, 2700915.25, 1421],
                        [644492.375, 2700908.75, 1421]
                    ],
                    async clickFunc() {
                        this.isActive = !this.isActive
                        let res: any = (this.cord as number[][]).map((item: any) => [item[0], item[1], item[2] + 150])
                        if (this.isActive) {
                            await __g.camera.stopAnimation()
                            await playInitAnimation(AnimationType.kzxj)
                            await waitFor(500)
                            await __g.camera.stopAnimation()
                            let polyline = {
                                id: 'planeLine', //折线唯一标识id
                                coordinates: res, //构成折线的坐标点数组
                                color: [0, 0, 1, 0.5], //折线颜色
                                style: PolylineStyle.DottedNormal, //折线样式 参考样式枚举：PolylineStyle
                                thickness: 100, //折线宽度
                                intensity: 0.5, //亮度
                                flowRate: 0.5, //流速
                                tiling: 0, //材质贴图平铺比例
                                shape: 0, //折线类型 0：直线， 1：曲线
                                depthTest: true //是否做深度检测
                            }
                            await __g.polyline.add(polyline)
                            // 选中
                            let o = {
                                id: 'plane', //自定义对象唯一id
                                
                pakFilePath: ``, //pak文件路径
                // pakFilePath: '@path:DTS_Library.pak', //pak文件路径
                                assetPath: '/JC_CustomAssets/ObjectLibrary/Exhibition/交通工具/其他/无人机_1', //资源目录，自定义对象在pak文件资源包里的相对路径
                                location: res[0], //位置坐标
                                coordinateType: 0, // 坐标系类型
                                rotation: [0, 0, 0], //旋转
                                scale: [40, 40, 40], //缩放
                                smoothMotion: 1 //1: 平滑插值，0: 跳跃
                            }
                            await __g.customObject.add(o)
                            __g.customObject.focus('plane', -1)
                            let i = 0
                            // let startPoint = cloneDeep(res[0])
                            // let endPoint = cloneDeep(res[res.length - 1])
                            this.timer = setInterval(() => {
                                if (i >= res.length) {
                                    clearInterval(this.timer)
                                    this.timer = null
                                    i = 0
                                } else {
                                    i++
                                    __g.customObject.setLocation('plane', res[i], null)
                                }
                                // if (startPoint[0] >= endPoint[0]) {
                                //     clearInterval(this.timer)
                                //     this.timer = null
                                // } else {
                                //     startPoint[0] += 10
                                //     __g.customObject.setLocation('plane', startPoint, null)
                                // }
                            }, 800)
                        } else {
                            // 没选中
                            __g.polyline.delete('planeLine')
                            __g.customObject.delete('plane')
                            clearInterval(this.timer)
                            this.timer = null
                        }
                    }
                },

                {
                    title: '站场模拟',
                    isActive: false,
                    timer: null as any,
                    async clickFunc() {
                        this.isActive = !this.isActive
                        if (this.isActive) {
                            await __g.camera.stopAnimation()
                            await __g.camera.set(644037.374375, 2701101.280781, 1472.864375, -29.037237, -174.258163, 1)
                            await waitFor(1000)
                            await playInitAnimation(AnimationType.jtmn)
                            await waitFor(500)
                            await __g.camera.stopAnimation()
                            await AddKCar()
                            await AddJCar()

                            // InfoTree.value.forEach(item => {
                            //     if (item.name.split('_')[0] === '车辆') {
                            //         __g.infoTree.hide(item.iD)
                            //     }
                            // })
                            // await __g.camera.set(644037.374375, 2701101.280781, 1472.864375, -29.037237, -174.258163, 2)
                            // await waitFor(2000)

                            setTimeout(() => {
                                AddMarker3d()
                            }, 6500)
                        } else {
                            __g.customObject.clear()
                            __g.marker3d.clear()
                            InfoTree.value.forEach(item => {
                                if (item.name.split('_')[0] === '车辆') {
                                    __g.infoTree.show(item.iD)
                                }
                            })
                        }
                    }
                },
                {
                    title: '站场路线',
                    isActive: false,
                    timer: null as any,
                    cord: [
                        [
                            [644888.375, 2697071.25, 1413.84314],
                            [644925.25, 2697505.5, 1406.31543],
                            [644951.375, 2697638, 1406.321045],
                            [645107.5, 2698072.25, 1428.816895],
                            [645164.75, 2698353.5, 1416.782715],
                            [645265.5625, 2698719, 1406.616577],
                            [645279.5, 2698771.25, 1407.09729],
                            [645291.25, 2698859.5, 1408.358643],
                            [645294.125, 2698972, 1410.444214],
                            [645285.5625, 2699036.25, 1411.878784],
                            [644714.625, 2700576.75, 1417.645142],
                            [644631.8125, 2700883.75, 1419.178467],
                            [644556.5625, 2701373.5, 1422.106934],
                            [644368.5625, 2702951.5, 1428.38562],
                            [644481.75, 2704886.5, 1434.939331]
                        ],
                        [
                            [645058.375, 2699667.75, 1414.209961],
                            [645220.4375, 2699914.5, 1415.995605],
                            [645278.8125, 2700048, 1417.418701],
                            [645336.3125, 2700995.5, 1428.086426],
                            [645463, 2701474, 1440.076294],
                            [645510, 2701747.5, 1441.066895],
                            [645166.5625, 2702839.5, 1432.143066]
                        ],
                        [
                            [646279.5, 2700286, 1415.304688],
                            [645307.625, 2700534.5, 1423.37207],
                            [645115.9375, 2700578.25, 1423.774048],
                            [645071.6875, 2700607, 1423.300049],
                            [645058.25, 2700630.25, 1423.213623],
                            [644860.9375, 2701555, 1431.575317],
                            [644823.75, 2701968.75, 1429.69873],
                            [644978.625, 2702843.75, 1429.927856]
                        ],
                        [
                            [646144.4375, 2701495, 1432.030884],
                            [645912.75, 2701471.5, 1436.495117],
                            [645893.8125, 2701468.75, 1436.896362],
                            [645857.4375, 2701429.75, 1438.388428],
                            [645459.5625, 2701480.25, 1440.227539],
                            [644864.125, 2701557.75, 1431.715332],
                            [644530.875, 2701607.25, 1423.129517],
                            [642504.4375, 2701870, 1435.611084]
                        ],
                        [
                            [643790.9375, 2699783.25, 1421.550293],
                            [643870.25, 2700606.25, 1413.792603],
                            [643983.8125, 2701674.5, 1426.495972],
                            [644059.8125, 2702268.75, 1429.280762],
                            [644034.625, 2703319.5, 1439.395996]
                        ],
                        [
                            [643567, 2701463, 1422.395264],
                            [644538.0625, 2701406.5, 1422.316528],
                            [645447.5625, 2701237.25, 1434.855957],
                            [645570.875, 2701203, 1433.986206],
                            [645609.5, 2701173.5, 1432.911377],
                            [645683.75, 2701146, 1431.785767],
                            [645873.8125, 2701128.75, 1434.625122]
                        ],
                        [
                            [645447.5625, 2701549.75, 1441.84375],
                            [645105.5625, 2701724, 1439.673462],
                            [644782.6875, 2701986.75, 1429.421875],
                            [643300.3125, 2702593, 1440.254395],
                            [642950.375, 2702757, 1459.831421]
                        ],
                        [
                            [644682.875, 2700607.75, 1417.497559],
                            [643513.5, 2700626.5, 1416.338135]
                        ],
                        [
                            [644179.125, 2700622.75, 1415.233398],
                            [644281.375, 2702187.5, 1433.075317]
                        ]
                    ],
                    async clickFunc() {
                        this.isActive = !this.isActive
                        if (this.isActive) {
                            __g.weather.setDateTime(2020, 9, 9, 18, 0, false)
                            __g.camera.set(644910.285938, 2701564.48625, 6891.608125, -85.982574, -175.313004, 0.8)
                            let addPolylineArr: any = []
                            this.cord?.forEach((item: any, index: number) => {
                                addPolylineArr.push({
                                    id: 'polyline' + index, //折线唯一标识id
                                    coordinates: item, //构成折线的坐标点数组
                                    color: [1, 165 / 255, 0, 1], //折线颜色
                                    style: 3, //折线样式 参考样式枚举：PolylineStyle
                                    thickness: 30, //折线宽度
                                    intensity: 3, //亮度
                                    flowRate: 0.5, //流速
                                    tiling: 0, //材质贴图平铺比例
                                    shape: 0, //折线类型 0：直线， 1：曲线
                                    depthTest: false //是否做深度检测
                                })
                            })
                            __g.polyline.add(addPolylineArr)
                            //
                        } else {
                            __g.polyline.clear()
                            __g.weather.setDateTime(2020, 9, 9, 12, 0, false)
                            //
                        }
                    }
                }
            ]
        })

        const handleListClick = (item: any) => {
            self.list.forEach(ele => {
                if (ele.isActive && ele !== item) {
                    ele.clickFunc()
                }
            })
            console.log(item, 'item')

            item.clickFunc()
        }
        onMounted(async() => {
                            await __g.camera.stopAnimation()
            // __g.camera.set(644201.214214, 2700384.737344, 1698.128594, -23.078224, -92.156746, 2)
            //                 await waitFor(1000)
                            await playInitAnimation(AnimationType.jtzl)
                            await waitFor(500)
                            await __g.camera.stopAnimation()
        })
        onBeforeUnmount(() => {
            self.list.forEach(ele => {
                ele.isActive && ele.clickFunc()
            })
            // __g.camera.set(
            //   648446.93625,
            //   2699135.30375,
            //   3105.989687,
            //   -24.316189,
            //   -146.132462,
            //   2
            // );
        })
        return {
            ...toRefs(self),
            handleListClick,
            groupId
        }
    }
})
</script>
<style lang="scss" scoped>
.intelligent-security {
    display: flex;
    justify-content: space-between;
}
.dialog-container {
    display: flex;
    flex-direction: column;
    @include FontSize(14);
    @include Padding(0, 10, 0, 10);

    .row {
        display: flex;
        @include MarginBottom(15);
        @include LineHeight(17);

        .label {
            width: 6em;
        }

        .value {
            flex: 1;
        }
    }
}

.water-logging-content {
    display: flex;
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateX(-50%);
    //background: #000;
    @include Width(119);
    @include wHeight(390);
    //@include hHeight(230);
    z-index: 10;
    //background-color: rgba(21, 25, 31, 0.73);
    //height: fit-content;
    flex-direction: column;
    @include FontSize(12);
    justify-content: center;
    align-items: center;
    @include Padding(10, 0, 0, 0);
    background: url('~@/assets/images/IntelligentSecurity/level_bg@2x.png');
    background-size: 100% 100%;

    &:deep(.el-slider) {
        @include Margin(10, 0, 10, 0);
        transform: translateX(-5%);

        .el-slider__runway {
            background: #3f3f3f;
            font-size: 12px;
            color: #ffffff;

            .el-slider__bar {
                background-image: linear-gradient(179deg, #7abeff 0%, #0c0c5d 100%);
                transition: height 0.3s;

                .el-slider__button {
                    border-color: #33cccc;
                }
            }

            .el-slider__marks {
                .el-slider__marks-text {
                    display: none;
                    width: 3em;
                }

                .marks-text-isActive {
                    color: #fff;
                    display: block;
                    background: url('~@/assets/images/IntelligentSecurity/LEVEL_INER_BG@2x.png') no-repeat;
                    background-size: 100% 100%;
                    @include Width(49);
                    @include wHeight(23);
                    @include LineHeight(23);
                }
            }

            .el-slider__marks-stop {
                background: url('~@/assets/images/IntelligentSecurity/矩形@2x(2).png');
                background-size: 100% 100%;
                @include Width(15);
                @include wHeight(15);
                transform: translateY(50%) translateX(-35%);
            }

            .marks-stop-isActive {
                background: url('~@/assets/images/IntelligentSecurity/矩形@2x(1).png') no-repeat;
                background-size: 100% 100%;
            }

            .el-slider__button-wrapper {
                .el-slider__button {
                    background: url('~@/assets/images/IntelligentSecurity/矩形@2x.png') no-repeat;
                    background-size: 100% 100%;
                    border-color: transparent;
                    transform: translateX(-4%) scale(1.3);
                }
            }
        }
    }

    .water-logging-title {
        position: absolute;
        @include Top(5);
        @include Left(9);
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 0.8px;
        text-align: center;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
    }
}

.legend-container {
    display: flex;
    flex-direction: column;
    @include Width(102.56);
    @include wHeight(149.72);
    position: absolute;
    @include Bottom(50);
    @include Right(400);
    transform: translateX(-50%);

    img {
        @include Width(102.56);
        @include wHeight(149.72);
    }
}
.content {
    video {
        // @include Width(200);
        width: 100%;
        // height: 100%;
        @include hHeight(180);
    }
}
</style>
