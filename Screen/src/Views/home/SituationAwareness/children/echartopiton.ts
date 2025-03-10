import * as echarts from "echarts";
import {
  LINE_TOOLTIP,
  LEGEND,
  XAXIS_NAME,
  AXIS_LABEL,
  YAXIS_NAME,
} from "@/utils/chartConfig";
import _, { padStart } from "lodash";

export const option1 = () => {
  const scale = 1;
  const echartData = [
    {
      value: 2154,
      name: "在线",
      itemStyle: {
        normal: {
          //颜色渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#06A3F4" },
            { offset: 1, color: "transparent" },
          ]),
        },
      },
    },
    {
      value: 3854,
      name: "休眠",
      itemStyle: {
        normal: {
          //颜色渐变

          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#E58B44" },
            { offset: 1, color: "transparent" },
          ]),
        },
      },
    },
    {
      value: 3515,
      name: "故障",
      itemStyle: {
        normal: {
          //颜色渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#D95CFF" },
            { offset: 1, color: "transparent" },
          ]),
        },
      },
    },
  ];
  let total_datas = 0;
  for (let i = 0; i < echartData.length; i++) {
    total_datas += echartData[i].value;
  }

  const rich = {
      yellow: {
        color: "#ffc72b",
        fontSize: 15 * scale,
        // padding: [21, 0],
        align: "center",
      },
      total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: "center",
      },

      blue: {
        color: "#49dff0",
        fontSize: 16 * scale,
        align: "center",
      },
      hr: {
        borderColor: "#0b5263",
        width: "100%",
        borderWidth: 1,
        height: 0,
      },
    },
    option = {
      title: {
        text: "总数",
        subtext: total_datas,
        textStyle: {
          color: "#f2f2f2",
          fontSize: 18,
          align: "center",
        },
        subtextStyle: {
          fontSize: 16,
          color: ["#ff9d19"],
        },
        x: "center",
        y: "center",
      },
      legend: {
        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
        orient: "vertical",
        // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        x: "left",
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        y: "center",
        itemWidth: 30, // 设置图例图形的宽
        itemHeight: 18, // 设置图例图形的高
        textStyle: {
          color: "#fff", // 图例文字颜色
          fontSize: 16,
        },
        // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
        itemGap: 30,
        data: ["在线", "休眠", "故障"],
      },

      series: [
        {
          name: "总数量",
          type: "pie",
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: "#030d22",
            },
          },
          radius: ["38%", "50%"],
          hoverAnimation: false,
          color: [
            "#c487ee",
            "#deb140",
            "#49dff0",
            "#034079",
            "#6f81da",
            "#00ffb4",
          ],
          label: {
            normal: {
              formatter: function (params: any, ticket: any, callback: any) {
                let total = 0; //考生总数量
                let percent: any = 0; //考生占比
                echartData.forEach(function (value, index, array) {
                  total += value.value;
                });
                percent = ((params.value / total) * 100).toFixed(1);
                return "{yellow|" + params.value + "}\n{blue|" + percent + "%}";
              },
              rich: rich,
            },
          },
          labelLine: {
            normal: {
              length: 55 * scale,
              length2: 10,
              lineStyle: {
                color: "#fff",
              },
            },
          },
          data: echartData,
        },
      ],
    };
  return option;
};
export const option2 = () => {
  const scaleData = [
    {
      name: "工程建设",
      value: 10,
    },
    {
      name: "产权交易",
      value: 20,
    },
    {
      name: "土地交易",
      value: 20,
    },
    {
      name: "其他交易",
      value: 27,
    },
    {
      name: "政府采购",
      value: 23,
    },
  ];
  const rich = {
    white: {
      color: "#ddd",
      align: "center",
      padding: [5, 0],
    },
  };
  const placeHolderStyle = {
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
  };
  const data = [];
  for (let i = 0; i < scaleData.length; i++) {
    data.push(
      {
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 30,
            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "#7777eb",
              },
              {
                offset: 1,
                color: "#70ffac",
              },
            ]),
            shadowColor: "rgba(142, 152, 241, 0.6)",
          },
        },
      },
      {
        value: 4,
        name: "",
        itemStyle: placeHolderStyle,
      }
    );
  }
  const seriesObj = [
    {
      name: "",
      type: "pie",
      clockWise: false,
      radius: ["50%", "51%"],
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
              for (let i = 0; i < scaleData.length; i++) {
                total += scaleData[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== "") {
                return params.name + "\n{white|" + "占比" + percent + "%}";
              } else {
                return "";
              }
            },
            rich: rich,
          },
          labelLine: {
            show: false,
          },
        },
      },
      data: data,
    },
  ];
  const option = {
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    toolbox: {
      show: false,
    },
    series: seriesObj,
  };
  return option;
};
export const option3 = () => {
  const colorArr = [
    "#218de0",
    "#01cbb3",
    "#85e647",
    "#5d5cda",
    "#05c5b0",
    "#c29927",
  ];
  const colorAlpha = [
    "rgba(60,170,211,0.05)",
    "rgba(1,203,179,0.05)",
    "rgba(133,230,71,0.05)",
    "rgba(93,92,218,0.05)",
    "rgba(5,197,176,0.05)",
    "rgba(194,153,39,0.05)",
  ];
  const option = {
    // grid: {
    //   left: -100,
    //   top: 50,
    //   bottom: 10,
    //   right: 10,
    //   containLabel: true,
    // },
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    legend: {
      show: false,
    },

    polar: {},
    angleAxis: {
      interval: 1,
      type: "category",
      data: [],
      z: 10,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#0B4A6B",
          width: 1,
          type: "solid",
        },
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: "#0B4A6B",
        margin: 8,
        fontSize: 16,
      },
    },
    radiusAxis: {
      min: 20,
      max: 120,
      interval: 20,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#0B3E5E",
          width: 1,
          type: "solid",
        },
      },
      axisLabel: {
        formatter: "{value} %",
        show: false,
        padding: [0, 0, 20, 0],
        color: "#0B3E5E",
        fontSize: 16,
      },
      splitLine: {
        lineStyle: {
          color: "#07385e",
          width: 2,
          type: "dashed",
        },
      },
    },
    calculable: true,
    series: [
      {
        stack: "a",
        type: "pie",
        radius: "80%",
        roseType: "radius",
        zlevel: 10,
        startAngle: 20,
        label: {
          normal: {
            formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
            rich: {
              b: {
                color: "#3bd2fe",
                fontSize: 14,
                lineHeight: 20,
              },
              d: {
                color: "#d0fffc",
                fontSize: 14,
                height: 20,
              },
            },
          },
        },
        labelLine: {
          normal: {
            show: true,
            length: 10,
            length2: 10,
            lineStyle: {
              color: "#0096b1",
            },
          },
          emphasis: {
            show: false,
          },
        },
        data: [
          {
            value: 63,
            name: "容量小设备老旧",
            itemStyle: {
              borderColor: colorArr[0],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: "#41a8f8",
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[0],
            },
          },
          {
            value: 27,
            name: "季节性企业用电",
            itemStyle: {
              borderColor: colorArr[1],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: colorArr[1],
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[1],
            },
          },
          {
            value: 27,
            name: "企业用电高峰",
            itemStyle: {
              borderColor: colorArr[2],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: colorArr[2],
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[2],
            },
          },
          {
            value: 23,
            name: "节假日",
            itemStyle: {
              borderColor: colorArr[3],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: colorArr[3],
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[3],
            },
          },
          {
            value: 20,
            name: "临时用电",
            itemStyle: {
              borderColor: colorArr[4],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: colorArr[4],
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[4],
            },
          },
          {
            value: 16,
            name: "三相用电不平衡",
            itemStyle: {
              borderColor: colorArr[5],
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: colorArr[5],
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[5],
            },
          },
        ],
      },
    ],
  };
  return option;
};
export const option4 = {
  title: {
    text: "设备上报总量",

    textStyle: {
      color: "#f2f2f2",
      fontSize: 14,
      align: "center",
    },
    subtextStyle: {
      fontSize: 18,
      color: ["#ff9d19"],
    },
    x: 10,
    y: 0,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    borderRadius: 20,
    //   borderWidth: 2,
    borderColor: "transparent",
    padding: 10,
    backgroundColor: "rgba(0,0,0,.6)",
    order: "seriesDesc",
  },
  grid: {
    left: "2%",
    right: "4%",
    bottom: "14%",
    top: "26%",
    containLabel: true,
  },
  legend: {
    data: ["1", "2", "3"],
    right: 10,
    top: 12,
    textStyle: {
      color: "#fff",
    },
    itemWidth: 12,
    itemHeight: 10,
    // itemGap: 35
  },
  xAxis: {
    type: "category",
    data: ["01", "02", "03", "04", "05", "06", "07", "08"],
    axisLine: {
      lineStyle: {
        color: "white",
      },
    },
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: "Microsoft YaHei",
      },
    },
  },

  yAxis: {
    type: "value",
    max: "1200",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.3)",
      },
    },
    axisLabel: {},
  },

  series: [
    {
      name: "1",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#fccb05",
            },
            {
              offset: 1,
              color: "#f5804d",
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
    },
    {
      name: "2",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#8bd46e",
            },
            {
              offset: 1,
              color: "#09bcb7",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
    },
    {
      name: "3",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#248ff7",
            },
            {
              offset: 1,
              color: "#6851f1",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
    },
  ],
};
export const option5 = {
  title: {
    text: "接口调用总量",

    textStyle: {
      color: "#f2f2f2",
      fontSize: 14,
      align: "center",
    },
    subtextStyle: {
      fontSize: 18,
      color: ["#ff9d19"],
    },
    x: 10,
    y: 0,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    borderRadius: 20,
    //   borderWidth: 2,
    borderColor: "transparent",
    padding: 10,
    backgroundColor: "rgba(0,0,0,.6)",
    order: "seriesDesc",
  },
  grid: {
    left: "2%",
    right: "4%",
    bottom: "14%",
    top: "26%",
    containLabel: true,
  },
  legend: {
    data: ["1", "2", "3"],
    right: 10,
    top: 12,
    textStyle: {
      color: "#fff",
    },
    itemWidth: 12,
    itemHeight: 10,
    // itemGap: 35
  },
  xAxis: {
    type: "category",
    data: ["01", "02", "03", "04", "05", "06", "07", "08"],
    axisLine: {
      lineStyle: {
        color: "white",
      },
    },
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: "Microsoft YaHei",
      },
    },
  },

  yAxis: {
    type: "value",
    max: "1200",
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.3)",
      },
    },
    axisLabel: {},
  },

  series: [
    {
      name: "1",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#fccb05",
            },
            {
              offset: 1,
              color: "#f5804d",
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
    },
    {
      name: "2",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#8bd46e",
            },
            {
              offset: 1,
              color: "#09bcb7",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
    },
    {
      name: "3",
      type: "bar",
      barWidth: "15%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#248ff7",
            },
            {
              offset: 1,
              color: "#6851f1",
            },
          ]),
          barBorderRadius: 11,
        },
      },
      data: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
    },
  ],
};

