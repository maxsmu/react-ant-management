/**
 * @author: Michael
 * @date: 2017-08-12 10:05:22
 * @last modified by: Michael
 * @last modified time: 2017-08-12 10:05:22
 * @gitHub: https://github.com/maxsmu
*/
const Utils = require('./utils');
const archivesList = [];
// 猪舍列表
const houseList = (function() {
	const list = [];
	for (let index = 0; index < 10; index++) {
		list.push({
			Hno: 'H-0001' + index,
			Hcapacity: 6,
			Hlocation: '中仓',
			Htemperature: [17, 21], // ℃
			Hhumidity: [40, 50], // 40% - 50%
			Helectric: 1 // KW·h （千瓦时）
		});
	}
	return list;
})();
// 品种列表
const breedList = [
	{
		Bno: '0001',
		Bname: '长白猪',
		Bstate: 1
	},
	{
		Bno: '0002',
		Bname: '杜洛克猪',
		Bstate: 1
	},
	{
		Bno: '0003',
		Bname: '大白猪',
		Bstate: 1
	},
	{
		Bno: '0004',
		Bname: '皮特兰猪',
		Bstate: 1
	}
];
module.exports = {
	'/v1/archives': {
		get: (req, res) => {
			archivesList.splice(0, archivesList.length);
			const { pageSize = 20, current = 1 } = req.query;
			for (let i = 0; i < pageSize; i++) {
				archivesList.push(genBoarSowPig(i));
			}
			return res.send({
				data: archivesList,
				pagination: {
					current,
					pageSize,
					total: 500
				}
			});
		}
	}
}
/**
 * 生成猪档案信息
 * @param {Number} index 索引
 */
function genBoarSowPig(index) {
	// 随机生成品种
	const breed = breedList[Utils.random([0, 3])];
	// 随机生成住宿信息
	const house = houseList[Utils.random([0, 9])];

	// 随机生成饲养天数
	const days = Utils.random(300);
	// 根据饲养天数生成饲养周期
	const cycle = Math.ceil(days / 7);
	return {
		id: `88740011` + index,
		Pno: `699-0011` + index,
		Hno: house.Hno,
		Pweight: 89,
		Pcycle: cycle,
		Pday: days,
		Bname: breed.Bname,
		Bno: breed.Bno,
		Pcreated: new Date(-days),
		Psex: Utils.random(2),
		Pstate: 1,
		Pfatherno: '',
		Pmotherno: '',
		Ono: 'admin',
		PdeathCause: ''
	};
}
