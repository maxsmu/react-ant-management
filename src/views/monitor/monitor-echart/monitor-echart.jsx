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

export default class MonitorEchart extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		isLoading: PropTypes.bool
	}
	render() {
		const { data, isLoading, ...others } = this.props;
		const option = genEchartsOption(data);
		return (
			<Row {...others}>
				<Col span={24}>
					<Echarts
						width={'95%'}
						height={300}
						title={baseOption.title}
						tooltip={baseOption.tooltip}
						legend={option.legend}
						grid={baseOption.grid}
						yAxis={baseOption.yAxis}
						xAxis={option.xAxis}
						series={option.series}
						isLoading={!isLoading}
						color={baseOption.color
						}
					/>
				</Col>
			</Row>
		);
	}
}

/**
 * 根据近7日监控数据生成echart配置
 * @param {Array} data 近7日监控数据
 */
function genEchartsOption(data = {}) {
	// 说明列表对象
	const legend = {};
	// 说明列表
	const legendData = [];

	// x轴标记
	const xAxis = {
		type: 'category'
	};

	// 遍历数据生成series数据
	const series = data.listData && data.listData.map(item => {
		// 添加说明名称
		legendData.push(item.showName);

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

	// 若说明列表长度大于0 则赋值
	if (legendData.length > 0) {
		legend.data = legendData;
	}

	// 若存在type 则赋值
	if (data.type) {
		xAxis.data = data.type;
	}
	return { legend, xAxis, series };
}
