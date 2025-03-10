<template>
    <div :class="['legend-container', hasLegend ? 'w350' : '']">
        <div class="line"></div>
        <div class="list">
            <div class="legend" v-if="hasLegend">
                <slot></slot>
            </div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox v-for="(item, index) in legendList" class="item" :key="index" :label="item.name">
                    <!-- <img :src="item.imgUrl" alt="" /> -->
                    <div>{{ item.name }}</div>
                </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onUnmounted } from 'vue'

export default defineComponent({
    name: 'index',
    props: {
        legendList: {
            type: Array,
            default: () => []
        },
        hasLegend: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const self = reactive({
            legendList: props.legendList,
            checkList: []
        })
        onUnmounted(() => {
            __g.marker.clear()
        })
        watch(
            () => self.checkList,
            (newVal, oldVal) => {
                let addArr = newVal.filter(item => {
                    return !oldVal.includes(item)
                })
                let deleteArr = oldVal.filter(item => {
                    return !newVal.includes(item)
                })

                if (addArr.length) {
                    context.emit('addMarker', addArr[0])
                }

                if (deleteArr.length) {
                    context.emit('deleteMarker', deleteArr[0])
                }
            }
        )
        return {
            ...toRefs(self)
        }
    }
})
</script>

<style scoped lang="scss">
.legend-container {
    position: fixed;
    //z-index: 11;
    display: flex;
    @include Width(190);
    @include minWHeight(250);
    height: auto;
    @include Right(800);
    @include Bottom(40);
    background-color: rgba(121, 137, 198, 0.302);
    flex-wrap: wrap;
    @include Padding(10, 10, 10, 10);
    // justify-content: space-between;
    z-index: 999;
    &.w350 {
        @include Width(350);
    }
    .list {
        // @include maxWidth(300);
        width: 100%;
        display: flex;
        .legend {
            width: 50%;
            // background: #000;
            height: 100%;
        }
    }
    .line {
        @include hHeight(2);
        @include Width(330);
        background: rgba(204, 204, 204, 0.5);
    }

    ::v-deep(.el-checkbox-group) {
        // width: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        @include Padding(0, 20, 0, 20);
        justify-content: space-between;

        // @include maxWHeight(250);
        .el-checkbox {
            // @include maxWidth(123);
            // @include MarginRight(0);
            @include wHeight(27.6);
            @include Margin(10, 0, 0, 3);

            .el-checkbox__input.is-checked .el-checkbox__inner {
                background-color: #fff;
                border-color: #333;

                &::after {
                    border: 1px solid #000;
                    border-top: 0px;
                    border-left: 0px;
                }
            }
            .el-checkbox__input {
                @include LineHeight(27.6);
            }
            .el-checkbox__label {
                display: inline-block;
                @include Width(110);
                color: #fff;
                @include LetterSpacing(1);
                display: flex;
                @include LineHeight(27.6);
                img {
                    @include Width(20);
                    @include wHeight(27.6);
                    @include MarginRight(15);
                }
            }
        }
    }
}
</style>
