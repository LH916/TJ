/*
 * @Author: your name
 * @Date: 2022-04-07 17:10:04
 * @LastEditTime: 2022-04-07 18:11:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\utils\buildByTiler.ts
 */
import {message} from "ant-design-vue";

/*
 * @Author: your name
 * @Date: 2022-03-27 16:37:52
 * @LastEditTime: 2022-03-27 19:10:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHJC\src\utils\buildByTiler.ts
 */
export class BuildByTiler {
	timer1: any;
	timer2: any;
	ids: any;
	IsStopRun: boolean;
	IsOpen: boolean;

	// [x: string]: null;
	constructor() {
		this.timer1 = null;
		this.timer2 = null;
		this.IsStopRun = true;
		this.IsOpen = false;
	}

	async init(val: any) {
		return
		const infoTree: any = await __g.infoTree.get();
		const ids: any = [];
		val.forEach((ii: any) => {
			console.log(ii);

			infoTree.infotree.forEach((item: any) => {
				if (item.name.includes(ii)) {
					ids.push(item.iD);
				}
			});
		});

		this.ids = ids;
		console.log(ids);
	}

	open() {
		if (!this.IsOpen) {
			if (this.IsStopRun) {
				this.IsStopRun = false;
				let i = 0;
				this.timer1 = setInterval(() => {
					if (i >= 40) {
						clearInterval(this.timer1);
						this.IsStopRun = true;
						this.IsOpen = true;
					}
					const setLocation = (j: number, length: number) => {
						__g.tileLayer.setLocation(this.ids[j], [0, 0, i * (3 - j)], null);

						if (++j < length) {
							setLocation(j, length);
						}
					};
					setLocation(0, this.ids.length);
					i += 1;
				}, 50);
			} else {
				message.info("请等待运动结束后重试");
			}
		} else {
			message.info("已经是开启状态");
		}
	}

	close() {
		if (this.IsOpen) {
			if (this.IsStopRun) {
				this.IsStopRun = false;
				__g.infoTree.show(this.ids);

				let i = 40;
				this.timer2 = setInterval(() => {
					if (i <= 0) {
						clearInterval(this.timer2);
						this.IsStopRun = true;
						this.IsOpen = false;
					}
					const setLocation = (j: number, length: number) => {
						__g.tileLayer.setLocation(this.ids[j], [0, 0, i * (3 - j)], null);
						if (++j < length) {
							setLocation(j, length);
						}
					};
					setLocation(0, this.ids.length);
					i -= 1;
				}, 50);
			} else {
				message.info("请等待运动结束后重试");
			}
		} else {
			message.info("已经是关闭状态");
		}
	}

	clickfoolr(val: number, status: boolean) {
		if (this.IsOpen) {
			// 需要启动隐藏的楼层数据
			const NeedHideLayer = this.ids.length - val;
			// 需要隐藏其他的楼层数据

			const NeedhideIther = this.ids
					.map((item: any, index: number) => {
						if (index < NeedHideLayer) {
							return item;
						}
					})
					.filter((mon: any) => mon);
			__g.infoTree.show(this.ids);

			if (status) {
				__g.infoTree.hide(NeedhideIther);
			} else {
				__g.infoTree.show(NeedhideIther);
			}
		} else {
			message.info("请先开启楼层");
		}
	}
}
