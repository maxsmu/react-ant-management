/**
 * @author: Michael
 * @date: 2017-07-26 11:13:13
 * @last modified by: Michael
 * @last modified time: 2017-07-26 11:13:13
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Table, Icon, Row, Col, Button } from 'antd';

import cssStyle from './archives.scss';
import { SearchFrom } from '@components/search-from';

export default class ArchivesForm extends Component {
	onSearchSubmit = (error, value) => {
		console.log(error, value);
	}
	render() {
		const layout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 19 }
		};

		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				render: text => <a href="#">{text}</a>
			},
			{
				title: 'Age',
				dataIndex: 'age',
				key: 'age'
			},
			{
				title: 'Address',
				dataIndex: 'address',
				key: 'address'
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span>
						<a href="#">Action 一 {record.name}</a>
						<span className="ant-divider" />
						<a href="#">Delete</a>
						<span className="ant-divider" />
						<a href="#" className="ant-dropdown-link">
							More actions <Icon type="down" />
						</a>
					</span>
				)
			}];

		const data = [
			{
				key: '1',
				name: 'John Brown',
				age: 32,
				address: 'New York No. 1 Lake Park'
			},
			{
				key: '2',
				name: 'Jim Green',
				age: 42,
				address: 'London No. 1 Lake Park'
			},
			{
				key: '3',
				name: 'Joe Black',
				age: 32,
				address: 'Sidney No. 1 Lake Park'
			},
			{
				key: '4',
				name: 'Joe Black',
				age: 32,
				address: 'Sidney No. 1 Lake Park'
			},
			{
				key: '5',
				name: 'Joe Black',
				age: 32,
				address: 'Sidney No. 1 Lake Park'
			}
		];


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
			<section className={cssStyle.archiveContainer}>
				<SearchFrom fields={fields} onSearch={this.onSearchSubmit} />
				<Row className={cssStyle.handleBox}>
					<Col span={24}>
						<Button type="primary">批量导入</Button>
						<Button type="primary" icon="download">模板下载</Button>
					</Col>
				</Row>
				<Table bordered columns={columns} dataSource={data} />
			</section>
		);
	}
}


