import {useChaiLouStore} from "@/stores/chailou";
import _ from "lodash";

const ChaiLouStore = useChaiLouStore();
const defaultRadiationPointOpt = {
	id: "1",
	coordinate: [57.099220275878906, 481.8023376464844, 193.51776123046875], //辐射圈坐标位置
	radius: 100, //辐射半径
	rippleNumber: 5, //波纹数量
	color: [1, 0, 0, 1], //颜色
	intensity: 0.8, //亮度
	autoHeight: false, //自动判断下方是否有物体
};
const defaultPolyLineOpt = {
	id: "p1", //折线唯一标识id
	coordinates: [
		[53.45926284790039, 490.9451599121094, 112.01548767089844],
		[51.922630310058594, 491.8414001464844, 112.01499938964844],
		[59.457725524902344, 504.50897216796875, 112.01499938964844],
		[72.335205078125, 497.9267272949219, 112.01499938964844],
		[74.94178009033203, 502.32098388671875, 112.01849365234375],
		[75.84849548339844, 501.8550720214844, 112.01849365234375],
		[73.4190902709961, 497.5143737792969, 112.01499938964844],
		[79.6618881225586, 494.10784912109375, 112.01499938964844],
		[72.3043441772461, 481.4228515625, 112.11506652832031],
		[70.08209991455078, 482.6407470703125, 112.01548767089844],
	], //构成折线的坐标点数组
	color: Color.Red, //折线颜色
	style: PolylineStyle.Arrow, //折线样式 参考样式枚举：PolylineStyle
	thickness: 0.5, //折线宽度
	intensity: 0.8, //亮度
	flowRate: 0.8, //流速
	tiling: 0, //材质贴图平铺比例
	shape: 0, //折线类型 0：直线， 1：曲线
	depthTest: true, //是否做深度检测
};
const default3DMarkOpt = {
	id: "m1",
	text: "", //3D标注显示文字
	textSize: 26, //3D标注显示文字大小
	"textColor ": Color.White, //3D标注显示文字颜色
	textOutlineSize: 1, //3D标注显示文字轮廓大小
	textOutlineColor: Color.White, // 3D标注显示文字轮廓颜色
	textFixed: false, // 3D标注显示文字是否固定文本朝向
	textVisible: true, //3D标注显示文字是否显示文本
	textLocation: [0, 0, 1.1], // 文字位置
	textRotation: [0, 180, 0], // 文字旋转
	textScale: [1, 1, 1], // 文字缩放
	pointName: "Point_R_4", //3D标注展示的特效名称
	pointVisible: true, //3D标注是否显示
	pointScale: 0.2, //3D标注整体缩放比例
	coordinate: [53.45926284790039, 490.9451599121094, 112.01548767089844], //3D标注的位置坐标
};

const defaultTagOpt = {
	id: "p1", //tag唯一标识
	coordinate: [495269.37, 2491073.25, 25.4], //坐标位置
	coordinateType: 0, //坐标系类型
	imageSize: [30, 30], //图片宽高[width,height]
	popupBackgroundColor: [1.0, 1.0, 1.0, 0.1], //弹窗背景色
	range: [500.0, 8000.0], //标签的可见范围 [Min,Max]
	showLine: true, //标签下方是否显示垂直牵引线
	text: "起点", //标签显示的文字
	textSize: 10, // 文字大小
	textRange: 500, //文字的可见范围
	textColor: Color.Black, //文字颜色
	textBorderColor: Color.Red, //文字边框颜色
	textBackgroundColor: Color.White, //文本背景颜色
	hoverImagePath: "", //鼠标悬停时显示的图片路径
	autoHidePopupWindow: true, //失去焦点后会自动关闭弹出窗口
	autoHeight: false, //自动判断下方是否有物体
};
const startPoint = [53.45926284790039, 490.9451599121094, 112.01548767089844];
const endPoint = [70.1087417602539, 482.7974853515625, 112.01548767089844];

