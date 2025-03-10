import * as echarts from 'echarts'
import _ from "lodash";
export function option1() {
  const img1 = {
    a: "http://oss-chart.ppchart.com/asset/get/s/data-1556957097230-ADWAaIDQo.png",
    b: "http://oss-chart.ppchart.com/asset/get/s/data-1556957110633-e0E-XOKQZ.png",
  };

  const img2 = {
    a: "http://oss-chart.ppchart.com/asset/get/s/data-1556957293615-JIhIQhaPm.png",
    b: "http://oss-chart.ppchart.com/asset/get/s/data-1556957298923-zs-dG6589.png",
  };

  const img3 = {
    a: "http://oss-chart.ppchart.com/asset/get/s/data-1556957304463-XMTLBr6Xp.png",
    b: "http://oss-chart.ppchart.com/asset/get/s/data-1556957309017-j1b8R1TfZ.png",
  };

  const img4 = {
    a: "http://oss-chart.ppchart.com/asset/get/s/data-1556957315287-hnSZOcwgo.png",
    b: "http://oss-chart.ppchart.com/asset/get/s/data-1556957320508-i5PMKDggE.png",
  };

  const img5 = {
    a: "http://oss-chart.ppchart.com/asset/get/s/data-1556957325987-F3qlbohCv.png",
    b: "http://oss-chart.ppchart.com/asset/get/s/data-1556957331282-3Vh8GdsQb.png",
  };

  const value = 1; // >0

  return {

    grid: {
      left: "5%",
      top: "10%",
      bottom: "10%",
      right: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category",
        inverse: false,
        data: ["站场A", "站场B", "站场C", "站场D", "站场E"],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
            color: "#3e86dd",
          },
        },
        axisLabel: {
          margin: 35,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
      },
    ],
    series: [
      {
        tooltip: {
          show: false,
        },
        z: 4,
        type: "pictorialBar",
        symbolSize: ["20", "20"],
        symbolRepeat: "fixed",
        data: [
          {
            value: value,
            symbol: "image://" + img1.b,
          },
          {
            value: value,
            symbol: "image://" + img2.b,
          },
          {
            value: value,
            symbol: "image://" + img3.b,
          },
          {
            value: value,
            symbol: "image://" + img4.b,
          },
          {
            value: value,
            symbol: "image://" + img5.b,
          },
        ],
      },
      {
        z: 6,
        type: "pictorialBar",

        symbolSize: ["20", "20"],

        animation: true,
        symbolRepeat: "fixed",
        symbolClip: true,
        symbolPosition: "start",
        symbolOffset: [0, 0],
        data: [
          {
            value: 60,
            symbol: "image://" + img1.a,
          },
          {
            value: 85,
            symbol: "image://" + img2.a,
          },
          {
            value: 105,
            symbol: "image://" + img3.a,
          },
          {
            value: 130,
            symbol: "image://" + img4.a,
          },
          {
            value: 185,
            symbol: "image://" + img5.a,
          },
        ],
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#18fcff",
              fontSize: 14,
            },
            position: "right",
            offset: [35, 0],
          },
        },
      },
      {
        type: "bar",
      },
    ],
  };


}

export function option2() {
  const fontColor = "#fff";
  return {
    grid: {
      left: "5%",
      right: "4%",
      top: "25%",
      bottom: "0%",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: true,
      x: "right",
      y: "10",
      icon: "stack",
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: "#fff",
        fontSize: 15,
      },
      nameTextStyle: {
        color: "#fff",
      },
      data: ["状态1", "状态2"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: fontColor,
          fontSize: 10,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.3)",

          },
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.3)",
          },
        },

        data: ["设备1", "设备2", "设备3", "设备4", "设备5", "设备6", "设备7"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "设备个数/个",
        nameTextStyle: {
          color: "#fff",
          fontSize: 12,
        },
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: fontColor,
            fontSize: 16,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.3)",

          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.3)",

          },
        },
      },
    ],
    series: [
      {
        name: "状态1",
        type: "line",
        symbol: "circle",
        symbolSize: 8,
        // smooth:true,  //这个是把线变成曲线
        itemStyle: {
          normal: {
            color: "#0092f6",
            lineStyle: {
              color: "#0092f6",
              width: 1,
            },
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,44,90,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,146,246,0.9)",
                },
              ]),
            },
          },
        },
        data: [32, 13, 20, 14, 20, 23, 21],
      },
      {
        name: "状态2",
        type: "line",
        symbol: "circle",
        symbolSize: 8,
        // smooth:true,  //这个是把线变成曲线
        itemStyle: {
          normal: {
            color: "#00d4c7",
            lineStyle: {
              color: "#00d4c7",
              width: 1,
            },
            areaStyle: {
              //color: '#94C9EC'
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "rgba(7,44,90,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,212,199,0.9)",
                },
              ]),
            },
          },
        },
        data: [22, 12, 11, 23, 29, 33, 31],
      },
    ],
  };

}

