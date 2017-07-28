/**
 * @author: Michael
 * @date: 2017-07-19 14:01:06
 * @last modified by: Michael
 * @last modified time: 2017-07-19 14:01:06
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'antd';
import cssStyle from './header-nav.scss';

export default class HeadersNav extends Component {
	static propTypes = {
		onCollapse: PropTypes.func
	};
	state = { collapsed: false };
	onToggle = () => {
		const { onCollapse } = this.props;
		this.setState({ collapsed: !this.state.collapsed });
		onCollapse && onCollapse();
	}
	render() {
		return (
			<header className={cssStyle.header}>
				<Icon className={cssStyle.trigger} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.onToggle} />

				<div className={cssStyle.logoBox}>
					<a href="#">dashboard</a>
				</div>

				<div className={cssStyle.notifyBox}>
					<div className={cssStyle.IconBox}>
						<Icon type="database" style={{ fontSize: 20, color: '#797979' }} />
					</div>
				</div>
				<div className={cssStyle.logoutBox}>
					<Button ghost style={{ borderColor: '#b6b6b6', color: '#b6b6b6' }}>logout</Button>
				</div>
			</header>
		);
	}
}
