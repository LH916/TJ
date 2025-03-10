<template>
    <div class="left-container">
        <LeaseTitle>
            巡检工单
            <template v-slot:slot-bottom> Personnel accounted</template>
        </LeaseTitle>
        <div class="row-content">
            <div class="traffic-data">
                <div class="row">
                    <div class="traffic-item">
                        <IconBox height="34" width="34">
                            <img src="@/assets/images/home/icon_things@2x.png" />
                        </IconBox>
                        <div class="traffic-content">
                            <div class="label">工单总数</div>
                            <div class="value">
                                385
                                <div class="suffix">个</div>
                            </div>
                        </div>
                    </div>
                    <div class="traffic-item">
                        <IconBox height="41" width="41">
                            <img src="@/assets/images/home/icon_health@2x.png" />
                        </IconBox>
                        <div class="traffic-content">
                            <div class="label">工单完成数</div>
                            <div class="value">
                                261
                                <div class="suffix">个</div>
                            </div>
                        </div>
                    </div>

                    <div class="traffic-item">
                        <IconBox height="34" width="34">
                            <img src="@/assets/images/home/icon_alarm@2x.png" />
                        </IconBox>
                        <div class="traffic-content">
                            <div class="label">工单待处理</div>
                            <div class="value">
                                68
                                <div class="suffix">个</div>
                            </div>
                        </div>
                    </div>
                    <div class="traffic-item">
                        <IconBox height="34" width="34">
                            <img src="@/assets/images/home/icon_accident@2x.png" />
                        </IconBox>
                        <div class="traffic-content">
                            <div class="label">超时工单数</div>
                            <div class="value">
                                56
                                <div class="suffix">个</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row-content">
            <Box height="220" width="360">
                <SubTitle title-text="工单完成率"></SubTitle>
                <V3Echarts :options="option7" height="180" />
            </Box>
            <Box height="220" width="360">
                <SubTitle title-text="工单超时率"></SubTitle>
                <V3Echarts :options="option8" height="180" />
            </Box>
        </div>
        <LeaseTitle class="lease-title">
            巡检次数统计
            <template v-slot:slot-bottom>Traffic analysis</template>
        </LeaseTitle>
        <div class="row-content">
            <Box height="230" width="730">
                <V3Echarts :options="option11()" height="180" />
            </Box>
        </div>
        <LeaseTitle icon="nenghaoqushi">
            巡检数据分析
            <template v-slot:slot-bottom> Consumption trend</template>
        </LeaseTitle>
        <div class="row-content">
            <Box height="230" width="360">
                <SubTitle title-text="巡检问题上报数"></SubTitle>
                <V3Echarts :options="option4" height="180" />
            </Box>
            <Box height="230" width="360">
                <SubTitle title-text="巡检问题月统计"></SubTitle>
                <V3Echarts :options="option9()" height="180" />
            </Box>
        </div>
    </div>
    <HeaderBar ref="headBarRef" :list="headBarList" @clicks="handleHeadBarClick" />
    <Dialog v-if="dialogStore.tag === '摄像头'" title="摄像头信息">
        <div class="camera-info">
            <video autoplay loop muted src="/video/test.mp4"></video>
        </div>
    </Dialog>
    <Dialog v-if="dialogStore.tag === '区域人口'" title="区域人口趋势">
        <div class="chart-container">
            <V3Echarts :options="option12(dialogStore.content.data)" width="370" />
        </div>
    </Dialog>
    <Dialog v-if="dialogStore.tag === '网格人员'" title="网格人员详情">
        <div class="inspection-info">
            <div class="avatar">
                <img alt="" src="@/assets/images/dialog/Rectangle1071.png" />
            </div>
            <div class="info-box">
                <div class="row">
                    <div class="label">网格员姓名：</div>
                    <div class="value">刘伟</div>
                </div>
                <div class="row">
                    <div class="label">工作内容：</div>
                    <div class="value">通知住户做核酸</div>
                </div>
                <div class="row">
                    <div class="label">已巡查时间：</div>
                    <div class="value">2小时12分</div>
                </div>
                <div class="row">
                    <div class="label">所属社区：</div>
                    <div class="value">清水河社区</div>
                </div>
                <div class="row">
                    <div class="label">联系电话：</div>
                    <div class="value">13354562472</div>
                </div>
            </div>
        </div>
    </Dialog>

    <Dialog v-if="dialogStore.tag === '指挥中心'" title="指挥中心">
        <div class="inspection-info">
            <div class="avatar">
                <img alt="" src="/img/content/指挥中心.png" />
            </div>
            <div class="info-box">
                <div class="row">
                    <div class="label">名称：</div>
                    <div class="value">指挥中心</div>
                </div>
                <div class="row">
                    <div class="label">编号：</div>
                    <div class="value">0003</div>
                </div>
                <div class="row">
                    <div class="label">识别时间：</div>
                    <div class="value">4-25 16:24:34</div>
                </div>
                <div class="row">
                    <div class="label">所属网格：</div>
                    <div class="value">A区网格</div>
                </div>
                <div class="row">
                    <div class="label">联系方式：</div>
                    <div class="value">13456175641</div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs, watch, ref } from 'vue'
