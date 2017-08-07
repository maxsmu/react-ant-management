/**
 * @author: Michael
 * @date: 2017-08-07 14:55:47
 * @last modified by: Michael
 * @last modified time: 2017-08-07 14:55:47
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Modal, Button, Form, Input, Select, DatePicker, Col, InputNumber } from 'antd';
import { editorStateMintorAction } from '@actions/monitor';
import { BType } from '@constant/breeding';
// BState
const Option = Select.Option;
const FormItem = Form.Item;
const dateFormat = 'YYYY-MM-DD';
@connect(state => {
	const { monitor } = state;
	return {
		...monitor,
		editorState: monitor.editorState
	}
})
@Form.create()
export default class EditorMonitor extends Component {
	static defaultProps = {
		editorState: { visible: false, item: {} }
	};
	static propTypes = {
		id: PropTypes.string
	};
	/**
	 * 关闭编辑状态
	 */
	closedEditor = () => {
		this.props.dispatch(editorStateMintorAction(false));
	}
	onSave = () => {
		console.log('save');
	}
	/**
	 * 计算仔猪总数
	 */
	genPigletNumber = () => {
		console.log(112);
	}
	render() {
		const { loading, form, editorState } = this.props;
		const { visible, item } = editorState;
		const { getFieldDecorator } = form;
		const formItemLayout = {
			labelCol: {
				span: 4
			},
			wrapperCol: {
				span: 10
			}
		};

		// 符号框样式
		const symbolBoxStyle = { height: 65, lineHeight: '80px', fontWeight: 'bolder', textAlign: 'center' };

		// 仔猪情况个选项添加 尾缀 '头'
		const formatter = {
			formatter: value => `${value} 头`,
			parser: value => value.replace(/头/g, '')
		}
		return (
			<Modal
				visible={visible}
				title="编辑"
				width={600}
				onOk={this.onSave}
				onCancel={this.closedEditor}
				footer={[
					<Button key="back" size="large" onClick={this.closedEditor}>取消</Button>,
					<Button key="submit" type="primary" size="large" loading={loading} onClick={this.onSave}>
						保存
					</Button>
				]}
			>
				<Form onSubmit={this.onSave}>
					<FormItem style={{ paddingBottom: 20 }}>
						<Col span={12}>
							<FormItem
								label="耳号"
								labelCol={{ span: 8 }}
								wrapperCol={{ span: 12 }}
							>
								{
									getFieldDecorator('Pno',
										{
											initialValue: item.Pno
										}
									)(<Input disabled />)
								}
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem
								labelCol={
									{ span: 10 }
								}
								wrapperCol={
									{ span: 12 }
								}
								label="配种类型"
							>
								{
									getFieldDecorator('Btype', {
										initialValue: item.Btype
									})(<Select disabled>
										{
											Object.keys(BType).map(k => (<Option key={k} value={k}>{BType[k]}</Option>))
										}
									</Select>)
								}
							</FormItem>
						</Col>
					</FormItem>

					<FormItem style={{ paddingBottom: 20 }}>
						<Col span={12}>
							<FormItem
								labelCol={{ span: 8 }}
								wrapperCol={{ span: 12 }}
								label="胎次"
							>
								{
									getFieldDecorator('Bparity',
										{
											initialValue: item.Bparity
										}
									)(<Input disabled />)
								}
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem
								labelCol={{ span: 10 }}
								wrapperCol={{ span: 12 }}
								label="配种日期"
							>
								{
									getFieldDecorator('BbreedingDate',
										{
											initialValue: item.BbreedingDate ? moment(item.BbreedingDate, dateFormat) : null
										}
									)(<DatePicker disabled />)
								}
							</FormItem>
						</Col>
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="B超日期"
					>
						{
							getFieldDecorator('BBscanDate',
								{
									initialValue: item.BBscanDate ? moment(item.BBscanDate, dateFormat) : null
								}
							)(<DatePicker />)
						}
					</FormItem>
					<FormItem
						{...formItemLayout}
						label="预产期"
					>
						{
							getFieldDecorator('BdueDate',
								{
									initialValue: item.BdueDate ? moment(item.BdueDate, dateFormat) : null
								}
							)(<DatePicker />)
						}
					</FormItem>
					<FormItem
						{...formItemLayout}
						label="分娩日期"
					>
						{
							getFieldDecorator('BdeliveryDate',
								{
									initialValue: item.BdeliveryDate ? moment(item.BdeliveryDate, dateFormat) : null
								}
							)(<DatePicker />)
						}
					</FormItem>

					<FormItem
						labelCol={{ span: 4 }}
						label="仔猪情况"
						wrapperCol={{ span: 20 }}
					>
						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="活仔"
							>
								{
									getFieldDecorator('Bpiglets.Psurvival',
										{
											initialValue: item.Bpiglets.Psurvival || 0
										}
									)(<InputNumber min={0} {...formatter} onChange={this.genPigletNumber} />)
								}
							</FormItem>
						</Col>
						<Col span={1} style={symbolBoxStyle}>+</Col>

						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="弱仔"
							>
								{
									getFieldDecorator('Bpiglets.Pscrawny',
										{
											initialValue: item.Bpiglets.Pscrawny || 0
										}
									)(<InputNumber min={0} {...formatter} onChange={this.genPigletNumber} />)
								}
							</FormItem>
						</Col>

						<Col span={1} style={symbolBoxStyle}>+</Col>

						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="畸形"
							>
								{
									getFieldDecorator('Bpiglets.Pmalformation',
										{
											initialValue: item.Bpiglets.Pmalformation || 0
										}
									)(<InputNumber min={0} {...formatter} onChange={this.genPigletNumber} />)
								}
							</FormItem>
						</Col>

						<Col span={1} style={symbolBoxStyle}>+</Col>

						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="死胎"
							>
								{
									getFieldDecorator('Bpiglets.Pstillbirth',
										{
											initialValue: item.Bpiglets.Pstillbirth || 0
										}
									)(<InputNumber min={0} {...formatter} onChange={this.genPigletNumber} />)
								}
							</FormItem>
						</Col>

					</FormItem>

					<FormItem
						wrapperCol={{ span: 20 }}
					>
						<Col span={1} style={{ ...symbolBoxStyle, width: '20%', textAlign: 'right', paddingRight: 5 }}>+</Col>
						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="木乃伊"
							>
								{
									getFieldDecorator('Bpiglets.Pmummy',
										{
											initialValue: item.Bpiglets.Pmummy || 0
										}
									)(<InputNumber min={0} {...formatter} onChange={this.genPigletNumber} />)
								}
							</FormItem>
						</Col>
						<Col span={1} style={{ ...symbolBoxStyle }}>=</Col>
						<Col span={4}>
							<FormItem
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								label="产仔数"
							>
								{
									getFieldDecorator('Bnumber',
										{
											initialValue: item.Bnumber || 0
										}
									)(<InputNumber disabled {...formatter} />)
								}
							</FormItem>
						</Col>
					</FormItem>

					<FormItem style={{ paddingLeft: '17%' }} wrapperCol={{ span: 20 }} help="产仔数 = 活仔 + 弱仔 + 畸形 + 死胎 + 木乃伊" />
				</Form>
			</Modal>
		);
	}
}
