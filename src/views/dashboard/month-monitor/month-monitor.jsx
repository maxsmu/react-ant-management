/**
 * @author: Michael
 * @date: 2017-08-02 11:09:20
 * @last modified by: Michael
 * @last modified time: 2017-08-02 11:09:20
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Echarts } from '@components/echarts';
import echartConfig from './echart.config.js';

export default class MonthMonitorEcharts extends Component {
	static defaultProps = {
		data: []
	};
	static propTypes = {
		data: PropTypes.array,
		isLoading: PropTypes.bool
	};
	onReady = echartInstance => {
		const { data } = this.props;
		const series = genPieSeries(data, echartInstance);
		echartInstance.setOption({ series });
	}
	render() {
		return (
			<Echarts
				width={'100%'}
				height={450}
				title={echartConfig.title}
				color={echartConfig.color}
				tooltip={echartConfig.tooltip}
				legend={echartConfig.legend}
				series={echartConfig.series}
				calendar={echartConfig.calendar}
				onReady={this.onReady}
			/>
		);
	}
}
/**
 * 获取pie数据
 * @param {array} scatterData 数据
 * @param {object} echartInstance echarts容器实例
 */
function genPieSeries(scatterData = [], echartInstance) {
	return scatterData.map((item, index) => {
		const center = echartInstance.convertToPixel('calendar', item);
		console.log(item[0], center);
		return {
			id: index + 'pie',
			type: 'pie',
			center,
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
