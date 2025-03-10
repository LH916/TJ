export interface MarkerInfo {
    id: number,
    name?: string,
    type: string,
    markerCover: string,
    point: [number, number, number],
    cameraVisit?: [number, number, number], // 摄像头旋转角度
    info: any, // 弹窗里面的信息
}

// 添加摄像头
export const AddCameraList = (DataList: MarkerInfo[]) => {
    const objList: any = []
    DataList.forEach((item) => {
        objList.push({
            id: "CameraPak" + item.id,

            pakFilePath: ``, //pak文件路径
            // pakFilePath: HostConfig.Path + "/media/Truck.pak", //pak文件路径
            assetPath: "/Game/INY/truck/BP_Truck", //资源目录，自定义对象在pak文件资源包里的相对路径
            location: item.point, //位置坐标
            coordinateType: 0, // 坐标系类型
            // rotation: [0, 0, 0], //旋转
            rotation: item.cameraVisit, //旋转
            scale: [1, 1, 1], //缩放
            smoothMotion: 1, //1: 平滑插值，0: 跳跃
        })

    })
    __g.customObject.add(objList)
}

// 添加marker
export const AddMarkerList = (type: boolean, DataList: MarkerInfo[]) => {
    const MarkerList: any = []
    if (type) {
        DataList.forEach((item) => {
            const obj1 = {
                id: `${item.type}-${item.id}`,
                coordinate: item.point,//坐标位置
                coordinateType: 0,//默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                range: [10, 5000],//可视范围
                imagePath: window.location.origin + item.markerCover,//显示图片路径
                imageSize: [50, 50],//图片的尺寸
                text: `${item.info.name}`,//显示的文字
                useTextAnimation: true,//打开文字展开动画效果
                textRange: [100, 6000],//文本可视范围[近裁距离, 远裁距离]
                textBackgroundColor: [1.0, 1.0, 1.0, 0],//文本背景颜色
                fontSize: 16,//字体大小
                // textOffset: [-120, -50],// 文本偏移
                showLine: false,
                autoHeight: false,
                fontColor: Color.White,//字体颜色
                // fontOutlineColor: [1.0, 1.0, 1.0, 0],//字体轮廓线颜色
                displayMode: 2,//显示模式 
            }
            MarkerList.push(obj1)
        })
        __g.marker.add(MarkerList)

    } else {
        DataList.forEach((item) => {
            MarkerList.push(`${item.type}-${item.id}`)
        })
        __g.marker.delete(MarkerList);
    }
}