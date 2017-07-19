/**
 * @author: Michael
 * @date: 2017-07-18 10:09:55
 * @last modified by: Michael
 * @last modified time: 2017-07-18 10:09:55
 * @gitHub: https://github.com/maxsmu
*/
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middleware from '../middleware';

/**
 * 初始化 store
 * @param {object} initialState 初始化state
 */
export default initialState => {
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(...middleware)
	);
	return store;
};
