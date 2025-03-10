<!-- Equipment management 设备管理 -->
<template>
  <div class="bg">
    <HeadBar :list="headBarList" />
    <div class="equipment-management">
        <Left_box>
            <LeftView />
        </Left_box>
        <Right_box>
            <RightView />
        </Right_box>

        <tagLegend :legendList="legendList" @addMarker="addMarker" @deleteMarker="deleteMarker" />
        <Dialog v-if="groupId.indexOf('zonglan') > -1" :title="dialogStore.content.Name" :width="450" class="birefDialog">
            <div class="content">
                <img src="/img/小区图片.jpg" alt="" />
                <div class="info">
                    <p v-if="dialogStore.content.Name">名称：{{ dialogStore.content.Name }}</p>
                    <p v-if="dialogStore.content.areaname">所在区域：{{ dialogStore.content.areaname }}</p>
                    <p v-if="dialogStore.content.stdtag">关键词：{{ dialogStore.content.stdtag }}</p>
                    <p v-if="dialogStore.content.address">地址：{{ dialogStore.content.address }}</p>
                    <p v-if="dialogStore.content.kind">编号：{{ dialogStore.content.kind }}</p>
                    <p v-if="dialogStore.content.display_x">纬度：{{ dialogStore.content.display_x }}</p>
                    <p v-if="dialogStore.content.display_y">经度：{{ dialogStore.content.display_y }}</p>
                    <p v-if="dialogStore.content.telephone">手机号： {{ dialogStore.content.telephone }}</p>
                </div>
            </div>
        </Dialog>
        <Dialog v-if="groupId == 'CameraObjects'">
            <div class="content">
                <video src="/video/heliu3.mp4" autoplay muted loop></video>
            </div>
        </Dialog>
    </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, onMounted, ref, markRaw, onUnmounted } from 'vue'
import Left_box from '@/components/left_box.vue'
import Right_box from '@/components/right_box.vue'
import LeftView from './Left/index.vue'
import RightView from './Right/index.vue'