import LeaseTitle from '@/components/Lease_title/index.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import { option6, option1, option, option3, option4, option7, option8, option9, option10, option11, option12, option13 } from './chartOpt'
import { getIdByName, startMarquee } from '@/utils'
import HeaderBar from '@/components/headBar/index.vue'
import { defaultMakerOpt, defaultMarker3DOpt, defaultPolygonOpt } from '@/Views/home/OverAll/Left/airCityOpt'
import IconBox from '@/components/IconBox/index.vue'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
import _ from 'lodash'
import { useAirCityStore } from '@/stores/aircity'
import axios from 'axios'
import Box from '@/components/Box/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'
import { AddMarker3dName } from '../function'
export default defineComponent({
    components: {
        LeaseTitle,
        V3Echarts,
        HeaderBar,
        Dialog,
        IconBox,
        Box,
        SubTitle
    },
    name: 'index',
    setup() {
        const dialogStore = useDialogStore()
        const AirCityStore = useAirCityStore()

        const xzqhArr: any = [
            {
                name: '西三镇',
                coordinates: [638691.125, 2716452.75, 1700]
            },
            {
                name: '弥阳镇',
                coordinates: [651835.875, 2698534.25, 1700]
            },
            {
                name: '西一镇',
                coordinates: [632243.5, 2701244.5, 1700]
            },
            {
                name: '西二镇',
                coordinates: [617607.375, 2702079.25, 1700]
            },
            {
                name: '新哨镇',
                coordinates: [646954.75, 2685093, 1700]
            },
            {
                name: '东山镇',
                coordinates: [662612, 2680368.5, 1700]
            },
            {
                name: '五山乡',
                coordinates: [624437.3125, 2677593, 1700]
            },
            {
                name: '虹溪镇',
                coordinates: [636090.6875, 2672068.75, 1700]
            },
            {
                name: '竹园镇',
                coordinates: [645391.0625, 2668205.5, 1700]
            },
            {
                name: '江边乡',
                coordinates: [655552.5, 2657609.75, 1700]
            },
            {
                name: '巡检司镇',
                coordinates: [625414.4375, 2654836.25, 1700]
            },
            {
                name: '朋普镇',
                coordinates: [640549.8125, 2648935.25, 1700]
            }
        ]

        const self = reactive({
            option6,
            option1,
            option,
            option3,
            option4,
            option12,
            option13,
            List: [],
            dialogStore,
            headBarList: [
                // {
                //   title: "卷帘分析",
                //   isActive: false,
                //   clickFunc: async function () {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       __g.settings.setMapMode(
                //         2,
                //         {
                //           //地图模式相关的参数，具体请参考API帮助文档
                //           /**
                //            *  serviceType: 服务类型，0：MVT矢量切片； 1：WMTS(ArcGis) （默认值是0）
                //            *  coordType: 坐标系类型，0：经纬度；1：本地（默认值是0）
                //            *  mapPoint: 同名点，取值范围：[x,y]，（默认值是[0, 0]）
                //            *  longitude: 经度，取值范围：[0~180]（默认值是0.0）
                //            *  latitude: 纬度，取值范围：[0~90]（默认值是0.0）
                //            *  cache: 缓存路径，字符串地址，（默认值是 ":memory:"）
                //            *  style: 风格路径，字符串地址，（默认值是 "mapbox://styles/mapbox/streets-v10"）
                //            *  groundHeight: 地面高度，取值范围：[0~任意数值]（默认值是0.0）
                //            *  renderMode: 渲染模式，0：正常；1：透明；2：标注；3：贴地（默认值是0）
                //            *  serverURL: WMTS风格路径，二维数组，元素说明：index[0]服务id，index[1]服务地址；取值示例：[['111', 'http://192.168.1.29:81'], ['222', 'http://192.168.1.29:82'], ['333', 'http://192.168.1.29:83']]
                //            *  coordOrder: 坐标顺序，0: XY; 1: YX（默认值为0）
                //            *  maxLevel: WMTS服务最大显示层级，取值范围：[0~22]，默认值：10
                //            */
                //           coordType: 1,
                //           serviceType: 0,
                //           mapPoint: [0, 0],
                //           longitude: 0.0,
                //           latitude: 0.0,
                //           // style: "http://192.168.0.102:8084/mls",
                //           style: "http://" + HostConfig.Manager + "/mls",
                //           // http://192.168.137.1:8084/mls
                //           coordOrder: 0,
                //           renderMode: 0,
                //           maxLevel: 10,
                //           cache: ":memory:",
                //           groundHeight: 1000,
                //         },
                //         () => {
                //           console.log("设置大地图模式完成");
                //           __g.weather.setCloudDensity(0);
                //           __g.camera.set(
                //             665934.009375,
                //             2687902.483125,
                //             65459.425,
                //             -71.939575,
                //             179.41925,
                //             3
                //           );
                //           __g.tools.startPlaneClip(
                //             [642827.875, 2681441, 1389.2049560546875],
                //             [0, 0, 0],
                //             true,
                //             true
                //           );
                //         }
                //       );
                //     } else {
                //       //
                //       __g.tools.stopPlaneClip();
                //       __g.settings.setMapMode(0);
                //       // __g.weather.setCloudDensity(0.8);
                //       __g.camera.set(
                //         647832.752812,
                //         2701395.86853,
                //         3908.42625,
                //         -37.861969,
                //         171.069351,
                //         3
                //       );
                //     }
                //   },
                // },
                {
                    title: '',
                    isActive: false,
                    timer: null as any,
                    async clickFunc() {
                        this.isActive = !this.isActive
                        if (this.isActive) {
                            __g.camera.set(651711.10625, 2761012.82, 54266.095, -33.263607, 95.430351, 3)
                            const { data } = await axios.get('/mock/行政区划.json')
                            let listArr: any = []
                            let dataArr: any = null
                            data.features.forEach((item: any, index: number) => {
                                let cord = item.geometry.coordinates[0].map((curCord: any) => {
                                    return [...curCord, 1500]
                                })
                                dataArr = {
                                    id: 'xingzhengquhua' + index,
                                    coordinates: cord,
                                    color: [108 / 255, 242 / 255, 250 / 255, 1], //颜色值
                                    height: 3000, //3D多边形的高度
                                    intensity: 5.0, //亮度
                                    style: 4, //3DPolygon的样式 请参照API开发文档选取枚举
                                    tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
                                    tillingY: 0 //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
                                }
                                listArr.push(dataArr)
                            })

                            await __g.polygon3d.add(listArr)
                            AddMarker3dName(true, xzqhArr)
                        } else {
                            __g.polygon3d.clear()
                            AddMarker3dName(false, xzqhArr)
                        }
                    }
                },
                {
                    title: '',
                    isActive: false,
                    clickFunc: async function () {
                        this.isActive = !this.isActive
                        if (this.isActive) {
                            __g.camera.set(651711.10625, 2761012.82, 54266.095, -33.263607, 95.430351, 3)
                            const { data } = await axios.get('/mock/行政区划.json')
                            let listArr: any = []
                            let dataArr: any = null
                            data.features.forEach((item: any, index: number) => {
                                let cord = item.geometry.coordinates[0].map((curCord: any) => {
                                    return [...curCord, 1500]
                                })
                                dataArr = {
                                    id: 'xingzhengquhua' + index,
                                    coordinates: cord,
                                    color: [108 / 255, 242 / 255, 250 / 255, 1], //颜色值
                                    height: 3000, //3D多边形的高度
                                    intensity: 5.0, //亮度
                                    style: 4, //3DPolygon的样式 请参照API开发文档选取枚举
                                    tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
                                    tillingY: 0 //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
                                }
                                listArr.push(dataArr)
                            })

                            await __g.polygon3d.add(listArr)
                            const rlId = getIdByName('人口热力图')
                            __g.infoTree.show(rlId)
                        } else {
                            __g.polygon3d.clear()
                            const rlId = getIdByName('人口热力图')
                            __g.infoTree.hide(rlId)
                        }
                    }
                }
                // {
                //   title: "疫情防控",
                //   isActive: false,
                //   clickFunc: async function () {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       //
                //       const { data } = await axios.get("/mock/yqfk.json");
                //       let listArr: any = [];
                //       let dataArr: any = null;
                //       data.features.forEach((item: any, index: number) => {
                //         // let cord = item.geometry.coordinates[0].map((curCord: any) => {
                //         //   return [...curCord, 1500];
                //         // });
                //         dataArr = {
                //           id: "xingzhengquhua" + index,
                //           coordinates: item.geometry.coordinates,
                //           color: [108 / 255, 242 / 255, 250 / 255, 1], //颜色值
                //           height: 100, //3D多边形的高度
                //           intensity: 5.0, //亮度
                //           style: 1, //3DPolygon的样式 请参照API开发文档选取枚举
                //           tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
                //           tillingY: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
                //         };
                //         listArr.push(dataArr);
                //       });

                //       await __g.polygon3d.add(listArr);
                //       // AddMarker3dName(true, xzqhArr);
                //     } else {
                //       //
                //     }
                //   },
                // },
            ]
        })
        onMounted(() => {})

        const handleHeadBarClick = (item: any) => {
            self.headBarList.forEach(ele => {
                if (ele != item) {
                    ele.isActive && ele.clickFunc()
                }
            })
            item.clickFunc()
        }
        onBeforeUnmount(() => {
            self.headBarList.forEach(ele => {
                ele.isActive && ele.clickFunc()
            })
        })

        return {
            option7,
            option8,
            option9,
            option10,
            option11,
            ...toRefs(self),
            handleHeadBarClick
        }
    }
})
</script>

