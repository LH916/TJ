<!--
 * @Author: your name
 * @Date: 2022-03-31 19:10:46
 * @LastEditTime: 2022-03-31 20:01:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\components\tools\Animation.vue
-->
<!-- Animation -->
<template>
    <div v-if="AnimationList && AnimationImages" class="Animation">
        <div class="list" v-for="(item, index) in AnimationList.data ? AnimationList.data : AnimationList" :key="index" @click="playAnimation(item)">
            <div class="imgbase">
                <!-- {{ index }} -->
                <img :src="'data:image/png;base64,' + AnimationImages[index].image" alt="" />
            </div>
            <div class="title">
                <span>
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAnimateStore } from '@/stores/animate'
import { onMounted, onUnmounted, ref } from 'vue'

// 导览缩略图及列表
const AnimationList = ref()
const AnimationImages = ref()
const AnimationStore = useAnimateStore()
// 播放导览
const playAnimation = (val: any) => {
    //参数：导览序号
    __g.camera.playAnimation(val.id)
}
onMounted(async () => {
    let timer: any = null
    // AnimationList.value = await __g.camera.getAnimationList()
    // console.log(AnimationList.value, 'AnimationList')
    // AnimationImages.value = await Promise.all(AnimationList.value.data.map((item: any) => __g.camera.getAnimationImage(item.name)))
    // console.log(AnimationImages.value)
    if (AnimationStore.AnimationList.length > 0 && AnimationStore.AnimationImgList.length > 0) {
        AnimationList.value = AnimationStore.AnimationList
        AnimationImages.value = AnimationStore.AnimationImgList
    } else {
        AnimationList.value = await __g.camera.getAnimationList()
        AnimationImages.value = await Promise.all(AnimationList.value.data.map((item: any) => __g.camera.getAnimationImage(item.name)))
        timer = setInterval(() => {
            if (AnimationStore.AnimationList.length > 0 && AnimationStore.AnimationImgList.length > 0) {
                clearInterval(timer)
            } else {
                AnimationStore.SetAnimationList(AnimationList.value.data)
                AnimationStore.SetAnimationImgList(AnimationImages.value)
            }
        }, 500)
    }
})
onUnmounted(() => {
    __g.camera.stopAnimation()
})
</script>
<style lang="scss" scoped>
.Animation {
    position: absolute;
    @include Width(120);
    @include hHeight(800);
    @include Top(120);
    // @include left(0);
    @include Right(50);

    //   right: 0;
    margin: auto;
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-around;
    //   align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
    .list {
        @include Width(100);
        @include hHeight(100);
        flex-shrink: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include BorderRadius(10);
        @include MarginLeft(10);
        @include MarginRight(10);
        // @include MarginTop(20);
        @include MarginBottom(20);
        // float: left;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        &:hover img {
            transform: scale(1.2);
        }
        .imgbase {
            @include Width(100);
            @include hHeight(100);
            img {
                transition: all 0.5s;
                width: 100%;

                // height: 100%;
            }
        }
        .title {
            @include Width(100);
            // @include hHeight(20);
            // // @include MarginTop(10);
            text-align: center;
            position: absolute;
            @include Bottom(15);
        }
    }
}
</style>
