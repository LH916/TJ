/*
 * @Author: your name
 * @Date: 2021-11-18 11:13:17
 * @LastEditTime: 2021-11-27 22:04:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\stores\user.ts
 */
// @ts-check
import { defineStore } from "pinia";

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */

export const useDialogStore = defineStore({
  id: "Dialog",
  state: () => ({
    dialogVisible: false,
    XY: [0, 0],
    LouInfo: {} as any,
    title: "详细信息",
    // 内容
    content: [],
    lastEvent: {} as PointerEvent,
    tag: '',
    showPipe: false
  }),
  actions: {
    setDialogVisible(dialogVisible: boolean) {
      this.$patch({
        dialogVisible,
      });
      //隐藏就销毁原有数据
      !dialogVisible && this.$patch({
        content: []
      })
    },
    setXY(XY: Array<any>) {
      this.$patch({
        XY,
      });
    },
    setLastEvent(lastEvent: any) {
      this.$patch({
        lastEvent
      })
    },
    setDialogInfo(LouInfo: any) {
      this.$patch({
        LouInfo,
      });
    },
    setTitle(title: string) {
      this.$patch({
        title,
      });
    },
    setContent(content: Array<any>) {
      console.log(content, "setContent");
      this.$patch({
        content,
      });
    },
    setTag(tag: string) {
      this.$patch({
        tag
      })
    },
    setShowPipe(showPipe: boolean) {
      this.$patch({
        showPipe
      })
    }
  },
});
