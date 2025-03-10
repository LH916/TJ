<!--
 * @Author: your name
 * @Date: 2022-02-22 18:36:34
 * @LastEditTime: 2022-05-17 11:29:01
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\header\index.vue
-->
<!-- header -->
<template>
    <div class="header">
        <div @click="carmeraresize" class="title">{{ title }}</div>
    </div>
    <div class="left-bg">
        <div class="weather-box">
            <div class="bg-box"></div>
            <div class="weather-item">
                <div class="label">温度</div>
                <div class="value">26℃</div>
            </div>
            <div class="weather-item">
                <div class="label">湿度</div>
                <div class="value">37%</div>
            </div>
            <div class="weather-item">
                <div class="label">风向</div>
                <div class="value">north 3 th</div>
            </div>
        </div>
    </div>
    <div class="right-bg">
        <div class="info"></div>
        <div class="tool">
            <div @click="UIClick">
                <el-tooltip class="box-item" effect="dark" content="UI显隐" placement="bottom">
                    <Icon :color="UIShow ? '#7afafe' : '#fff'" :font-size="30" icon="mianban" />
                </el-tooltip>
            </div>
            <div @click="LayerTreeClick">
                <el-tooltip class="box-item" effect="dark" content="图层树" placement="bottom">
                    <Icon :color="LayerTreeshow ? '#7afafe' : '#fff'" :font-size="30" icon="tucengshu" />
                </el-tooltip>
            </div>
            <div @click="AnimationClick">
                <el-tooltip class="box-item" effect="dark" content="导览" placement="bottom">
                    <Icon :color="AnimationShow ? '#7afafe' : '#fff'" :font-size="26" icon="xunimanyou" />
                </el-tooltip>
            </div>
            <div @click="WeatherClick">
                <el-tooltip class="box-item" effect="dark" content="气象" placement="bottom">
                    <Icon :color="WeatherShow ? '#7afafe' : '#fff'" :font-size="30" icon="qixiangjiance" />
                </el-tooltip>
            </div>
            <div @click="FloodClick">
                <el-tooltip class="box-item" effect="dark" content="水淹分析" placement="bottom">
                    <Icon :color="FloodShow ? '#7afafe' : '#fff'" :font-size="26" icon="shuiyanfenxi" />
                </el-tooltip>
            </div>
        </div>
        <div class="time">
            <span>
                {{ time }}
            </span>
        </div>
        <!-- <div @click="openlink" class="link">
      <img src="@/assets/images/基础/二维码@2x.png" alt=""/>
    </div> -->
    </div>
</template>

<script lang="ts" setup>
import Dayjs from 'dayjs'
import { getWeather, getWeatherCityId, getWeatherPm2P5 } from '@/api/connect'
import { onMounted, onUnmounted, ref } from 'vue'
// import Heard_link from "./heard_link.vue";
import { BPFunction } from '@/utils/BPFunction'
import { useWeatherStore } from '@/stores/weather'
import Icon from '../Icon/index.vue'
import { useToolsStore } from '@/stores/tools'
import { computed } from '@vue/reactivity'
import { useAirCityStore } from '@/stores/aircity'
const AirCityStore = useAirCityStore()

