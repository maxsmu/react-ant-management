/**
 * @author: Michael
 * @date: 2017-07-28 10:53:25
 * @last modified by: Michael
 * @last modified time: 2017-07-28 10:53:25
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import cssStyles from './panel-item.scss';

export default class PanelItem extends Component {
	static defaultProps = {
		unit: '',
		pre: '',
		value: '-'
	};
	static propTypes = {
		value: PropTypes.any.isRequired,
		icon: PropTypes.string,
		iconfont: PropTypes.string,
		pre: PropTypes.string,
		unit: PropTypes.string,
		description: PropTypes.string
	};
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
