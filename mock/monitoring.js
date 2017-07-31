/**
 * @author: Michael
 * @date: 2017-07-28 17:05:24
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:05:24
 * @gitHub: https://github.com/maxsmu
*/
module.exports = {
	'/v1/monitoring': {
		get: (req, res) => {
			const list = [
				{
					id: '1',
					earmark: 'John Brown',
					variety: 32,
					state: '12',
					parity: 2,
					matingDate: '2017-07-28',
					recoverDate: '2017-07-28',
					BScanDate: '2017-07-28',
					dueDate: '2017-07-28',
					deliveryDate: '2017-07-28',
					remark: '这就是一个备注信息'
				},
				{
					id: '2',
					earmark: 'John Brown',
					variety: 32,
					state: '12',
					parity: 12,
					matingDate: '2017-07-28',
					recoverDate: '2017-07-28',
					BScanDate: '2017-07-28',
					dueDate: '2017-07-28',
					deliveryDate: '2017-07-28',
					remark: '这就是一个备注信息'
				}
			];

			return res.send(list);
		}
	},
	// 获取监控数据
	'/v1/breeding/state': {
		get: (req, res) => {
			res.send([
				{
					showName: '预产',
					date: '2017-07-31',
					data: [0, 2, 3, 4, 5, 36, 12]
				},
				{
					showName: '分娩',
					date: '2017-08-01',
					data: [0, 2, 3, 14, 15, 6, 12]
				},
				{
					showName: 'B超',
					date: '2017-08-02',
					data: [0, 2, 13, 4, 5, 16, 12]
				}
			]);
		}
	}
}
