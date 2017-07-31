/**
 * @author: Michael
 * @date: 2017-07-28 17:20:07
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:20:07
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { GET_MONITORINGS, GET_SOWS_MONITORINGS } from './action-types';
import refetch from 'refetch';

const monitoringAction = createActions({
	// 获取生产母猪列表
	[GET_SOWS_MONITORINGS]: fetchMonitoringList(),
	// 获取近几日母猪监控列表
	[GET_MONITORINGS]: getSowsMonitoring()
});

const { getMonitorings, getSowsMonitorings } = monitoringAction;

export default { getMonitorings, getSowsMonitorings };

/**
 * 获取生产监控列表
 * @param {object} query 查询条件
 */
function fetchMonitoringList(query = {}) {
	return () => {
		return refetch.get('/v1/monitoring', query);
	}
}

/**
 * 获取近 days 天的母猪监控数据
 * @param {Number} days 天数
 */
function getSowsMonitoring(days = 7) {
	return () => {
		return refetch.get('/v1/breeding/state', { days });
	}
}
