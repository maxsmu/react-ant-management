import React, { Component } from 'react';
import { Table } from 'antd';

export default class MonitoringTable extends Component {
	render() {
		const columns = [
			{
				title: '耳号',
				dataIndex: 'earmark',
				render: text => <a href="#">{text}</a>
			},
			{
				title: '品种',
				dataIndex: 'variety'
			},
			{
				title: '状态',
				dataIndex: 'state'
			},
			{
				title: '胎次',
				dataIndex: 'parity'
			},
			{
				title: '配种日期',
				dataIndex: 'matingDate'
			},
			{
				title: '反情日期',
				dataIndex: 'recoverDate'
			},
			{
				title: 'B超日期',
				dataIndex: 'BScanDate'
			},
			{
				title: '预产期',
				dataIndex: 'dueDate'
			},
			{
				title: '分娩日期',
				dataIndex: 'deliveryDate'
			},
			{
				title: '备注',
				dataIndex: 'remark'
			},
			{
				title: '操作',
				render: () => {
					return <a href="#">Delete</a>
				}
			}
		];

		const data = [
			{
				id: '1',
				earmark: 'John Brown',
				variety: 32,
				state: '12',
				parity: 2,
				matingDate: '2017-07-28',
				recoverDate: '2017-07-28',
				BScanDate: '2017-07-28',
				dueDate: '2017-07-28',
				deliveryDate: '2017-07-28',
				remark: '这就是一个备注信息'
			},
			{
				id: '2',
				earmark: 'John Brown',
				variety: 32,
				state: '12',
				parity: 12,
				matingDate: '2017-07-28',
				recoverDate: '2017-07-28',
				BScanDate: '2017-07-28',
				dueDate: '2017-07-28',
				deliveryDate: '2017-07-28',
				remark: '这就是一个备注信息'
			}
		];
		const { ...others } = this.props;
		return (
			<Table bordered rowKey="id" columns={columns} dataSource={data} {...others} />
		);
	}
}
