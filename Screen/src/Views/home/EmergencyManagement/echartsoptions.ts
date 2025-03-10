/*
 * @Author: your name
 * @Date: 2022-04-05 16:08:02
 * @LastEditTime: 2022-04-06 09:23:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\Views\home\EmergencyManagement\echartsoptions.ts
 */
/*
 * @Author: your name
 * @Date: 2022-03-25 05:33:43
 * @LastEditTime: 2022-03-30 19:34:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHJC\src\Views\home\Fourth\children\Lightingmanagement\echartsoptions.ts
 */
import * as echarts from "echarts";

export const Option1 = {
  // backgroundColor: "#000",
  color: [
    "#fedd32",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ],
  //   tooltip: {
  //     trigger: "axis",
  //   },
  grid: {
    left: "5%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },

  xAxis: {
    boundaryGap: false,
    type: "category",
    axisLine: {
      show: false,

      lineStyle: {
        color: "#fff",

        fontSize: "8",
      },
    },
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
  },
  yAxis: {
    type: "value",

    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
      lineStyle: {
        // color: "#fff",
      },
      textStyle: {
        color: "#ffffff",
        fontSize: "8",
      },
    },

    axisLabel: {
      formatter: "{value}",
      textStyle: {
        color: "#ffffff",
        fontSize: "8",
      },
    },
  },
  series: [
    {
      name: "01",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 4,
      showSymbol: false,
      data: [8.2, 10, 16, 8, 18, 27, 22, 30, 27, 24, 30, 33, 37, 29, 36],
      markPoint: {
        label: {
          normal: {
            textStyle: {
              fontSize: "8",
              color: "#333",
            },
          },
        },
        data: [
          //   {
          //     type: "max",
          //     name: "最大值",
          //   },
          //   {
          //     type: "min",
          //     name: "最小值",
          //   },
        ],
      },
    },
    {
      name: "02",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [7.9, 10, 12.3, 11, 16, 19, 21, 17, 20, 18, 13.6, 18, 20, 12, 17],
    },
    {
      name: "03",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        7.1, 8.6, 12.3, 10.4, 16.4, 20.2, 22.7, 18.5, 21.2, 19, 16, 20, 23.7,
        13.7, 18,
      ],
    },

    {
      name: "04",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        7.3, 8.3, 11.3, 11.5, 17.1, 20.5, 23.4, 21.6, 23.7, 25, 23.4, 27.8, 34,
        21.5, 23.2,
      ],
    },

    {
      name: "05",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8, 9, 13, 12, 19.7, 22, 24, 20, 23, 24.4, 19.7, 25.6, 32.1, 25, 29.2,
      ],
    },

    {
      name: "06",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        7.6, 8.9, 11.5, 11.7, 17.9, 21.4, 23.4, 21.8, 25.7, 25.5, 20.7, 25.6,
        31.5, 17.5, 18.8,
      ],
    },

    {
      name: "07",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8.3, 9.6, 13.5, 11.3, 16.4, 19.8, 21.6, 20.5, 24.8, 25.3, 21.3, 25.9,
        32.8, 20.5, 21.8,
      ],
    },
    {
      name: "08",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8.9, 12, 15, 12.4, 18, 21, 22.3, 21, 22.5, 23.4, 19.4, 23.6, 28.5, 22.5,
        25.8,
      ],
    },
    {
      name: "09",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8, 13.4, 14.1, 12.9, 22, 25, 23.4, 19.1, 22, 20.5, 17.4, 22.6, 27.5,
        15.5, 18.4,
      ],
    },
    {
      name: "10",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        7.8, 12.9, 14.5, 16.3, 21, 26, 28, 23.1, 26.3, 27.5, 23.8, 29.6, 35.6,
        23.1, 27.8,
      ],
    },
    {
      name: "11",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        7.2, 12.5, 16, 13, 20.8, 23.5, 25.6, 22.4, 27, 28.6, 25.4, 31.8, 36.3,
        25.5, 30.8,
      ],
    },
    {
      name: "12",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        9.1, 10.3, 15, 17, 20, 23, 25, 22, 26, 25.7, 22, 27, 33.1, 27.1, 38,
      ],
    },
    {
      name: "13",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8.2, 12.4, 15, 13, 21.1, 27.8, 30.1, 28.2, 29.4, 30.8, 31.4, 37, 42.3,
        33.5, 42.5,
      ],
    },
    {
      name: "14",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        9.1, 11.5, 17, 14.5, 20, 24, 27, 24, 27.8, 29.3, 28.9, 33, 37, 27.8, 39,
      ],
    },
    {
      name: "15",
      type: "line",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          type: "dashed",
          width: 0.5,
        },
      },
      data: [
        8.7, 11, 15, 15.8, 21.2, 27.5, 29.3, 27.1, 28.7, 29.8, 31, 35.5, 39.3,
        30.5, 41,
      ],
    },
  ],
};
export const Option2 = () => {
  const img = [
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC",
    "image://data:image/png;base64,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",
    "image://data:image/png;base64,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",
    "image://data:image/png;base64,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",
  ];

  const dataObj = {
    year: ["非常活跃", "活跃", "一般", "差"],
    num: [
      {
        coords: [
          ["非常活跃", 127],
          ["活跃", 224],
          ["一般", 120],
          ["差", 278],
        ],
      },
      {
        coords: [
          ["非常活跃", 27],
          ["活跃", 124],
          ["一般", 70],
          ["差", 178],
        ],
      },
      {
        coords: [
          ["非常活跃", 127],
          ["活跃", 74],
          ["一般", 120],
          ["差", 99],
        ],
      },
    ],
    data: {
      value: [
        {
          name: "一",
          value: [127, 224, 120, 278],
          symbol: img[2],
        },
        {
          name: "二",
          value: [27, 124, 70, 178],
          symbol: img[1],
        },
        {
          name: "三",
          value: [127, 74, 120, 99],
          symbol: img[0],
        },
      ],
    },
  };
  const a = [5, 10, 15];
  const b = [0, 1, 2];

  const dataArr: any = [
    {
      type: "lines",
      smooth: true,
      coordinateSystem: "cartesian2d",
      symbolSize: 30,
      polyline: true,
      effect: {
        show: true,
        trailLength: 0,
        // symbol: "arrow",
        period: 10, //光点滑动速度
        symbolSize: 150,
        symbol: img[0],
      },
      lineStyle: {
        normal: {
          width: 1,
          opacity: 0.6,
          curveness: 0.2,
        },
      },
      data: dataObj.num,
    },
  ];

  dataObj.data.value.map((item) => {
    const datachild = [];
    const newArr = {
      name: item.name,
      type: "line",
      // smooth: true,
      symbolSize: 100,
      symbol: item.symbol,

      data: item.value,
      barWidth: "30%",
      itemStyle: {
        normal: {
          color:
            item.name === "一"
              ? "#f0c725"
              : item.name === "二"
              ? "#0BE3FF"
              : "#16f892",
        },
      },
    };

    dataArr.push(newArr);
  });

  console.log(dataArr);
  const option = {
    // backgroundColor: "#000E1A",
    color: ["#f0c725", "#16f892"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: "center",
      top: "25",
      textStyle: {
        color: "#c1cadf",
        fontSize: 12,
      },
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      show: true,
      orient: "vertical",
      x: "right",
      y: "center",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: dataObj.year,
        axisLine: {
          lineStyle: {
            color: "rgba(240,199,37,0.5)",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#c1cadf",
          fontSize: "12",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "人数",
        nameTextStyle: {
          color: "#c1cadf",
          align: "right",
          lineHeight: 10,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(240,199,37,0.5)",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#c1cadf",
          fontSize: "12",
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: dataArr,
  };
  return option;
};
export const Option3 = () => {
  const xData = (function () {
    const data = [];
    for (let i = 1; i < 31; i++) {
      data.push(i + "日");
    }
    return data;
  })();

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    legend: {
      x: "46%",
      top: "11%",
      textStyle: {
        color: "#90979c",
      },
      data: ["访问量", "订单量"],
    },

    calculable: true,
    xAxis: [
      {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: xData,
      },
    ],

    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        height: 10,
        xAxisIndex: [0],
        bottom: 10,

        start: 10,
        end: 80,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#5B3AAE",
        },
        textStyle: {
          color: "rgba(204,187,225,0.5)",
        },
        fillerColor: "rgba(67,55,160,0.4)",
        borderColor: "rgba(204,187,225,0.5)",
      },
      {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: "访问量",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          color: "#6f7de3",
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          data: [
            {
              type: "max",
              name: "最大值",
            },
            {
              type: "min",
              name: "最小值",
            },
          ],
        },
        data: [
          509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000,
          1455, 1210, 719, 733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810,
          3519, 2455, 2610, 2719, 2484, 2078,
        ],
      },
      {
        name: "订单量",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          color: "#c257F6",
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          data: [
            {
              type: "max",
              name: "最大值",
            },
            {
              type: "min",
              name: "最小值",
            },
          ],
        },
        data: [
          2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019,
          3433, 3544, 3885, 4208, 3372, 3484, 3915, 3748, 3675, 4009, 4433,
          3544, 3285, 4208, 3372, 3484, 3915, 3823, 4265, 4298,
        ],
      },
    ],
  };
  return option;
};
export const Option4 = () => {
  const data = {
    city: ["0", "4", "8", "12", "16", "20"],
    num: ["40", "60", "22", "85", "50", "40"],
  };
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255,255,255,0)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgba(255,255,255,1)", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255,255,255,0)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: false,
          lineStyle: {
            color: 'color:"#092b5d"',
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          textStyle: {
            color: "#fff",
            margin: 15,
          },
          formatter: function (data: any) {
            return data + "时";
          },
        },
        axisTick: {
          show: false,
        },
        data: data.city,
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 100,
        splitLine: {
          show: false,
          lineStyle: {
            color: "#092b5d",
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#092b5d",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
          formatter: function (value: any) {
            if (value === 0) {
              return value;
            }
            return value + "%";
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "注册总量",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 8,
        lineStyle: {
          normal: {
            color: "#7c80f4", // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: "rgba(14,30,73,1)",
          borderColor: "#646ace",
          borderWidth: 2,
        },
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: [" {a|{c}%}"].join(","),
            rich: {
              a: {
                color: "#fff",
                align: "center",
              },
            },
          },
        },
        tooltip: {
          show: true,
        },
        areaStyle: {
          //区域填充样式
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
                  color: "rgba(124, 128, 244,.3)",
                },
                {
                  offset: 1,
                  color: "rgba(124, 128, 244, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
        data: data.num,
      },
    ],
  };
  return option;
};
export const Option5 = () => {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["通道一", "通道二", "通道三", "通道四"],
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
      data: [
        "2016-06月",
        "2016-07月",
        "2016-08月",
        "2016-09月",
        "2016-10月",
        "2016-11月",
        "2016-12月",
      ],
      splitLine: {
        show: false,
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#aaa", "#ddd"],
        },
      },
    },
    yAxis: {
      type: "value",
      name: "kg",
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#092b5d",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "通道一",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210],
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#fd744e",
          },
        },
      },
      {
        name: "通道二",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310],
        symbol: "rect",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#7fc9f7",
          },
        },
      },
      {
        name: "通道三",
        type: "line",
        stack: "总量",
        data: [150, 232, 201, 154, 190, 330, 410],
        symbol: "triangle",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#d467cf",
          },
        },
      },
      {
        name: "通道四",
        type: "line",
        stack: "总量",
        data: [320, 332, 301, 334, 390, 330, 320],
        symbol: "diamond",
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#33c737",
          },
        },
      },
    ],
  };

  return option;
};
