/**
 * @author: Michael
 * @date: 2017-07-27 16:54:12
 * @last modified by: Michael
 * @last modified time: 2017-07-27 16:54:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Echarts } from '@components/echarts';
import { SearchFrom } from '@components/search-from';

import MonitoringTable from './table/table';
import option from './echarts-option.js';
import cssStyles from './monitoring.scss';

export default class Monitoring extends Component {
	onSearchSubmit = () => {
		// error, value
		// console.log(error, value);
	}
	render() {
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
				<Row className={cssStyles.wrapperEcharts}>
					<Col span={24}>
						<Echarts option={option} style={{ width: 1000, height: 300 }} />
					</Col>
				</Row>
				<SearchFrom fields={fields} onSearch={this.onSearchSubmit} />
				<MonitoringTable />
			</section >
		);
	}
}