export const option6 = {
  legend: {
    top: "20%",
    left: "60%",
    selectedMode: false,
    orient: "vertical",
    // data: ["人工智能产业链"],
    data: ["电子元件", "配套产品", "先进装备制造", "新材料"],
    // itemGap: 100,
    itemStyle: {},
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      padding: [3, 0, 0, 10],
      fontSize: 12,
      color: "#FFF",
      width: 108,
      align: "left",
      rich: {
        a: {
          fontSize: 14,
          padding: [5, 0, 7, 10],
          fontFamily: "PangMenZhengDao",
          color: "#00f1ff",
        },
        aunit: {
          fontSize: 14,
          padding: [0, 0, 0, 1],
          fontFamily: "PangMenZhengDao",
          color: "#00f1ff",
        },
        b: {
          fontSize: 14,
          padding: [5, 0, 7, 10],
          fontFamily: "PangMenZhengDao",
          color: "#FFC620",
        },
        bunit: {
          fontSize: 14,
          padding: [0, 0, 0, 1],
          fontFamily: "PangMenZhengDao",
          color: "#FFC620",
        },
        c: {
          fontSize: 14,
          padding: [5, 0, 7, 10],
          fontFamily: "PangMenZhengDao",
          color: "#B47DF9",
        },
        cunit: {
          fontSize: 14,
          padding: [0, 0, 0, 1],
          fontFamily: "PangMenZhengDao",
          color: "#B47DF9",
        },
      },
    },
  },
  tooltip: {
    trigger: "item",
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
    borderRadius: 20,
    //   borderWidth: 2,
    borderColor: "transparent",
    padding: 10,
    backgroundColor: "rgba(0,0,0,.6)",
    order: "seriesDesc",
  },
  color: ["#3799F8", "#94E5F9", "#FFC620", "#FFFFFF"],

  //   color: ["#FFC620", "#00f1ff", "#B47DF9"],
  grid: {
    left: "10%",
    right: "3%",
    bottom: "5%",
    top: "0%",
    containLabel: true,
  },
  series: [
    {
      type: "pie",
      radius: ["50%", "40%"],
      center: ["32%", "50%"],
      label: {
        show: false,
      },
      emphasis: {
        focus: "self",
        scale: false,
      },
      blur: {
        itemStyle: {
          opacity: 0.25,
        },
      },
      itemStyle: {
        // borderColor: "#0a131c",
        // borderWidth: 15,
      },
      data: [
        {
          value: 276,
          name: "电子元件",
        },
        {
          value: 170,
          name: "配套产品",
        },
        {
          value: 220,
          name: "先进装备",
        },
        {
          value: 220,
          name: "新材料",
        },
      ],
    },
    {
      type: "pie",
      radius: ["72%", "55%"],
      center: ["32%", "50%"],
      label: {
        show: false,
      },
      emphasis: {
        scale: false,
      },
      itemStyle: {
        opacity: 0.2,
      },
      data: [
        {
          value: 276,
          name: "电子信息",
        },
        {
          value: 170,
          name: "配套产品",
        },
        {
          value: 220,
          name: "先进装备",
        },
        {
          value: 220,
          name: "新材料",
        },
      ],
    },
    {
      type: "pie",
      radius: ["96%", "92%"],
      center: ["32%", "50%"],
      emphasis: {
        focus: "self",
        scale: false,
      },
      blur: {
        itemStyle: {
          opacity: 0.25,
        },
      },
      label: {
        show: true,
        position: "center",
        formatter: function (parmas: any) {
          console.log(parmas, "parmas");

          const name = parmas.name;
          // let _index = 0;
          // array1.forEach((item, i) => {
          //   if (item.name == name) {
          //     _index = i;
          //   }
          // });
          let arr: any = [];
          if (name == "电子元件") {
            arr = [`{b|${parmas.percent}}\n{bunit|%}`];
          } else if (name == "配套产品") {
            arr = [`{a|${parmas.percent}}\n{aunit|%}`];
          } else if (name == "先进装备") {
            arr = [`{a|${parmas.percent}}\n{aunit|%}`];
          } else {
            arr = [`{c|${parmas.percent}}\n{cunit|%}`];
          }
          const item = arr.join("");
          return item;
        },
        rich: {
          a: {
            fontSize: 24,
            color: "#3799F8",
            fontFamily: "PangMenZhengDao",
          },
          aunit: {
            fontSize: 12,
            color: "#3799F8",
            padding: [5, 0, 0, 5],
            fontFamily: "PangMenZhengDao",
          },
          b: {
            fontSize: 24,
            color: "#94E5F9",
            fontFamily: "PangMenZhengDao",
          },
          bunit: {
            fontSize: 12,
            color: "#94E5F9",
            padding: [5, 0, 0, 5],
            fontFamily: "PangMenZhengDao",
          },
          c: {
            fontSize: 24,
            color: "#FFC620",
            fontFamily: "PangMenZhengDao",
          },
          cunit: {
            fontSize: 12,
            color: "#FFC620",
            padding: [5, 0, 0, 5],
            fontFamily: "PangMenZhengDao",
          },
          d: {
            fontSize: 24,
            color: "#FFFFFF",
            fontFamily: "PangMenZhengDao",
          },
          dunit: {
            fontSize: 12,
            color: "#FFFFFF",
            padding: [5, 0, 0, 5],
            fontFamily: "PangMenZhengDao",
          },
        },
      },
      data: [
        {
          value: 276,
          name: "电子信息",
          itemStyle: {
            color: "none",
          },
        },
        {
          value: 170,
          name: "配套产品",
          itemStyle: {
            color: "none",
          },
        },
        {
          value: 220,
          name: "先进装备",
          itemStyle: {
            color: "none",
          },
        },
        {
          value: 220,
          name: "新材料",
          itemStyle: {
            color: "none",
          },
        },
      ],
    },
  ],
};
