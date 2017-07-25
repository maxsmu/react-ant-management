
export default {
	title: {
		text: '2017年2月日常时间分配'
	},
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
						-30,
						-30
					],
					textStyle: {
						color: '#000',
						fontSize: 12
					}
				}
			},
			data: [
				[
					'2017-02-01',
					1
				],
				[
					'2017-02-02',
					2
				],
				[
					'2017-02-03',
					3
				],
				[
					'2017-02-04',
					4
				],
				[
					'2017-02-05',
					5
				],
				[
					'2017-02-06',
					6
				],
				[
					'2017-02-07',
					7
				],
				[
					'2017-02-08',
					8
				],
				[
					'2017-02-09',
					9
				],
				[
					'2017-02-10',
					10
				],
				[
					'2017-02-11',
					11
				],
				[
					'2017-02-12',
					12
				],
				[
					'2017-02-13',
					13
				],
				[
					'2017-02-14',
					14
				],
				[
					'2017-02-15',
					15
				],
				[
					'2017-02-16',
					16
				],
				[
					'2017-02-17',
					17
				],
				[
					'2017-02-18',
					18
				],
				[
					'2017-02-19',
					19
				],
				[
					'2017-02-20',
					20
				],
				[
					'2017-02-21',
					21
				],
				[
					'2017-02-22',
					22
				],
				[
					'2017-02-23',
					23
				],
				[
					'2017-02-24',
					24
				],
				[
					'2017-02-25',
					25
				],
				[
					'2017-02-26',
					26
				],
				[
					'2017-02-27',
					27
				],
				[
					'2017-02-28',
					28
				]
			]
		}
	]
}
