import * as echarts from 'echarts'
import _ from "lodash";
// 仪表盘
export const option1 = {
	title: {
		text: "98%",
		subtext: "在线率",
		x: "35%",
		y: "35%",
		textAlign: "center",
		textStyle: {
			fontWeight: "500",
			color: "#00D2BA",
			fontFamily: "微软雅黑",
			fontSize: 20,
			lineHeight: "20",
		},
		subtextStyle: {
			fontWeight: "500",
			color: "#fff",
			fontFamily: "微软雅黑",
			fontSize: 14,
		}
	},
	series: [
		// 刻度
		{
			type: "gauge",
			radius: "77%", // 1行3个
			center: ["35%", "45%"],
			splitNumber: 10,
			// min: 0,
			max: 100,
			startAngle: 180,
			endAngle: 0,
			z: 99,
			// 线
			axisLine: {
				lineStyle: {
					width: 1,
					color: [[1, "rgba(255,255,255,0)"]],
				},
				detail: {
					formatter: "{value}",
				},
				data: [
					{
						value: 50,
						name: "SCORE",
					},
				],
			},
			//刻度标签。
			axisTick: {
				show: true,
				splitNumber: 3, //刻度的段落数
				lineStyle: {
					color: "#fff",
					width: 1, //刻度的宽度
					shadowColor: "#67FFFC",
					shadowBlur: 1,
				},
				length: 5, //刻度的长度
			},
			splitLine: {
				//文字和刻度的偏移量
				show: false,
			},
			// //刻度线文字
			axisLabel: {
				show: false,
			},
			data: [
				{
					// 指针指向的位置
					value: 98,
					name: "SCORE",
					itemStyle: {
						color: "#A7EBFF",
					},
				},
			],
			pointer: {
				show: true,
				length: "15%",
				radius: "50%",
				width: 2, //指针粗细
				offsetCenter: [0, -50],
			},
			detail: {
				show: false,
			},
			title: {
				// 仪表盘标题。
				show: false,
			},
		},
		// 光边 + 指针
		{
			// name: "在线率",
			type: "pie",
			radius: ["50%", "58%"],
			center: ["35%", "46%"],
			startAngle: 180,
			endAngle: 0,
			color: [
				{
					type: "linear",
					x: 1,
					y: 0,
					x2: 0,
					y2: 0,
					colorStops: [
						{
							offset: 0,
							color: "transparent", // 0% 处的颜色
						},
						{
							offset: 0.5,
							color: "#A7EBFF60", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "#FFFFFF30", // 100% 处的颜色
						},
					],
				},
				"transparent",
			],
			hoverAnimation: true,
			legendHoverLink: false,
			z: 10,
			labelLine: {
				normal: {
					show: false,
				},
			},
			data: [
				{
					value: 54,
				},
				{
					value: 50.5,
				},
			],
		},
		// 内层阴影
		{
			type: "pie",
			hoverAnimation: false,
			label: {
				show: false,
			},
			center: ["35%", "46%"],
			radius: ["0%", "46%"],
			startAngle: 180,
			data: [
				{
					value: 100,
					itemStyle: {
						normal: {
							color: {
								type: "radial",
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{offset: 0, color: "#A7EBFF60"},
									{offset: 1, color: "#FFFFFF30"},
								],
							},
							opacity: 0.2,
						},
					},
				},
				{
					value: 100,
					color: "transparent",
				},
			],
		},
	],
}

