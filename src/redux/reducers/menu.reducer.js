/**
 * @author: Michael
 * @date: 2017-07-24 15:18:48
 * @last modified by: Michael
 * @last modified time: 2017-07-24 15:18:48
 * @gitHub: https://github.com/maxsmu
*/
import { handleActions } from 'redux-actions';

import { GET_MENU_LIST } from '@actions/menu';

const reducer = handleActions({
	[GET_MENU_LIST](state, action) {
		return { ...state, menus: action.payload };
	}
}, {});

export default reducer;
