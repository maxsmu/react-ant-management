/**
 * @author: Michael
 * @date: 2017-07-18 10:18:34
 * @last modified by: Michael
 * @last modified time: 2017-07-18 10:18:34
 * @gitHub: https://github.com/maxsmu
*/
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menus from './menus.reducer';
import archives from './archives.reducer';
import monitor from './monitor.reducer';
/**
 * combineReducers 合并Reducers
 */
const reducers = combineReducers({
	menus,
	archives,
	monitor,
	routing: routerReducer
});

export default reducers;
