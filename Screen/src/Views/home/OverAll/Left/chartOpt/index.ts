import * as echarts from 'echarts'
import { LINE_TOOLTIP, LEGEND, XAXIS_NAME, AXIS_LABEL, YAXIS_NAME } from '@/utils/chartConfig'
import _, { padStart } from "lodash";

let total = 0;
export const option6 = {
  // backgroundColor: "transparent",
  graphic: {
    elements: [
      {
        type: "image",
        z: 3,
        // style: {
        // 	image: require("@/assets/images/chart/pie_line.png"),
        // 	width: 90,
        // 	height: 90,
        // 	stroke: "red",
        // 	lineWidth: 10,
        // },
        left: '43',
        top: "center",
      },
    ],
  },

  tooltip: {
    show: true,
  },
  series: [
    {
      type: "pie",
      radius: '60%',
      center: ["25%", "50%"],
      hoverAnimation: true,
      roseType: true,
      z: 10,
      label: {
        show: false,
        position: "center",
        formatter: (e: any) => {

          return "{total|355}\n设备总数";
        },
        rich: {
          total: {
            fontSize: 26,
            color: "#fff",
            fontFamily: "Digital",
          },
        },
        color: "#fff",
        fontSize: 12,
        lineHeight: 30,
      },
      data: [
        {
          value: 52 * 12,
          name: "未开始",
          itemStyle: {
            color: "rgba(255, 128, 128, 0.1)",
            borderColor: 'rgba(255, 128, 128, 1)',
            borderWidth: 2
          },

        },
        {
          value: 64 * 13,
          name: "进行中",
          itemStyle: {
            color: "rgba(255, 243, 172, 0.1)",
            borderColor: 'rgba(255, 225, 127, 1)',
            borderWidth: 2
          },

        },
        {
          value: 82 * 9,
          name: "已完成",
          itemStyle: {
            color: "rgba(255, 178, 98, 0.44)",
            borderColor: 'rgba(255, 178, 98, 1)',
            borderWidth: 2
          },

        },

      ],
      labelLine: {
        show: false,
      },
    },
    {
      type: "pie",
      radius: "70%",

      center: ["25%", "50%"],
      hoverAnimation: false,
      label: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "未开始",
          itemStyle: {
            color: "rgba(216, 216, 216, 0.1)",
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.33)'
          },
        },

      ],
      labelLine: {
        show: false,
      },
    },
  ],
};
Object.assign(option6, {
  legend: {
    orient: "vertical",
    show: true,
    right: "10%",
    y: "center",
    itemWidth: 8,
    itemHeight: 8,
    itemGap: 30,
    textStyle: {
      color: "#fff",
      fontSize: 14,
      lineHeight: 20,
      rich: {
        percent: {
          color: "#fff",
          fontSize: 16,
        },
      },
    },
    formatter: (name: string) => {
      const options = option6
      const series: any = options.series[0];
      if (total === 0) {
        total = series.data.reduce((pre: number, curr: any) => {
          return pre + curr.value;
        }, 0);
      }
      const element = series.data.find((item: any) => {
        return item.name === name;
      });

      const result = ((+element.value / total) * 100).toFixed(2);

      const num = +element.value;
      let formatterStr = `${name}\r\r\r\r${num}\r\r\r\r`
      if (num < 10) {
        formatterStr += '\r\r'
      }
      formatterStr += `{percent|${result}%}`
      return formatterStr
    },
    // backgroundColor: 'rgba(216,216,216,0.77)',
    // borderRadius: 13,
  },
})

const xLabel = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const dataValue = [37, 58, 51, 63, 71, 38, 46];

