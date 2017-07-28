/**
 * @author: Michael
 * @date: 2017-07-28 17:05:24
 * @last modified by: Michael
 * @last modified time: 2017-07-28 17:05:24
 * @gitHub: https://github.com/maxsmu
*/
export default {
	'/monitoring': {
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
	}
}
