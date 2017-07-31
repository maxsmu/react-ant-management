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
		data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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
		data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
	},
	series: []
};
