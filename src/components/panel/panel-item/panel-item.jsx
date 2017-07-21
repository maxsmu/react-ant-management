import React, { Component } from 'react';
import { Icon } from 'antd';
import cssStyles from './panel-item.scss';

export default class PanelItem extends Component {
	static defaultProps = {
		unit: '',
		pre: '',
		value: '-'
	}
	render() {
		const { icon, iconfont, pre, value, unit, description } = this.props
		let chart = <i className={` iconfont ${iconfont} ${cssStyles.icon}`} />;
		if (icon) {
			chart = <Icon type={icon} className={cssStyles.icon} />
		}

		return (
			<div className={cssStyles.panel}>
				<div className={cssStyles.content}>
					{chart}
					<div className={cssStyles.valBox}>
						{`${pre}${value}${unit}`}
					</div>
				</div>
				<div className={cssStyles.footer}>
					{description}
				</div>
			</div>
		);
	}
}
