/*
 * @Author: your name
 * @Date: 2021-08-02 00:30:53
 * @LastEditTime: 2021-12-07 15:27:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\utils\service.js
 */
const Mock = {
	// mock模块 (test)
	aircity: "/mock",
};
const Service = {
	// 请求地址 开发环境下使用代理
	mdoel1: process.env.VUE_APP_URL,
	WeatherId: process.env.VUE_APP_WEATHERId,
	WeatherData: process.env.VUE_APP_WEATHERData,
};
export {Service, Mock};
