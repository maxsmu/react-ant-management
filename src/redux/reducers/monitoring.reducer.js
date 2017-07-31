/**
 * @author: Michael
 * @date: 2017-07-28 17:35:05
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:35:05
 * @gitHub: https://github.com/maxsmu
*/
import { handleActions } from 'redux-actions';

import { GET_MONITORINGS, GET_SOWS_MONITORINGS } from '@actions/monitoring/action-types';

const reducer = handleActions({
	[GET_SOWS_MONITORINGS](state, action) {
		return { ...state, list: action.payload };
	},
	[GET_MONITORINGS](state, action) {
		return { ...state, monitoringData: action.payload };
	}
}, {});

export default reducer;
