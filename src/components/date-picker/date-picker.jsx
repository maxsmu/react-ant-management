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
		isEdit: false
	};
	onDoubleClick = () => {
		this.setState({ isEdit: true });
	}
	/**
	 * 选中后关闭编辑状态
	 */
	onOpenChange = isClosed => {
		if (!isClosed) {
			this.setState({ isEdit: false });
		}
	}
	/**
	 * 日期修改后触发
	 * @param {Moment} date moment时间对象
	 * @param {String} dateString 字符时间
	 */
	onChange = (date, dateString) => {
		this.props.onDateChange(date, dateString)
	}
	render() {
		const { defaultValue, loading } = this.props;
		const loadingHtml = (<div className={cssStyle.loadingBox}>
			<Icon type="loading" className={cssStyle.loadingIcon} />更新中...
		</div>);
		const dateHtml =
			this.state.isEdit ? (
				<DatePicker
					className={cssStyle.datePickerBox}
					allowClear={false}
					defaultValue={defaultValue}
					onOpenChange={this.onOpenChange}
					onChange={this.onChange}
				/>
			) : (<span className={cssStyle.defaultBox}>{defaultValue.format('YYYY-MM-DD')}</span>);
		return (
			<span onDoubleClick={this.onDoubleClick}>
				{loading ? loadingHtml : dateHtml}
			</span>
		);
	}
}
