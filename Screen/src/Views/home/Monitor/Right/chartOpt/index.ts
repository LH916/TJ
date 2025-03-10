import * as echarts from "echarts";
import _ from "lodash";

const fontColor = "#30eee9";
export const option = {
  grid: {
    left: "5%",
    right: "5%",
    top: "25%",
    bottom: "5%",
    containLabel: true,
  },
  title: {
    text: "单位：亿元",
    textStyle: {
      color: "#FFFFFF",
      fontSize: "12px",
      fontWeight: "normal",
    },
    top: "5px",
    left: "3%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "rgba(50, 216, 205, 1)",
      },
    },
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: 1,
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#A1A7B3",
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },

      data: (() => {
        const arr = new Array(12);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = (i + 1).toString().padStart(2, "0");
        }
        console.log(arr);
        return arr;
      })(),
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      padding: 5,
      // max: 1000,
      splitLine: {
        show: false,
        lineStyle: {
          color: "rgba(70, 171, 208, 0.4)",
          type: "dashed",
        },
      },
      axisLine: {
        show: false,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.1)"].reverse(),
        },
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          color: "#A1A7B3",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "今日",
      type: "line",
      // smooth: true,
      stack: "总量",
      symbolSize: 5,

      itemStyle: {
        normal: {
          color: "rgb(70, 171, 208)",
          lineStyle: {
            color: "rgba(70, 171, 208,1)",
            width: 2,
          },
        },
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
                color: "rgba(70, 171, 208, 0.4)",
              },
              {
                offset: 1,
                color: "rgba(23, 66, 122, 0.1)",
              },
            ],
            false
          ),
        },
      },
      data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
    },
  ],
};

const list1 = [30, 150, 140, 100, 98, 80, 110, 90, 50, 30, 60, 65];
const list2 = [60, 30, 70, 30, 110, 100, 60, 50, 120, 115, 100, 60, 70];
const list3 = [30, 30, 40, 50];
const theme = {
  // 基础样式
  color: [
    {
      direction: 0, // 用角度值指定渐变的方向(或角度)
      color: ["rgba(242, 229, 147, 1)", "rgba(34, 140, 231, 1)"], // 颜色
    },
    {
      direction: 0,
      color: ["rgba(244, 150, 115, 1)"],
    },
    {
      direction: 0, // 用角度值指定渐变的方向(或角度)
      color: ["rgba(229, 101, 113, 1)"], // 颜色
    },
    {
      direction: 0,
      color: ["rgba(182, 74, 207, 1)"],
    },
    {
      direction: 0, // 用角度值指定渐变的方向(或角度)
      color: ["rgba(103, 84, 189, 1)"], // 颜色
    },
    {
      direction: 0,
      color: ["rgba(129, 141, 212, 1)"],
    },
  ],
  // 最大值颜色
  max: {
    direction: 0, // 用角度值指定渐变的方向(或角度)
    color: ["rgba(79,141,255,1)", "rgba(138,173,214,1)"], // 颜色
  },
};
export const option2 = {
  title: {
    text: "单位：亿元",
    textStyle: {
      color: "#FFFFFF",
      fontSize: "12px",
      fontWeight: "normal",
    },
    top: "5px",
    left: "3%",
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "25%",
    bottom: "0%",
    containLabel: true,
  },
  calculable: true,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    nameTextStyle: {
      color: "#ffffff",
      fontSize: 14,
    },
    axisLabel: {
      show: true,
      color: "#ffffff",
      fontSize: 12,
      fontFamily: "Microsoft YaHei",
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#dadada",
        width: 1,
      },
    },
    axisLine: {
      lineStyle: {
        color: "rgba(255,255,255,1)",
      },
      show: false,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.12)",
        type: "dashed",
      },
    },

    data: (() => {
      const arr = new Array(12);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = (i + 1).toString().padStart(2, "0");
      }
      console.log(arr);
      return arr;
    })(),
    type: "category",
  },
  yAxis: [
    {
      type: "value",
      name: "",
      padding: 5,
      // max: 1000,
      splitLine: {
        show: false,
        lineStyle: {
          color: "rgba(70, 171, 208, 0.4)",
          type: "dashed",
        },
      },
      axisLine: {
        show: false,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.1)"].reverse(),
        },
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          color: "#A1A7B3",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "进口额",
      type: "bar",
      stack: "1",
      data: list1,
      // 设置柱子的宽度
      // barWidth: (100 / 12) + "%",
      label: {
        show: true,
        position: "top",
        color: "#333",
        formatter: function (param: any) {
          return "";
        },
      },
      // 配置样式
      itemStyle: {
        // 通常情况下：
        normal: {
          // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(10, 112, 200, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(34, 140, 231, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    {
      name: "出口额",
      type: "bar",
      stack: "1",
      data: list2,
      // 设置柱子的宽度
      barWidth: "50%",
      label: {
        show: true,
        position: "top",
        color: "#333",
        formatter: function (param: any) {
          return "";
        },
      },
      // 配置样式
      itemStyle: {
        // 通常情况下：
        normal: {
          // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 206, 127, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255, 206, 127, 1)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
  ],
  legend: {
    data: ["进口额", "出口额"],
    itemWidth: 6,
    itemHeight: 6,
    textStyle: { color: "#fff" },
    right: "4%",
  },
};

export const option3 = {
  grid: {
    left: "5%",
    right: "5%",
    top: "10%",
    bottom: "5%",
    containLabel: true,
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
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "rgba(50, 216, 205, 1)",
      },
    },
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: 1,
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#A1A7B3",
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },

      data: (() => {
        const arr = new Array(12);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = (i + 1).toString().padStart(2, "0");
        }
        console.log(arr);
        return arr;
      })(),
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      padding: 5,
      // max: 1000,
      splitLine: {
        show: false,
        lineStyle: {
          color: "rgba(70, 171, 208, 0.4)",
          type: "dashed",
        },
      },
      axisLine: {
        show: false,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.1)"].reverse(),
        },
      },
      axisLabel: {
        show: true,
        margin: 10,
        textStyle: {
          color: "#A1A7B3",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "今日",
      type: "line",
      // smooth: true,
      stack: "总量",
      symbolSize: 5,
      smooth: false,
      itemStyle: {
        normal: {
          color: "rgba(10, 135, 243, 1)",
          lineStyle: {
            color: "rgba(10, 135, 243, 1)",
            width: 2,
          },
        },
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
                color: "rgba(10, 135, 243, 0.4)",
              },
              {
                offset: 1,
                color: "rgba(23, 66, 122, 0.1)",
              },
            ],
            false
          ),
        },
      },
      data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
    },
  ],
};

