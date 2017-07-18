/**
 * @author: Michael
 * @date: 2017-07-18 14:22:07
 * @last modified by: Michael
 * @last modified time: 2017-07-18 14:22:07
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import * as ACTION_TYPES from './action-types';
const {

} = createActions({
		[ACTION_TYPES.PROMISE_INCREMENT]: (increment = 1) => Promise.resolve(increment)
	}, ACTION_TYPES.INCREMENT,
		ACTION_TYPES.DECREMENT);

const asyncIncrement = (value = 1) => dispatch => dispatch(increment(value));

export default { asyncIncrement, promiseIncrement, decrement };

