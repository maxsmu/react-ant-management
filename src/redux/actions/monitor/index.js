/**
 * @author: Michael
 * @date: 2017-08-04 14:10:59
 * @last modified by: Michael
 * @last modified time: 2017-08-04 14:10:59
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { get_monitor, get_sows_monitor, update_monitor_data, editor_state } from './action-types';
import { fetchMonitorState, fetchMonitor, updateMonitor } from '@services/monitor';

const { getMonitor, getSowsMonitor, updateMonitorData, editorState } = createActions({},
	get_monitor, get_sows_monitor, update_monitor_data, editor_state);

/**
 * 获取最近几天监控状态
 * @param {Number} days 天数
 */
export function getMonitorState(days = 7) {
	return dispatch => {
		dispatch(getMonitor({
			isFetching: true
		}));
		fetchMonitorState(days)
			.then(monitorState => {
				dispatch(getMonitor({
					monitorState,
					isFetching: false
				}));
			})
			.catch(e => {
				dispatch(getMonitor({
					message: e.message,
					isFetching: false
				}));
			})
	}
}

/**
 * 获取监控列表
 * @param {Object} query 查询条件
 */
export function getMonitorList(query) {
	return dispatch => {
		fetchMonitor(query)
			.then(monitorList => {
				dispatch(getSowsMonitor({
					monitorList,
					isFetching: false
				}))
			});
	}
}

/**
 * 更新监控数据
 * @param {String} id id
 * @param {String} prop 属性名称
 * @param {Object} updateData 字段数据
 */
export function updateMonitorDataAction(id, updateData) {
	return dispatch => {
		dispatch(updateMonitorData({
			id,
			updateData,
			isFetching: true
		}));
		updateMonitor(id, updateData)
			.then(update => {
				dispatch(updateMonitorData({
					id,
					updateData,
					isFetching: false,
					success: update
				}));
				dispatch(editorState({
					visible: false
				}));
			});
	};
}

/**
 *  编辑状态
 * @param {Bool} isOpen 开启、关闭
 * @param {Object} item 待编辑对象
 */
export function editorStateMintorAction(isOpen = false, item) {
	return dispatch => {
		dispatch(editorState({
			visible: isOpen,
			item
		}));
	};
}
