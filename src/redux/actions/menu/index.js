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
		icon: 'pie-chart'
	},
	{
		path: '/basic',
		name: '基础数据配置',
		icon: 'setting'
	},
	{
		path: '/monitoring',
		name: '生产事务',
		icon: 'eye-o',
		children: [
			{
				path: '/monitoring/breeding',
				name: '母猪监控'
			},
			{
				path: '/monitoring/standby',
				name: '后备母猪管理'
			}
		]
	},
	{
		key: '2',
		path: '/archives',
		name: '档案管理',
		icon: 'idcard'
	},
	{
		key: '3',
		path: '/prevention',
		name: '动物防疫',
		iconfont: 'icon-fangyizhen',
		children: [
			{
				path: '/prevention/piglet',
				name: '仔猪防疫计划'
			}
		]
	},
	{
		key: '4',
		path: '/drug',
		name: '药品管理',
		icon: 'medicine-box'
	}
]

const menuAction = createActions({
	[GET_MENU_LIST]: () => Promise.resolve(menuList)
});

const { getMenuList } = menuAction;

export default { getMenuList };