export const option2 = {
	title: {
		text: "98%",
		subtext: "系统安全度",
		x: "35%",
		y: "35%",
		textAlign: "center",
		textStyle: {
			fontWeight: "500",
			color: "#00D2BA",
			fontFamily: "微软雅黑",
			fontSize: 20,
			lineHeight: "20",
		},
		subtextStyle: {
			fontWeight: "500",
			color: "#fff",
			fontFamily: "微软雅黑",
			fontSize: 14,
		}
	},
	series: [
		// 刻度
		{
			type: "gauge",
			radius: "77%", // 1行3个
			center: ["35%", "45%"],
			splitNumber: 10,
			// min: 0,
			max: 100,
			startAngle: 180,
			endAngle: 0,
			z: 99,
			// 线
			axisLine: {
				lineStyle: {
					width: 1,
					color: [[1, "rgba(255,255,255,0)"]],
				},
				detail: {
					formatter: "{value}",
				},
				data: [
					{
						value: 50,
						name: "SCORE",
					},
				],
			},
			//刻度标签。
			axisTick: {
				show: true,
				splitNumber: 3, //刻度的段落数
				lineStyle: {
					color: "#fff",
					width: 1, //刻度的宽度
					shadowColor: "#67FFFC",
					shadowBlur: 1,
				},
				length: 5, //刻度的长度
			},
			splitLine: {
				//文字和刻度的偏移量
				show: false,
			},
			// //刻度线文字
			axisLabel: {
				show: false,
			},
			data: [
				{
					// 指针指向的位置
					value: 98,
					name: "SCORE",
					itemStyle: {
						color: "#FFC87E",
					},
				},
			],
			pointer: {
				show: true,
				length: "15%",
				radius: "50%",
				width: 2, //指针粗细
				offsetCenter: [0, -50],
			},
			detail: {
				show: false,
			},
			title: {
				// 仪表盘标题。
				show: false,
			},
		},
		// 光边 + 指针
		{
			// name: "在线率",
			type: "pie",
			radius: ["50%", "58%"],
			center: ["35%", "46%"],
			startAngle: 180,
			endAngle: 0,
			color: [
				{
					type: "linear",
					x: 1,
					y: 0,
					x2: 0,
					y2: 0,
					colorStops: [
						{
							offset: 0,
							color: "transparent", // 0% 处的颜色
						},
						{
							offset: 0.5,
							color: "#FFC87E60", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "#ffffff30", // 100% 处的颜色
						},
					],
				},
				"transparent",
			],
			hoverAnimation: true,
			legendHoverLink: false,
			z: 10,
			labelLine: {
				normal: {
					show: false,
				},
			},
			data: [
				{
					value: 54,
				},
				{
					value: 50.5,
				},
			],
		},
		// 内层阴影
		{
			type: "pie",
			hoverAnimation: false,
			label: {
				show: false,
			},
			center: ["35%", "46%"],
			radius: ["0%", "46%"],
			startAngle: 180,
			data: [
				{
					value: 100,
					itemStyle: {
						normal: {
							color: {
								type: "radial",
								x: 0.5,
								y: 0.5,
								r: 0.5,
								colorStops: [
									{offset: 0, color: "#FFC87E60"},
									{offset: 1, color: "#ffffff30"},
								],
							},
							opacity: 0.2,
						},
					},
				},
				{
					value: 100,
					color: "transparent",
				},
			],
		},
	],
}

