/**
 * @author: Michael
 * @date: 2017-08-12 11:07:21
 * @last modified by: Michael
 * @last modified time: 2017-08-12 11:07:21
 * @gitHub: https://github.com/maxsmu
*/
import refetch from 'refetch';

/**
 * 获取档案
 * @param {Object} query 查询条件
 */
export function fetchArchives(query) {
	return refetch.get('v1/archives', query)
}
