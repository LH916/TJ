import { MarkerInfo } from "./marker"

export const CameraList:MarkerInfo[] = [
    {
        id: 1,name: "摄像头1", type: "camera", markerCover: "/customTag/images/equipment/map_icon_cctv_alarm@2x.png", point: [679.292236328125, 919.00140380859375, 20.622264862060547] , cameraVisit: [-35.361542, -116.916046, 0], info: {
            name: "摄像头1",
            cameraCover: "/video/test.mp4"
        }
    },
    {
        id: 2, name: "摄像头2",type: "camera", markerCover: "/customTag/images/equipment/map_icon_cctv_normal@2x.png", point: [648.25146484375, 916.7469482421875, 20.091445922851563] , cameraVisit: [-35.361542, -116.916046, 0], info: {
            name: "摄像头2",
            cameraCover: "/video/test.mp4"
        }
    },
]

export const zhajiList:MarkerInfo[] = [
    {
        id: 1, type: "zhaji", markerCover: "/customTag/images/equipment/map_icon_guard_alarm@2x.png", point: [646.6588134765625, 926.96649169921875, 2.8999974727630615 ], info: {
            name: "1东南角出口闸机1",
            cameraCover: "/video/test.mp4",
            status:"设备正常",
        }
    },
    {
        id: 2, type: "zhaji", markerCover: "/customTag/images/equipment/map_icon_guard_normal@2x.png", point: [627.93560791015625, 942.03204345703125, 2.8999974727630615 ], info: {
            name: "2东南角出口闸机2",
            cameraCover: "/video/test.mp4",
            status:"设备异常",
        }
    },
]