const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40];
const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];
export const option5 = {
	// backgroundColor: '#fff',
	title: {
		text: '每月车辆违章类型占比',
		x: 'center',
		top: '15px',
		textStyle: {
			color: '#ccc',
			fontWeight: 500,
			fontSize: 18,
		},
		show: false
	},
	grid: {
		top: "15%",
		left: "3%",
		right: "8%",
		bottom: "10%",
		containLabel: true,
	},
	tooltip: {
		show: true,
		trigger: 'axis',
		backgroundColor: 'rgba(0,0,0,0.6)',
		borderColor: 'rgba(0,0,0,0)',
		textStyle: {
			color: '#fff',
		},
		formatter: function (params: any) {
			return (
					params[0].name +
					'<br/>' +
					params[0].marker +
					params[0].seriesName +
					' : ' +
					params[0].value +
					'<br/>' +
					params[1].marker +
					params[1].seriesName +
					' : ' +
					params[1].value +
					'%' +
					'<br/>' +
					params[2].marker +
					params[2].seriesName +
					' : ' +
					params[2].value +
					'%'
			);
		},
		axisPointer: {
			lineStyle: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: 'rgba(0, 255, 233,0)',
						},
						{
							offset: 0.5,
							color: 'rgba(255, 255, 255,1)',
						},
						{
							offset: 1,
							color: 'rgba(0, 255, 233,0)',
						},
					],
					global: false,
				},
			},
		},
	},
	xAxis: [
		{
			type: 'category',
			axisLine: {
				show: false,
				color: '#aaa',
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				color: '#aaa',
				width: 100,
			},
			splitLine: {
				show: false,
			},
			boundaryGap: false,
			data: xData,
		},
	],

	yAxis: [
		{
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed', //虚线
					color: '#00BFF3',
					opacity: 0.23,
				},
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: true,
				margin: 20,
				textStyle: {
					color: '#ccc',
				},
			},
			axisTick: {
				show: false,
			},
		},
		{
			type: 'value',
			position: 'right',
			axisLabel: {
				formatter: '{value}%', //使图变成百分比形式
				color: "#ccc"
			},
			splitLine: {
				//网格线显不显示
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
		},
	],
	series: [
		{
			name: '违章次数',
			type: 'bar',
			stack: '总量',
			barMaxWidth: 8,
			// barGap: "10%",
			data: tq.map((item) => {
				return {
					value: item,
					itemStyle: {
						normal: {
							barBorderRadius: item > 0 ? [15, 15, 0, 0] : [0, 0, 15, 15], //左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: item > 0 ? '#956FD4' : '#64ccff',
								},
								{
									offset: 1,
									color: item > 0 ? '#64ccff' : '#956FD4',
								},
							]),
						},
					},
				};
			}),
		},
		{
			name: '环比上月',
			type: 'line',
			yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
			showAllSymbol: true,
			symbol: 'circle',
			symbolSize: 3,
			lineStyle: {
				normal: {
					color: '#A582EA',
				},
			},
			label: {
				show: false,
				position: 'top',
				textStyle: {
					color: '#A582EA',
				},
			},
			itemStyle: {
				color: '#fff',
				borderColor: '#A582EA',
				borderWidth: 2,
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: 'rgba(145, 118, 215,0.5)',
								},
								{
									offset: 1,
									color: 'rgba(145, 118, 215,0)',
								},
							],
							false
					),
				},
			},
			data: tq1, //data.values
		},
		{
			name: '同比上月',
			type: 'line',
			yAxisIndex: 1,
			showAllSymbol: true,
			symbol: 'circle',
			symbolSize: 5,
			lineStyle: {
				normal: {
					color: '#64ccff',
				},
			},
			label: {
				show: false,
				position: 'top',
				textStyle: {
					color: '#64ccff',
				},
			},
			itemStyle: {
				color: '#fff',
				borderColor: '#64ccff',
				borderWidth: 2,
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: 'rgba(102, 200, 253,0.5)',
								},
								{
									offset: 1,
									color: 'rgba(81,150,164,0)',
								},
							],
							false
					),
				},
			},
			data: tq2, //data.values
		},
	],
};

