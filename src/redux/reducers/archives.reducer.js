/**
 * @author: Michael
 * @date: 2017-07-27 11:08:51
 * @last modified by: Michael
 * @last modified time: 2017-07-27 11:08:51
 * @gitHub: https://github.com/maxsmu
*/
import { handleActions } from 'redux-actions';

import { CREATE, BATCH_IMPORT, GET_ARCHIVES_LIST } from '@actions/archive/action-types';

const reducer = handleActions({
	[CREATE](state, action) {
		return { ...state, isCreate: action.payload };
	},
	[BATCH_IMPORT](state, action) {
		return { ...state, isBatchImport: action.payload }
	},
	/**
	 * 获取档案列表
	 * @param {Object} state
	 * @param {Object} action
	 */
	[GET_ARCHIVES_LIST](state, action) {
		return { ...state, archivesList: { ...action.payload } };
	}
}, {});

export default reducer;
