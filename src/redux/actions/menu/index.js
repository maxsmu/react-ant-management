import { createActions } from 'redux-actions';

export const QUERY_MENU_LIST = 'QUERY_MENU_LIST';

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
				path: 'q',
				name: 'Dashboard'
			}
		]
	}
]

const { queryMenuList } = createActions({
	[QUERY_MENU_LIST]: () => Promise.resolve(menuList)
});

export default { queryMenuList };

