import { Ref, ref } from 'vue'

export interface MarkerInfo {
    id: number
    name?: string
    type: string
    markerCover: string
    point: [number, number, number]
    cameraVisit?: [number, number, number] // 摄像头旋转角度
    info: any // 弹窗里面的信息
    geometry: {
        type: string
        coordinates: Array<number>
    }
    properties: {
        Name: string
    }
}
export interface customObjectInfo {
    id: string
    pakFilePath?: string
    assetPath: string
    location: string
    point: [number, number, number]
    rotation: [number, number, number]
    scale: [number, number, number]
    coordinateType?: [number, number, number] // 摄像头旋转角度
    info: any // 弹窗里面的信息
    smoothMotion: number
}

// 添加marker
export const AddAreaMarkerList = (type: boolean, DataList: MarkerInfo[]) => {
    const MarkerList: any = []

    if (type) {
        DataList.forEach((item, index) => {
            const textName: Ref<string> = ref('')
            console.log(item.properties.Name.length, 'item.properties.Name.length')

            switch (item.properties.Name.length) {
                case 2:
                    textName.value = `${item.properties.Name[0]}\n${item.properties.Name[1]}`
                    break
                case 3:
                    textName.value = `${item.properties.Name[0]}\n${item.properties.Name[1]}\n${item.properties.Name[2]}`
                    break
                case 4:
                    textName.value = `${item.properties.Name[0]}\n${item.properties.Name[1]}\n${item.properties.Name[2]}\n${item.properties.Name[3]}`
                    break
                case 5:
                    textName.value = `${item.properties.Name[0]}\n${item.properties.Name[1]}\n${item.properties.Name[2]}\n${item.properties.Name[3]}\n${item.properties.Name[4]}`
                    break

                default:
                    break
            }
            const obj1 = {
                id: `${item.type}-${item.properties.Name}`,
                coordinate: item.geometry.coordinates, //坐标位置
                coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                range: [0, 1000000], //可视范围
                GroupID: 'areaId',
                anchors: [-(100 / 1.5), 200 / 1.5],
                imagePath: window.location.origin + '/img/markerTag.png', //显示图片路径
                imageSize: [100 / 1.5, 200 / 1.5], //图片的尺寸
                text: `${textName.value}`, //显示的文字
                useTextAnimation: true, //打开文字展开动画效果
                userData: JSON.stringify(item.properties.Name),
                textRange: [0, 1000000], //文本可视范围[近裁距离, 远裁距离]
                textBackgroundColor: [1.0, 1.0, 1.0, 0], //文本背景颜色
                fontSize: 13, //字体大小
                textOffset: [-30, -15], // 文本偏移
                showLine: false,
                autoHeight: true,
                fontColor: Color.White, //字体颜色
                // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
                displayMode: 1, //显示模式
                occlusionCull: false
            }
            MarkerList.push(obj1)
        })
        console.log(MarkerList, 'MarkerList')

        __g.marker.add(MarkerList)
    } else {
        DataList.forEach(item => {
            MarkerList.push(`${item.type}-${item.properties.Name}`)
        })
        __g.marker.delete(MarkerList)
    }
}
// 批量添加自定义对象
export const AddCameraObjects = async (type: boolean, DataList: customObjectInfo[]) => {
    // debugger
    const listArr: Array<any> = []
    if (type) {
        // debugger
        DataList?.forEach((item, index) => {
            // debugger
            listArr.push({
                id: `CameraObjects${index}`, //自定义对象唯一id

                pakFilePath: ``, //pak文件路径
                // pakFilePath: '@path:DTS_Library.pak', //pak文件路径
                GroupId: 'CameraObjects',
                assetPath: '/JC_CustomAssets/EffectLibrary/Exhibition/Point/Point_B_4', //资源目录，自定义对象在pak文件资源包里的相对路径
                location: item, //位置坐标
                coordinateType: 0, // 坐标系类型
                rotation: [0, 0, 0], //旋转
                scale: [40, 40, 40], //缩放
                smoothMotion: 1 //1: 平滑插值，0: 跳跃
            })

            // listArr.push({
            //     id: `CameraObjects${index}`,
            //     groupId: 'marker3dTest',
            //     text: 'Building No.1', //3D标注显示文字
            //     textSize: 20, //3D标注显示文字大小
            //     textColor: '#6BF4F7', //3D标注显示文字颜色
            //     textOutlineSize: 1, //3D标注显示文字轮廓大小
            //     textOutlineColor: Color.Black, // 3D标注显示文字轮廓颜色
            //     textFixed: true, // 3D标注显示文字是否固定文本朝向
            //     textVisible: true, //3D标注显示文字是否显示文本
            //     textLocation: [0, 0, 0], // 文字位置
            //     textRotation: [0, 90, 0], // 文字旋转
            //     textScale: [10, 10, 10], // 文字缩放
            //     pointName: 'Point_B_5', //3D标注展示的特效名称
            //     pointVisible: true, //3D标注是否显示
            //     pointScale: 5, //3D标注整体缩放比例
            //     coordinate: [643975.42, 2701114.56, 1421.7278125], //3D标注的坐标位置 注意：若坐标Z设置高度为0时 autoHeight=true则会显示在物体上方
            //     coordinateType: 0, //坐标系类型
            //     range: [1, 10000], //3D标注的可视距离范围：[min,max]，单位：米
            //     autoHeight: false //自动判断下方是否有物体，设置正确高度，默认值：false
            // })
        })
        // let o = ;
        await __g.customObject.add(listArr)
        // await __g.marker3d.add(listArr)
        // __g.customObject.focus(listArr[0].id);
    } else {
        DataList.forEach((item, index) => {
            listArr.push(`CameraObjects${index}`)
        })
        __g.customObject.delete(listArr)
    }
}
// 获取随机的100个坐标
let x: any
let y: any
let arr: Array<any>
export const getCord = () => {
    const ArrData: Ref<Array<any>> = ref([])
    for (let i = 0; i < 100; i++) {
        x = 643524 + Math.round(Math.random() * 3000)
        y = 2700308 + Math.round(Math.random() * 3000)
        arr = [x, y, 1434.3453369140625]
        ArrData.value.push(arr)
    }
    return ArrData.value
}

