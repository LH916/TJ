/*
 * @Author: your name
 * @Date: 2021-12-03 23:43:43
 * @LastEditTime: 2021-12-03 23:49:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3\src\tools\formatChecks.ts
 */

/**
 * @description:校验身份证号码
 * @param {string} value
 * @return {*}
 */
export const checkCardNo = (value: string) => {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(value);
};

/**
 * @description: 校验是否包含中文
 * @param {string} value
 * @return {*}
 */
export const haveCNChars = (value: string) => {
	return /[\u4e00-\u9fa5]/.test(value);
};

/**
 * @description: 校验是否为中国大陆的邮政编码
 * @param {object} value
 * @return {*}
 */
export const isPostCode = (value: { toString: () => string }) => {
	return /^[1-9][0-9]{5}$/.test(value.toString());
};

/**
 * @description: 校验是否为IPv6地址
 * @param {any} str
 * @return {*}
 */
export const isIPv6 = (str: any) => {
	// eslint-disable-next-line no-constant-condition
	return Boolean(
			str.match(/:/g)
					? str.match(/:/g).length <= 7
					: // eslint-disable-next-line no-constant-condition
					false && /::/.test(str)
							? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
							: /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str)
	);
};

/**
 * @description: 校验是否为邮箱地址
 * @param {string} value
 * @return {*}
 */
export const isEmail = (value: string) => {
	return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
};

/**
 * @description: 校验是否为中国大陆手机号
 * @param {object} value
 * @return {*}
 */
export const isChinaTel = (value: { toString: () => string }) => {
	return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
};

/**
 * @description: 判断是移动还是PC设备
 * @param {*}
 * @return {*}
 */
export const isMobile = () => {
	if (
			navigator.userAgent.match(
					/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
			)
	) {
		return "mobile";
	}
	return "desktop";
};

/**
 * @description: 判断是否是苹果还是安卓移动设备
 * @param {*}
 * @return {*}
 */
export const isAppleMobileDevice = () => {
	const reg = /iphone|ipod|ipad|Macintosh/i;
	return reg.test(navigator.userAgent.toLowerCase());
};

/**
 * @description: 判断是否是安卓移动设备
 * @param {*}
 * @return {*}
 */
export const isAndroidMobileDevice = () => {
	return /android/i.test(navigator.userAgent.toLowerCase());
};

/**
 * @description: 判断是Windows还是Mac系统
 * @param {*}
 * @return {*}
 */
export const osType = () => {
	const agent = navigator.userAgent.toLowerCase();
	const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
	const isWindows =
			agent.indexOf("win64") >= 0 ||
			agent.indexOf("wow64") >= 0 ||
			agent.indexOf("win32") >= 0 ||
			agent.indexOf("wow32") >= 0;
	if (isWindows) {
		return "windows";
	}
	if (isMac) {
		return "mac";
	}
};
