/**
 * @author: Michael
 * @date: 2017-07-24 16:00:41
 * @last modified by: Michael
 * @last modified time: 2017-07-24 16:00:41
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';

export const GET_MENU_LIST = 'GET_MENU_LIST';

const menuList = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pie-chart'
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pie-chart',
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard'
			}
		]
	}
]

const menuAction = createActions({
	[GET_MENU_LIST]: () => Promise.resolve(menuList)
});

const { getMenuList } = menuAction;

export default { getMenuList };
