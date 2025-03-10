/*
 * @Author: your name
 * @Date: 2022-03-30 10:19:03
 * @LastEditTime: 2022-04-07 19:48:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\stores\tools.ts
 */
import { defineStore } from 'pinia'
import { useDialogStore } from './dialog'

export const useToolsStore = defineStore({
    id: 'Tools',
    state: () => ({
        //   图层树展示
        LayerTreeShow: false,
        infotree: null,
        // 导览列表展示
        AnimationShow: false,
        // 天空盒展示
        SkyBoxShow: false,
        // 气象展示
        WeatherShow: false,
        // 建筑拆解展示
        BuildShow: false,
        // 拆楼信息保存
        Buildinfo: null,
        // 水淹分析弹窗
        FloodShow: false,
        //UI显隐
        UIShow: false
    }),

    actions: {
        async SetLayerTreeShow(pyload: any) {
            this.$patch({
                LayerTreeShow: pyload
            })
        },
        async Setinfotree(pyload: any) {
            this.$patch({
                infotree: pyload
            })
        },
        async SetAnimationShow(pyload: any) {
            this.$patch({
                AnimationShow: pyload
            })
        },
        async SetSkyBoxShow(pyload: any) {
            this.$patch({
                SkyBoxShow: pyload
            })
        },
        async SetWeatherShow(pyload: any) {
            this.$patch({
                WeatherShow: pyload
            })
        },
        async SetBuildShow(pyload: any) {
            this.$patch({
                BuildShow: pyload
            })
        },
        async SetBuildinfo(pyload: any) {
            this.$patch({
                Buildinfo: pyload
            })
        },
        async SetFloodShow(pyload: any) {
            this.$patch({
                FloodShow: pyload
            })
        },
        async SetUIShow(pyload: any) {
            this.$patch({
                UIShow: pyload
            })
        }
    }
})
