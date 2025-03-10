/*
 * @Author: your name
 * @Date: 2021-08-02 01:30:11
 * @LastEditTime: 2022-05-25 21:28:14
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\tools\Event.js
 */
// import {useDialogStore} from "@/stores/dialog";

import { useDialogStore } from "@/stores/dialog";
import { getIdByName } from "@/utils";

const dialogStore = useDialogStore();
const OnEvent = async (e: {
  eventtype: string;
  PropertyName?: string;
  UserData?: string;
  ObjectID?: string;
  Id?: string;
  GroupID?: string;
  MouseClickPoint?: number[];
  Type?: string;
  Position?: any;
}) => {
  // const Router = useRouter();
  // 判断是否为左键点击的交互
  if (e.eventtype === "LeftMouseButtonClick") {
    console.log(e, "LeftMouseButtonClick");

    if (e.Type === "marker") {
      if (e.GroupID === "淹没分析") {
        const lastEvent = dialogStore.lastEvent;
        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
        dialogStore.setTag(e.GroupID);
        dialogStore.setDialogVisible(true);
      }
      if (e.GroupID == "areaId") {
        const lastEvent = dialogStore.lastEvent;
        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
        dialogStore.setTag(e.GroupID);
        dialogStore.setDialogVisible(true);
      }
      if (e.GroupID && e.GroupID.indexOf("zonglan-") > -1) {
        const lastEvent = dialogStore.lastEvent;
        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
        dialogStore.setTag(e.GroupID);
        dialogStore.setDialogVisible(true);
        e.UserData && dialogStore.setContent(JSON.parse(e.UserData));
      }
    }
    if (e.Type === "CustomObj" && e.GroupID === "CameraObjects") {
      const lastEvent = dialogStore.lastEvent;
      dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
      dialogStore.setTag(e.GroupID);
      dialogStore.setDialogVisible(true);
    }
    if (e.Type === "3D Marker" && e.GroupID === "Marker3D") {
      const lastEvent = dialogStore.lastEvent;
      dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
      dialogStore.setTag(e.GroupID);
      dialogStore.setDialogVisible(true);
    }
    if (e.Type === "marker" && e.GroupID?.includes("SituationAwareness_")) {
      const lastEvent = dialogStore.lastEvent;
      dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
      dialogStore.setTag(e.GroupID);
      dialogStore.setDialogVisible(true);
    }
  }

  if (e.eventtype === "CameraMoving") {
    console.log(e, "CameraMoving");
    if (e.Position[2] > 9474) {
        //   console.log(1);
      __g.weather.setDarkMode(true, null);
    } else {
      __g.weather.setDarkMode(false, null);
    }
  }
  if (e.eventtype === "CameraTourFinished") {
    console.log("导览播放结束");
  }
};

export default OnEvent;
const waitFor = (timeout = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};
