/**
 * @author: Michael
 * @date: 2017-08-04 14:10:59
 * @last modified by: Michael
 * @last modified time: 2017-08-04 14:10:59
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { get_monitor, get_sows_monitor } from './action-types';
import { fetchMonitorState, fetchMonitor } from '@services/monitor';

const { getMonitor, getSowsMonitor } = createActions({}, get_monitor, get_sows_monitor);

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