export const option1 = {
  // backgroundColor:'#000237',
  tooltip: {
    show: false,
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
    show: false,
    textStyle: {
      color: "#fff"
    },
    // right: 'center',
    top: '2%',
    right: '5%',
    data: [
      {
        name: '准点率'
      },
      {
        name: '平均准点率'
      }
    ]
  },
  grid: {
    top: '17%',
    left: '10%',
    right: '12%',
    bottom: '10%',
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
          color: 'rgba(255,255,255,0.3)',
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
          color: 'rgba(255,255,255,0.3)',
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
          color: 'rgba(255,255,255,0.2)',
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
      name: '准点率',
      type: 'line',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: false,
      symbolSize: 6,
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
          color: 'rgba(255,255,255,0.3)', // 线条颜色
        },
      },
      itemStyle: {
        show: false,
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
                color: '#FFCB71',
              },
              {
                offset: 0.2,
                color: "rgba(255,255,255,0.7)"
              },
              {
                offset: 0.5,
                color: "rgba(255,255,255,0.5)"
              },
              {
                offset: 0.9,
                color: 'rgba(255,255,255,0.05)',
              },
            ],
            false
          ),
        },
      },
      data: dataValue,

      markPoint: {
        symbolSize: 8,
        label: {
          color: '#fff',
          position: 'top',
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: [6, 15, 4, 15],
          fontSize: 10,
          borderRadius: 10,
          borderColor: 'rgba(255,255,255,0.38)',
          borderWidth: 0.5
        },
        itemStyle: { color: '#FFB262', borderWidth: 1 },
        symbol: 'emptyCircle',
        data: [
          {
            name: '最大值',
            type: 'max'
          },]
      },
      markLine: {
        lineStyle: {
          width: 2,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#FFA648' // 0% 处的颜色
            }, {
              offset: 0.8, color: '#ffffff30' // 100% 处的颜色
            },
            {
              offset: 1, color: '#ffffff00' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          type: 'solid'
        },
        data: [[
          { coord: [4, 0] }, // [x第几个（从0开始），y轴起始点 ]
          { coord: [4, 80] } // [x第几个（从0开始），y轴起始点 ]
        ]],
        silent: true, // 鼠标悬停事件, true悬停不会出现实线
        symbol: 'none', // 去掉箭头
      }
    },
    {
      name: '平均准点率',
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
        arr.fill((dataValue.reduce((pre: number, cur: number) => {
          return pre + (+cur)
        }, 0) / 7).toFixed(2))
        return arr;
      })()
    },
  ],
};


const legendData = ['车辆数', '设计车位']; //图例
const indicator = [
  {
    text: '小型车',
    max: 6000,
  },
  {
    text: '中型车',
    max: 5000
  },
  {
    text: '大型车',
    max: 5000
  },
  {
    text: '货车',
    max: 5000,
    //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
  },
  {
    text: '特种车',
    max: 5000
  },
  {
    text: '贵宾车',
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
    orient: 'vertical',
    icon: 'circle', //图例形状
    data: legendData,
    bottom: 35,
    right: 40,
    itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
    itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
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
    indicator: indicator,
    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: { // 分隔区域的样式设置。
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      }
    },
    axisLine: { //指向外圈文本的分隔线样式
      lineStyle: {
        color: '#153269'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#113865', // 分隔线颜色
        width: 1, // 分隔线线宽
      }
    },
  },
  series: [{
    type: 'radar',
    symbolSize: 8,
    // symbol: 'angle',
    data: dataArr
  }]
};
export const option3 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    itemGap: 10,
    itemWidth: 8,
    itemHeight: 8,
    right: "10%",
    top: "3%",
    // padding:[10,10],
    data: [
      {
        name: "巡检次数",
        itemStyle: {
          // color:"#fff",
        },
        textStyle: LEGEND,
      },
      {
        name: "去年同比",
        textStyle: LEGEND,
      },
    ],
  },
  grid: {
    top: "30%",
    left: "8%",
    right: "12%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    name: "(月)",
    nameTextStyle: XAXIS_NAME,
    axisLabel: AXIS_LABEL,
    axisLine: {
      show: true,
    },
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  yAxis: {
    type: "value",
    name: "(次)",
    offset: -5,

    axisLine: {
      show: true,
    },
    axisLabel: AXIS_LABEL,
    // data:[100,200,300,400],
    nameTextStyle: YAXIS_NAME,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "巡检次数",
      type: "bar",
      data: (function () {
        const arr = []
        for (let i = 0; i < 13; i++) {
          arr.push(_.random(500, 1000))
        }
        return arr;
      })(),
      barWidth: 5,
      itemStyle: {
        // borderRadius: 4,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "#81C1FF",
          },
          {
            offset: 0.7,
            color: "#2D98FF",
          },
        ]),
      },
    },
    {
      name: "去年同比",
      type: "bar",
      barWidth: 5,
      data: (function () {
        const arr = []
        for (let i = 0; i < 13; i++) {
          arr.push(_.random(500, 1000))
        }
        return arr;
      })(),
      itemStyle: {
        // borderRadius: 4,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "#B8FFE2",
          },
          {
            offset: 0.7,
            color: "#00D2BA",
          },
        ]),
      },
    },
  ],
};

