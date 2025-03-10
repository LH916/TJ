/*
 * @Author: your name
 * @Date: 2022-03-27 02:04:18
 * @LastEditTime: 2022-03-29 11:25:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\utils\index.js
 */
import {onBeforeUnmount} from "vue";
import {useAirCityStore} from "@/stores/aircity";

const airCityStore = useAirCityStore()
const waitFor = (timeout = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, timeout);
	});
};

const startMarquee = (
		marqueeObj: string | HTMLElement,
		lh: number | string,
		speed = 20,
		delay = 1000
) => {
	//lh---每行列表的高度，speed---滚动的速度，delay---间隔多久滚动一次,marqueeObj---需要实现这个效果的id
	let p = false;
	let t: any;
	let o: HTMLElement;
	if (typeof marqueeObj === "string") {
		o = document.getElementsByClassName(marqueeObj)[0] as HTMLElement;
	}
			// else if (marqueeObj instanceof HTMLElement) {
			//     o = marqueeObj
	// }
	else {
		return new Error("所给参数不正确");
	}

	o.innerHTML += o.innerHTML;
	o.style.marginTop = (0).toString();
	o.onmouseover = function () {
		p = true;
	}; //鼠标移入，停止滚动
	o.onmouseout = function () {
		p = false;
	}; //鼠标移出，继续滚动
	if (typeof lh === "string") {
		const child = o.querySelector(lh);
		lh = child?.clientHeight || 40;
	}

	function start() {
		if (typeof t === "number") clearInterval(t);

		t = setInterval(scrolling, speed); //定时器，自动滚动
		if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	}

	function scrolling() {
		if (parseInt(o.style.marginTop) % Number(lh) != 0) {
			o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
			if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2)
				o.style.marginTop = 0 + "";
		} else {
			clearInterval(t);
			t = undefined;
			setTimeout(start, delay);
		}
	}

	setTimeout(start, delay);
	onBeforeUnmount(() => {
		clearInterval(t);
	});
};
/**
 *
 * @param name 图层名字
 */
export const getIdByName = (name: string) => {

	return (airCityStore.TreeInfo as unknown as any[]).find((item: any) => {
		return item.name === name
	}).iD
}

export {waitFor, startMarquee};


