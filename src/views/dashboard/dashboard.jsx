/**
 * @author: Michael
 * @date: 2017-07-19 13:56:48
 * @last modified by: Michael
 * @last modified time: 2017-07-19 13:56:48
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
import { Row, Col } from 'antd';
import browser from '@utils/browser.util';
// import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import { PanelItem, PanelWrapper } from '@components/panel';

// import cssStyles from './dashboard.scss';
import MonthMonitorEcharts from './month-monitor/month-monitor';
import PigSurveyEcharts from './pig-survey/pig-survey';

@browser.init('Dashboard')
export default class Dashboard extends React.Component {
	render() {
		const data = [
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
		];
		return (
			<section>
				<PanelWrapper>
					<PanelItem iconfont={'icon-mating-log'} value={0} description={'hshshshs'} />
					<PanelItem icon={'heart-o'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
				</PanelWrapper>
				<Row>
					<Col span={16}>
						<MonthMonitorEcharts data={data} />
					</Col>
					<Col span={8}>
						<PigSurveyEcharts />
					</Col>
				</Row>
			</section>
		)
	}
}

// todolist  今日任务列表 To-Do List
// table 最近购买列表（产仔）