const legendData = ['车辆数', '设计车位']; //图例
const indicator = [
	{
		text: '正常巡视',
		max: 6000,
	},
	{
		text: '故障巡视',
		max: 5000
	},
	{
		text: '夜间巡视',
		max: 5000
	},
	{
		text: '交叉巡视',
		max: 5000,
		//  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
	},
	{
		text: '空中巡视',
		max: 5000
	},
	{
		text: '道路巡视',
		max: 5000
	}
];
const dataArr = [
	{
		value: [4300, 4700, 3600, 3900, 3800, 4200],
		name: legendData[0],
		itemStyle: {
			normal: {
				lineStyle: {
					color: '#4A99FF',
					// shadowColor: '#4A99FF',
					// shadowBlur: 10,
				},
				shadowColor: '#4A99FF',
				shadowBlur: 10,
			},
		},
		areaStyle: {
			normal: { // 单项区域填充样式
				color: {
					type: 'linear',
					x: 0, //右
					y: 0, //下
					x2: 1, //左
					y2: 1, //上
					colorStops: [{
						offset: 0,
						color: '#4A99FF'
					}, {
						offset: 0.5,
						color: 'rgba(0,0,0,0)'
					}, {
						offset: 1,
						color: '#4A99FF'
					}],
					globalCoord: false
				},
				opacity: 1 // 区域透明度
			}
		}
	},
	{
		value: [3200, 3000, 3400, 2000, 3900, 2000],
		name: legendData[1],
		itemStyle: {
			normal: {
				lineStyle: {
					color: '#4BFFFC',
					// shadowColor: '#4BFFFC',
					// shadowBlur: 10,
				},
				shadowColor: '#4BFFFC',
				shadowBlur: 10,
			},
		},
		areaStyle: {
			normal: { // 单项区域填充样式
				color: {
					type: 'linear',
					x: 0, //右
					y: 0, //下
					x2: 1, //左
					y2: 1, //上
					colorStops: [{
						offset: 0,
						color: '#4BFFFC'
					}, {
						offset: 0.5,
						color: 'rgba(0,0,0,0)'
					}, {
						offset: 1,
						color: '#4BFFFC'
					}],
					globalCoord: false
				},
				opacity: 1 // 区域透明度
			}
		}
	}
];
const colorArr = ['#4A99FF', '#4BFFFC']; //颜色
export const option = {
	// backgroundColor: '#101736',
	color: colorArr,
	legend: {
		show: false,
		orient: 'vertical',
		icon: 'circle', //图例形状
		data: legendData,
		top: '50%',
		right: 40,
		itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
		itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
		itemGap: 40, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
		textStyle: {
			fontSize: 14,
			color: '#00E4FF',
		},
	},
	radar: {
		// shape: 'circle',
		name: {
			textStyle: {
				color: '#fff',
				fontSize: 16
			},
		},
		radius: '40%',
		center: ['50%', '35%'],
		indicator: indicator,
		splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
			show: true,
			areaStyle: { // 分隔区域的样式设置。
				color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
			}
		},
		axisLine: { //指向外圈文本的分隔线样式
			lineStyle: {
				color: '#ffffff50'
			}
		},
		splitLine: {
			lineStyle: {
				color: '#ffffff60', // 分隔线颜色
				width: 1, // 分隔线线宽
			}
		},
	},
	grid: {
		top: "15%",
		left: "3%",
		right: "8%",
		bottom: "10%",
		containLabel: true,
	},
	series: [{
		type: 'radar',
		symbolSize: 8,
		// symbol: 'angle',
		data: dataArr
	}]
};

export const option6 = {
	// backgroundColor: "#000a3f",
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		},
		backgroundColor: 'rgba(9, 24, 48, 0.5)',
		borderColor: 'rgba(75, 253, 238, 0.4)',
		textStyle: {
			color: '#CFE3FC',
		},
		borderWidth: 1,
	},
	grid: {
		left: '0%',
		right: '8%',
		top: '18%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: [{
		name: "月份",
		type: 'category',
		data: (() => {
			const arr = new Array(12)
			for (let i = 0; i < arr.length; i++) {
				arr[i] = (i + 1).toString().padStart(2, '0')
			}
			console.log(arr)
			return arr
		})(),
		axisLine: {
			lineStyle: {
				color: '#FFFFFF'
			}
		},
		axisLabel: {
			margin: 10,
			color: '#e2e9ff',
			textStyle: {
				fontSize: 12
			},
		},
		axisTick: {
			show: false
		}
	}],
	yAxis: [{
		name: "消费（元）",
		axisLabel: {
			formatter: '{value}',
			color: '#e2e9ff',
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#FFFFFF'
			}
		},
		splitLine: {
			lineStyle: {
				color: 'rgba(255,255,255,0.12)'
			}
		}
	}],
	series: [{
		type: 'bar',
		data: (() => {
			const arr = new Array(12)
			for (let i = 0; i < arr.length; i++) {
				arr[i] = _.random(1000, 2000)
			}
			console.log(arr)
			return arr
		})(),
		barWidth: '30%',
		itemStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(140, 193, 244, 1)' // 0% 处的颜色
				}, {
					offset: 1,
					color: 'rgba(6, 129, 231, 1)' // 100% 处的颜色
				}], false),
				shadowColor: 'rgba(0,160,221,1)',
				shadowBlur: 4,
			}
		},
		label: {
			normal: {
				show: false,
				lineHeight: 10,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#00D6F9',
					fontSize: 12
				}

			}
		}
	}]
};

