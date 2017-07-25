export default {
	title: {
		text: '南丁格尔玫瑰图',
		subtext: '纯属虚构'
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		x: 'center',
		bottom: 20,
		data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6']
	},
	series: {
		name: '面积模式',
		type: 'pie',
		radius: [25, 100],
		center: ['55%', '40%'],
		roseType: 'area',
		data: [
			{ value: 10, name: 'rose1' },
			{ value: 5, name: 'rose2' },
			{ value: 15, name: 'rose3' },
			{ value: 25, name: 'rose4' },
			{ value: 20, name: 'rose5' },
			{ value: 35, name: 'rose6' }
		]
	}
};
