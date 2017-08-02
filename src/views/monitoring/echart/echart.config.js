/**
 * @author: Michael
 * @date: 2017-07-31 17:37:47
 * @last modified by: Michael
 * @last modified time: 2017-07-31 17:37:47
 * @gitHub: https://github.com/maxsmu
*/
export default {
	title: { text: '生产监控堆叠条形图' },
	tooltip: {
		trigger: 'axis',
		// 坐标轴指示器，坐标轴触发有效
		axisPointer: {
			// 默认为直线，可选为：'line' | 'shadow'
			type: 'shadow'
		}
	},
	legend: {
		data: []
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	yAxis: {
		type: 'value'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	series: []
};