export function option3() {
  const img =
    "data:image/png;base64,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";

  const trafficWay = [
    {
      name: "泄露",
      value: 20,
    },
    {
      name: "爆炸",
      value: 10,
    },
    {
      name: "异常",
      value: 30,
    },
    {
      name: "轮渡",
      value: 40,
    },
  ];

  const data = [];
  const color = [
    "#00ffff",
    "#00cfff",
    "#006ced",
    "#ffe000",
    "#ffa800",
    "#ff5b00",
    "#ff3000",
  ];
  for (let i = 0; i < trafficWay.length; i++) {
    data.push(
      {
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i],
          },
        },
      },
      {
        value: 2,
        name: "",
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: "rgba(0, 0, 0, 0)",
            borderColor: "rgba(0, 0, 0, 0)",
            borderWidth: 0,
          },
        },
      }
    );
  }
  const seriesOption = [
    {
      name: "",
      type: "pie",
      clockWise: false,
      radius: [65, 69],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: "outside",
            color: "#ddd",
            formatter: function (params: any) {
              let percent: any = 0;
              let total = 0;
              for (let i = 0; i < trafficWay.length; i++) {
                total += trafficWay[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== "") {
                return params.name;
              } else {
                return "";
              }
            },
          },
          labelLine: {
            length: 20,
            length2: 20,
            show: true,
            color: "#00ffff",
          },
        },
      },
      center: [150, 110],
      data: data,
    },
  ];
  return {
    color: color,
    title: {
      text: "事故类型",
      top: "52%",
      textAlign: "center",
      left: "44%",
      textStyle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "400",
      },
    },
    graphic: {
      elements: [
        {
          type: "image",
          z: 3,
          style: {
            image: img,
            width: 110,
            height: 110,
          },
          // left: "center",
          // top: "center",
          position: [95, 55],
        },
      ],
    },
    tooltip: {
      show: false,
    },
    legend: {
      icon: "circle",
      orient: "horizontal",
      // x: 'left',
      data: ["火车", "飞机", "客车", "轮渡"],
      right: 340,
      bottom: 150,
      align: "right",
      textStyle: {
        color: "#fff",
      },
      itemGap: 20,
    },
    toolbox: {
      show: false,
    },
    series: seriesOption,
  };

}

export function option4() {
  // 立体柱状图

  const colors = [
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#8331D930",
        },
        {
          offset: 0.5,
          color: "#720DFF30",
        },
        {
          offset: 0.5,
          color: "#B635FC30",
        },
        {
          offset: 1,
          color: "#7F2CF130",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#F2792195",
        },
        {
          offset: 0.5,
          color: "#EE3E7099",
        },
        {
          offset: 0.5,
          color: "#F48D3599",
        },
        {
          offset: 1,
          color: "#C8295730",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#F1762099",
        },
        {
          offset: 0.5,
          color: "#F5D01C99",
        },
        {
          offset: 0.5,
          color: "#EF8E0899",
        },
        {
          offset: 1,
          color: "#FEDC4430",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#4D34FF99",
        },
        {
          offset: 0.5,
          color: "#244EFB99",
        },
        {
          offset: 0.5,
          color: "#5034D999",
        },
        {
          offset: 1,
          color: "#316CE830",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#20AAF899",
        },
        {
          offset: 0.5,
          color: "#2C74FF99",
        },
        {
          offset: 0.5,
          color: "#27AEFA99",
        },
        {
          offset: 1,
          color: "#4D8AFF30",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#289DF599",
        },
        {
          offset: 0.5,
          color: "#0DE8FF99",
        },
        {
          offset: 0.5,
          color: "#49B1FB30",
        },
        {
          offset: 1,
          color: "#17E9FD30",
        },
      ],
    },
    {
      type: "linear",
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#4FC3B299",
        },
        {
          offset: 0.5,
          color: "#49B5A399",
        },
        {
          offset: 0.5,
          color: "#57D1BF30",
        },
        {
          offset: 1,
          color: "#5AD1BD30",
        },
      ],
    },
  ];
  const barWidth = 30;

  return {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      data: ["站场A", "站场B", "站场C", "站场D", "站场E"],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#A1B5EB",
        fontSize: 12,
        lineHeight:30
      },
    },
    yAxis: {
      show: false,
    },
    grid: {
      top: 0,
      bottom: 30,
      left: 0,
      right: 0,
    },
    series: [
      {
        z: 1,
        type: "bar",
        barWidth: barWidth,
        data: [
          {
            value: 220,
            itemStyle: {
              normal: {
                color: colors[1],
              },
            },
          },
          {
            value: 182,
            itemStyle: {
              normal: {
                color: colors[2],
              },
            },
          },
          {
            value: 191,
            itemStyle: {
              normal: {
                color: colors[3],
              },
            },
          },
          {
            value: 234,
            itemStyle: {
              normal: {
                color: colors[4],
              },
            },
          },
          {
            value: 290,
            itemStyle: {
              normal: {
                color: colors[5],
              },
            },
          },
        ],
      },
      {
        z: 2,
        name: "底部",
        type: "pictorialBar",
        data: [
          {
            value: 1,
            itemStyle: {
              normal: {
                color: colors[1],
              },
            },
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: colors[2],
              },
            },
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: colors[3],
              },
            },
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: colors[4],
              },
            },
          },
          {
            value: 1,
            itemStyle: {
              normal: {
                color: colors[5],
              },
            },
          },
        ],
        symbol: "diamond",
        symbolOffset: [0, "50%"],
        symbolSize: [barWidth, 10],
      },
      {
        z: 3,
        name: "上部1",
        type: "pictorialBar",
        symbolPosition: "end",
        data: [
          {
            value: 220,
            itemStyle: {
              normal: {
                borderColor: colors[1],
                borderWidth: 2,
                color: colors[1],
              },
            },
          },
          {
            value: 182,
            itemStyle: {
              normal: {
                borderColor: colors[2],
                borderWidth: 2,
                color: colors[2],
              },
            },
          },
          {
            value: 191,
            itemStyle: {
              normal: {
                borderColor: colors[3],
                borderWidth: 2,
                color: colors[3],
              },
            },
          },
          {
            value: 234,
            itemStyle: {
              normal: {
                borderColor: colors[4],
                borderWidth: 2,
                color: colors[4],
              },
            },
          },
          {
            value: 290,
            itemStyle: {
              normal: {
                borderColor: colors[5],
                borderWidth: 2,
                color: colors[5],
              },
            },
          },
        ],
        symbol: "diamond",
        symbolOffset: [0, "-50%"],
        symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
      },
    ],
  };

}

