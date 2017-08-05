import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Icon } from 'antd';
import cssStyle from './date-picker.scss';

export default class UDatePicker extends Component {
	static defaultProps = {
	};
	static propTypes = {
		defaultValue: PropTypes.object,
		disabled: PropTypes.bool,
		loading: PropTypes.bool
	};
	state = {
		isEdit: false,
		disabled: true
	};
	onDoubleClick = () => {
		this.setState({ disabled: !this.state.disabled });
	}
	/**
	 * 选中后关闭编辑状态
	 */
	onOpenChange = isClosed => {
		if (isClosed) {
			this.setState({ disabled: true });
		}
	}
	/**
	 *
	 * @param {Event} e 事件对象
	 */
	onChange = (date, dateString) => {
		this.props.onDateChange(date, dateString)
	}
	render() {
		const { defaultValue, loading } = this.props;
		const loadingHtml = (<div className={cssStyle.loadingBox}>
			<Icon type="loading" className={cssStyle.loadingIcon} />加载中...
		</div>);
		const dateHtml = (
			<DatePicker
				className={cssStyle.datePickerBox}
				allowClear={false}
				defaultValue={defaultValue}
				disabled={this.state.disabled}
				onOpenChange={this.onOpenChange}
				onChange={this.onChange}
			/>);
		return (
			<span onDoubleClick={this.onDoubleClick}>
				{loading ? loadingHtml : dateHtml}
			</span>
		);
	}
}