export const option4 = {
  legend: {
    show: true,
    icon: "roundRect",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
    itemWidth: 12,  // 设置宽度
    itemHeight: 2, // 设置高度
    itemGap: 16, // 设置间距
    top: 5,
    right: '10%',
    textStyle: {
      fontSize: 12,
      color: '#d3d3d3',
      fontFamily: 'OPPOSans-M'
    },
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#C9CDD4',	//显示竖线颜色
        type: "solid",
        width: 1
      }

    },
    backgroundColor: 'rgba(255, 255, 255, 0.96)',	//tooltip背景色
    borderColor: '#EBEBF2',		//tooltip边框颜色
    borderWidth: 1,
    textStyle: {
      width: 160,
      height: 220,
      lineHeight: 24,
      color: '#7270A6',
      fontSize: '16',
      fontFamily: 'OPPOSans-M'
    },
    formatter: (params: any) => {
      // 获取xAxis data中的数据
      let dataStr = `<div><p style="font-size: 16px;
font-family: OPPOSans-M;
font-weight: 500;
color: #353280;
line-height: 20px;margin:0 5px 5px;">
    
        ${params[0].name}时
   
    
      </p></div>`
      params.forEach((item: any) => {
        dataStr += `<div>
          <div style="margin: 0 8px;">

            <span style="display:inline-block;width: 12px;
            margin-bottom:3px;
height: 2px;background-color:${item.color};"></span>
            <span style="font-size: 12px;
font-family: OPPOSans-M;

color: #7270A6;
line-height: 14px;">${item.seriesName}</span>
        
            <span style="font-size: 14px;
font-family: Roboto-R;
font-weight: 400;
color: #49478D;
line-height: 16px;margin-left:20px;">${item.data}</span>
          </div>
        </div>`
      })
      return dataStr
    }


  },
  grid: {
    top: '17%',
    left: '6%',
    right: '6%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: (() => {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(padStart(i.toString(), 2, '0') + ':00')
      }
      return arr;
    })(),
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 3,
      inside: false,
      textStyle: {
        color: '#d3d3d3',
        fontSize: '13',
        fontFamily: 'OPPOSans-M'

      }
    },
    axisLine: {
      show: false,
      lineStyle: {
        width: 1,
        color: '#E5E6EB',

      }
    },
    splitLine: {
      //x网格样式
      show: false,

      lineStyle: {
        color: "#F7F8FA",
        type: "solid",
        width: "1",
      },
    },

  },
  yAxis: [
    {
      min: 0,
      max: 40,
      type: 'value',
      nameTextStyle: {
        fontSize: 22,
        color: 'rgba(243, 246, 252, 0.8)',
        verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
        padding: [-30, 60, 0, 0]
      },
      interval: 10, //设置坐标轴的分割段数
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#ffffff80',
          width: 1,
          // type: 'dashed'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.1)"].reverse()
        }
      },
      axisLabel: {
        inside: false,
        formatter: "{value}",
        textStyle: {
          color: '#C9CDD4',
          fontSize: '10',


        }
      },

    },


  ],
  series: [
    {
      name: '道路巡检',
      smooth: false,
      symbol: 'circle', // 折线点设定为实心点
      symbolSize: 1, // 设定折线点的大小
      data: [3, 4.2, 6.4, 6.5, 7.2, 8.5, 8.9, 9.6, 10.3, 10.8, 11.6, 13.7, 14.2, 14.8, 15.1, 15.9, 16.2, 17.5, 16.2, 17.2, 18.6, 17.1, 12.5, 6.5, 2.3].map(item => +(item * _.random(0.1, 0.6, true)).toFixed(0)),
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
        normal: {
          color: "rgba(61, 228, 252, 1)",
          borderColor: 'rgba(61, 228, 252, 1)',
          borderWidth: 1,


        }
      },//在单个图表实例中存在多个y轴的时候有用
      lineStyle: {
        color: "rgba(61, 228, 252, 1)",//折线的颜色,
        width: 2,
      },
      areaStyle: {//区域填充渐变颜色
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(61,228,252,0.6)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(61,228,252,0)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }


    },
    {
      name: '站场设备巡检',
      smooth: false,
      symbol: 'circle', // 折线点设定为实心点
      symbolSize: 0, // 设定折线点的大小
      data: [3, 4.2, 6.4, 6.5, 7.2, 8.5, 8.9, 9.6, 10.3, 10.8, 11.6, 13.7, 14.2, 14.8, 15.1, 15.9, 16.2, 17.5, 16.2, 17.2, 18.6, 17.1, 12.5, 6.5, 2.3].map(item => +(item * _.random(0.8, 2, true)).toFixed(0)),
      type: 'line',
      yAxisIndex: 0, //在单个图表实例中存在多个y轴的时候有用
      itemStyle: {
        normal: {
          color: "rgba(255, 255, 255, 1)",
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1,
        }
      },//在单个图表实例中存在多个y轴的时候有用
      areaStyle: {//区域填充渐变颜色
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(255, 221, 211, 0.6)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(255, 221, 211, 0)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }

  ]
};


