/**
 * @author: Michael
 * @date: 2017-07-19 18:03:36
 * @last modified by: Michael
 * @last modified time: 2017-07-19 18:03:36
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import style from './menu-bar.scss';
const SubMenu = Menu.SubMenu;

export default class MenuBar extends Component {
	state = {
		collapsed: false
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		let boxStyle = {}
		if (this.props.style) {
			boxStyle = {
				...this.props.style,
				width: this.state.collapsed ? 60 : 210
			}
		}
		return (
			<div style={boxStyle} >
				<Button className={style.sidebarToggleBtn} ghost type="primary" onClick={this.toggleCollapsed}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					style={{ height: '100%' }}
					inlineCollapsed={this.state.collapsed}
				>
					<Menu.Item key="1">
						<Icon type="pie-chart" />
						<span>Option 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="desktop" />
						<span>Option 2</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="inbox" />
						<span>Option 3</span>
					</Menu.Item>
					<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}
