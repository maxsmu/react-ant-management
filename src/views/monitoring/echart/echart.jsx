/**
 * @author: Michael
 * @date: 2017-07-31 17:29:21
 * @last modified by: Michael
 * @last modified time: 2017-07-31 17:29:21
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Echarts } from '@components/echarts';
import { Row, Col } from 'antd';
import baseOption from './echart.config.js';

export default class MonitoringEchart extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	}
	render() {
		const { data, ...others } = this.props;
		const option = genEchartsOption(data);
		console.log(option);
		return (
			<Row {...others}>
				<Col span={24}>
					<Echarts option={option} style={{ width: '95%', height: 300 }} />
				</Col>
			</Row>
		);
	}
}

/**
 * 根据近7日监控数据生成echart配置
 * @param {Array} data 近7日监控数据
 */
function genEchartsOption(data = []) {
	// 说明列表
	const legend = [];

	// x轴标记
	const xAxisData = [];

	// 遍历数据生成series数据
	baseOption.series = data.map(item => {
		// 添加说明名称
		legend.push(item.showName);

		// 添加X轴标记名称
		xAxisData.push(item.date);

		return {
			name: item.showName,
			type: 'bar',
			stack: '总量',
			barMaxWidth: 50,
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: item.data
		};
	});

	baseOption.xAxis.data = xAxisData;
	baseOption.legend = legend;
	return baseOption;
}