export const option7 = {
  title: [
    {
      text: '已完成',
      x: '23%',
      top: '55%',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '100',
      },
    },
    {
      text: '75%',
      x: '23%',
      y: '40%',
      textStyle: {
        fontSize: '18',
        color: '#FFFFFF',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '600',
      },
    },
  ],
  // backgroundColor: '#111',
  polar: {
    radius: ['42%', '52%'],
    center: ['30%', '50%'],
  },
  angleAxis: {
    max: 100,
    show: false,
  },
  radiusAxis: {
    type: 'category',
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  legend: {
    data: ['已完成', '未完成'],
    right: '20%',
    top: "center",
    textStyle: {
      color: '#ccc'
    },
    orient: "vertical",
    itemGap: 30
  },
  series: [
    {
      name: '已完成',
      type: 'bar',
      roundCap: true,
      barWidth: 30,

      showBackground: true,
      backgroundStyle: {
        color: 'rgba(66, 66, 66, .3)',
      },
      data: [67.7],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#16CEB9',
            },
            {
              offset: 1,
              color: '#6648FF',
            },
          ]),
        },
      },
    },
    {
      name: '未完成',
      type: 'bar',
      roundCap: true,
      barWidth: 30,

      showBackground: true,
      backgroundStyle: {
        color: 'rgba(66, 66, 66, .3)',
      },
      data: [32.3],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: 'rgba(66, 66, 66, .8)'
        },
      },
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['56%'],
      hoverAnimation: false,
      center: ['30%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE',
      },
      data: [30],
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['38%'],
      hoverAnimation: false,
      center: ['30%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE',
      },
      data: [100],
    },
  ],
};
export const option8 = {
  grid: {
    left: '5%',
    right: '5%',
    top: '10%',
    bottom: '3%',
    containLabel: true
  },
  // title: {
  // 	text: '单位：亿元',
  // 	textStyle: {
  // 		color: '#FFFFFF',
  // 		fontSize: '12px',
  // 		fontWeight: 'normal'
  // 	},
  // 	top: '5px',
  // 	left: '3%'
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'rgba(50, 216, 205, 1)'
      },
    }
  },
  xAxis: [{
    type: 'category',
    boundaryGap: 1,
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#A1A7B3'
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },

    data: (() => {
      const arr = new Array(6)
      for (let i = 0; i < arr.length; i++) {
        arr[i] = (i + 1).toString().padStart(2, '0')
      }
      console.log(arr)
      return arr
    })()
  }],
  yAxis: [
    {
      type: 'value',
      name: '',
      padding: 5,
      // max: 1000,
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(70, 171, 208, 0.4)',
          type: 'dashed'
        }
      },
      axisLine: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.1)"].reverse()
        }
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          color: '#A1A7B3'

        },

      },
      axisTick: {
        show: false
      }
    }

  ],
  series: [
    {
      name: '今日',
      type: 'line',
      // smooth: true,
      stack: '总量',
      symbolSize: 5,
      smooth: false,
      itemStyle: {
        normal: {
          color: 'rgba(10, 135, 243, 1)',
          lineStyle: {
            color: "rgba(10, 135, 243, 1)",
            width: 2
          },
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(10, 135, 243, 0.4)'
            },
            {
              offset: 1,
              color: 'rgba(23, 66, 122, 0.1)'
            }
          ], false),
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410].map(item => item / 100)
    },

  ],

};