<style lang="scss" scoped>
.left-container {
    .row-content {
        display: flex;

        .traffic-data {
            @include Padding(16, 0, 0, 0);
            width: 100%;

            .row {
                display: flex;

                .traffic-item {
                    display: flex;
                    @include MarginRight(29);
                    flex: 1;

                    &:last-child {
                        margin-right: 0;
                    }

                    .traffic-content {
                        display: flex;
                        flex-direction: column;
                        @include MarginLeft(11);

                        .label {
                            @include FontSize(14);
                            color: #ffffff;
                            @include MarginBottom(5);
                        }

                        .value {
                            @include FontSize(26);
                            color: #ffce7f;
                            display: flex;
                            font-family: Tencent, serif;

                            .suffix {
                                @include FontSize(16);
                                justify-self: flex-end;
                                align-self: flex-end;
                                color: #93c0ec;
                                @include MarginLeft(12.7);
                                font-family: Oppo, serif;
                            }
                        }
                    }
                }

                .traffic-item:first-child {
                    @include MarginBottom(25);
                }
            }
        }

        .table-box {
            width: 100%;
            @include wHeight(145);
            display: flex;
            flex-direction: column;
            @include FontSize(14);
            box-sizing: border-box;
            @include Padding(0, 11, 0, 0);
            @include MarginBottom(30);
            @include MarginTop(17);

            .table-head {
                @include wHeight(28);
                display: flex;
                background: #0a3f78;
                @include LineHeight(28);
                //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

                .head-item {
                    //flex: 1;
                    text-align: center;

                    &:first-child {
                        @include Width(115);
                    }

                    &:nth-child(2) {
                        @include Width(91);
                    }

                    &:nth-child(3) {
                        @include Width(61);
                    }

                    &:nth-child(4) {
                        @include Width(31);
                    }
                }
            }

            .table-body {
                flex: 1;
                overflow-y: hidden;
                //@include wHeight(252);
                @include FontSize(13);

                .row {
                    display: flex;
                    width: 100%;
                    @include Padding(6.5, 0, 6.5, 0);
                    box-sizing: border-box;

                    .col {
                        //flex: 1;
                        text-align: center;
                        @include FontSize(12);

                        &:first-child {
                            @include Width(115);
                        }

                        &:nth-child(2) {
                            @include Width(91);
                        }

                        &:nth-child(3) {
                            @include Width(61);
                        }

                        &:nth-child(4) {
                            @include Width(31);
                        }
                    }

                    &:nth-child(even) {
                        // background: #ffffff20;
                        // color: burlywood;
                        background: #233247;
                    }
                }

                .error {
                    //background: rgba(255, 130, 82, 0.1);
                }
            }
        }
    }

    .introduce-box {
        @include Padding(10, 40, 10, 30);

        .text-box {
            @include Padding(10, 10, 10, 10);
            background: rgba(0, 0, 0, 0.123);
            text-indent: 2em;
            border-radius: 10px;
            display: flex;
            flex-direction: column;

            .row {
                //&:first-child
            }
        }
    }

    .table-box {
        width: 100%;
        @include hHeight(280);
        display: flex;
        flex-direction: column;
        @include FontSize(14);
        box-sizing: border-box;
        @include Padding(25, 40, 0, 40);

        .table-head {
            height: 2em;
            display: flex;
            background: #ffffff30;
            line-height: 2em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);

            .head-item {
                flex: 1;
                text-align: center;
            }
        }

        .table-body {
            flex: 1;
            overflow-y: hidden;
            //@include wHeight(252);

            .row {
                display: flex;
                width: 100%;
                @include Padding(10, 0, 10, 0);
                box-sizing: border-box;

                .col {
                    flex: 1;
                    text-align: center;
                }

                &:nth-child(even) {
                    background: #ffffff20;
                    // color: burlywood;
                }
            }
        }
    }

    .lease-title {
        @include MarginTop(20);
    }
}

