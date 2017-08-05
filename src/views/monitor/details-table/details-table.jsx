/**
 * @author: Michael
 * @date: 2017-07-31 17:29:35
 * @last modified by: Michael
 * @last modified time: 2017-07-31 17:29:35
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'antd';
import moment from 'moment';
import { BType, BState } from '@constant/breeding';
import cssStyles from './details-table.scss';
import { UDatePicker } from '@components/date-picker';


const dateFormat = 'YYYY-MM-DD';
export default class MonitorTable extends Component {
	static defaultProps = {
		dataList: [],
		pagination: {},
		isLoading: false
	};
	static propTypes = {
		dataList: PropTypes.array,
		pagination: PropTypes.object
	}
	onDateChange = date => {
		console.log('--->', date);
	}
	genDateRender = (text, isLoading) => {
		const value = text ? moment(text, dateFormat) : '';
		return text ? (
			<UDatePicker
				defaultValue={value}
				onDateChange={this.onDateChange}
				loading={isLoading}
				disabled
			/>
		) : '';
	}
	render() {
		const { dataList, isLoading, pagination, ...others } = this.props;
		const columns = [
			{
				title: '耳号',
				dataIndex: 'Pno',
				icon: 'calendar'
			},
			{
				title: '配种类型',
				dataIndex: 'Btype',
				render: text => {
					return BType[text]
				}
			},
			{
				title: '胎次',
				dataIndex: 'Bparity'
			},
			{
				title: (<span>配种日期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BbreedingDate',
				width: 150,
				render: text => {
					return this.genDateRender(text, isLoading);
				}
			},
			{
				title: (<span>B超日期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BBscanDate',
				width: 150,
				render: text => {
					return this.genDateRender(text, isLoading);
				}
			},
			{
				title: (<span>预产期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BdueDate',
				width: 150,
				render: text => {
					return this.genDateRender(text, isLoading);
				}
			},
			{
				title: (<span>分娩日期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BdeliveryDate',
				width: 150,
				render: text => {
					return this.genDateRender(text, isLoading);
				}
			},
			{
				title: '产仔数',
				dataIndex: 'Bnumber'
			},
			{
				title: '仔猪情况',
				children: [
					{
						title: '活仔',
						dataIndex: 'Bpiglets.Psurvival',
						key: 'Bpiglets.Psurvival',
						width: 45
					},
					{
						title: '弱仔',
						dataIndex: 'Bpiglets.Pscrawny',
						key: 'Bpiglets.Pscrawny',
						width: 45
					},
					{
						title: '畸形',
						dataIndex: 'Bpiglets.Pmalformation',
						key: 'Bpiglets.Pmalformation',
						width: 45
					},
					{
						title: '死胎',
						dataIndex: 'Bpiglets.Pstillbirth',
						key: 'Bpiglets.Pstillbirth',
						width: 45
					},
					{
						title: '木乃伊',
						dataIndex: 'Bpiglets.Pmummy',
						key: 'Bpiglets.Pmummy',
						width: 55
					}
				]
			},
			{
				title: '反情日期',
				dataIndex: 'BrecoverDate',
				width: 100,
				render: text => {
					return text ? moment(text).format('YYYY-MM-DD') : ''
				}
			},
			{
				title: '状态',
				dataIndex: 'Bstate',
				render: text => BState[text]
			},
			{
				title: '操作',
				render: () => {
					return <a href="#">Delete</a>
				}
			}
		];
		return (
			<Table bordered
				rowKey="Pno"
				loading={isLoading}
				columns={columns}
				dataSource={dataList}
				pagination={pagination}
				{...others}
			/>
		);
	}
}
