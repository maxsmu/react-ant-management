/**
 * @author: Michael
 * @date: 2017-07-24 16:00:41
 * @last modified by: Michael
 * @last modified time: 2017-07-24 16:00:41
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { menuList } from '@constant/menus';
export const GET_MENU_LIST = 'GET_MENU_LIST';
const menuAction = createActions({
	[GET_MENU_LIST]: () => Promise.resolve(menuList)
});

const { getMenuList } = menuAction;

export default { getMenuList };
