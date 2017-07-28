/**
 * @author: Michael
 * @date: 2017-07-21 16:15:07
 * @last modified by: Michael
 * @last modified time: 2017-07-21 16:15:07
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import reactAddonsShallowCompare from 'react-addons-shallow-compare';

export default class Echarts extends Component {
	static defaultProps = {
		option: {},
		theme: 'default',
		showLoading: false,
		loadingOption: {
			text: '加载中...',
			color: '#c23531',
			textColor: '#000',
			maskColor: 'rgba(255, 255, 255, 0.8)',
			zlevel: 0
		},
		notMerge: false,
		lazyUpdate: false,
		style: {
			width: '100%',
			height: '100%'
		}
	};
	static propTypes = {
		// 图表的配置项和数据
		option: PropTypes.object.isRequired,
		// 容器样式
		boxClass: PropTypes.string,
		// 主题
		theme: PropTypes.string,
		// 事件
		events: PropTypes.array,
		//  是否显示加载中
		showLoading: PropTypes.bool,
		// 加载效果设置
		loadingOption: PropTypes.object,
		// 可选，是否不跟之前设置的option进行合并，默认为false，即合并
		notMerge: PropTypes.bool,
		// 可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新
		lazyUpdate: PropTypes.bool,
		// 图表容器的样式,默认高宽100%
		style: PropTypes.object,
		// 渲染回调
		onCallback: PropTypes.func
	};
	state = {
		// 是否需要初始化,第一次创建或者主题发生变化需要init
		needInit: false
	}
	componentDidMount() {
		this.renderEchart();
	}
	componentWillReceiveProps(nextProps) {
		const { theme } = this.props;
		let nextTheme = nextProps.theme;
		// 如果主题切换,需要重新创建实例,因为ECharts的主题设置api在init中
		if (theme !== nextTheme) {
			this.setState({ needInit: true })
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return reactAddonsShallowCompare(this, nextProps, nextState);
	}
	componentWillUnmount() {
		// 卸载组件时销毁实例
		echarts.dispose(this.echartsElement)
	}
	/**
	 * 渲染echarts容器
	 */
	renderEchart() {
		const { option, theme, notMerge, lazyUpdate, onCallback, events, showLoading, loadingOption } = this.props;

		// 获取容器DOM
		const echartDom = this.echartsElement;

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

		// 若存在事件则使用
		if (events) {
			events.map(({ type, handler }) => echartInstance.on(type, handler))
		}

		// 是否存在加载中状态，存在则显示
		if (showLoading) {

			// 显示加载中
			echartInstance.showLoading('default', loadingOption);
		} else {
			// 关闭加载中状态
			echartInstance.hideLoading();

			// 显示数据
			echartInstance.setOption(option, notMerge, lazyUpdate);

			// 如若存在回调，则执行
			if (onCallback) {
				onCallback(echartInstance, option, notMerge, lazyUpdate, echarts, echartDom);
			}
		}
	}
	render() {
		const { boxClass, style } = this.props;
		return (
			<div
				ref={ref => { this.echartsElement = ref; }}
				className={boxClass}
				style={style}
			/>
		);
	}
}
