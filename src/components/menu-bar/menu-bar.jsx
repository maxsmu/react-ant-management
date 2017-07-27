/**
 * @author: Michael
 * @date: 2017-07-19 18:03:36
 * @last modified by: Michael
 * @last modified time: 2017-07-19 18:03:36
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import cssStyle from './menu-bar.scss';

import { Link, withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
@withRouter
export default class MenuBar extends Component {
	state = {
		collapsed: false,
		selectedKeys: []
	}
	componentDidMount() {
		const { history } = this.props
		// console.log(history.location.pathname);
		this.setState({
			selectedKeys: [history.location.pathname]
			// ,
			// openKeys: [getSubMenuKey(history.location.pathname)]
		})

		this.listenRoute = history.listen(location => {
			this.setState({
				selectedKeys: [location.pathname]
				// ,
				// openKeys: [getSubMenuKey(location.pathname)]
			})
		})
	}

	/**
	 * 点击收起按钮触发时间
	 */
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		const { menus = [] } = this.props;
		// menuList,
		let boxStyle = {}

		// 接受父类组件设置的样式，存在则使用
		if (this.props.style) {
			boxStyle = {
				...this.props.style,
				flex: this.state.collapsed ? '0 0 60px' : '0 0 210px'
			}
		}

		return (
			<div style={boxStyle} >
				<Button
					ghost
					onClick={this.toggleCollapsed}
					className={cssStyle.sidebarToggleBtn}
					type="primary"
				>
					<Icon
						type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
						style={{ color: '#797979' }}
					/>
				</Button>
				<Menu
					selectedKeys={this.state.selectedKeys}
					mode="inline"
					theme="dark"
					style={{ height: '100%', overflowY: 'scroll' }}
					inlineCollapsed={this.state.collapsed}
				>
					{genSubMenuNode(menus)}
				</Menu>
			</div>
		);
	}
}

/**
 * 生成菜单
 * @param {Array} subMenusList 菜单列表
 */
function genSubMenuNode(subMenusList = []) {
	return subMenusList.map(sub => {
		// 是否存在子菜单
		const isHasChildren = Array.isArray(sub.children) && sub.children.length > 0;
		// icon组件
		let icon;

		// 根据是否存在子类分类处理
		if (isHasChildren) {
			// 若存在iconfont 则使用（但优先级低于icon）
			if (sub.iconfont) {
				icon = <i className={`iconfont ${sub.iconfont} ${cssStyle.iconfont}`} />
			}

			// 若存在icon 则使用（但优先级高于iconfont）
			if (sub.icon) {
				icon = <Icon type={sub.icon} />
			}

			// 菜单Title
			const title = <span>{icon}<span>{sub.name}</span></span>;

			return (
				<SubMenu key={sub.path} title={title}>
					{genSubMenuNode(sub.children)}
				</SubMenu>
			);
		} else {
			// 若存在iconfont 则使用（但优先级低于icon）
			if (sub.iconfont) {
				icon = <i className={`iconfont ${sub.iconfont} ${cssStyle.iconfont}`} />
			}

			// 若存在icon 则使用（但优先级高于iconfont）
			if (sub.icon) {
				icon = <Icon type={sub.icon} />
			}
			return (
				<Menu.Item key={sub.path}>
					<Link to={sub.path}>
						{icon}
						<span>{sub.name}</span>
					</Link>
				</Menu.Item>
			);
		}
	});
}

// // 获取当前页面所属的上级菜单
// function getSubMenuKey(pathname) {
// 	return pathname.indexOf('business') > -1 ? 'business' : ''
// }
