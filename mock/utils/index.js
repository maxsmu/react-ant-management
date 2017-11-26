module.exports = {
	/**
 	* 添加天数
 	* @param {Date} date 时间
 	* @param {Number} days 添加天数
 	*/
	addDays(date, days = 0) {
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate() + days;
		return new Date(year, month, day);
	},
	/**
	 * 生成区间随机值
	 * @param {Array/Number} limit 区间
	 */
	random(limit) {
		let min = 1;
		let max = limit;
		if (Array.isArray(limit)) {
			min = limit[0];
			max = limit[1];
		}
		return Math.floor(Math.random() * max) + min;
	}
};
