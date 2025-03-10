import * as echarts from 'echarts'
import _ from "lodash";


export const option1 = () => {
  const value = ["120", "50", "90"];
  const indicator = [
    { max: "200", name: "已处理" },
    { max: "200", name: "未处理" },
    { max: "200", name: "已超时" }
  ];
  return {
    // backgroundColor:"#061740",
    grid: {
      top: '5%',
      left: '3%',
      right: '3%',
      bottom: '0%',
      containLabel: true,
    },
    // tooltip: {
    //     trigger: 'item',
    //     axisPointer: {
    //         type: 'cross',
    //         crossStyle: {
    //             color: '#999'
    //         }
    //     }
    // },
    radar: {
      radius: "80%", //大小
      nameGap: 12, // 图中工艺等字距离图的距离
      center: ["45%", "60%"], // 图的位置
      name: {
        textStyle: {
          color: "#fff",
          fontSize: "1rem",
        },
        formatter: function (name: string) {
          return name;
        }
      },
      indicator: indicator,
      axisLine: {
        lineStyle: {
          color: "rgba(153, 209, 246, 0.2)", //轴颜色

        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: "rgba(36,173,254,1)" // 图表背景的颜色
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "rgba(153, 209, 246, 0.2)" // 网格的颜色
        }
      }
    },
    series: [
      {
        name: "GDP三产构成",
        type: "radar",
        symbol: "angle",
        itemStyle: {
          normal: {
            areaStyle: { type: "default" }
          }
        },
        data: [
          {
            symbol: "circle", //圆点
            symbolSize: 2, //圆点大小
            value: value,
            areaStyle: { color: "rgba(64, 205, 241, 0.2)" },
            itemStyle: {
              normal: {
                borderWidth: 0.5,
                color: "#22e4fe",
                borderColor: "#22e4fe"
              }
            },
            lineStyle: {
              color: "rgba(146, 225, 255, 1)",
              width: 0.5
            }
          }
        ]
      }
    ]
  }
};
export const option2 = () => {
  const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
  const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40].map(item => ~~((item + 18) * 1.1));
  const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30]
  return {
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
      bottom: "0%",
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
}


export const option3 = () => {
  const xData = ["A", "B", "C", "D", "E"];
  const data = [55, 40, 77, 57, 20];
  const percent = [21, 28, 51, 35, 15];
  //   let chart = this.$echarts.init(this.$refs.belongSituation)
  const star =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABGCAYAAAAJkewlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEyODlDOTIyQkQyNTExRUI4RTQ4OEI5OTY0ODgyNEY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEyODlDOTIzQkQyNTExRUI4RTQ4OEI5OTY0ODgyNEY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTI4OUM5MjBCRDI1MTFFQjhFNDg4Qjk5NjQ4ODI0RjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTI4OUM5MjFCRDI1MTFFQjhFNDg4Qjk5NjQ4ODI0RjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7LYGV6AAAMiUlEQVR42uxd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";
  const imgList: { coord: number[]; symbolSize: number[]; symbolKeepAspect: boolean; symbolOffset: number[]; symbol: string; }[] = [];
  const iconData: { value: number; symbolPosition: string; }[] = [];
  data.forEach((item, index) => {
    imgList.push({
      coord: [index, item],
      symbolSize: [20, 4],
      symbolKeepAspect: true,
      symbolOffset: [-40, -20],
      symbol: "image://" + star,
    });
    iconData.push({
      value: item,
      symbolPosition: "end",
    });
  });
  // console.log(iconData)
  return {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(7,55,63,0.7)",
      borderColor: "rgba(7,55,63,0.7)",
      textStyle: {
        color: "#fff",
      },
      formatter: function (params: any) {
        return params[0].marker + "" + params[0].name + ": " + params[0].value;
      },
    },
    grid: {
      bottom: "12%",
      right: 0,
      left: 0,
    },
    xAxis: {
      data: xData,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: "权属情况",
        type: "pictorialBar",
        symbolSize: [16, 6],
        symbolOffset: [0, -3],
        z: 12,
        itemStyle: {
          normal: {
            color: "#14b1eb",
            opacity: 0.5,
          },
        },
        data: iconData,
      },
      {
        name: "",
        type: "pictorialBar",
        symbolSize: [28, 15],
        symbolOffset: [0, -7],
        z: 10,
        itemStyle: {
          normal: {
            color: "transparent",
            borderColor: "#14b1eb",
            borderType: "solid",
            borderWidth: 5,
          },
        },
        data: iconData,
      },
      {
        name: "",
        type: "pictorialBar",
        symbolSize: [20, 12.5],
        symbolOffset: [0, -7],
        z: 10,
        itemStyle: {
          normal: {
            color: "transparent",
            borderColor: "#14b1eb",
            borderType: "solid",
            borderWidth: 5,
          },
        },
        data: iconData,
      },
      {
        name: "",
        type: "pictorialBar",
        symbolSize: [6, 3],
        symbolOffset: [0, -1],
        z: 12,
        itemStyle: {
          normal: {
            color: "rgb(9,227,255)",
          },
        },
        data: iconData,
      },
      {
        type: "bar",
        itemStyle: {
          normal: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(24,118,158)",
                },
                {
                  offset: 1,
                  color: "rgba(9,30,41,0.5)", //底部渐变颜色
                },
              ],
            },
          },
        },
        silent: true,
        barWidth: 16,
        barGap: "-100%", // Make series be overlap
        data: data,
        label: {
          show: true,
          position: "top",
          distance: 10,
          color: "#fff",
          fontSize: 12,
          formatter: (params:any) => {
            // console.log(params)
            return (
              "{a|" +
              params.value +
              "}" +
              "件"
            );
          },
          rich: {
            a: {
              color: "#03adff",
              fontSize: 16,
              fontWeight: "bold",
            },
            b: {
              color: "#fff",
              fontSize: 14,
              marginTop: 15,
            },
          },
        },
        markPoint: {
          data: imgList,
        },
      },
    ],
  };
}

