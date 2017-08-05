/**
 * @author: Michael
 * @date: 2017-08-04 14:19:02
 * @last modified by: Michael
 * @last modified time: 2017-08-04 14:19:02
 * @gitHub: https://github.com/maxsmu
*/
import refetch from 'refetch';

/**
 * 获取指定条件监控列表
 * @param {Object} query 查询条件
 */
export function fetchMonitor(query = {}) {
	return refetch.get('/v1/monitor', query);
}

/**
 * 获取指定天数监控状态
 * @param {Number} days 天数
 */
export function fetchMonitorState(days = 7) {
	return refetch.get('/v1/monitor/state', { days });
}