.dialog-img {
    @include Width(633/5);
    @include Width(620/5);
    object-fit: cover;
    display: inline-block;
}

.dialog-content {
    display: flex;
    @include Padding(0, 10, 0, 10);
    @include FontSize(14);
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    box-sizing: border-box;

    div {
        //min-width: 60%;
        //max-width: 60%;
        @include wHeight(30);
        @include LineHeight(30);
        color: #ffffff;
        @include LetterSpacing(0.88);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

        &:nth-child(odd) {
            //@include MarginRight(30);
        }

        &:last-child {
            width: 100% !important;
            display: flex;

            div {
                width: 50%;
            }
        }
    }
}

.camera-info {
    width: 100%;
    height: 100%;

    video {
        width: 100%;
        @include hHeight(180);
        object-fit: fill;
    }
}

.dialog-bottom {
    @include Padding(5, 10, 10, 10);
    @include FontSize(14);
    display: flex;
    width: 100%;
    justify-content: space-around;
    color: #ffffff;
    @include LetterSpacing(0.88);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    > div {
        // border: 1px #fff solid;
        @include Width(140);
        @include wHeight(35);
        @include LineHeight(35);
        @include BorderRadius(5);
        cursor: pointer;
        transition: 0.5s all;
        text-align: center;
        background: linear-gradient(221deg, #b1b1b1bf 0%, #102a30 45%, #b1b1b1bf 100%);
        opacity: 1;

        &:hover {
            opacity: 0.8;
        }
    }
}

.inspection-info {
    display: flex;
    @include Padding(0, 10, 0, 10);
    align-items: center;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .avatar {
        @include Width(36 * 3.2);
        @include wHeight(48 * 3.5);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info-box {
        @include FontSize(14);
        @include Padding(0, 0, 0, 15);
        box-sizing: border-box;

        .row {
            display: flex;
            @include LineHeight(30);

            .label {
                width: 6em;
            }

            .value {
                flex: 1;
            }
        }
    }
}
</style>