export const option6 = () => {
  return {
    grid: {
      top: "10%",
      bottom: "12%"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
        },
      },
    },
    // legend: {
    //   data: ["销售量", "业务1", "业务2"],
    //   top: "-10%",
    //   right: "10",
    //   textStyle: {
    //     color: "rgba(250,250,250,0.6)",
    //     fontSize: 16,
    //   },
    // },
    xAxis: {
      data: ["区域1", "区域2", "区域3", "区域4", "区域5", "区域6"],
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#26D9FF",
          width: 1,
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgba(250,250,250,0.6)", //X轴文字颜色
          fontSize: 16,
        },
      },
      // splitArea: {
      //   show: true,
      //   areaStyle: {
      //     color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"],
      //   },
      // },
    },
    yAxis: [
      {
        type: "value",
        /*name: "亿元",*/
        nameTextStyle: {
          color: "#ebf8ac",
          fontSize: 16,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#26D9FF",
            width: 1,
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(250,250,250,0.6)",
            fontSize: 16,
          },
        },
      },
      {
        type: "value",
        /*name: "同比",*/
        nameTextStyle: {
          color: "#ebf8ac",
          fontSize: 16,
        },
        position: "right",
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: "{value} %", //右侧Y轴文字显示
          textStyle: {
            color: "rgba(250,250,250,0.6)",
            fontSize: 16,
          },
        },
      },
    ],
    series: [
      {
        name: "销售量",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 8, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: "#1045A0",
          borderColor: "#3D7EEB",
          width: 1,
          shadowColor: "#3D7EEB",
          shadowBlur: 2,
        },
        lineStyle: {
          color: "#3D7EEB",
          width: 1,
          shadowColor: "#3D7EEB",
          shadowBlur: 4,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(61,126,235, 0.5)",
            },
            {
              offset: 1,
              color: "rgba(61,126,235, 0)",
            },
          ]),
        },
        data: [4.2, 3.5, 2.9, 7.8, 5, 3],
      },
      {
        name: "业务1",
        type: "bar",
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(61,126,235, 1)",
              },
              {
                offset: 1,
                color: "rgba(61,126,235, 0)",
              },
            ]),
            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(160,196,225, 1)",
              },
              {
                offset: 1,
                color: "rgba(61,126,235, 1)",
              },
            ]),
            borderWidth: 2,
          },
        },
        data: [4, 3, 2, 8, 3, 5],
      },
      {
        name: "业务2",
        type: "bar",
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(15,197,243,1)" },
              { offset: 1, color: "rgba(15,197,243,0)" },
            ]),
            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(180,240,255,1)" },
              { offset: 1, color: "rgba(15,197,243,1)" },
            ]),
            borderWidth: 2,
          },
        },
        data: [3, 2, 3, 5, 4, 3],
      },
    ],
  };

}


