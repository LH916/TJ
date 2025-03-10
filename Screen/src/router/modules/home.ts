/*
 * @Author: 张祥 17839092765@163.com
 * @Date: 2022-05-12 17:00:20
 * @LastEditors: 张祥 17839092765@163.com
 * @LastEditTime: 2022-05-24 22:03:32
 * @FilePath: \20220510_CGSY_FREEDO_SZ_MLSZHCSdemo\src\router\modules\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from "vue-router";

export const HomeItem: Array<RouteRecordRaw> = [
  {
    name: "Monitor",
    path: "Monitor",
    component: () => import("@/Views/home/Monitor/index.vue"),
  },
  {
    name: "EmergencyManagement",
    path: "EmergencyManagement",
    component: () => import("@/Views/home/EmergencyManagement/index.vue"),
  },
  {
    name: "IntelligentSecurity",
    path: "IntelligentSecurity",
    component: () => import("@/Views/home/IntelligentSecurity/index.vue"),
  },
  {
    name: "OverAll",
    path: "OverAll",
    component: () => import("@/Views/home/OverAll/index.vue"),
  },
  {
    name: "SituationAwareness",
    path: "SituationAwareness",
    component: () => import("@/Views/home/SituationAwareness/index.vue"),
  },
];