export const option5 = {
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
    right: '5%',  
    top: '15%',
    bottom: '5%',
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

export const option6 = () => {
  const dataArr = 44;
  const colorSet = {
    color: "#468EFD",
  };
  const option = {
    // backgroundColor: "#0E1327",
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "内部进度条",
        type: "gauge",
        center: ['50%', '70%'],
        radius: "100%",

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / 100, colorSet.color],
              [1, "#111F42"],
            ],
            width: 8,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          show: false,
        },
        detail: {
          formatter: function (value: any) {
            if (value !== 0) {
              const num: any = Math.round(value);
              return parseInt(num).toFixed(0) + "%";
            } else {
              return 0;
            }
          },
          offsetCenter: [0, 82],
          textStyle: {
            padding: [0, 0, 0, 0],
            fontSize: 18,
            fontWeight: "700",
            color: colorSet.color,
          },
        },
        title: {
          //标题
          show: true,
          offsetCenter: [0, 46], // x, y，单位px
          textStyle: {
            color: "#fff",
            fontSize: 14, //表盘上的标题文字大小
            fontWeight: 400,
            fontFamily: "PingFangSC",
          },
        },
        data: [
          {
            name: "安全度",
            value: dataArr,
          },
        ],
        pointer: {
          show: true,
          length: "75%",
          radius: "20%",
          width: 10, //指针粗细
        },
        animationDuration: 4000,
      },
      {
        name: "外部刻度",
        type: "gauge",
         center: ['50%', '70%'],
        radius: "70%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 10, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]],
          },
        }, //仪表盘轴线
        axisLabel: {
          show: true,
          color: "#4d5bd1",
          distance: 25,
          formatter: function (v: any) {
            switch (v + "") {
              case "0":
                return "0";
              case "10":
                return "10";
              case "20":
                return "20";
              case "30":
                return "30";
              case "40":
                return "40";
              case "50":
                return "50";
              case "60":
                return "60";
              case "70":
                return "70";
              case "80":
                return "80";
              case "90":
                return "90";
              case "100":
                return "100";
            }
          },
        }, //刻度标签。
        axisTick: {
          show: true,
          splitNumber: 7,
          lineStyle: {
            color: colorSet.color, //用颜色渐变函数不起作用
            width: 1,
          },
          length: -8,
        }, //刻度样式
        splitLine: {
          show: true,
          length: -20,
          lineStyle: {
            color: colorSet.color, //用颜色渐变函数不起作用
          },
        }, //分隔线样式
        detail: {
          show: false,
        },
        pointer: {
          show: false,
        },
      },
    ],
  };
  return option;
}