export const option7 = () => {
	const xLabel = ['1号站场', '1号站场', '2号站场', '1号站场', '3号站场', '1号站场', '4号站场'];
	const getwkrs = [1400, 1615, 1680, 1537, 1540, 1525, 1640];
	const getlkrs = [686, 703, 788, 882, 779, 785];
	return {
		grid: {
			top: '3%',
			left: '7%',
			right: '0%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			// 格式化提示内容
			formatter: function (params: any) {
				return params.name +
						' : ' + params.value + 'mm'
			}
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				axisLine: {
					//坐标轴轴线相关设置。数学上的x轴
					show: true,
					lineStyle: {
						color: 'rgb(41,188,245,.3)',
					},
				},
				axisLabel: {
					//坐标轴刻度标签的相关设置
					textStyle: {
						color: 'rgb(188,217,230)',
						fontSize: 14,
					},
					formatter: function (data: any) {
						return data;
					},
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: '#00000000',
					},
				},
				axisTick: {
					show: false,
				},
				data: xLabel,
			},
		],
		yAxis: [
			{
				min: 1200,
				max: 1700,
				interval: 100,
				type: 'value',
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgb(41,188,245,.3)',
					},
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#233653',
					},
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: 'rgb(188,217,230)',
					},
					formatter: function (value: any, index: number) {
						// value大于1000时除以1000并拼接k，小于1000按原格式显示
						if (value >= 100) {
							value = value / 100 + "00";
						} else if (value < 100) {
							value;
						}
						return value;
					},
				},
				axisTick: {
					show: false,
				},
			},
		],
		series: [
			{
				name: "",
				type: 'bar',
				z: 1,
				data: getwkrs,
				barWidth: '12px',
				itemStyle: {
					normal: {
						color: function (params: any) {
							const maxIndex = 2;
							let colors = []
							if (params.dataIndex == maxIndex) {
								colors = ['rgb(211,230,41)', 'rgb(211,230,41)', 'transparent']
							} else {
								colors = ['rgba(44,181,233,0.9)', 'rgba(44,181,233,0.9)', 'transparent'];
							}
							return new echarts.graphic.LinearGradient(0, 0, 0, 1,
									[
										{offset: 0, color: colors[0]},
										{offset: 0.3, color: colors[1]},
										{offset: 1, color: colors[2]}
									]);
						}
					}
				},
			},
			{
				name: "",
				barGap: '-250%',
				type: 'bar',
				z: 0,
				data: [1700, 1700, 1700, 1700, 1700, 1700, 1700],
				barWidth: '48px',
				itemStyle: {
					normal: {
						color: 'rgba(14, 33, 61,0.3)' // 0% 处的颜色
					}
				},

			},
			{
				data: [{
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}, {
					value: 1700,
					symbolPosition: 'end'
				}],
				type: 'pictorialBar',
				symbolSize: [48, 2],
				symbolOffset: [-7, -2],
				// symbol: 'image://' + huanlan,
				z: 12,
				itemStyle: {
					normal: {
						color: 'rgba(44,181,233,0.9)' // 0% 处的颜色
					}
				},
			},
			{
				data: [{
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}, {
					value: 1200,
					symbolPosition: 'end'
				}],
				type: 'pictorialBar',
				symbolSize: [48, 4],
				symbolOffset: [-7, -2],
				// symbol: 'image://' + huanlan,
				z: 12,
				itemStyle: {
					normal: {
						color: 'rgba(44,181,233,0.9)' // 0% 处的颜色
					}
				},
			},
		]
	}
}


