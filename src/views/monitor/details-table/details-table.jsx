/**
 * @author: Michael
 * @date: 2017-07-31 17:29:35
 * @last modified by: Michael
 * @last modified time: 2017-07-31 17:29:35
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Icon, message, Button } from 'antd';
import { BType, BState } from '@constant/breeding';
import cssStyles from './details-table.scss';
import { UDatePicker } from '@components/date-picker';
import { updateMonitorDataAction, editorStateMintorAction } from '@actions/monitor';
import EditorMonitor from '../edit-monitor/edit-monitor';

// 时间格式
const dateFormat = 'YYYY-MM-DD';

@connect(state => {
	const { monitor } = state;
	return {
		...monitor,
		updateMonitor: monitor.updateMonitor,
		editorState: monitor.editorState
	};
})
export default class MonitorTable extends Component {
	static defaultProps = {
		dataList: [],
		isLoading: false,
		pagination: {},
		updateMonitor: { isFetching: false },
		editorState: { visible: false }
	};

	static propTypes = {
		dataList: PropTypes.array,
		pagination: PropTypes.object
	}

	/**
	 * 时间修改后事件处理
	 * @param {String} prop 属性名称
	 * @param {Object} record 实例对象
	 */
	onDateChange = (prop, record) => {
		return date => {
			if (this.props.updateMonitor.isFetching) {
				message.warn('稍有数据正在修改....');
				return null;
			}
			this.props.dispatch(updateMonitorDataAction(record.id, { prop, value: date.format(dateFormat) }));
		}
	}

	/**
	 * 编辑监控信息
	 * @param {Object} record 监控实体
	 */
	onEditorHandle = record => {
		return () => {
			this.props.dispatch(editorStateMintorAction(true, record));
		}
	}

	/**
	 * 生成时间编辑框
	 * @param {Date} text table数据
	 * @param {Object} record 实例对象
	 * @param {String} prop 当前属性名
	 */
	genDateRender = (text, record, prop) => {
		const { updateMonitor } = this.props;
		let isFetching = false;
		let value = typeof text === 'string' ? moment(text, dateFormat) : text;

		// 若修改是是当前内容
		if (updateMonitor.id === record.id && updateMonitor.updateData.prop === prop) {
			isFetching = updateMonitor.isFetching;

			// 若数据修改成功
			value = isFetching ? value : moment(updateMonitor.updateData.value, dateFormat);
		}
		return text ? (
			<UDatePicker
				defaultValue={value}
				onDateChange={this.onDateChange(prop, record)}
				loading={isFetching}
				disabled
			/>
		) : '';
	}

	/**
	 * 反情标记
	 * @param {Object} record 实体
	 */
	onRecover = id => {
		return () => {
			if (this.props.updateMonitor.isFetching) {
				message.warn('稍有数据正在修改....');
				return null;
			}
			this.props.dispatch(updateMonitorDataAction(id, { prop: 'Bstate', value: 1 }));
		};
	}

	render() {
		const { dataList, pagination, isLoading, editorState, ...others } = this.props;

		// table config
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
				width: 115,
				render: text => {
					return text ? <span className={cssStyles.dateBox}>{moment(text).format(dateFormat)}</span> : ''
				}
			},
			{
				title: (<span>B超日期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BBscanDate',
				width: 115,
				render: (text, record) => {
					return this.genDateRender(text, record, 'BBscanDate');
				}
			},
			{
				title: (<span>预产期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BdueDate',
				width: 115,
				render: (text, record) => {
					return this.genDateRender(text, record, 'BdueDate');
				}
			},
			{
				title: (<span>分娩日期<Icon className={cssStyles.icon} type="calendar" /></span>),
				dataIndex: 'BdeliveryDate',
				width: 115,
				render: (text, record) => {
					return this.genDateRender(text, record, 'BdeliveryDate');
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
				title: '状态',
				dataIndex: 'Bstate',
				width: 62,
				render: (text, record) => {
					if (text === 0) {
						return <Button onClick={this.onRecover(record.id)} size="small">反情</Button>;
					}
					return BState[text];
				}
			},
			{
				title: '操作',
				render: (text, record) => {
					if (record.Bstate === 2) {
						return (
							<Button
								type="primary"
								size="small"
								shape="circle"
								icon="edit"
								onClick={this.onEditorHandle(record)}
							/>
						);
					} else {
						return (
							<Button
								type="primary"
								size="small"
								disabled
								shape="circle"
								icon="edit"
							/>
						);
					}
				}
			}
		];

		return (
			<div>
				<Table bordered
					rowKey="Pno"
					loading={isLoading}
					columns={columns}
					dataSource={dataList}
					pagination={pagination}
					{...others}
				/>
				{editorState.visible ? <EditorMonitor visible={editorState.visible} /> : null}
			</div>
		);
	}
}