const IsOnReady = computed(() => AirCityStore.$state.IsOnReady)
const title = computed(() => (window as any).Common_config.title || '数字孪生智慧xx管理平台')
const carmeraresize = () => {
    //   IsOnReady &&
    //     __g.camera.set(
    //       644107.52,
    //       2700344.229531,
    //       1622.757813,
    //       -24.008196,
    //       -88.962563,
    //       1.5
    //     );
    console.log('reset')
    ;(window as any).Common_config.reset()
}
// 获取当前时间
const date: any = ref('')
const time: any = ref('')
const get_Date_Time = () => {
    let date_time = Dayjs().format('YYYY-MM-DD/HH:mm:ss').split('/')
    date.value = date_time[0]
    time.value = date_time[1]
}
let WeatherData = ref()
let WeatherPm2P5 = ref()
const WeatherStore = useWeatherStore()
const getWeatherData = async () => {
    // 开发环境时把天气地区设置成深圳
    let name = process.env.NODE_ENV === 'development' ? '深圳' : '深圳'
    /**
     * @description: 获取城市ID
     * @param {any} 城市名
     * @return {any} 城市ID
     */
    const CityId: any = await getWeatherCityId(name)
    /**
     * @description: 获取城市一天的天气信息
     * @param {any} 城市ID
     * @return {any}城市一天的天气信息
     */
    // console.log(CityId, "CityId");

    const CityWeather: any = await getWeather(CityId.location[0].id)
    // CityWeather.now.icon === "154" ? (CityWeather.now.icon = "104") : null;
    // console.log(CityWeather, "CityWeather");

    WeatherData.value = CityWeather
    WeatherStore.SetWeatherData(WeatherData.value)
    // console.log(WeatherData, "WeatherData");

    /**
     * @description: 获取pm2.5数据
     * @param {any}  城市id
     * @return {any} pm2.5数据
     */
    const CityWeather_Pm2P5 = await getWeatherPm2P5(CityId.location[0].id)
    WeatherPm2P5.value = CityWeather_Pm2P5
    WeatherStore.SetWeatherPm2P5(WeatherPm2P5.value)

    // console.log(CityWeather_Pm2P5);
}
const WeahterLink = () => {
    window.open(WeatherData.value.fxLink)
}
const Weahter_aqiLink = () => {
    window.open(WeatherPm2P5.value.fxLink)
}
const openlink = () => {
    window.open('http://www.freedoonline.com')
}

