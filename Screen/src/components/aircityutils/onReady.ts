/*
 * @Author: your name
 * @Date: 2021-08-30 15:24:44
 * @LastEditTime: 2022-05-14 18:08:29
 * @LastEditors: 张祥 17839092765@163.com
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\AirCityUtils\onReady.js
 */
import { useAirCityStore } from "@/stores/aircity";
import { useDialogStore } from "@/stores/dialog";
import { useToolsStore } from "@/stores/tools";
import { getIdByName } from "@/utils";
import { toTree } from "../tools/layerTree";

let ele: any;
let lastEvent: PointerEvent;
const OnReady = async () => {
  __g.settings.setCampassVisible(false);
  __g.misc.setMainUIVisibility(false);
  const AirCityStore = useAirCityStore();
  const dialogStore = useDialogStore();
  const ToolsStore = useToolsStore();
  __g.settings.setEnableCameraMovingEvent(true);
  const res: any = await __g.infoTree.get();
  AirCityStore.SetTreeInfo(res.infotree);

  ToolsStore.Setinfotree(toTree(res.infotree));
  AirCityStore.SetIsOnReady(true);

  ele = document.querySelector("#player video");
  if (ele) {
    ele.onclick = (e: PointerEvent) => {
      // console.log(e);
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
      lastEvent = e;
      dialogStore.setLastEvent(lastEvent);
    };
  }
};
export default OnReady;
