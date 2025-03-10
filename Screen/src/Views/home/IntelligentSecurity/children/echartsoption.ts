/*
 * @Author: your name
 * @Date: 2022-04-06 15:55:54
 * @LastEditTime: 2022-04-06 16:08:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \20220321_CGSY_FREEDO_DTSWEEKLY_ZHCG\src\Views\home\IntelligentSecurity\children\echarts.ts
 */
export const Option1 = () => {
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
        // center: ['20%', '50%'],
        radius: "70%",

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
        //  center: ['20%', '50%'],
        radius: "50%",
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
};
export const Option2 = () => {
  const dataStyle = {
    normal: {
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      shadowBlur: 0,
      shadowColor: "#203665",
    },
  };
  const option = {
    // backgroundColor: "#20263f",
    series: [
      {
        name: "第一个圆环",
        type: "pie",
        clockWise: false,
        radius: [70, 60],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["15%", "50%"],
        data: [
          {
            value: 25,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#3a7ad5",
                    align: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 16,
                  },
                },
                formatter: function (params: any) {
                  return (
                    "{b|在线统计}\n\n" +
                    "{a|" +
                    params.value +
                    "个}" +
                    "\n\n{b|增长2%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#2c6cc4",
                shadowColor: "#2c6cc4",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 75,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#24375c",
              },
              emphasis: {
                color: "#24375c",
              },
            },
          },
        ],
      },
      {
        name: "第二个圆环",
        type: "pie",
        clockWise: false,
        radius: [70, 60],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["50%", "50%"],
        data: [
          {
            value: 50,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#d03e93",
                    align: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 16,
                  },
                },
                formatter: function (params: any) {
                  return (
                    "{b|离线统计}\n\n" +
                    "{a|" +
                    params.value +
                    "个}" +
                    "\n\n{b|增长2%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#ef45ac",
                shadowColor: "#ef45ac",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 50,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#412a4e",
              },
              emphasis: {
                color: "#412a4e",
              },
            },
          },
        ],
      },
      {
        name: "第三个圆环",
        type: "pie",
        clockWise: false,
        radius: [70, 60],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ["85%", "50%"],
        data: [
          {
            value: 75,
            label: {
              normal: {
                rich: {
                  a: {
                    color: "#603dd0",
                    align: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                  b: {
                    color: "#fff",
                    align: "center",
                    fontSize: 16,
                  },
                },
                formatter: function (params: any) {
                  return (
                    "{b|缺报统计}\n\n" +
                    "{a|" +
                    params.value +
                    "个}" +
                    "\n\n{b|增长2%}"
                  );
                },
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#613fd1",
                shadowColor: "#613fd1",
                shadowBlur: 0,
              },
            },
          },
          {
            value: 25,
            name: "invisible",
            itemStyle: {
              normal: {
                color: "#453284",
              },
              emphasis: {
                color: "#453284",
              },
            },
          },
        ],
      },
    ],
  };
  return option;
};
