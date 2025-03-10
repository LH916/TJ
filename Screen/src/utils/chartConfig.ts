/*
 * @Author: your name
 * @Date: 2022-02-23 19:47:47
 * @LastEditTime: 2022-03-02 16:53:18
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\utils\chartConfig.ts
 */
export const PIE_TOOLTIP: any = {
	backgroundColor: "rgba(0,0,0,0.6)",
	borderWidth: "0",
	textStyle: {
		fontSize: 16,
		color: "#fff",
	},
	formatter: function (params: any) {
		let result = "";
		// console.log(params, "params");
		const dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color}"></span>`;
		// params.forEach(function (item: any) {
		//   console.log(item, "99999999999999");
		//   result += item.axisValue + "</br>" + item.marker + item.data;
		// });
		result += `${dotHtml}
  
        ${params.data.name}
        </br>
  
    <span style="margin-left:30px;font-fa mily:SJyunhei ;">${params.data.value}</span>
        个`;
		return result;
	},
};

export const LINE_TOOLTIP: any = {
	backgroundColor: "rgba(0,0,0,0.6)",
	borderWidth: "0",
	trigger: "axis",
	textStyle: {
		fontSize: 14,
		color: "#fff",
	},
	formatter: function name(params: any) {
		// console.log(params, "params的值");
		let result = "";
		params.forEach((element: any) => {
			result += `<span 
      style="display:inline-block;
      margin-right:15px;
      margin-left:10px;
      border-radius:2px;
      width:10px;
      height:10px;
      background-color:${element.color}
    "></span>
    <span style="margin-right:20px;font-size:14px">${element.seriesName}:</span>
    <span>${element.value}</span><br/>`;
		});
		return result;
	},
};
export const AXIS_LABEL: any = {
	//轴上的字 字体、样式
	inside: false,
	fontSize: "12",
	fontFamily: "OPPOSans R",
	color: "rgba(255,255,255,.8)",
	padding: [0, 0, 0, 0],
	// margin: 5,
};
export const YAXIS_NAME: any = {
	fontSize: "12px",
	color: "rgba(255,255,255,0.8)",
	align: "left",
	verticalAlign: "bottom",
	// padding: [0, 0, 60, 0],
};
export const XAXIS_NAME: any = {
	fontSize: "12px",
	color: "rgba(255,255,255,0.8)",
	align: "center",
	verticalAlign: "bottom",
	// padding: [0, 0, -76, 20],
};
export const LEGEND: any = {
	padding: 5,
	fontSize: 12,
	color: "#fff",
};