// 添加自定义车子
export const AddKCar = async () => {
    //添加前清空所有customObject 防止id重复
    // await __g.customObject.clear();
    //投影坐标
    //__co_location = [495490.90625, 2490908, 0.25009766221046448];
    const o = {
        id: 'Bus-car', //自定义对象唯一id

        pakFilePath: ``, //pak文件路径
        // pakFilePath: '@path:DTS_Library.pak', //pak文件路径
        assetPath: '/JC_CustomAssets/ObjectLibrary/Exhibition/交通工具/车辆/轿车_1', //资源目录，自定义对象在pak文件资源包里的相对路径
        location: [644011.5, 2701108.25, 1421.927856], //位置坐标
        coordinateType: 0, // 坐标系类型
        rotation: [50, 0, 0], //旋转
        localRotation: [0, 90, 0], //模型自身旋转
        scale: [0.7, 0.7, 0.7], //缩放
        smoothMotion: 0 //1: 平滑插值，0: 跳跃
    }
    await __g.customObject.add(o)
    // __g.customObject.focus(o.id);
    StartMove()
}
export const AddJCar = async () => {
    //添加前清空所有customObject 防止id重复
    // await __g.customObject.clear();
    //投影坐标
    //__co_location = [495490.90625, 2490908, 0.25009766221046448];
    const o1 = {
        id: 'JC-car', //自定义对象唯一id

        pakFilePath: ``, //pak文件路径
        // pakFilePath: '@path:DTS_Library.pak', //pak文件路径
        assetPath: '/JC_CustomAssets/ObjectLibrary/Exhibition/交通工具/车辆/SUV_1', //资源目录，自定义对象在pak文件资源包里的相对路径
        location: [643971.4375, 2701150.5, 1421.927856], //位置坐标
        coordinateType: 0, // 坐标系类型
        rotation: [0, 0, 0], //旋转
        localRotation: [0, 90, 0], //模型自身旋转
        scale: [1, 1, 1], //缩放
        smoothMotion: 0 //1: 平滑插值，0: 跳跃
    }
    await __g.customObject.add(o1)
    //   __g.customObject.focus(o.id);
    StartMoveOne()
}
const poiData = [
    [644009.0625, 2701107.75, 1421.927856],
    [644006.25, 2701108, 1421.927856],
    [644003.25, 2701108.25, 1421.927856],
    [643999.4375, 2701108.5, 1421.927856],
    [643995.625, 2701108.75, 1421.927856],
    [643993.25, 2701109, 1421.927856],
    [643989.6875, 2701108.75, 1421.927856],
    [643986.375, 2701108.75, 1421.927856],
    [643980.625, 2701108.5, 1421.727783],
    [643976.125, 2701108.25, 1421.727783],
    [643967.8125, 2701108.25, 1421.727783],
    [643962.4375, 2701105, 1421.727783]
]
const poiDataOne = [
    [643971.4375, 2701150.5, 1421.927856],
    [643971.1875, 2701147.75, 1421.927856],
    [643970.875, 2701144, 1421.927856],
    [643970.625, 2701139.5, 1421.927856],
    [643970.1875, 2701134.75, 1421.927856],
    [643969.9375, 2701130.25, 1421.927856],
    [643969.75, 2701126, 1421.927856],
    [643969.3125, 2701122, 1421.727783],
    [643969, 2701118.75, 1421.727783],
    [643968.375, 2701115.75, 1421.727783],
    [643965, 2701110.5, 1421.727783],
    [643959.6875, 2701111, 1421.9278564453125]
]
const StartMove = async () => {
    const pathPointArr = poiData.map((item, index) => {
        return { time: index * 0.5, coordinate: item }
    })
    //车辆按GPS轨迹移动
    await __g.customObject.startMove('Bus-car', 0, pathPointArr) //Point_R_5
    // AttachCustomObject();
}
const StartMoveOne = async () => {
    const pathPointArr = poiDataOne.map((item, index) => {
        return { time: index * 0.5, coordinate: item }
    })
    //车辆按GPS轨迹移动
    await __g.customObject.startMove('JC-car', 0, pathPointArr, (res: any) => {
        console.log('已完成')
    })
    // AttachCustomObject();
}

