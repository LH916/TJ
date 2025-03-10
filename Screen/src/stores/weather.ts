/*
 * @Author: your name
 * @Date: 2022-03-28 15:07:40
 * @LastEditTime: 2022-03-28 15:09:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\stores\weather.ts
 */
// @ts-check
import {defineStore} from "pinia";

export const useWeatherStore = defineStore({
	id: "weather",
	state: () => ({
		WeatherPm2P5: null,
		WeatherData: null,
	}),

	actions: {
		async SetWeatherPm2P5(pyload: any) {
			this.$patch({
				WeatherPm2P5: pyload,
			});
		},
		async SetWeatherData(pyload: any) {
			this.$patch({
				WeatherData: pyload,
			});
		},
	},
});
