export default {
	title: {
		text: '2017年2月日常时间分配'
	},
	tooltip: {},
	color: ['#ffcd58', '#2abdbd', '#fe8150', '#52a0e7'],
	legend: {
		data: [
			'工作',
			'娱乐',
			'睡觉'
		],
		top: 80,
		left: 20,
		orient: 'vertical'
	},
	calendar: {
		top: 80,
		left: 100,
		orient: 'vertical',
		cellSize: [
			70,
			70
		],
		splitLine: {
			show: false
		},
		yearLabel: {
			show: false,
			textStyle: {
				fontSize: 30
			}
		},
		dayLabel: {
			margin: 20,
			firstDay: 1,
			nameMap: [
				'星期日',
				'星期一',
				'星期二',
				'星期三',
				'星期四',
				'星期五',
				'星期六'
			]
		},
		monthLabel: {
			show: false
		},
		range: [
			'2017-02'
		]
	},
	series: [
		{
			id: 'label',
			type: 'scatter',
			coordinateSystem: 'calendar',
			symbolSize: 1,
			label: {
				normal: {
					show: true,
					offset: [
						-25,
						-25
					],
					textStyle: {
						color: '#000',
						fontSize: 10
					}
				}
			}
		}
	]
}
