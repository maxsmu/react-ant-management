/**
 * @author: Michael
 * @date: 2017-07-19 15:50:12
 * @last modified by: Michael
 * @last modified time: 2017-07-19 15:50:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';

// import style from './main-layout.scss';
import { HeaderNav } from '@components/header-nav';
import { MenuBar } from '@components/menu-bar';
export default class MainLayout extends Component {
	render() {
		const menuStyle = {
			width: 210,
			height: '100%',
			top: 60,
			zIndex: 1002,
			position: 'fixed'
		}
		return (
			<div>
				<HeaderNav />
				<MenuBar style={menuStyle} />
			</div>
		);
	}
}
