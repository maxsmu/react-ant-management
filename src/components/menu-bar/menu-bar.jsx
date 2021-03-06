/**
 * @author: Michael
 * @date: 2017-07-19 18:03:36
 * @last modified by: Michael
 * @last modified time: 2017-07-19 18:03:36
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import cssStyle from './menu-bar.scss';

import { Link, withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
@withRouter
export default class MenuBar extends Component {
	static defaultProps = {
		menus: []
	};
	static propTypes = {
		menus: PropTypes.array.isRequired
	};
	state = {
		collapsed: false,
		selectedKeys: []
	}
	componentDidMount() {
		const { history } = this.props;

		this.setState({
			selectedKeys: [history.location.pathname],
			openKeys: getSubMenuKey(history.location.pathname)
		})

		this.listenRoute = history.listen(location => {
			this.setState({
				selectedKeys: [location.pathname],
				openKeys: getSubMenuKey(location.pathname)
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
		const { menus } = this.props;

		return (
			<Menu
				selectedKeys={this.state.selectedKeys}
				openKeys={this.state.openKeys}
				onOpenChange={openKeys => this.setState({ openKeys })}
				mode="inline"
				theme="dark"
				style={{ height: '100%', overflowY: 'auto' }}
				inlineCollapsed={this.state.collapsed}
			>
				{genSubMenuNode(menus)}
			</Menu>
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

// 获取当前页面所属的上级菜单
function getSubMenuKey(pathname) {
	const menuKeys = pathname.split('/');
	// 移除第一个 '' 元素
	menuKeys.splice(0, 1);
	// 移除最后一个元素，即当前
	menuKeys.pop();
	return menuKeys.map(name => `/${name}`);
}