export const option8 = () => {
	const xLabel = ['0', '14:20', '14:25', '14:30', '14:35', '14:40', '14:45', '14:50', '14:55', '13:00'].map((item, index) => {
		return (index + 1) + '月'
	})
	const res1 = [2, 2, 2, 2, 2, 1, 1, 1, 2, 2];
	const res2 = [11, 17, 10, 12, 11, 20, 10, 15, 13, 11];
	const res3 = [12, 20, 18, 16, 17, 18, 20, 9, 11, 10];
	const res4 = [32, 18, 18, 40, 30, 35, 30, 36, 31, 33];

	return {
		// backgroundColor: '#0e1c47',
		tooltip: {
			trigger: 'axis',
			// backgroundColor: 'transparent',
			axisPointer: {
				lineStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(126,199,255,0)' // 0% 处的颜色
						}, {
							offset: 0.5,
							color: 'rgba(126,199,255,1)' // 100% 处的颜色
						}, {
							offset: 1,
							color: 'rgba(126,199,255,0)' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					}
				},
			},
		},
		legend: {
			align: "left",
			right: '10%',
			top: '0%',
			type: 'plain',
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
			icon: 'rect',
			itemGap: 25,
			itemWidth: 10,
			itemHeight: 10,
			data: [
				{
					name: '致命'
				},
				{
					name: '严重'
				},
				{
					name: '一般'
				},
				{
					name: '警告'
				}
			]
		},
		grid: {
			top: '15%',
			left: '10%',
			right: '10%',
			bottom: '20%',
			// containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: "#ccc",
					width: 1
				},
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					color: '#ccc',
					padding: 16,
					fontSize: 14
				},
				formatter: function (data: any) {
					return data
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#aaa',
				},
			},
			axisTick: {
				show: false,
			},
			data: xLabel
		}],
		yAxis: [{
			min: 0,
			max: 50,
			interval: 10,
			type: "value",
			axisLabel: {
				textStyle: {
					color: '#ffffff',
				},
				formatter: function (value: any, index: number) {
					// value大于10时除以10并拼接k，小于10按原格式显示
					if (value >= 10) {
						value = value / 10 + "0";
					} else if (value < 10) {
						value;
					}
					return value;
				}
			},
			nameTextStyle: {
				color: "#7ec7ff",
				fontSize: 16,
				padding: 10
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#ccc'
				},
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "rgb(77,83,141)",
					width: 1
				}

			},
			axisTick: {
				show: false,
			},
		}],


		series: [{
			name: '致命',
			type: 'line',
			symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true,
			symbolSize: 0,
			lineStyle: {
				normal: {
					width: 2,
					color: "rgb(243,58,57)", // 线条颜色
				},
			},
			itemStyle: {
				color: "rgb(2243,58,57)",

			},
			tooltip: {
				show: true
			},

			data: res1
		}, {
			name: '严重',
			type: 'line',
			symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true,
			symbolSize: 0,
			lineStyle: {
				normal: {
					width: 2,
					color: "rgb(255,128,0)", // 线条颜色
				},
			},
			itemStyle: {
				color: "rgb(255,128,0)",

			},
			tooltip: {
				show: true
			},

			data: res2
		},
			{
				name: '一般',
				type: 'line',
				symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
				showAllSymbol: true,
				symbolSize: 0,
				lineStyle: {
					normal: {
						width: 2,
						color: "rgb(252,210,84)", // 线条颜色
					},
				},
				itemStyle: {
					color: "rgb(252,210,84)",

				},
				tooltip: {
					show: true
				},

				data: res3
			},
			{
				name: '警告',
				type: 'line',
				symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
				showAllSymbol: true,
				symbolSize: 0,
				lineStyle: {
					normal: {
						width: 2,
						color: "rgba(25,163,223,1)", // 线条颜色
					},
				},
				itemStyle: {
					color: "rgba(25,163,223,1)",

				},
				tooltip: {
					show: true
				},

				data: res4
			}]
	};
	// let len = 0
	// setInterval(()=>{
	// 	if(len === xLabel.length){
	// 		len = 0
	// 	}
	// 	myChart.dispatchAction({
	// 		type: 'showTip',
	// 		seriesIndex: 0,
	// 		dataIndex: len,
	// 	})
	// 	len ++
	// }, 1000)

}