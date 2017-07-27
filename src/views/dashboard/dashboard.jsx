/**
 * @author: Michael
 * @date: 2017-07-19 13:56:48
 * @last modified by: Michael
 * @last modified time: 2017-07-19 13:56:48
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
// import { connect } from 'react-redux';
// import { createSelector } from 'reselect';

import { PanelItem, PanelWrapper } from '@components/panel';
import { Echarts } from '@components/echarts';

import cssStyles from './dashboard.scss';

import option from './echarts-option1.js';
import option2 from './echarts-option2.js';
// import { push } from 'react-router-redux';

export default class Dashboard extends React.Component {
	echartCallback(echartInstance, option, notMerge, lazyUpdate, echarts) {
		option.series = genPieSeries(option.series[0].data, echartInstance, echarts);
		echartInstance.setOption(option, notMerge, lazyUpdate);
	}
	render() {
		return (
			<section>
				<PanelWrapper>
					<PanelItem iconfont={'icon-mating-log'} description={'hshshshs'} />
					<PanelItem icon={'heart-o'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
				</PanelWrapper>
				<div className={cssStyles.panelWrapper}>
					<div style={{ flex: '0 0 60%' }}>
						<Echarts onCallback={this.echartCallback} option={option} style={{ width: 600, height: 450 }} />
					</div>
					<div style={{ flex: '0 0 40%' }}>
						<Echarts option={option2} style={{ width: 400, height: 450 }} />
					</div>
				</div>
			</section>
		)
	}
}

// todolist  今日任务列表 To-Do List
// table 最近购买列表（产仔）

/**
 * 获取pie数据
 * @param {array} scatterData 数据
 * @param {object} echartInstance echarts容器实例
 * @param {object} echarts echarts操作对象
 */
function genPieSeries(scatterData, echartInstance, echarts) {
	return echarts.util.map(scatterData, (item, index) => {
		const center = echartInstance.convertToPixel('calendar', item);
		// console.log(item, center);
		return {
			id: index + 'pie',
			type: 'pie',
			center: center,
			label: {
				normal: {
					formatter: '{c}',
					position: 'inside'
				}
			},
			// 扇面半径
			radius: 25,
			data: [
				{ name: '工作', value: index > 4 ? Math.round(Math.random() * 24) : 10 },
				{ name: '娱乐', value: index > 4 ? Math.round(Math.random() * 24) : 10 },
				{ name: '睡觉', value: index > 4 ? Math.round(Math.random() * 24) : 10 }
			]
		};
	});
}