const cellSize = [48, 25];
const pieRadius = 15; //圆环半径设置

function getVirtulData() {
  const date = +echarts.number.parseDate("2017-02-01");
  const end = +echarts.number.parseDate("2017-03-01");
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime("yyyy-MM-dd", time),
      Math.floor(Math.random() * 10000),
    ]);
  }
  return data;
}

function getPieSeries(scatterData: any, chart: any) {
  return echarts.util.map(scatterData, function (item: any, index) {
    //确认饼图中心
    const center = chart.convertToPixel("calendar", item);
    //步骤一：通过scatterData获取到realValue数组
    //----此处省略与后端接口连接的代码----
    const thisDate: any = echarts.format.formatTime("d", item[0]);
    //thisDate为当前item对应的日期
    const realType = [
      0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 4, 5,
      5, 4, 3,
    ];
    const realvalue = [
      100, 100, 101, 102, 103, 104, 5, 5, 4, 3, 2, 1, 0, 0, 0, 1, 2, 3, 4, 5, 5,
      4, 3, 4, 5, 5, 4, 3,
    ];
    //realValue为获取的存放真实数值的数组
    //realType为获取的存放真实数值对应的类别的数组
    //realType与realValue长度应与scatterData的长度相同。
    //步骤二：根据realValue数组来输入值
    let inputData = [{ name: "优", value: 100 }]; //设置一个初始值以防出错

    const matchIndex = thisDate - 1; //当前日期对应的当前类别索引
    console.log();
    switch (realType[matchIndex]) {
      case 0:
        inputData = [{ name: "优", value: realvalue[matchIndex] }];
        break;
      case 1:
        inputData = [{ name: "良", value: realvalue[matchIndex] }];
        break;
      case 2:
        inputData = [{ name: "轻度", value: realvalue[matchIndex] }];
        break;
      case 3:
        inputData = [{ name: "中度", value: realvalue[matchIndex] }];
        break;
      case 4:
        inputData = [{ name: "重度", value: realvalue[matchIndex] }];
        break;
      case 5:
        inputData = [{ name: " 严重", value: realvalue[matchIndex] }];
        break;
      default:
        break;
    }
    return {
      id: index + "pie",
      type: "pie",
      center: center,
      label: {
        normal: {
          formatter: "",
          position: "inside",
        },
      },
      radius: pieRadius,
      data: inputData,
    };
  });
}

function getPieSeriesUpdate(scatterData: any, chart: any) {
  return echarts.util.map(scatterData, function (item, index) {
    const center = chart.convertToPixel("calendar", item);
    return {
      id: index + "pie",
      center: center,
    };
  });
}

