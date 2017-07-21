/**
 * @author: Michael
 * @date: 2017-07-21 16:15:07
 * @last modified by: Michael
 * @last modified time: 2017-07-21 16:15:07
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import reactAddonsShallowCompare from 'react-addons-shallow-compare';

export default class Echarts extends Component {
	defaultProps = {
		// 图表的配置项和数据
		option: {},
		className: '', // 容器样式
		config: {
			// theme: 主题
			// event: 事件
			// showLoading: 是否显示加载中
			// loadingOption: 加载效果设置
		},
		notMerge: false, // 可选，是否不跟之前设置的option进行合并，默认为false，即合并
		lazyUpdate: false, // 可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新
		style: { // 图表容器的样式,默认高宽100%
			width: '100%',
			height: '100%'
		}
	}
	state = {
		// 是否需要初始化,第一次创建或者主题发生变化需要init
		needInit: false,
		refresh: false
	}
	componentDidMount() {
		this.renderEchart();
	}
	componentWillReceiveProps(nextProps) {
		// 如果主题切换,需要重新创建实例,因为ECharts的主题设置api在init中,
		if (this.props.config.theme !== nextProps.config.theme) {
			this.setState({ needInit: true })
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return reactAddonsShallowCompare(this, nextProps, nextState);
	}
	componentDidUpdate() {
		this.renderEchart()
	}
	componentWillUnmount() {
		// 卸载组件时销毁实例
		echarts.dispose(this.echartsElement)
	}
	/**
	 * 渲染echarts容器
	 */
	renderEchart() {
		const { option, notMerge, lazyUpdate, config } = this.props;

		// 获取容器DOM
		const echartDom = this.echartsElement;

		// 判断是存在主题配置，有则应用
		const theme = (config && config.theme) || 'default';

		// 获取 dom 容器上的实例。
		let echartInstance = echarts.getInstanceByDom(echartDom)
		//
		if (!echartInstance || this.state.needInit) {
			// 实例初始化
			echartInstance = echarts.init(echartDom, theme)

			// 容器resize时，触发实例更新
			elementResizeEvent(echartDom, function() {
				echartInstance.resize();
			})
		}

		if (config && config.hasOwnProperty('event')) {
			config.event.map(({ type, handler }) => echartInstance.on(type, handler))
		}

		// 是否存在加载中状态，存在则显示
		if (config && config.showLoading) {
			// 加载中样式默认配置
			const defaultLoaddingConfig = {
				text: '加载中...',
				color: '#c23531',
				textColor: '#000',
				maskColor: 'rgba(255, 255, 255, 0.8)',
				zlevel: 0
			};

			// 显示加载中
			echartInstance.showLoading('default', (config && config.loadingOption) || defaultLoaddingConfig)
		} else {
			// 关闭加载中状态
			echartInstance.hideLoading();
			// option.series = this.getPieSeries(option.series[0].data, echartInstance);

			// console.log(option.series[0].data);
			// 显示数据
			echartInstance.setOption(option, notMerge, lazyUpdate);
		}

	}
	getPieSeries(scatterData, echartInstance) {
		return echarts.util.map(scatterData, (item, index) => {
			var center = echartInstance.convertToPixel('calendar', item);
			return {
				id: index + 'pie',
				center: center
			};
		});
	}
	render() {
		const { className, style } = this.props;
		return (
			<div
				ref={ref => { this.echartsElement = ref; }}
				className={className}
				style={style}
			/>
		);
	}
}