import { useDialogStore } from '@/stores/dialog'
import { Check, Close } from '@element-plus/icons-vue'
// import { useAirCityStore } from '@/stores/aircity'
import { getIdByName, waitFor } from '@/utils'
import HeadBar from '@/components/headBar/index.vue'
import { poiArr, option1 } from './data'
import tagLegend from '@/components/tagLegend/index.vue'
import axios from 'axios'
import { AddAreaMarkerList, getCord, AddCameraObjects } from '../OverAll/function'
import Dialog from '@/components/Dialog/index.vue'
import { AnimationType, playInitAnimation } from '@/utils/animation'
export default defineComponent({
    name: 'EquipmentManagement',
    components: {
        Right_box,
        Left_box,
        LeftView,
        RightView,
        HeadBar,
        tagLegend,
        Dialog
    },
    setup(props) {
        // const AirCityStore = useAirCityStore()
        const dialogStore = useDialogStore()
        // const airCityStore = useAirCityStore()
        // const IsOnReady = computed(() => AirCityStore.$state.IsOnReady)
        const pipeDialogShow = computed(() => dialogStore.$state.showPipe)
        const groupId = computed(() => dialogStore.$state.tag)
        let resultDataTwo: any = ref([])

        const self = reactive({
            headBarList: [
                // {
                //   title: "菜单1",
                //   isActive: false,
                //   clickFunc() {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       // 选中
                //     } else {
                //       // 没选中
                //     }
                //   },
                // },
                // {
                //   title: "菜单2",
                //   isActive: false,
                //   clickFunc() {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       // 选中
                //     } else {
                //       // 没选中
                //     }
                //   },
                // },
                // {
                //   title: "菜单3",
                //   isActive: false,
                //   clickFunc() {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       // 选中
                //     } else {
                //       // 没选中
                //     }
                //   },
                // },
                // {
                //   title: "菜单4",
                //   isActive: false,
                //   clickFunc() {
                //     this.isActive = !this.isActive;
                //     if (this.isActive) {
                //       // 选中
                //     } else {
                //       // 没选中
                //     }
                //   },
                // },
            ],
            legendList: [
                {
                    name: 'BOG压缩机',
                    poi: require('./PointOpt/百度poi.json'),
                    imgUrl: '@path:智慧弥勒/img/小微企业.png'
                },
                {
                    name: 'LNG储罐',
                    poi: require('./PointOpt/餐饮.json'),
                    imgUrl: '@path:智慧弥勒/img/poi_restaurant@2x.png'
                },
                {
                    name: '再冷凝器',
                    poi: require('./PointOpt/购物.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_shop@2x.png'
                },
                {
                    name: '缓冲罐',
                    poi: require('./PointOpt/金融服务.json'),

                    imgUrl: '@path:智慧弥勒/img/收费站.png'
                },
                {
                    name: '罐内低压输送泵',
                    poi: require('./PointOpt/居民小区点.json'),

                    imgUrl: '@path:智慧弥勒/img/重点企业.png'
                },
                {
                    name: '高压输送泵',
                    poi: require('./PointOpt/居委会点.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_ggfw@2x.png'
                },
                {
                    name: '压力表',
                    poi: require('./PointOpt/科研教育.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_school@2x.png'
                },
                {
                    name: '开关面板',
                    poi: require('./PointOpt/医疗服务.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_hospital@2x.png'
                },
                {
                    name: '可燃气检测传感器',
                    poi: require('./PointOpt/其他设施.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_metro@2x(1).png'
                },
                {
                    name: '温湿度传感器',
                    poi: require('./PointOpt/娱乐休闲.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_shop@2x(1).png'
                },
                {
                    name: '电压检测传感器',
                    poi: require('./PointOpt/政府机关.json'),

                    imgUrl: '@path:智慧弥勒/img/poi_ggfw@2x(2).png'
                },
                {
                    name: '人体检测传感器',
                    imgUrl: '@path:智慧弥勒/img/高铁站.png'
                },
                {
                    name: '磁检测传感器',
                    imgUrl: '@path:智慧弥勒/img/公交站.png'
                },
                {
                    name: '巡检路径规划',
                    imgUrl: '@path:智慧弥勒/img/公交站.png'
                }
            ],
            resultDataOne: [],
            async addMarker(text: keyof typeof poiArr) {
                switch (text) {
                    case '地名':
                        {
                            const { data: resultData } = await axios.get('/mock/地名.json')
                            self.resultDataOne = resultData.features
                            AddAreaMarkerList(true, resultData.features)
                        }
                        break
                    case '监控':
                        {
                            let poiData = getCord()
                            resultDataTwo.value = poiData
                            if (poiData) {
                                AddCameraObjects(true, poiData)
                                __g.camera.set(647354.79375, 2703546.67, 2100.435, -8.018484, 144.226532, 3)
                            }
                        }
                        break
                    case '重点建筑':
                        {
                            let addMarker3dArr: any = []
                            poiArr['重点建筑'].forEach((item: any, index: number) => {
                                addMarker3dArr.push({
                                    id: 'marker3d' + index,
                                    text: '', //3D标注显示文字
                                    textSize: 18, //3D标注显示文字大小
                                    textColor: [1, 1, 1, 1], //3D标注显示文字颜色
                                    textOutlineSize: 1, //3D标注显示文字轮廓大小
                                    textOutlineColor: Color.Black, // 3D标注显示文字轮廓颜色
                                    textFixed: true, // 3D标注显示文字是否固定文本朝向
                                    textVisible: true, //3D标注显示文字是否显示文本
                                    textLocation: [0, 0, 0], // 文字位置
                                    textRotation: [0, 0, 0], // 文字旋转
                                    textScale: [5, 5, 5], // 文字缩放
                                    pointName: 'Point_Y_4', //3D标注展示的特效名称
                                    pointVisible: true, //3D标注是否显示
                                    pointScale: 8, //3D标注整体缩放比例
                                    coordinate: item, //3D标注的坐标位置 注意：若坐标Z设置高度为0时 autoHeight=true则会显示在物体上方
                                    coordinateType: 0, //坐标系类型
                                    range: [1, 1000000], //3D标注的可视距离范围：[min,max]，单位：米
                                    autoHeight: false //自动判断下方是否有物体，设置正确高度，默认值：false
                                })
                            })
                            __g.marker3d.add(addMarker3dArr)
                        }
                        break
                    default:
                        {
                            let res: any = self.legendList.find(item => item.name == text)
                            let addArr: any = []
                            let square = ['百度poi', '居民小区点', '金融服务']
                            res.poi.features.forEach((item: any, index: number) => {
                                addArr.push({
                                    id: text + index,
                                    coordinate: [...item.geometry.coordinates], //坐标位置
                                    coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                                    anchors: [-16, 32], //锚点
                                    range: [0, 200000], //可视范围
                                    imagePath: res.imgUrl, //显示图片路径
                                    imageSize: square.includes(text) ? [56, 65] : [138.85, 48], //图片的尺寸
                                    fixedSize: true, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
                                    text: item.properties.Name.slice(0, 6),
                                    textRange: [0, 200000], //文本可视范围[近裁距离, 远裁距离]
                                    textOffset: square.includes(text) ? [0, 0] : [-100, 0], // 文本偏移
                                    textBackgroundColor: [0, 0, 0, 0], //文本背景颜色
                                    groupId: 'zonglan-' + text,
                                    fontSize: 12, //字体大小
                                    fontColor: [1, 1, 1], //字体颜色
                                    autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
                                    autoHeight: true, // 自动判断下方是否有物体
                                    displayMode: 1, //显示模式
                                    priority: 0, //避让优先级
                                    occlusionCull: false, //是否参与遮挡剔除
                                    userData: JSON.stringify(item.properties)
                                })
                            })

                            __g.marker.add(addArr)
                        }

                        break
                }
            },
            deleteMarker(text: keyof typeof poiArr) {
                switch (text) {
                    case '地名':
                        {
                            if (self.resultDataOne) {
                                AddAreaMarkerList(false, self.resultDataOne)
                            }
                        }

                        break
                    case '监控':
                        {
                            if (resultDataTwo.value) {
                                AddCameraObjects(false, resultDataTwo.value)
                            }
                        }

                        break
                    case '重点建筑':
                        {
                            __g.marker3d.clear()
                        }
                        break
                    default:
                        {
                            let res: any = self.legendList.find(item => item.name == text)
                            let ids = res.poi.features.map((item: any, index: number) => {
                                return text + index
                            })
                            __g.marker.delete(ids, null)
                        }
                        break
                }
            }
        })
        onMounted(async() => {
            __g.camera.set(644488.075, 2700141.319766, 1552.72625, 3.018008, -115.258972, 2)
            await waitFor(2000)
            playInitAnimation(AnimationType.csgl)
            await waitFor(500)
            await __g.camera.stopAnimation()
        })
        onUnmounted(() => {
            AddCameraObjects(false, resultDataTwo.value)
        })

        // const handleListClick = (item: typeof self.headBarList[0]) => {
        //   self.headBarList.forEach((ele) => {
        //     if (ele.isActive && ele !== item) {
        //       ele.clickFunc();
        //     }
        //   });

        //   item.clickFunc();
        // };

        return {
            ...toRefs(self),
            Check,
            Close,
            dialogStore,
            // IsOnReady,
            pipeDialogShow,
            AddCameraObjects,
            // handleListClick,
            groupId
        }
    }
})
</script>
<style lang="scss" scoped>
.bg {
  background: url("~@/assets/images/bg.png") no-repeat center/cover;
}
.dialog-container {
    @include FontSize(12);
    @include PaddingRight(15);
    //height: fit-content;
    @include PaddingTop(15);
    box-sizing: border-box;

    .title {
        color: rgb(89, 109, 128);
        @include MarginBottom(10);
        @include MarginTop(2);
    }

    .row {
        display: flex;
        @include MarginBottom(8);

        .label {
            width: 6em;
        }

        .value {
            text-align: right;
            //flex: 1;
            margin-left: auto;
            width: 7em;
            font-family: 'Signika', sans-serif;
        }
    }

    .dialog-item {
        &:nth-child(2) {
            .row {
                &:nth-child(2),
                &:nth-child(3) {
                    .value {
                        @include Padding(3, 5, 3, 5);
                        text-align: center;
                        background: url('~@/assets/images/dialog/line_content_bg_green@2x.png') no-repeat;
                        background-size: 100% 100%;
                        color: #01cff6ff;
                    }
                }

                &:nth-child(4),
                &:nth-child(5) {
                    .value {
                        color: #429cff;
                        @include Padding(3, 5, 3, 5);
                        text-align: center;
                        background: url('~@/assets/images/dialog/line_content_bg_blue@2x.png') no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
        }

        &:nth-child(3) {
            .row {
                &:nth-child(2),
                &:nth-child(3) {
                    .value {
                        @include Padding(3, 5, 3, 5);
                        //width: fit-content;
                        background: url('~@/assets/images/dialog/line_content_bg_orange@2x.png') no-repeat;
                        background-size: 100% 100%;
                        color: #feb64d;
                        text-align: center;
                    }
                }

                &:nth-child(4),
                &:nth-child(5) {
                    .value {
                        color: #9e6dff;
                        @include Padding(3, 5, 3, 5);
                        //width: fit-content;
                        background: url('~@/assets/images/dialog/line_content_bg_purple@2x.png') no-repeat;
                        background-size: 100% 100%;
                        text-align: center;
                    }
                }
            }
        }
    }

    .dialog-kpi-box {
        .row:nth-child(n + 2) {
            .value {
                font-family: Tencent, serif;
                background: linear-gradient(to left, #3dc6ea, #9d5ae4);
                color: transparent;
                -webkit-background-clip: text;
                width: fit-content;
                flex: 0;
                margin-left: auto;
                @include FontSize(18);
                @include LetterSpacing(1);
            }
        }
    }
}

.dialog-content {
    display: flex;
    @include Padding(0, 10, 0, 10);
    @include FontSize(14);
    justify-content: space-between;
    flex-wrap: wrap;

    div {
        min-width: 40%;
        max-width: 40%;
        @include wHeight(30);
        @include LineHeight(30);
        color: #ffffff;
        @include LetterSpacing(0.88);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

        &:nth-child(odd) {
            @include MarginRight(30);
        }

        &:last-child {
            width: 100% !important;
            display: flex;

            div {
                width: 50%;
            }
        }

        &.btn {
            cursor: pointer;
        }
    }
}

.dialog-tips {
    width: 100%;
    @include Padding(0, 10, 0, 10);
    @include FontSize(14);
    @include wHeight(30);
    @include LineHeight(30);
    color: #ffffff;
    @include LetterSpacing(0.88);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.dialog-bottom {
    @include Padding(0, 10, 10, 10);
    @include FontSize(14);
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #ffffff;
    @include LetterSpacing(0.88);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    > div {
        // border: 1px #fff solid;
        @include Width(100);
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
        // height: 100%;
        @include hHeight(200);
    }
}
</style>
