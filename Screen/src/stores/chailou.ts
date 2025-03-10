/*
 * @Author: your name
 * @Date: 2022-03-12 14:06:05
 * @LastEditTime: 2022-03-12 15:39:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHJT\src\stores\chailou.ts
 */
// @ts-check
import {ChaiLou} from "@/utils/chailou";
import {message} from "ant-design-vue";
import {defineStore} from "pinia";

export const useChaiLouStore = defineStore({
	id: "ChaiLou",
	state: (): {
		BuildClass: null | ChaiLou;
	} => ({
		BuildClass: null,
	}),

	actions: {
		async InitBuild() {
			const BuildInfo = [
				"jz01",
				"jz02",
				"jz03",
				"jz04",
				"jz05",
				"jz06",
				"jz07",
				"jz08",
				"jz09",
				"jz10",
				"jz11",
				"jz12",
				"jz13",
				"jz14",
				"jz15",
				"jz16",
				"jz17",
				"jz18",
				"jz19",
				"jz20",
				"jz21",
				"jz22",
				"jz23",
				"jz24",
				"jz25",
				"jz26",
				"jz27",
				"jz28",
				"jz29",
				"jz30",
				"jz31",
				"jz32",
				"jz33",
				"jz34",
				"jz35",
				"jz36",
			];
			const BuildClass = new ChaiLou({
				id: "DTS",
				tileLayers: BuildInfo,
				NeedHide: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
				],
			});
			await BuildClass.addcustomObject();
			// alert(1);
			message.success("模型初始化完成！");
			this.$patch({
				BuildClass,
			});
		},
		async ClickLayer(val: number, status: boolean) {
			this.$state.BuildClass?.ClickLayer({
				val,
				status,
			});
		},
		async XRay(status: any) {
			this.$state.BuildClass?.XRay({status});
		},
		async Show_All() {
			this.$state.BuildClass?.ShowAll();
		},
		async Hide_All() {
			this.$state.BuildClass?.HideAll();
		},
		async Close_Lights() {
			await this.$state.BuildClass?.closeLights();
		},
		async Open_Lights() {
			await this.$state.BuildClass?.openLights();
		},
	},
});
