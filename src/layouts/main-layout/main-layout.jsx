/**
 * @author: Michael
 * @date: 2017-07-19 15:50:12
 * @last modified by: Michael
 * @last modified time: 2017-07-19 15:50:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import cssStyle from './main-layout.scss';
import { HeaderNav } from '@components/header-nav';
import { MenuBar } from '@components/menu-bar';
import { Container } from '@components/container'
// import { Dashboard } from '@view/dashboard';
import { Router } from '@view/router';

export default class MainLayout extends Component {
	render() {
		const menuStyle = {
			flex: '0 0 210px',
			height: '100%',
			zIndex: 1002
		}
		return (
			<div>
				<HeaderNav />
				<div className={cssStyle.main}>
					<MenuBar style={menuStyle} />
					<Container>
						{Router}
					</Container>
				</div>
			</div>
		);
	}
}