// 工具点击事件
const ToolsStore = useToolsStore()
const LayerTreeshow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)
const SkyBoxShow = computed(() => ToolsStore.$state.SkyBoxShow)
const WeatherShow = computed(() => ToolsStore.$state.WeatherShow)
const FloodShow = computed(() => ToolsStore.$state.FloodShow)
const UIShow = computed(() => ToolsStore.$state.UIShow)
const LayerTreeClick = () => {
    ToolsStore.SetLayerTreeShow(!LayerTreeshow.value)
}
const UIClick = () => {
    const val = !UIShow.value
    ToolsStore.$state.UIShow = val
    __g.settings.setMainUIVisibility(val)
}
const AnimationClick = () => {
    ToolsStore.SetAnimationShow(!AnimationShow.value)
}
const WeatherClick = () => {
    ToolsStore.SetWeatherShow(!WeatherShow.value)
}
const FloodClick = () => {
    ToolsStore.SetFloodShow(!FloodShow.value)
}
let timer = ref()
onMounted(async () => {
    get_Date_Time()

    timer.value = setInterval(() => {
        get_Date_Time()
    }, 1000)
    await getWeatherData()
    // BPFunction(1)
})
onUnmounted(() => {
    clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.header {
cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    @include wHeight(105);
    // background: rgba(0, 0, 0, 0.301);
    background: url('~@/assets/images/基础/header/top_middle_bg@2x.png') no-repeat;
    background-size: 100% 100%;
    justify-content: center;
    top: 0;
    @include FontSize(12);
    z-index: 10;

    .logo {
        @include Width(400);
        @include wHeight(46);
        @include LineHeight(46);
        text-align: center;
        // background-size: 100% 100%;
        position: absolute;
        // @include Left(350);
        @include Left(0);
        right: 0;
        top: 0;
        // background: #000;
        margin: auto;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;
        // @include PaddingTop(12);
        cursor: pointer;
        z-index: 100;

        .tit {
            @include FontSize(24);
            @include LetterSpacing(3);
            @include wHeight(40);
            font-family: Oppo, serif;

            @include MarginBottom(5);
            font-weight: 600;
            //text-shadow: 0 0 5px #98deff;
        }

        .titeng {
            @include FontSize(14);
        }
    }

    .rightbg {
        position: absolute;
        right: 0;
        @include Width(400);
        height: 100%;
        background: linear-gradient(to left, #000000d8 0%, #000000b6 20%, #00000098 40%, #00000077 60%, #00000054 80%, #00000000 100%);
    }

    .title {
        @include FontSize(36);
        color: #ffffff;
        position: absolute;
        @include Top(20);
        @include LetterSpacing(4.91);
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        //@include tex
    }
}

.left-bg,
.right-bg {
    @include Width(756);
    @include wHeight(77);
    position: absolute;
    @include Top(-10);
    z-index: 20;
    @include PaddingRight(60);
}

.left-bg {
    left: 0;
    background: url('~@/assets/images/基础/top_left_bg@2x.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    //justify-content: center;
    align-items: center;

    .weather-box {
        @include PaddingLeft(63);
        display: flex;
        @include PaddingTop(20);

        .bg-box {
            background: url('~@/assets/images/基础/header/103@2x.png') no-repeat;
            background-size: 100% 100%;
            @include Width(47);
            @include wHeight(41);
            @include MarginRight(31);
        }

        .weather-item {
            @include Padding(0, 42, 0, 42);
            border-left: 1.5px solid rgba(255, 255, 255, 0.4);
            @include wHeight(31);

            .label {
                //@include LineHeight(23);
                position: relative;
                @include Top(-5);
            }

            .value {
                //@include LineHeight(23);
                position: relative;
                @include Bottom(-5);
            }

            &:first-child {
            }
        }
    }
}

.right-bg {
    right: 0;
    background: url('~@/assets/images/基础/top_right_bg@2x.png') no-repeat;
    background-size: 100% 100%;

    .tool {
        position: absolute;
        @include wHeight(75);
        top: 0;
        z-index: 10;
        @include Right(170);
        @include Width(130);
        // @include Top(10);
        font-family: SJyunhei, serif;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @include FontSize(20);
        cursor: pointer;

        img {
            @include Width(30);

            transition: transform 0.3s;
        }

        img:hover {
        }

        img:hover {
            transform: scale(1.2);
        }
    }

    .info {
        @include FontSize(14);
        // @include wHeight(40);
        //height: 100%;
        @include Width(333);
        @include wHeight(56);
        position: absolute;
        z-index: 10;
        @include Left(24);
        @include Top(15);
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        //background: url('~@/assets/images/one/top_logo@2x.png') no-repeat;
        background-size: 100% 100%;

        .weahter {
            // @include Width(380);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            height: 100%;
            color: #ffffff;

            > .weahtermon {
                cursor: pointer;
                position: relative;
                height: 100%;
                // padding-right: 15px;
                // @include PaddingRight(15);
                @include MarginRight(15);

                font-weight: 800;

                > span {
                    display: inline-block;
                    @include MarginLeft(5);
                }

                &::after {
                    content: '';
                    position: absolute;
                    @include Width(2);
                    @include wHeight(15);

                    background: rgba(190, 190, 190, 0.856);
                    @include Right(-10);
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }

            .aqi {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .textDat {
                display: flex;
                justify-content: center;
                align-items: center;
                @include MarginLeft(4);

                i:nth-of-type(1) {
                    @include FontSize(20);
                    display: inline-block;
                    @include MarginRight(5);
                }
            }

            .temp {
                display: flex;
                justify-content: center;
                align-items: center;
                @include MarginLeft(-8);
            }

            .humidity {
                display: flex;
                justify-content: center;
                @include MarginLeft(-4);
                align-items: center;
            }

            .windDir {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .pm25 {
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                @include MarginRight(15);
                @include MarginLeft(3);
                font-weight: 800;

                > span {
                    display: inline-block;
                    @include MarginRight(3);
                }
            }
        }
    }

    .link {
        position: absolute;
        @include wHeight(75);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        @include Right(20);
        z-index: 100;
        top: 0;

        img {
            @include Width(54);
            transition: transform 0.3s;

            &:hover {
                transform: scale(2.5);
                transform-origin: 100% 0;
            }

            // margin-right: 3px;
            @include MarginRight(3);
        }
    }

    .time {
        position: absolute;
        @include wHeight(75);

        @include Top(0);

        @include Right(80);
        @include FontSize(16);
        font-family: SJyunhei;
        display: flex;
        justify-content: center;
        align-items: center;

        span:nth-of-type(1) {
            display: inline-block;
            @include MarginRight(10);
        }
    }
}

.choose {
    display: flex;
    width: 230px;
    height: 60px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    justify-content: space-around;

    .el-button {
        margin-top: 10px;
        @include Width(40);
        @include wHeight(30);
        @include LineHeight(30);
        @include Padding(5, 0, 0, 0);
        text-align: center;
        background-color: transparent;

        .svg-icon {
            @include Width(25);
            @include wHeight(25);
            vertical-align: center;
            fill: currentColor;
            overflow: hidden;
            color: #fff;
            // cursor: pointer;
        }
    }

    .active {
        .svg-icon {
            color: #7afafe;
        }
    }
}

.content {
    width: 230px;
    height: 120px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    overflow: auto;
}

.clear {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7afafe;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
</style>
