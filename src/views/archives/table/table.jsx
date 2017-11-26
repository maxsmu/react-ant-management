/**
 * @author: Michael
 * @date: 2017-07-27 16:12:34
 * @last modified by: Michael
 * @last modified time: 2017-07-27 16:12:34
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
// import { connect } from 'react-redux';
import moment from 'moment';
// import { getAllArchivesList } from '@actions/archive';

// @connect(state => {
// 	const { archives } = state;
// 	return {
// 		...archives,
// 		archivesList: archives.archivesList
// 	};
// })
export default class ArchiveTable extends Component {
	static defaultProps = {
		dataList: []
	}
	static propTypes = {
		dataList: PropTypes.array,
		pagination: PropTypes.object,
		loading: PropTypes.bool
	}
	// componentDidMount() {
	// 	this.props.dispatch(getAllArchivesList())
	// }
	render() {
		const { isFetching, pagination, dataList } = this.props;
		const columns = [
			{
				title: '耳号',
				dataIndex: 'Pno',
				render: text => <a href="#">{text}</a>
			},
			{
				title: '品种',
				dataIndex: 'Bno'
			},
			{
				title: '性别',
				dataIndex: 'Psex'
			},
			{
				title: '圈舍',
				dataIndex: 'Hno'
			},
			{
				title: '体重(kg)',
				dataIndex: 'Pweight'
			},
			{
				title: '饲养周期',
				dataIndex: 'Pcycle'
			},
			{
				title: '喂养天数',
				dataIndex: 'Pday'
			},
			{
				title: '父耳号',
				dataIndex: 'Pfatherno'
			},
			{
				title: '母耳号',
				dataIndex: 'Pmotherno'
			},
			{
				title: '建档时间',
				dataIndex: 'Pcreated',
				render: text => {
					return moment(text).format('YYYY-MM-DD');
				}
			},
			{
				title: '状态',
				dataIndex: 'Pstate'
			},
			{
				title: '操作人',
				dataIndex: 'Ono'
			},
			{
				title: '备注',
				// dataIndex: 'Pstate',
				render: (text, record) => {
					return record.Pstate === 1 ? '11' : (record.PdeathCause || 2323)
				}
			}
		];

		return (
			<Table
				rowKey="Pno"
				bordered
				loading={isFetching}
				columns={columns}
				pagination={pagination}
				dataSource={dataList}
			/>
		);
	}
}
