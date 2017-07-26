/**
 * @author: Michael
 * @date: 2017-07-26 12:56:53
 * @last modified by: Michael
 * @last modified time: 2017-07-26 12:56:53
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, InputNumber, Select, DatePicker } from 'antd';
const FormItem = Form.Item;

class Search extends Component {
	state = {
		expand: false
	};
	handleSearch = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			this.props.onSearch(err, values);
		});
	}
	handleReset = () => {
		this.props.form.resetFields();
	}
	/**
	 * 点击收起
	 */
	toggle = () => this.setState({ expand: !this.state.expand })
	/**
	 * 生成fields
	 */
	genFields() {
		const count = this.state.expand ? 10 : 6;
		const { fields = [] } = this.props;

		return fields.map((field, i) => {
			return (
				<Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
					{this.genField(field)}
				</Col>
			);
		});
	}
	/**
	 * 生成field
	 */
	genField(field) {
		const { form } = this.props;

		// 类型tags
		const tags = {
			// 下拉选择框
			Select: (
				<Select
					placeholder={field.placeholder}
				>
					{
						field.options && field.options.map((item, index) => {
							return <Select.Option key={index} value={item.value}>{item.name}</Select.Option>
						})
					}
				</Select>),
			// input 输入框
			Input: (
				<Input placeholder={field.placeholder} />
			),
			// 数字输入框
			InputNumber: (<InputNumber />),
			// 日期选择器
			DatePicker: <DatePicker />,
			// 区间日期选择器
			RangePicker: <DatePicker.RangePicker />
		}

		return (
			<FormItem {...field.layout} label={field.name}>
				{
					form.getFieldDecorator(field.value, { initialValue: field.config && field.config.initialValue, rules: field.rules || [] })(
						tags[field.type]
					)
				}
			</FormItem>
		);
	}
	render() {
		return (
			<div style={{ marginTop: 20, marginBottom: 20 }}>
				<Form onSubmit={this.handleSearch} >
					<Row gutter={40}>{this.genFields()}</Row>
					<Row>
						<Col span={24} style={{ textAlign: 'right' }}>
							<Button type="primary" htmlType="submit" icon="search">搜索</Button>
							<Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
								重置
							</Button>
							<a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
								{this.state.expand ? '收起' : '更多'} <Icon type={this.state.expand ? 'up' : 'down'} />
							</a>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}

export const SearchFrom = Form.create()(Search);
