/**
 * @author: Michael
 * @date: 2017-07-28 17:35:05
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:35:05
 * @gitHub: https://github.com/maxsmu
*/
import { handleActions } from 'redux-actions';
import {
	get_monitor,
	get_sows_monitor,
	update_monitor_data,
	editor_state
} from '@actions/monitor/action-types';

const reducer = handleActions({
	[get_sows_monitor](state, action) {
		return { ...state, ...action.payload };
	},
	[get_monitor](state, action) {
		return { ...state, ...action.payload };
	},
	[update_monitor_data](state, action) {
		return { ...state, updateMonitor: action.payload };
	},
	[editor_state](state, action) {
		return { ...state, editorState: action.payload }
	}
}, {});

export default reducer;
