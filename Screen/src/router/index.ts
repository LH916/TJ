/*
 * @Author: your name
 * @Date: 2021-10-18 15:32:37
 * @LastEditTime: 2022-03-28 16:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts\src\router\index.js
 */
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import { HomeItem } from './modules/home'
import { useAnimateStore } from '@/stores/animate'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/Monitor',

        component: () => import('@/Views/home/index.vue'),
        children: HomeItem
    },

    {
        // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
        path: '/:pathMatch(.*)',

        component: () => import('@/Views/404/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
// 使用路由拦截进行动画切换
let timer: any = null
let timermon: any = null
router.beforeEach((to: any, from, next) => {
    console.log(to, 'tototo')
    console.log(from, 'from')

    // if (
    //   ![
    //     // "Expressinterworking",
    //     // "Expressway",
    //     // "Expresstunnel",
    //     // "TollGate",
    //     // "ServiceArea",
    //   ].includes(to.name)
    // ) {

    // } else {
    //   next();
    // }
    // console.log(to);

    const animatestore = useAnimateStore && useAnimateStore()
    animatestore && animatestore.SetAnimate(false)
    timer && clearTimeout(timer)
    timermon && clearTimeout(timermon)

    timer = setTimeout(() => {
        next()
        timermon = setTimeout(() => {
            animatestore && animatestore.SetAnimate(true)
        }, 500)
    }, 200)
})

export default router
