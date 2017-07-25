/**
 * @author: Michael
 * @date: 2017-07-19 15:50:12
 * @last modified by: Michael
 * @last modified time: 2017-07-19 15:50:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';

import cssStyle from './main-layout.scss';
import { HeaderNav } from '@components/header-nav';
import { MenuBar } from '@components/menu-bar';
import { Container } from '@components/container'
import { Router } from '@view/router';
import menuAction from '@actions/menu';

@connect(
	// mapStateToProps
	state => {
		return {
			menus: state.menuReducer.menus
		};
	},
	// mapDispatchToProps
	{
		getMenuList: menuAction.getMenuList
	})
export default class MainLayout extends Component {
	componentDidMount() {
		this.props.getMenuList();
	}
	render() {
		const { menus } = this.props;

		const menuStyle = {
			flex: '0 0 210px',
			height: '100%',
			zIndex: 1002
		}
		return (
			<div>
				<HeaderNav />
				<div className={cssStyle.main}>
					<MenuBar menus={menus} style={menuStyle} />
					<Container>
						{Router}
					</Container>
				</div>
			</div>
		);
	}
}
