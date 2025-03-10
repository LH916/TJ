/*
 * @Author: your name
 * @Date: 2021-10-22 10:27:11
 * @LastEditTime: 2021-12-04 00:04:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts\src\tools\index.js
 */
//将一个数组等分成多个数组
export const group = (array: string | any[], subGroupLength: number) => {
	//数组，一组有多少个数据
	let index = 0;
	const newArray = [];
	while (index < array.length) {
		newArray.push(array.slice(index, (index += subGroupLength)));
	}
	return newArray;
};
//下载一个链接
export const download = (link: any, name: string) => {
	if (!name) {
		name = link.slice(link.lastIndexOf("/") + 1);
	}
	const eleLink = document.createElement("a");
	eleLink.download = name;
	eleLink.style.display = "none";
	eleLink.href = link;
	document.body.appendChild(eleLink);
	eleLink.click();
	document.body.removeChild(eleLink);
};
//下载excel
// download('http://111.229.14.189/file/1.xlsx')

/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
export const downloadFile = (name: any, content: BlobPart) => {
	if (typeof name == "undefined") {
		throw new Error("The first parameter name is a must");
	}
	if (typeof content == "undefined") {
		throw new Error("The second parameter content is a must");
	}
	if (!(content instanceof Blob)) {
		content = new Blob([content]);
	}
	const link = URL.createObjectURL(content);
	download(link, name);
};

/**
 * @description: 生成指定范围随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {*}
 */
export const randomNum = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @description:数字千分位分隔
 * @param {any} n
 * @return {*}
 */
export const format = (n: { toString: () => any }) => {
	const num = n.toString();
	const len = num.length;
	if (len <= 3) {
		return num;
	} else {
		const temp = "";
		const remainder = len % 3;
		if (remainder > 0) {
			// 不是3的整数倍
			return (
					num.slice(0, remainder) +
					"," +
					num.slice(remainder, len).match(/\d{3}/g).join(",") +
					temp
			);
		} else {
			// 3的整数倍
			return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
		}
	}
};
/**
 * @description:数组乱序
 * @param {any} arr
 * @return {*}
 */
export const arrScrambling = (arr: any[]) => {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
		[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
	}
	return arr;
};
/**
 * @description: 数组扁平化
 * @param {string} arr
 * @return {*}
 */
export const flatten = (arr: string | any[]) => {
	let result: any[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};
/**
 * @description: 数组中获取随机数
 * @param {string} arr
 * @return {*}
 */
export const sample = (arr: string | any[]) =>
		arr[Math.floor(Math.random() * arr.length)];

/**
 * @description: 生成随机字符串
 * @param {number} len
 * @return {*}
 */
export const randomString = (len: number) => {
	const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
	const strLen = chars.length;
	let randomStr = "";
	for (let i = 0; i < len; i++) {
		randomStr += chars.charAt(Math.floor(Math.random() * strLen));
	}
	return randomStr;
};

/**
 * @description: 字符串首字母大写
 * @param {string} str
 * @return {*}
 */
export const fistLetterUpper = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @description: 手机号中间四位变成*
 * @param {string} tel
 * @return {*}
 */
export const telFormat = (tel: number) => {
	const newtel = String(tel);
	return newtel.substr(0, 3) + "****" + newtel.substr(7);
};

/**
 * @description: 驼峰命名转换成短横线命名
 * @param {string} str
 * @return {*}
 */
export const getKebabCase = (str: string) => {
	return str.replace(/[A-Z]/g, (item: string) => "-" + item.toLowerCase());
};

/**
 * @description:短横线命名转换成驼峰命名
 * @param {string} str
 * @return {*}
 */
export const getCamelCase = (str: string) => {
	return str.replace(/-([a-z])/g, (i: any, item: string) => item.toUpperCase());
};

/**
 * @description:全角转换为半角
 * @param {string} str
 * @return {*}
 */
export const toCDB = (str: string) => {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (code >= 65281 && code <= 65374) {
			result += String.fromCharCode(str.charCodeAt(i) - 65248);
		} else if (code == 12288) {
			result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
		} else {
			result += str.charAt(i);
		}
	}
	return result;
};

/**
 * @description: 半角转换为全角
 * @param {string} str
 * @return {*}
 */
export const toDBC = (str: string) => {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (code >= 33 && code <= 126) {
			result += String.fromCharCode(str.charCodeAt(i) + 65248);
		} else if (code == 32) {
			result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
		} else {
			result += str.charAt(i);
		}
	}
	return result;
};

/**
 * @description: 数字转化为大写金额
 * @param {number} n
 * @return {*}
 */
export const digitUppercase = (n: number) => {
	const fraction = ["角", "分"];
	const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
	const unit = [
		["元", "万", "亿"],
		["", "拾", "佰", "仟"],
	];
	n = Math.abs(n);
	let s = "";
	for (let i = 0; i < fraction.length; i++) {
		s += (
				digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
		).replace(/零./, "");
	}
	s = s || "整";
	n = Math.floor(n);
	for (let i = 0; i < unit[0].length && n > 0; i++) {
		let p = "";
		for (let j = 0; j < unit[1].length && n > 0; j++) {
			p = digit[n % 10] + unit[1][j] + p;
			n = Math.floor(n / 10);
		}
		s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
	}
	return s
			.replace(/(零.)*零元/, "元")
			.replace(/(零.)+/g, "零")
			.replace(/^整$/, "零元整");
};

/**
 * @description: 数字转化为中文数字
 * @param {any} value
 * @return {*}
 */
export const intToChinese = (value: any) => {
	const str = String(value);
	const len = str.length - 1;
	const idxs = [
		"",
		"十",
		"百",
		"千",
		"万",
		"十",
		"百",
		"千",
		"亿",
		"十",
		"百",
		"千",
		"万",
		"十",
		"百",
		"千",
		"亿",
	];
	const num = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
		let pos = 0;
		if ($1[0] !== "0") {
			pos = len - idx;
			if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
				return idxs[len - idx];
			}
			return num[$1[0]] + idxs[len - idx];
		} else {
			const left = len - idx;
			const right = len - idx + $1.length;
			if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
				pos = left - (left % 4);
			}
			if (pos) {
				return idxs[pos] + num[$1[0]];
			} else if (idx + $1.length >= len) {
				return "";
			} else {
				return num[$1[0]];
			}
		}
	});
};
