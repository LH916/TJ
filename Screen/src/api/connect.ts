/*
 * @Author: your name
 * @Date: 2021-10-14 11:58:49
 * @LastEditTime: 2022-03-05 17:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\api\request.ts
 */
import axios from "@/http/HTTP";
import {Mock, Service} from "@/http/service";

export const getMockData = () => {
	return axios.get(Mock.aircity + "/test.json");
};
// 请求接口示例
export const getApiData = () => {
	return axios.get(Service.mdoel1 + "/test");
};
// 请求获取天气id接口
export const getWeatherCityId = (name: any) => {
	return axios.get(
			Service.WeatherId +
			`/v2/city/lookup?location=${name}&key=c9ababc26a504434b6fc709c2005e503`
	);
};
// 请求获取天气接口
export const getWeather = (id: any) => {
	return axios.get(
			Service.WeatherData +
			`/v7/weather/now?location=${id}&key=c9ababc26a504434b6fc709c2005e503`
	);
};
// 请求获取Pm2P5接口
export const getWeatherPm2P5 = (id: any) => {
	return axios.get(
			Service.WeatherData +
			`/v7/air/now?location=${id}&key=c9ababc26a504434b6fc709c2005e503`
	);
};