//添加自定义3Dmarker
export const AddMarker3d = async () => {
    __g.marker3d.clear()
    const o = {
        id: 'm1',
        text: '', //3D标注显示文字
        textSize: 18, //3D标注显示文字大小
        textColor: [1, 1, 1, 1], //3D标注显示文字颜色
        textOutlineSize: 1, //3D标注显示文字轮廓大小
        textOutlineColor: Color.Black, // 3D标注显示文字轮廓颜色
        textFixed: true, // 3D标注显示文字是否固定文本朝向
        textVisible: true, //3D标注显示文字是否显示文本
        textLocation: [0, 0, 0], // 文字位置
        textRotation: [0, 0, 0], // 文字旋转
        textScale: [1, 1, 1], // 文字缩放
        GroupId: 'Marker3D',
        pointName: 'Point_R_5', //3D标注展示的特效名称
        pointVisible: true, //3D标注是否显示
        pointScale: 3, //3D标注整体缩放比例
        coordinate: [643962.6875, 2701109, 1421.727783203125], //3D标注的坐标位置 注意：若坐标Z设置高度为0时 autoHeight=true则会显示在物体上方
        coordinateType: 0, //坐标系类型
        range: [1, 10000], //3D标注的可视距离范围：[min,max]，单位：米
        autoHeight: true //自动判断下方是否有物体，设置正确高度，默认值：false
    }
    await __g.marker3d.add(o)
}

// 添加自定义marker标签
export const AddMarker3dName = async (type: boolean, DataList: any) => {
    // __g.marker3d.clear();
    const listArr: any = []
    if (type) {
        DataList.forEach((item: any, index: number) => {
            const textName: Ref<string> = ref('')
            console.log(item.name.length, 'item.properties.Name.length')

            switch (item.name.length) {
                case 2:
                    textName.value = `${item.name[0]}\n${item.name[1]}`
                    break
                case 3:
                    textName.value = `${item.name[0]}\n${item.name[1]}\n${item.name[2]}`
                    break
                case 4:
                    textName.value = `${item.name[0]}\n${item.name[1]}\n${item.name[2]}\n${item.name[3]}`
                    break
                case 5:
                    textName.value = `${item.name[0]}\n${item.name[1]}\n${item.name[2]}\n${item.name[3]}\n${item.name[4]}`
                    break

                default:
                    break
            }

            const obj1 = {
                id: `xzqh${index}`,
                coordinate: item.coordinates, //坐标位置
                coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                range: [0, 1000000], //可视范围
                GroupID: 'areaId',
                anchors: [-(100 / 1.5), 200 / 1.5],
                imagePath: '@path:智慧弥勒/img/markerTag.png', //显示图片路径
                imageSize: [100 / 1.5, 200 / 1.5], //图片的尺寸
                text: `${textName.value}`, //显示的文字
                useTextAnimation: true, //打开文字展开动画效果
                textRange: [0, 1000000], //文本可视范围[近裁距离, 远裁距离]
                textBackgroundColor: [1.0, 1.0, 1.0, 0], //文本背景颜色
                fontSize: 13, //字体大小
                textOffset: [-30, -15], // 文本偏移
                showLine: false,
                autoHeight: true,
                fontColor: Color.White, //字体颜色
                // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
                displayMode: 2, //显示模式
                occlusionCull: false
            }
            listArr.push(obj1)
        })
        console.log(listArr, 'listArr')

        __g.marker.add(listArr)
    } else {
        DataList.forEach((item: any, index: number) => {
            listArr.push(`xzqh${index}`)
        })
        __g.marker.delete(listArr)
    }

    // if (type) {
    //
    // }else{

    // }
}
