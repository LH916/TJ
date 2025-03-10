<template>
  <LeaseTitle>监测点位分布</LeaseTitle>
  <V3Echarts
      :isFirst="true"
      :options="option6"
      height="250"
      container="equi_status"
  />
</template>

<script lang="ts" setup>

let total = 0;
const option6 = {
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
      const options = option6;
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
      let formatterStr = `${name}\r\r\r\r${num}\r\r\r\r`;
      if (num < 10) {
        formatterStr += "\r\r";
      }
      formatterStr += `{percent|${result}%}`;
      return formatterStr;
    },
    // backgroundColor: 'rgba(216,216,216,0.77)',
    // borderRadius: 13,
  },
  // backgroundColor: "transparent",
  graphic: {
    elements: [
      {
        type: "image",
        z: 3,
        left: "43",
        top: "center",
      },
    ],
  },

  tooltip: {
    show: false,
  },
  series: [
    {
      type: "pie",
      radius: ["53%", "68%"],
      center: ["25%", "50%"],
      hoverAnimation: true,
      z: 10,
      label: {
        show: false,
        position: "center",
        formatter: (e: any) => {
          return `{total|${e.value}}\n台设备`;
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
      emphasis: {
        label: {
          show: true,
          // position: ["50%","50%"],
          // padding: [50,50,50,50],
          formatter: (e: any) => {
            return `{total|${e.value}}\n台设备`;
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
      },
      itemStyle: {
        // borderColor: 'transparent',
        // borderColor: "rgba(0,0,0,0.1)",
        borderColor: "#000",
        borderWidth: 2,
      },
      data: [
        {
          value: 16,
          name: "珠江",
          itemStyle: {
            color: "rgba(0, 255, 255, 1)",
          },
        },
        {
          value: 26,
          name: "西江",
          itemStyle: {
            color: "rgba(98, 186, 252, 1)",
          },
        },
        {
          value: 12,
          name: "其他",
          itemStyle: {
            color: "rgba(251, 129, 84, 1)",
          },
        },
      ],
      labelLine: {
        show: false,
      },
    },
    // 圆环边框
    // {
    //   type: "pie",
    //   radius: ["47%", "75%"],
    //   center: ["25%", "50%"],
    //   hoverAnimation: false,
    //   label: {
    //     show: false,
    //   },
    //   data: [
    //     {
    //       value: 1867376,
    //       name: "珠江",
    //       itemStyle: {
    //         color: "rgba(0,0,0,0)",
    //         borderWidth: 0.5,
    //         borderColor: "rgba(255, 255, 255, 0.0)",
    //       },
    //     },
    //   ],
    //   labelLine: {
    //     show: false,
    //   },
    // },
  ],
};
</script>

<style lang="scss" scoped>
</style>