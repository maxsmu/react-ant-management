/**
 * @author: Michael
 * @date: 2017-07-19 13:56:48
 * @last modified by: Michael
 * @last modified time: 2017-07-19 13:56:48
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
import { PanelItem, PanelWrapper } from '@components/panel';
import { Echarts } from '@components/echarts';
import cssStyles from './dashboard.scss';
import option from './echarts-option1.js';
import option2 from './echarts-option2.js';
// import { push } from 'react-router-redux';
// import { connect } from 'react-redux';

export default class Dashboard extends React.Component {
	echartCallback(echartInstance, option, notMerge, lazyUpdate, echarts) {
		option.series = getPieSeries(option.series[0].data, echartInstance, echarts);
		echartInstance.setOption(option, notMerge, lazyUpdate);
	}
	render() {
		return (
			<section className={cssStyles.container}>
				<PanelWrapper>
					<PanelItem iconfont={'icon-mating-log'} description={'hshshshs'} />
					<PanelItem icon={'heart-o'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
				</PanelWrapper>
				<div className={cssStyles.panelWrapper}>
					<Echarts className={cssStyles.panelChart} onCallback={this.echartCallback} option={option} style={{ width: '70%', height: 500 }} />
					<Echarts className={cssStyles.panelChart} option={option2} style={{ width: '30%', height: 500 }} />
				</div>
			</section>
		)
	}
}

function getPieSeries(scatterData, echartInstance, echarts) {
	return echarts.util.map(scatterData, (item, index) => {
		const center = echartInstance.convertToPixel('calendar', item);
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
			radius: 30,
			data: [
				{ name: '工作', value: Math.round(Math.random() * 24) },
				{ name: '娱乐', value: Math.round(Math.random() * 24) },
				{ name: '睡觉', value: Math.round(Math.random() * 24) }
			]
		};

	});
}