const scatterData = getVirtulData();
const romaList = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
export const option4 = {
  // grid: {
  // 	left: '0%',
  // 	right: '5%',
  // 	top: '20%',
  // 	bottom: '5%',
  // 	containLabel: true
  // },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    inRange: {
      color: [
        "rgba(10, 135, 243, 1)",
        "rgba(130, 201, 255, 1)",
        "rgba(65, 165, 160, 1)",
        "rgba(255, 206, 127, 0.5)",
        "rgba(151, 51, 55, 1)",
      ],
    },
    // inRange: {
    //     color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196027']
    // },
    show: false,
  },
  legend: {
    data: [
      {
        name: "优",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "red",
        },
      },
      {
        name: "良",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "white",
        },
      },
      {
        name: "轻度",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "white",
        },
      },
      {
        name: "中度",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "white",
        },
      },
      {
        name: "重度",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "white",
        },
      },
      {
        name: "严重",
        // 强制设置图形为圆。
        icon: "circle",
        // 设置文本为红色
        textStyle: {
          color: "white",
        },
      },
    ],
    bottom: 20,
  },
  calendar: {
    top: "20%",
    left: "center",
    orient: "vertical",
    cellSize: cellSize,
    yearLabel: {
      show: false,
      textStyle: {
        fontSize: 30,
      },
    },
    dayLabel: {
      // margin: 10,
      firstDay: 7,
      nameMap: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      color: "#fff",
      fontSize: 14,
      borderWidth: 0,
    },
    monthLabel: {
      show: false,
    },
    itemStyle: {
      borderWidth: 1,
      color: "rgba(0,0,0,0)",
    },
    range: ["2017-02"],
    // width: '360px',
    // height: '132px'
  },
  series: [
    {
      id: "label",
      type: "scatter",
      coordinateSystem: "calendar",
      symbolSize: 1,
      label: {
        normal: {
          show: true,
          formatter: function (params: any) {
            // params.value[0]
            const index = Math.ceil(params.value[1] / 2000);
            return romaList[index - 1];
          },
          // offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
      },
      data: scatterData,
    },
    {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: scatterData,
      pointSize: 13,
      itemStyle: {
        normal: {
          color: "#f4e925",
        },
      },
      label: {
        show: false,
        formatter(params: any) {
          return params.value[0].split("-")[2];
        },
        fontSize: 10,
        offset: [0, 0],
        // color: '#000000'
      },
    },
  ],
};

// 随机月份
// setInterval(function () {
//
// 	option.calendar[0].range = '2017-0' + parseInt(Math.random() * 9)
// 	myChart.setOption(option, true);
// }, 1000 * 10);

export const option5 = {
  // backgroundColor: "#000a3f",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    backgroundColor: "rgba(9, 24, 48, 0.5)",
    borderColor: "rgba(75, 253, 238, 0.4)",
    textStyle: {
      color: "#CFE3FC",
    },
    borderWidth: 1,
  },
  grid: {
    left: "0%",
    right: "5%",
    top: "25%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: [
    {
      name: "月份",
      type: "category",
      data: (() => {
        const arr = new Array(12);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = (i + 1).toString().padStart(2, "0");
        }
        console.log(arr);
        return arr;
      })(),
      axisLine: {
        lineStyle: {
          color: "#FFFFFF",
        },
      },
      axisLabel: {
        margin: 10,
        color: "#e2e9ff",
        textStyle: {
          fontSize: 12,
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      name: "消费（元）",
      axisLabel: {
        formatter: "{value}",
        color: "#e2e9ff",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#FFFFFF",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.12)",
        },
      },
    },
  ],
  series: [
    {
      type: "bar",
      data: (() => {
        const arr = new Array(12);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = _.random(1000, 2000);
        }
        console.log(arr);
        return arr;
      })(),
      barWidth: "30%",
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
                color: "rgba(140, 193, 244, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(6, 129, 231, 1)", // 100% 处的颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0,160,221,1)",
          shadowBlur: 4,
        },
      },
      label: {
        normal: {
          show: false,
          lineHeight: 10,
          formatter: "{c}",
          position: "top",
          textStyle: {
            color: "#00D6F9",
            fontSize: 12,
          },
        },
      },
    },
  ],
};

let data = [
  { value: 1, name: "爆炸案例" },
  { value: 3, name: "天然气泄露" },
  { value: 4, name: "普通异常" },
];
let sum = 0;
data.forEach((item) => {
  sum += item.value;
});

let addUp = 0;
const minHeight = 2;
let top = 5;
const color = [
  "rgba(255, 107, 119, 1)",
  "rgba(255, 204, 113, 1)",
  "rgba(100, 203, 255, 1)",
];

data = data.map((item, index) => {
  let itemValue = 0;
  if ((item.value / sum) * 100 < minHeight) itemValue = minHeight;
  else itemValue = (item.value / sum) * 100;
  top += itemValue;
  return {
    value: (addUp += itemValue),
    name: item.name,
    realValue: item.value,
    label: {
      show: true,
      color: "#fff",
      fontSize: 14,
      position: "outside",
      align: "center",
      formatter: () => {
        return `${item.name} ${item.value} 件`;
      },
    },
    itemStyle: {
      height: `${itemValue}%`,
      borderColor: color[index],
      borderWidth: 1,
      // shadowColor: color[index],
      // shadowBlur: 100
    },
  };
});

export const option6 = {
  // backgroundColor: '#0d3059',
  grid: {
    left: "0%",
    right: "3%",
    top: "10%",
    bottom: "5%",
    containLabel: true,
  },
  color: [
    "rgba(255, 118, 123, 0.5)",
    "rgba(255, 206, 127, 0.5)",
    "rgba(130, 201, 255, 0.5)",
  ],
  series: [
    {
      type: "funnel",
      sort: "ascending",
      data: data,
      left: "0%",
      right: "50%",
      top: "15%",
      bottom: "5%",
    },
  ],
};
