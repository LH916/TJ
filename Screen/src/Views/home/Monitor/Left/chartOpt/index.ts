const yLabel = [
  "第1检测区",
  "第2检测区",
  "第3检测区",
  "第4检测区",
  "第5检测区",
  "第6检测区",
  "第7检测区",
  "第8检测区",
  "第9检测区",
  "第10检测区",
];
const yData = [20, 16, 19, 13, 9, 20, 15, 12, 13, 17];

export const option = {
  color: "#719DF7",
  grid: {
    left: "5%",
    right: "5%",
    bottom: "0%",
    top: "12%",
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "none",
    },
    formatter: function (params: any) {
      return (
        params[0].name +
        "<br/>" +
        "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#719DF7'></span>" +
        params[0].seriesName +
        " : " +
        params[0].value +
        " <br/>"
      );
    },
  },
  xAxis: {
    show: false,
    type: "value",
    axisLabel: {
      show: true,
      margin: 15,
      textStyle: {
        color: "#BFDBFF",
        fontSize: 12,
        fontFamily: "PingFang SC",
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  yAxis: [
    {
      type: "category",
      inverse: true,
      boundaryGap: false,
      axisLabel: {
        show: true,
        margin: 15,
        textStyle: {
          color: "#BFDBFF",
          fontSize: 12,
          fontFamily: "PingFang SC",
        },
      },
      splitLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#D9D9D9",
        },
      },
      data: yLabel,
    },
    {
      type: "category",
      inverse: true,
      boundaryGap: false,
      axisLabel: {
        show: true,
        margin: 15,
        textStyle: {
          color: "#BFDBFF",
          fontSize: 12,
          fontFamily: "PingFang SC",
        },
        formatter: (val: any) => {
          return `{valueStyle|${val}}件`;
        },
        rich: {
          valueStyle: {
            color: "#fff",
            fontSize: "16px",
            fontFamily: "AvenirNextCondensed-Regular",
          },
          suffixStyle: {
            color: "#93C0EC",
            fontSize: "12px",
          },
        },
      },

      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#D9D9D9",
        },
      },
      data: yData,
    },
  ],
  series: [
    {
      name: "数据",
      type: "bar",
      zlevel: 1,
      barWidth: 12,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#0681E7", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#8CC1F4", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      data: yData,
    },
  ],
};
