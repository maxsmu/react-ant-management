/**
 * @author: Michael
 * @date: 2017-08-01 15:26:17
 * @last modified by: Michael
 * @last modified time: 2017-08-01 15:26:17
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import { filterMap } from './utils/index.js'

export default class Echart extends Component {
	static defaultProps = {
		width: '100%',
		height: '100%',
		theme: 'default',
		isLoading: false,
		loadingOpts: {
			text: '生成中...',
			color: '#c23531',
			textColor: '#000',
			maskColor: 'rgba(255, 255, 255, 0.8)',
			zlevel: 0

		},
		isLazyUpdate: false,
		isMerge: false
	};
	static propTypes = {
		// 宽度
		width: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
		// 高度
		height: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]),
		theme: PropTypes.string,
		// title
		title: PropTypes.object,
		legend: PropTypes.object,
		toolbox: PropTypes.object,
		tooltip: PropTypes.object,
		xAxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		yAxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		series: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		grid: PropTypes.object,
		color: PropTypes.array,
		// 可选，是否不跟之前设置的option进行合并，默认为false，即合并
		isMerge: PropTypes.bool,
		// 可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新
		isLazyUpdate: PropTypes.bool,
		isLoading: PropTypes.bool,
		loadingOpts: PropTypes.object,
		calendar: PropTypes.object
	};
	componentDidMount() {
		this.renderEchart(this.props);
	}
	componentWillReceiveProps(nextProps) {
		const { series, isMerge, isLazyUpdate } = nextProps;
		if (series) {
			const option = filterMap(nextProps);

			// 显示数据
			this.echartInstance.setOption({
				series: option.series,
				legend: option.legend,
				xAxis: option.xAxis
			}, isMerge, isLazyUpdate);
		}
	}
	componentWillUpdate(nextProps) {
		this.renderEchart(nextProps);
	}
	renderEchart(props) {
		const { theme, isLoading, loadingOpts, isMerge, isLazyUpdate, onReady } = props;
		// console.log('renderEchart':isLoading);
		// 获取容器DOM
		this.echartDom = this.echartsElement;

		// 获取 dom 容器上的实例。
		this.echartInstance = echarts.getInstanceByDom(this.echartDom);

		if (!this.echartInstance) {
			// 实例初始化
			this.echartInstance = echarts.init(this.echartDom, theme)

			// 容器resize时，触发实例更新
			elementResizeEvent(this.echartDom, () => {
				this.echartInstance.resize();
			});
		}

		// 如果正在加载中 显示loading 否则不显示

		isLoading ? this.echartInstance.showLoading('default', loadingOpts) : this.echartInstance.hideLoading();

		const option = filterMap(this.props);

		// 显示数据
		this.echartInstance.setOption(option, isMerge, isLazyUpdate);

		if (onReady) {
			onReady(this.echartInstance, echarts);
		}
	}
	render() {
		const { width, height } = this.props;
		return (
			<div
				ref={ref => { this.echartsElement = ref; }}
				style={{ width, height }}
			/>
		);
	}
}
