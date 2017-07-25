/**
 * @author: Michael
 * @date: 2017-07-24 16:00:41
 * @last modified by: Michael
 * @last modified time: 2017-07-24 16:00:41
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';

export const GET_MENU_LIST = 'GET_MENU_LIST';

// 菜单配置
const menuList = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pie-chart',
		key: '1'
	},
	{
		key: '2',
		path: '/archives',
		name: '档案管理',
		icon: 'idcard',
		children: [
			{
				key: '2.1',
				path: '/dashboard',
				name: 'Dashboard'
			},
			{
				key: '2.2',
				path: '/dashboard',
				name: 'Dashboard'
			},
			{
				key: '2.3',
				path: '/dashboard',
				name: 'Dashboard'
			}
		]
	},
	{
		key: '3',
		path: '/dashboard',
		name: '动物防疫',
		iconfont: 'icon-fangyizhen'
	},
	{
		key: '4',
		path: '/dashboard',
		name: '药品录入',
		icon: 'medicine-box'
	}
]

const menuAction = createActions({
	[GET_MENU_LIST]: () => Promise.resolve(menuList)
});

const { getMenuList } = menuAction;

export default { getMenuList };
