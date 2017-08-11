/**
 * @author: Michael
 * @date: 2017-07-27 16:54:12
 * @last modified by: Michael
 * @last modified time: 2017-07-27 16:54:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import browser from '@utils/browser.util';

import { SearchFrom } from '@components/search-from';
import MonitorTable from './details-table/details-table';
import MonitorEchart from './monitor-echart/monitor-echart';
import cssStyles from './monitor.scss';
import { getMonitorState, getMonitorList } from '@actions/monitor';

@browser.init('生产事务')
@connect(state => {
	const { monitor } = state;
	const { monitorState, monitorList } = monitor;
	return {
		...monitor,
		monitorList,
		monitorState
	}
})
export default class Monitor extends Component {
	static defaultProps = {
		monitorState: { isFetching: false },
		monitorList: { data: [], pagination: { pageSize: 20, current: 1 }, isFetching: false }
	};
	componentDidMount() {
		// 获取监控列表
		this.fetchMonitorList({ pageSize: 20, current: 1 });

		// 获取最近七天监控数据
		this.props.dispatch(getMonitorState(7));
	}
	onSearchSubmit = () => {
		// error, value
		// console.log(error, value);
	}
	onShowSizeChange = (current, pageSize) => {
		this.fetchMonitorList({ pageSize, current });
	}
	onChange = (page, pageSize) => {
		this.fetchMonitorList({ pageSize, current: page });
	}
	/**
	 * 获取监控列表
	 * @param {Object} query 查询条件
	 */
	fetchMonitorList(query) {
		this.props.dispatch(getMonitorList(query));
	}
	render() {
		const { monitorList, monitorState } = this.props;
		const { pagination, data } = monitorList;
		// field layout config
		const layout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 19 }
		};
		// search config
		const fields = [
			{
				name: '耳号', value: 'Pno', type: 'Input', placeholder: '请输入耳号', rules: [], layout, config: {
					initialValue: ''
				}
			},
			{
				name: '配种类型', value: 'Btype', type: 'Select',
				options: [
					{ name: '自然', value: '0' },
					{ name: '人工', value: '1' },
					{ name: '全部', value: null }
				],
				layout,
				config: {
					initialValue: null
				}
			},
			{ name: '配种时间', value: 'BbreedingDate', type: 'DatePicker', layout },
			{ name: '分娩区间', value: 'BdeliveryDate', type: 'RangePicker', layout }
		];

		// pagination config
		const tablePagination = {
			pageSize: +pagination.pageSize,
			showSizeChanger: true,
			current: +pagination.current,
			total: +pagination.total,
			onShowSizeChange: this.onShowSizeChange,
			onChange: this.onChange
		};

		return (
			<section>
				<MonitorEchart
					data={monitorState}
					className={cssStyles.wrapperEcharts}
				/>

				<SearchFrom fields={fields} onSearch={this.onSearchSubmit} count={3} />

				<MonitorTable
					pagination={tablePagination}
					dataList={data}
					isLoading={monitorList.isFetching}
					style={{ marginTop: 25 }}
				/>
			</section >
		);
	}
}
