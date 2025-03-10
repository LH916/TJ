/*
 * @Author: Janio 2207597040@qq.com
 * @Date: 2023-10-12 19:18:35
 * @LastEditors: Janio 2207597040@qq.com
 * @LastEditTime: 2023-10-12 19:22:57
 * @FilePath: \20230515_CGSY_FREEDO_DTSWEEKLY_ZHGC\src\utils\animation.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 播放初始化导览
 */
let AnimationList: any = []
export const playInitAnimation = async (type = AnimationType.Initialization) => {
    const nameArr = ['导览1', '导览2', '导览3', '城市概览', '生态环境', '空中巡检', '交通模拟', '交通总览', '整体态势']
    if (!AnimationList.length) {
        const res: any = await __g.camera.getAnimationList()
        AnimationList = res.data
        const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
        await __g.camera.playAnimation(obj[0].id)
    } else {
        const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
        await __g.camera.playAnimation(obj[0].id)
    }
}

/**
 * 导览名字枚举
 */
export enum AnimationType {
    /**
     * 城市孪生 初始化
     */
    Initialization = 4,
    //精加工产线
    Roam1 = 0,
    Roam2 = 1,
    CompositeTank = 2,
    csgl = 3,   //城市概览
    sthj = 4,   //生态环境
    kzxj = 5,   //空中巡检
    jtmn = 6,   //交通模拟
    jtzl = 7,   //交通总览
    ztts = 8,   //整体态势
}
