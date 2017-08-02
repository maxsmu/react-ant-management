/**
 * @author: Michael
 * @date: 2017-08-01 16:23:50
 * @last modified by: Michael
 * @last modified time: 2017-08-01 16:23:50
 * @gitHub: https://github.com/maxsmu
*/
const filterArray = [
	'title',
	'toolbox',
	'tooltip',
	'legend',
	'grid',
	'color',
	'xAxis',
	'yAxis',
	'series',
	'calendar'
];
/**
 * 生成echart配置
 * @param {Object} props
 */
export function filterMap(props) {
	const option = {};
	filterArray.forEach(key => {
		if (props[key] !== undefined) {
			option[key] = props[key];
		}
	});
	return option;
}
