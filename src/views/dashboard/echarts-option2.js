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
		// y: 'bottom',
		// orient: 'vertical',
		// top: 70,
		// left: 20,
		bottom: 30,
		data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
	},
	toolbox: {
		show: true,
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			magicType: {
				show: true,
				type: ['pie', 'funnel']
			},
			restore: { show: true },
			saveAsImage: { show: true }
		}
	},
	calculable: true,
	series: [
		{
			name: '面积模式',
			type: 'pie',
			radius: [30, 120],
			center: ['175', '50%'],
			roseType: 'area',
			data: [
				{ value: 10, name: 'rose1' },
				{ value: 5, name: 'rose2' },
				{ value: 15, name: 'rose3' },
				{ value: 25, name: 'rose4' },
				{ value: 20, name: 'rose5' },
				{ value: 35, name: 'rose6' },
				{ value: 30, name: 'rose7' },
				{ value: 40, name: 'rose8' }
			]
		}
	]
};