export const option9 = () => {
  const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
  const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40].map(item => ~~((item + 18) * 1.1));
  const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30]
  return {
    // backgroundColor: '#fff',
    title: {
      text: '单位（件）',
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


export const option10 = () => {
  const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
  const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40];
  const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];
  return {
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
      top: "5%",
      left: "3%",
      right: "5%",
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
        barMaxWidth: 12,
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
}

export const option11 = () => {
  const dataX = ['第1检测区', '第2检测区', '第3检测区', '第4检测区',
    '第5检测区', '第6检测区', '第7检测区', '第8检测区', '第9检测区', '第10检测区',
    '第11检测区', '第12检测区', '第13检测区', '第14检测区', '第15检测区', '第16检测区', '第17检测区', '第18检测区']; //名称
  const dataY = [20, 50, 15, 35, 50, 30, 40, 50, 60, 20, 50, 15, 35, 50, 30, 40, 50, 60]; //数据
  let zoomShow = false;
  if (dataY.length > 14) {
    zoomShow = true;
  } else {
    zoomShow = false;
  }
  const option = {
    // backgroundColor: '#0D2753',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '10%',
      right: '5%',
      left: '5%',
      bottom: '-3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: dataX,
        axisLine: {
          lineStyle: {
            color: 'rgba(66, 192, 255, .3)',
          },
        },
        axisLabel: {
          interval: 0,
          margin: 10,
          // color: '#05D5FF',
          color: '#ccc',
          textStyle: {
            fontSize: 11,
          },
          rotate: '45',
        },
        axisTick: {//刻度
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          padding: [3, 0, 0, 0],
          formatter: '{value}',
          // color: 'rgba(95, 187, 235, 1)',
          color: '#ccc',
          textStyle: {
            fontSize: 11,
          },
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(66, 192, 255, .3)',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0)',
          },
        },
      },
    ],
    // dataZoom: [//滚动条
    // 	{
    // 		show: zoomShow,
    // 		type: 'slider',
    // 		realtime: true,
    // 		startValue: 0,
    // 		endValue: 14,
    // 		xAxisIndex: [0],
    // 		bottom: '10',
    // 		left: '30',
    // 		height: 10,
    // 		borderColor: 'rgba(0,0,0,0)',
    // 		textStyle: {
    // 			color: '#05D5FF',
    // 		},
    // 	},
    // ],
    series: [
      {
        type: 'bar',
        data: dataY,
        barWidth: '10',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(5, 213, 255, 1)', // 0% 处的颜色
                },
                {
                  offset: 0.98,
                  color: 'rgba(5, 213, 255, 0)', // 100% 处的颜色
                },
              ],
              false
            ),
            shadowColor: 'rgba(5, 213, 255, 1)',
            shadowBlur: 4,
          },
        },
        label: {
          normal: {
            show: true,
            lineHeight: 10,
            formatter: '{c}',
            position: 'top',
            textStyle: {
              color: '#fff',
              fontSize: 10,
            },
          },
        },
      },
    ],
  };
  return option
}

