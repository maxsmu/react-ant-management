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
import MonitoringTable from './table/table';
import MonitoringEchart from './echart/echart';
import cssStyles from './monitoring.scss';
import monitoringAction from '@actions/monitoring';

@browser.init('生产事务')
@connect(state => {
	const { monitoringReducer } = state;
	return {
		...monitoringReducer,
		list: monitoringReducer.list,
		monitoringData: monitoringReducer.monitoringData,
		isFetching: monitoringReducer.isFetching
	}
})
export default class Monitoring extends Component {
	static defaultProps = {
		monitoringData: {}
	}
	componentDidMount() {
		this.props.dispatch(monitoringAction.getMonitorings());
		this.props.dispatch(monitoringAction.getSowsMonitorings(7));
	}
	onSearchSubmit = () => {
		// error, value
		// console.log(error, value);
	}
	render() {
		const { list, monitoringData } = this.props;
		const layout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 19 }
		};
		// search config
		const fields = [
			{
				name: '耳号', value: 'earmark', type: 'Input', placeholder: '请输入耳号', rules: [], layout, config: {
					initialValue: 'seg00000'
				}
			},
			{ name: '种类', value: 'variety', type: 'InputNumber', layout },
			{
				name: '类型', value: 'type', type: 'Select',
				options: [
					{ name: '男', value: 'nan' },
					{ name: '女', value: 'nv' }
				],
				layout,
				config: {
					initialValue: 'nan'
				}
			},
			{ name: '创建时间', value: 'creatDate', type: 'DatePicker', layout },
			{ name: '分娩区间', value: 'RangeDate', type: 'RangePicker', layout }
		];
		return (
			<section>
				<MonitoringEchart
					data={monitoringData}
					className={cssStyles.wrapperEcharts}
				/>
				<SearchFrom fields={fields} onSearch={this.onSearchSubmit} count={4} />
				<MonitoringTable dataList={list} style={{ marginTop: 25 }} />
			</section >
		);
	}
}