const startPoint2 = [69.34848022460938, 481.60821533203125, 112.01548767089844];
const endPoint2 = [53.443878173828125, 489.6037902832031, 112.01548767089844];
const polyLineCoordinates2 = [
	startPoint2,
	[71.73602294921875, 479.8523864746094, 112.01499938964844],
	[67.18951416015625, 472.5605163574219, 112.5149917602539],
	[49.10723114013672, 482.8077697753906, 112.01499938964844],
	[48.10822296142578, 480.8288269042969, 112.01499938964844],
	[43.15809631347656, 483.66925048828125, 112.01499938964844],
	[44.51614761352539, 485.7375793457031, 112.01499938964844],
	[39.59901428222656, 488.739013671875, 112.01502227783203],
	[39.98722839355469, 489.5272216796875, 112.01498413085938],
	[45.9306640625, 485.9652099609375, 112.01499938964844],
	[44.51201629638672, 483.5860290527344, 112.01499938964844],
	[47.57404708862305, 481.9135437011719, 112.01499938964844],
	[52.1097526550293, 490.3991394042969, 112.01499938964844],
	endPoint2,
];
const drawPersonnelTrack = async (type: string, id: number) => {
	const startMark3dOpt = {
		...default3DMarkOpt,
		text: "",
		coordinate: startPoint,
	} as typeof default3DMarkOpt;
	const startTagOpt = {
		...defaultTagOpt,
		coordinate: (() => {
			const tmp = [...startPoint];
			tmp[2] += 0.5;
			return tmp;
		})(),
		id: "startPoint",
		textBackgroundColor: [1, 0, 0, 0] as any,
		textColor: [1, 1, 1, 1] as any,
		textSize: 16,
		showLine: false,
	} as typeof defaultTagOpt;
	const endMark3dOpt = {
		...default3DMarkOpt,
		id: "endPoint",
		coordinate: endPoint,
		text: "",
	} as typeof default3DMarkOpt;

	const endTagOpt = {
		...defaultTagOpt,
		// coordinate: endPoint,
		id: "endPoint",
		coordinate: (() => {
			const tmp = [...endPoint];
			tmp[2] += 0.5;
			return tmp;
		})(),
		text: "终点",
		textBackgroundColor: [1, 0, 0, 0] as any,
		textColor: [1, 1, 1, 1] as any,
		textSize: 16,
		showLine: false,
	} as typeof defaultTagOpt;

	const polyLineOpt = {
		...defaultPolyLineOpt,
		coordinates: (() => {
			return defaultPolyLineOpt.coordinates.map((item) => {
				return item.map((item2) => {
					item2 += 0.1;
					return item2;
				});
			});
		})(),
	} as typeof defaultPolyLineOpt;
	if (type === "人员黑名单") {
		//
		ChaiLouStore.ClickLayer(20, true);
		if (id === 617) {
			polyLineOpt.coordinates = setCoordinatesOffset(polyLineCoordinates2);
			startMark3dOpt.coordinate = startPoint2;
			startTagOpt.coordinate = startPoint2;
			endTagOpt.coordinate = endPoint2;
			endMark3dOpt.coordinate = endPoint2;
			__g.camera.set(
					38.184498,
					485.557739,
					149.399918,
					-65.061615,
					9.821373,
					1
			);
		} else {
			__g.camera.set(
					58.522614,
					508.245667,
					134.447937,
					-59.933037,
					73.39299,
					1
			);
		}
		//起始
		__g.marker3d.add(startMark3dOpt);
		__g.tag.add(startTagOpt);

		//结束
		__g.marker3d.add(endMark3dOpt);
		__g.tag.add(endTagOpt);

		//轨迹线
		__g.polyline.add(polyLineOpt);
		// __g.polyline.focus(polyLineOpt.id);
	} else if (type === "人员聚集") {
		ChaiLouStore.ClickLayer(20, true);
		console.log("人员聚集");
		const bbox = [
			30.93803787231445, 481.3389892578125, 112.06080932617, 83.13697052001953,
			533.01446533203125, 113.317686080932617,
		];
		const range = [0, 100];
		const data: any = [];
		for (let i = 0; i < 20; i++) {
			const x = getRandNumBetween(bbox[0], bbox[3]); //minX ~ maxX
			const y = getRandNumBetween(bbox[1], bbox[4]); //minY ~ maxY
			data.push({
				id: i.toString(),
				coordinate: [x, y, 0], //热力点的坐标
				radius: Math.random() * 80, //热力点影像半径范围
				heatValue: Math.random() * 2, //热力值
			});
		}
		__g.heatmap.add("heatmap1", bbox, range, data);
		// __g.heatmap.focus("heatmap1");
	}
};
const setCoordinatesOffset: any = (array: any[]) => {
	return array.map((item, index) => {
		if (Array.isArray(item)) {
			return setCoordinatesOffset(item);
		} else if (index === 2) {
			item += 0.5;
		}
		return item;
	});
};

function getRandNumBetween(min: number, max: number) {
	return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

export {
	defaultRadiationPointOpt,
	defaultPolyLineOpt,
	default3DMarkOpt,
	defaultTagOpt,
	drawPersonnelTrack,
	getRandNumBetween,
};