export const option12 = (data: number[]) => {
  console.log(data, 'data');

  return {
    title: {
      text: '',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 20,
      },
      top: '3%',
      left: '10%',
    },
    // backgroundColor: '#0f375f',
    grid: {
      top: "15%",
      bottom: "15%"//也可设置left和right设置距离来控制图表的大小
      , left: '10%',
      right: '10%'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true
        }
      }
    },
    legend: {
      data: ["人口增长趋势", "常住人口数量"],
      top: "0%",
      textStyle: {
        color: "#ffffff"
      }
    },
    xAxis: {
      data: [

        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"

      ],
      axisLine: {
        show: false, //隐藏X轴轴线
        lineStyle: {
          color: '#01FCE3'
        }
      },
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ccc" //X轴文字颜色
        }
      },

    },
    yAxis: [
      {
        type: "value",
        name: "万人",
        nameTextStyle: {
          color: "#ccc"
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ccc"
          }
        },

      },
      {
        type: "value",
        name: "",
        nameTextStyle: {
          color: "#ccc"
        },
        position: "right",
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          formatter: "{value} %", //右侧Y轴文字显示
          textStyle: {
            color: "#ccc"
          }
        }
      },
      {
        type: "value",
        gridIndex: 0,
        min: 50,
        max: 100,
        splitNumber: 8,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
          }
        }
      }
    ],
    series: [
      {
        name: "人口增长趋势",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 10, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: "#058cff"
        },
        lineStyle: {
          color: "#058cff"
        },
        areaStyle: {
          color: "rgba(5,140,255, 0.2)"
        },
        data: data.map((item, index) => {
          let result = 0;
          if (index === 0) {
            result = 0.01
          } else {
            result = Math.pow((item / data[index - 1]), 1) - 1
          }
          return (result * 100).toFixed(2)
        })
      },
      {
        name: "常住人口数量",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#00FFE3"
            },
            {
              offset: 1,
              color: "#4693EC"
            }
            ])
          }
        },
        data: data
      }
    ]
  };
}

