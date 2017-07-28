/**
 * @author: Michael
 * @date: 2017-07-19 15:50:12
 * @last modified by: Michael
 * @last modified time: 2017-07-19 15:50:12
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';

import cssStyle from './main-layout.scss';
import { HeaderNav } from '@components/header-nav';
import { MenuBar } from '@components/menu-bar';
// import { Container } from '@components/container';
import { Router } from '@view/router';
import menuAction from '@actions/menu';
const { Content, Header, Sider } = Layout;

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
	state = { collapsed: false };
	componentDidMount() {
		this.props.getMenuList();
	}
	/**
	 * 收起/展开菜单
	 */
	onCollapse = () => {
		this.setState({ collapsed: !this.state.collapsed });
	}
	render() {
		const { menus } = this.props;
		return (
			<Layout style={{ height: '100vh' }}>
				<Sider
					collapsible
					trigger={null}
					collapsed={this.state.collapsed}
					style={{ marginTop: 60 }}
				>
					<MenuBar menus={menus} />
				</Sider>

				<Layout>
					<Header style={{ padding: 0, height: 60 }}>
						<HeaderNav onCollapse={this.onCollapse} />
					</Header>
					<Content className={cssStyle.mainContent}>
						<Breadcrumb style={{ margin: '15px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						{Router}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
