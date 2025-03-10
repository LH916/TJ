/*
 * @Author: Janio 2207597040@qq.com
 * @Date: 2023-10-13 16:20:47
 * @LastEditors: Janio 2207597040@qq.com
 * @LastEditTime: 2023-10-13 17:26:25
 * @FilePath: \20230407_CGSY_FREEDO_DTSWEEKLY_ZHFS\public\aircity\Config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


var Common_config = {
    iid: '',
    title:'智能站场运行管理系统',
    ISDTS: true,
    reset() {
        __g.reset(7)
    },
    async download() {
        const res = await fetch('/aircity/assetsPath.json').then(res => res.json())
        const arr = []
        const markerPath = res.markerPath
        if (markerPath) {
            const arrs = res.marker3d.map(p => markerPath + p.name + '.' + p.name)
            arr.push(...arrs)
        }

        const materialPath = res.materialPath
        if (materialPath) {
            const arrs = res.other.map(p => p.path + '.' + p.path.split('/')[p.path.split('/').length - 1])
            arr.push(...arrs)
        }

        __g.misc.downloadPakFiles(arr)
    }
}

try {
    window.name
} catch (error) {
    module.exports =  Common_config 
}