export const option13 = () => {
  return {
    legend: {
      show: true,
      icon: "roundRect",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
      itemWidth: 12,  // 设置宽度
      itemHeight: 2, // 设置高度
      itemGap: 16, // 设置间距
      top: 5,
      right: '10%',
      textStyle: {
        fontSize: 12,
        color: '#d3d3d3',
        fontFamily: 'OPPOSans-M'
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#C9CDD4',	//显示竖线颜色
          type: "solid",
          width: 1
        }

      },
      backgroundColor: 'rgba(255, 255, 255, 0.96)',	//tooltip背景色
      borderColor: '#EBEBF2',		//tooltip边框颜色
      borderWidth: 1,
      textStyle: {
        width: 160,
        height: 220,
        lineHeight: 24,
        color: '#7270A6',
        fontSize: '16',
        fontFamily: 'OPPOSans-M'
      },
      formatter: (params: any) => {
        // 获取xAxis data中的数据
        let dataStr = `<div><p style="font-size: 16px;
font-family: OPPOSans-M;
font-weight: 500;
color: #353280;
line-height: 20px;margin:0 5px 5px;">
    
        ${params[0].name}时
   
    
      </p></div>`
        params.forEach((item: any) => {
          dataStr += `<div>
          <div style="margin: 0 8px;">

            <span style="display:inline-block;width: 12px;
            margin-bottom:3px;
height: 2px;background-color:${item.color};"></span>
            <span style="font-size: 12px;
font-family: OPPOSans-M;

color: #7270A6;
line-height: 14px;">${item.seriesName}</span>
        
            <span style="font-size: 14px;
font-family: Roboto-R;
font-weight: 400;
color: #49478D;
line-height: 16px;margin-left:20px;">${item.data}%</span>
          </div>
        </div>`
        })
        return dataStr
      }


    },
    grid: {
      top: '17%',
      left: '10%',
      right: '12%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: (() => {
        const arr = []
        for (let i = 0; i < 25; i++) {
          arr.push(padStart(i.toString(), 2, '0') + ':00')
        }
        return arr;
      })(),
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 3,
        inside: false,
        textStyle: {
          color: '#d3d3d3',
          fontSize: '13',
          fontFamily: 'OPPOSans-M'

        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          width: 1,
          color: '#E5E6EB',

        }
      },
      splitLine: {
        //x网格样式
        show: false,

        lineStyle: {
          color: "#F7F8FA",
          type: "solid",
          width: "1",
        },
      },

    },
    yAxis: [{

      min: 0,
      max: 40,
      type: 'value',
      nameTextStyle: {
        fontSize: 22,
        color: 'rgba(243, 246, 252, 0.8)',
        verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
        padding: [-30, 60, 0, 0]
      },
      interval: 10, //设置坐标轴的分割段数
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#ffffff80',
          width: 1,
          // type: 'dashed'
        }
      },
      axisLabel: {
        inside: false,
        formatter: "{value} %",
        textStyle: {
          color: '#C9CDD4',
          fontSize: '10',


        }
      },

    },

    ],
    series: [

      {
        name: '24小时能耗',
        smooth: false,

        symbol: 'circle', // 折线点设定为实心点
        symbolSize: 1, // 设定折线点的大小
        data: [3, 4.2, 6.4, 6.5, 7.2, 8.5, 8.9, 9.6, 10.3, 10.8, 11.6, 13.7, 14.2, 14.8, 15.1, 15.9, 16.2, 17.5, 16.2, 17.2, 18.6, 17.1, 12.5, 6.5, 2.3].map(item => +(item * _.random(1, 2, true)).toFixed(2)),
        type: 'line',
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: "rgba(61, 228, 252, 1)",
            borderColor: 'rgba(61, 228, 252, 1)',
            borderWidth: 1,


          }
        },//在单个图表实例中存在多个y轴的时候有用
        lineStyle: {
          color: "rgba(61, 228, 252, 1)",//折线的颜色,
          width: 2,
        },
        areaStyle: {//区域填充渐变颜色
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(61,228,252,0.6)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(61,228,252,0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }


      },
      {
        name: '能耗同比',
        smooth: false,
        symbol: 'circle', // 折线点设定为实心点
        symbolSize: 1, // 设定折线点的大小
        data: [3, 4.2, 6.4, 6.5, 7.2, 8.5, 8.9, 9.6, 10.3, 10.8, 11.6, 13.7, 14.2, 14.8, 15.1, 15.9, 16.2, 17.5, 16.2, 17.2, 18.6, 17.1, 12.5, 6.5, 2.3].map(item => +(item * _.random(0.8, 2, true)).toFixed(2)),
        type: 'line',
        yAxisIndex: 0, //在单个图表实例中存在多个y轴的时候有用
        itemStyle: {
          normal: {
            color: "rgba(255, 255, 255, 1)",
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
          }
        },//在单个图表实例中存在多个y轴的时候有用
        areaStyle: {//区域填充渐变颜色
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(255, 221, 211, 0.6)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(255, 221, 211, 0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }

    ]
  };

}