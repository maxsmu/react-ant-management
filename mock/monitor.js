/**
 * @author: Michael
 * @date: 2017-07-28 17:05:24
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:05:24
 * @gitHub: https://github.com/maxsmu
*/
const Utils = require('./utils');
const mointorList = [];
module.exports = {
	'/v1/monitor': {
		get: (req, res) => {
			mointorList.splice(0, mointorList.length);
			const { pageSize = 20, current = 1 } = req.query;
			for (let i = 0; i < pageSize; i++) {
				mointorList.push(genMonitorData(i))
			}
			return res.send({
				data: mointorList,
				pagination: {
					current,
					pageSize,
					total: 500
				}
			});
		}
	},
	'/v1/monitor/:id': {
		put: (req, res) => {
			const updateObj = req.body;
			const currentUpdateObj = mointorList.find(item => item.id === req.params.id);
			if (updateObj.prop === 'Bstate' && +updateObj.value === 1) {
				currentUpdateObj.Bstate = 2;
				currentUpdateObj.BBscanDate = Utils.addDays(currentUpdateObj.BbreedingDate, 18);
				currentUpdateObj.BdueDate = Utils.addDays(currentUpdateObj.BbreedingDate, 114);
			}
			res.send(currentUpdateObj);
		}
	},
	// 获取监控数据
	'/v1/monitor/state': {
		get: (req, res) => {
			// setTimeout(() => {
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
			// }, 10000);
		}
	}
}
/**
 * 生成监控数据
 * @param {Number} index 索引
 */
function genMonitorData(index) {
	const month = Utils.random(12);
	const Nrandom = Utils.random(120);
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
 * 生成反情数据
 * @param {Number} index 索引
 * @param {Number} month 月份
 */
function genInitData(index, month) {
	const BbreedingDate = new Date(`2017-${month}-${Utils.random(29)}`);
	return {
		id: '030303' + index,
		Pno: '699-001' + index,
		Btype: '' + Utils.random([0, 2]), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: '',
		BdueDate: '',
		BdeliveryDate: '',
		Bparity: Utils.random(30),
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
	const BbreedingDate = new Date(`2017-${month}-${Utils.random(29)}`);
	return {
		id: '030303' + index,
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: Utils.addDays(BbreedingDate, 8),
		BBscanDate: '',
		BdueDate: '',
		BdeliveryDate: '',
		Bparity: Utils.random(30),
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
	const BbreedingDate = new Date(`2017-${month}-${Utils.random(29)}`);
	return {
		id: '030303' + index,
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: Utils.addDays(BbreedingDate, 18),
		BdueDate: Utils.addDays(BbreedingDate, 114),
		BdeliveryDate: Utils.addDays(BbreedingDate, 115),
		Bparity: Utils.random(30),
		Bstate: 3,
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
	const BbreedingDate = new Date(`2017-${month}-${Utils.random(29)}`);
	return {
		id: '030303' + index,
		Pno: '699-001' + index,
		Btype: '' + Math.floor(Math.random() * 2), // 0 -自然 1 -人工
		BbreedingDate,
		BrecoverDate: '',
		BBscanDate: Utils.addDays(BbreedingDate, 18),
		BdueDate: Utils.addDays(BbreedingDate, 114),
		BdeliveryDate: '',
		Bparity: Utils.random(30),
		Bstate: 2,
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
