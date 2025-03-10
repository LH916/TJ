import * as echarts from 'echarts'
import {Tooltip} from "ant-design-vue";
import {AXIS_LABEL, LEGEND, LINE_TOOLTIP, XAXIS_NAME, YAXIS_NAME} from "@/utils/chartConfig";
import _ from "lodash";

const xLabel = ['3-13', '3-14', '3-15', '3-16', '3-17', '3-18', '3-19'];
const dataValue = ['86.39', '84.14', '74.76', '65.39', '81.93', '77.44', '93.73'].map(item => (+(item) / 10).toFixed(2))


export const option1 = {
	// backgroundColor:'#000237',
	tooltip: {
		trigger: 'axis',
		backgroundColor: 'rgba(0,0,0,0.6)',
		textStyle: {
			color: '#fff'
		},
		borderWidth: 0,
		axisPointer: {
			// lineStyle: {
			//     color: 'rgb(126,199,255)',
			// },
		},
	},
	legend: {
		textStyle: {
			color: "#fff"
		},
		// right: 'center',
		top: '2%',
		right: '5%',
		data: [
			{
				name: '水位'
			},
			{
				name: '平均水位'
			}
		]
	},
	grid: {
		top: '17%',
		left: '8%',
		right: '8%',
		bottom: '13%',
		containLabel: true
	},
	xAxis: [
		{
			type: 'category',
			boundaryGap: false,
			axisLine: {
				//坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: 'rgba(41,188,245,0.3)',
				},
			},
			axisLabel: {
				//坐标轴刻度标签的相关设置
				textStyle: {
					color: '#ccc',
					padding: 16,
					fontSize: 14,
				},

			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#233653',
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
			// min: 1200,
			// max: 1700,
			// interval: 100,
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(41,188,245,0.3)',
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
					color: '#ccc',
					// padding: '0 16 0 0',
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
			name: '水位',
			type: 'line',
			symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: false,
			symbolSize: 6,

			lineStyle: {
				normal: {
					width: 2,
					color: 'rgb(42,191,250)', // 线条颜色
				},
			},
			itemStyle: {
				color: 'rgb(42,191,250)',
			},
			areaStyle: {
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: 'rgba(42,191,250,.6)',
								},
								{
									offset: 1,
									color: 'rgba(242,191,250, 0)',
								},
							],
							false
					),
				},
			},
			data: dataValue,
		},
		{
			name: '平均水位',
			type: 'line',
			showAllSymbol: true,
			symbol: 'none',
			itemStyle: {
				color: '#FFBE0F',
			},
			lineStyle: {
				width: 2,
				type: 'dotted',
				color: '#FFBE0F',
				shadowColor: '#FFF500',
				shadowBlur: 12,
			},
			data: (() => {
				const arr: string[] = Array(7);
				arr.fill((dataValue.reduce((pre: number, cur: string) => {
					return pre + (+cur)
				}, 0) / 7).toFixed(2))
				return arr;
			})()
		},
	],
};


const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40].map(item => ~~((item + 18) * 1.1));
const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30]
export const option5 = {
	// backgroundColor: '#fff',
	title: {
		text: '单位（cm）',
		x: '78%',
		top: '5px',
		textStyle: {
			color: '#ccc',
			fontWeight: 500,
			fontSize: 12,
		},
		show: true
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
		// formatter: function (params: any) {
		// 	return (
		// 			params[0].name +
		// 			'<br/>' +
		// 			params[0].marker +
		// 			params[0].seriesName +
		// 			' : ' +
		// 			params[0].value +
		// 			'<br/>' +
		// 			params[1].marker +
		// 			params[1].seriesName +
		// 			' : ' +
		// 			params[1].value +
		// 			'%' +
		// 			'<br/>' +
		// 			params[2].marker +
		// 			params[2].seriesName +
		// 			' : ' +
		// 			params[2].value +
		// 			'%'
		// 	);
		// },
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
				show: true,
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
			// boundaryGap: false,
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
					opacity: 0,
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
			name: '降雨量',
			type: 'bar',
			stack: '总量',
			barMaxWidth: 8,
			// barGap: "10%",
			data: tq.map((item, index) => {
				return {
					value: item,
					itemStyle: {
						normal: {
							barBorderRadius: 0,
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgba(100, 189, 255, 1)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(105, 108, 255, 0)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							},

							// borderWidth: [1,0,0,0],
							// borderColor: 'rgba(255, 255, 255, 1)'
						},

					},
				};
			}),
		},
		{
			name: '去年同比',
			type: 'bar',
			stack: 'bb',
			barMaxWidth: 8,
			// barGap: "10%",
			data: tq2.map((item, index) => {
				return {
					value: item,
					itemStyle: {
						normal: {
							barBorderRadius: 0,
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgba(255, 130, 82, 1)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(105, 193, 255, 0)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							},
							borderWidth: 0,
							borderColor: 'rgba(221, 157, 106, 1)'
						},

					},
				};
			}),
		},
		// {
		// 	name: '在馆人数',
		// 	type: 'line',
		// 	data: tq1,
		// 	symbolSize: 6,
		// 	symbol: "emptyCircle",
		// 	lineStyle: {
		// 		color: 'rgba(255,255,255,0.5)'
		// 	},
		//
		// 	itemStyle: {
		// 		color: '#fff', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)',
		// 		decal: {
		// 			symbol: 'circle',
		// 			symbolSize: 36,
		// 			color: 'rgba(255,255,255,0.5)',
		// 			backgroundColor: 'rgba(255,255,255,0.5)'
		// 		}
		// 	}
		// },
		// {
		// 	name: 'aaa',
		// 	type: "scatter",
		// 	symbolSize: 30,
		// 	itemStyle: {
		// 		color: {
		// 			type: "radial",
		// 			r: 1,
		// 			colorStops: [
		// 				{
		// 					offset: 0,
		// 					color: "#DC9E6A",
		// 				},
		// 				{
		// 					offset: 1,
		// 					color: "#DC9E6A",
		// 				},
		// 			],
		// 			global: false,
		// 		},
		// 	},
		// 	silent: true,
		// 	data: tq1,
		//
		// },
	],
};
