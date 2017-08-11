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
	/**
	 *  获取监控列表
	 * @param {*} state
	 * @param {*} action
	 */
	[get_sows_monitor](state, action) {
		// monitorList:监控列表数据
		const { monitorList } = action.payload;
		return {
			...state,
			monitorList: {
				data: monitorList.data,
				pagination: monitorList.pagination,
				isFetching: action.payload.isFetching
			}
		};
	},

	/**
	 * 获取监控状态
	 * @param {*} state
	 * @param {*} action
	 */
	[get_monitor](state, action) {
		// monitorState:监控状态
		return {
			...state,
			monitorState: {
				...action.payload.monitorState,
				isFetching: action.payload.isFetching
			}
		};
	},

	/**
	 * 更新监控数据
	 * @param {*} state
	 * @param {*} action
	 */
	[update_monitor_data](state, action) {
		let monitorList = state.monitorList.data;
		// 获取更新数据
		const { success, isFetching } = action.payload;
		// 若修改成功后则更新数据
		if (!isFetching) {
			monitorList = updatList(success, monitorList);
		}
		return {
			...state,
			updateMonitor: action.payload,
			monitorList: {
				data: monitorList,
				pagination: state.monitorList.pagination,
				isFetching: false
			}
		};
	},

	/**
	 * 编辑状态
	 * @param {*} state
	 * @param {*} action
	 */
	[editor_state](state, action) {
		const { visible, item = {} } = action.payload;
		return {
			...state,
			editorState: {
				visible,
				item
			}
		}
	}
}, {});

/**
 * 更新修改数据
 * @param {Object} success 修改成功后返回对象
 * @param {*} list 列表
 * @return {Array} monitorList
 */
function updatList(success, list = []) {
	const currentIndex = list.findIndex(item => item.id === success.id);
	if (currentIndex >= 0) {
		list[currentIndex] = success;
	}
	return list;
}

export default reducer;
