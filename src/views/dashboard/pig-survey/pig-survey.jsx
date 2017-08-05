/**
 * @author: Michael
 * @date: 2017-08-02 11:24:02
 * @last modified by: Michael
 * @last modified time: 2017-08-02 11:24:02
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Echarts } from '@components/echarts';
import echartConfig from './echart.config.js';

export default class PigSurveyEcharts extends Component {
	static defaultProps = {
	};
	static propTypes = {
		data: PropTypes.object
	};
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
			/>
		);
	}
}
