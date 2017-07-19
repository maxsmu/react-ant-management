/**
 * @author: Michael
 * @date: 2017-07-19 14:01:06
 * @last modified by: Michael
 * @last modified time: 2017-07-19 14:01:06
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import headerStyle from './header-nav.scss';

export default class HeadersNav extends Component {
	render() {
		return (
			<header className={headerStyle.header}>

				<div className={headerStyle.logoBox}>
					<a href="#">dashboard</a>
				</div>

				<div className={headerStyle.notifyBox}>
					<div className={headerStyle.IconBox}>
						<Icon type="database" style={{ fontSize: 20, color: '#797979' }} />
					</div>
				</div>
				<div className={headerStyle.logoutBox}>
					<Button ghost style={{ borderColor: '#b6b6b6', color: '#b6b6b6' }}>logout</Button>
				</div>
			</header>
		);
	}
}
