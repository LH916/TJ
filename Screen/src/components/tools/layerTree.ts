/*
 * @Author: your name
 * @Date: 2022-03-30 10:37:48
 * @LastEditTime: 2022-04-27 11:38:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\components\tools\layerTree.ts
 */
import { useAirCityStore } from "@/stores/aircity";
import { useToolsStore } from "@/stores/tools";
export const toTree = (data: any) => {
  const fixedArr = data.map((item: any) => {
    return {
      label: item.name,
      id: item.iD,
      visiblity: item.visiblity,
      index: item.index,
      parentIndex: item.parentIndex,
      color: item.color
        ? item.color.replace("RGB", "rgb")
        : "rgb(255, 255, 255)",
      style: item.style ? item.style : 0,
      type: item.type,
    };
    // delete item.children;
  });
  const map: any = {};
  fixedArr.forEach(function (item: any) {
    map[item.index] = item;
  });
  const val: any = [];
  fixedArr.forEach(function (item: any) {
    const parent = map[item.parentIndex];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      val.push(item);
    }
  });
  return val;
};
export function controlInfoTree(id: any, key: any, value: any, children?: any) {
  console.log(id, "id");
  const AirCityStore: any = useAirCityStore();
  const ToolsStore: any = useToolsStore();
  // cur 图层的id  key 要设置的属性  value 值
  // 操作显影
  if (key === "visiblity") {
    // 操作图层
    if (value) {
      __g.infoTree.show(id);
    } else {
      __g.infoTree.hide(id);
    }
    const result = AirCityStore.$state.TreeInfo.map((item: any) => {
      // console.log(item,"AirCityStoreitem")
      if (item.iD === id) {
        item[key] = value;
        // if(item.ype==="EPT_Folder"){
        //
        // }
      }
      return item;
    });
    // console.log(result);
    AirCityStore.SetTreeInfo(result);
    ToolsStore.Setinfotree(toTree(result));
  } else if (key === "style") {
    const cur = AirCityStore.$state.TreeInfo.find((item: any) => {
      return item.iD === id;
    });
    // let { style, color } = value;
    // let styleObj = {}
    // 后者覆盖前者
    // if(style){
    //   styleObj.style = style
    // }else if(cur.style){
    //   styleObj.style = cur.style
    // }else{

    // }
    const styleObj = Object.assign(
      { style: 0, color: "RGB(255,255,255)" },
      { style: cur.style, color: cur.color },
      value
    );
    // console.log({ style: 0, color: "RGB(255,255,255)" }, { style: cur.style, color: cur.color }, { style, color }, styleObj);
    // // 操作样式
    __g.tileLayer.setStyle(id, styleObj.style, styleObj.color);
    const result = AirCityStore.$state.TreeInfo.map((item: any) => {
      if (item.iD === id) {
        item.style = styleObj.style;
        item.color = styleObj.color;
      }
      return item;
    });
    console.log(result);
  }
  // 操作数据

  // store.commit("Data/infoTreeMock", result)
  // store.commit("Data/newInfotree", toTree(result))
}
