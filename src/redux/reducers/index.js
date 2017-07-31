/**
 * @author: Michael
 * @date: 2017-07-18 10:18:34
 * @last modified by: Michael
 * @last modified time: 2017-07-18 10:18:34
 * @gitHub: https://github.com/maxsmu
*/
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menuReducer from './menu.reducer';
import archiveReducer from './archive.reducer';
import monitoringReducer from './monitoring.reducer';
/**
 * combineReducers 合并Reducers
 */
const reducers = combineReducers({
	menuReducer,
	archiveReducer,
	monitoringReducer,
	routing: routerReducer
});

export default reducers;
