/**
 * @author: Michael
 * @date: 2017-07-28 17:05:24
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:05:24
 * @gitHub: https://github.com/maxsmu
*/
module.exports = {
	'/v1/monitor': {
		get: (req, res) => {
			const { pageSize = 20, current = 1 } = req.query;
			const list = [];
			for (let i = 0; i < pageSize; i++) {
				list.push(genMonitorData(i))
			}
			return res.send({
				data: list,
				pagination: {
					current,
					pageSize,
					total: 500
				}
			});
		}
	},
	// 获取监控数据
	'/v1/monitor/state': {
		get: (req, res) => {
			res.send({
				type: ['2017-08-01', '2017-08-02', '2017-08-03', '2017-08-04', '2017-08-05', '2017-08-06', '2017-08-07'],
				listData: [
					{
						showName: '预产',
						data: [0, 2, 3, 4, 5, 36, 12]
					},
					{
						showName: '分娩',
						data: [0, 2, 3, 14, 15, 6, 12]
					},
					{
						showName: 'B超',
						data: [0, 2, 13, 4, 5, 16, 12]
					}
				]
			});
		}
	}
}
/**
 * 生成监控数据
 * @param {Number} index 索引
 */
function genMonitorData(index) {
	const month = random(12);
	const Nrandom = random(120);
	if (Nrandom < 20) {
		return genRecoverData(index, month);
	} else if (Nrandom >= 20 && Nrandom < 60) {
		return genSuccessDate(index, month);
	} else if (Nrandom >= 60 && Nrandom < 70) {
		return genInitData(index, month);
	} else {
		return genNomalDate(index, month);
	}
}

/**
 * 生成随机数组 （1-limit）
 * @param {Number} limit 上限
 */
function random(limit) {
	return Math.floor(Math.random() * limit) + 1;
}

/**
 * 生成反情数据
 * @param {Number} index 索引
 * @param {Number} month 月份
 */
function genInitData(index, month) {
	const BbreedingDate = new Date(`2017-${month}-${random(29)}`);
	return {
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: '',
		BdueDate: '',
		BdeliveryDate: '',
		Bparity: random(30),
		Bstate: 0,
		Bnumber: '',
		Bpiglets: {
			Psurvival: '',
			Pscrawny: '',
			Pmalformation: '',
			Pstillbirth: '',
			Pmummy: ''
		}
	}
}

/**
 * 生成反情数据
 * @param {Number} index 索引
 * @param {Number} month 月份
 */
function genRecoverData(index, month) {
	const BbreedingDate = new Date(`2017-${month}-${random(29)}`);
	return {
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: addDays(BbreedingDate, 8),
		BBscanDate: '',
		BdueDate: '',
		BdeliveryDate: '',
		Bparity: random(30),
		Bstate: 1,
		Bnumber: '',
		Bpiglets: {
			Psurvival: '',
			Pscrawny: '',
			Pmalformation: '',
			Pstillbirth: '',
			Pmummy: ''
		}
	}
}

/**
 * 生成完结数据
 * @param {Number} index 索引
 * @param {Number} month 月份
 */
function genSuccessDate(index, month) {
	const BbreedingDate = new Date(`2017-${month}-${random(29)}`);
	return {
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: addDays(BbreedingDate, 18),
		BdueDate: addDays(BbreedingDate, 114),
		BdeliveryDate: addDays(BbreedingDate, 115),
		Bparity: random(30),
		Bstate: 2,
		Bnumber: 12,
		Bpiglets: {
			Psurvival: 1,
			Pscrawny: 2,
			Pmalformation: 3,
			Pstillbirth: 0,
			Pmummy: 2
		}
	};
}

/**
 * 生成正常数据
 * @param {Number} index 索引
 * @param {Number} month 月份
 */
function genNomalDate(index, month) {
	const BbreedingDate = new Date(`2017-${month}-${random(29)}`);
	return {
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: addDays(BbreedingDate, 18),
		BdueDate: addDays(BbreedingDate, 114),
		BdeliveryDate: '',
		Bparity: random(30),
		Bstate: 0,
		Bnumber: '',
		Bpiglets: {
			Psurvival: '',
			Pscrawny: '',
			Pmalformation: '',
			Pstillbirth: '',
			Pmummy: ''
		}
	};
}

/**
 * 添加天数
 * @param {Date} date 时间
 * @param {Number} days 添加天数
 */
function addDays(date, days = 0) {
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate() + days;
	return new Date(year, month, day);
}
