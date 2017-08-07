import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
const FormItem = Form.Item;
@Form.create()
export default class MonitorData extends Component {
	static defaultProps = {
	};
	static propTypes = {
		onSubmit: PropTypes.func
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 }
			}
		};
		return (
			<Form onSubmit={this.props.onSubmit}>
				<FormItem
					{...formItemLayout}
					label="E-mail"
					hasFeedback
				>
					{
						getFieldDecorator('email',
							{
								rules: [{
									type: 'email', message: 'The input is not valid E-mail!'
								}, {
									required: true, message: 'Please input your E-mail!'
								}]
							}
						)(<Input />)
					}
				</FormItem>
			</Form>
		);
	}
}
