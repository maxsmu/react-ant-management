/**
 * @author: Michael
 * @date: 2017-07-27 16:12:34
 * @last modified by: Michael
 * @last modified time: 2017-07-27 16:12:34
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Table, Icon } from 'antd';

export default class ArchiveTable extends Component {
	render() {
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
		return (
			<Table bordered columns={columns} dataSource={data} />
		);
	}
}
