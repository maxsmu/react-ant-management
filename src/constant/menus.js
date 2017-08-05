/**
 * @author: Michael
 * @date: 2017-08-05 10:16:42
 * @last modified by: Michael
 * @last modified time: 2017-08-05 10:16:42
 * @gitHub: https://github.com/maxsmu
*/
// 菜单列表配置
export const menuList = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pie-chart'
	},
	{
		path: '/basic',
		name: '基础数据配置',
		icon: 'setting'
	},
	{
		path: '/monitor',
		name: '生产事务',
		icon: 'eye-o',
		children: [
			{
				path: '/monitor/breeding',
				name: '母猪监控'
			},
			{
				path: '/monitor/standby',
				name: '后备母猪管理'
			}
		]
	},
	{
		key: '2',
		path: '/archives',
		name: '档案管理',
		icon: 'idcard'
	},
	{
		key: '3',
		path: '/prevention',
		name: '动物防疫',
		iconfont: 'icon-fangyizhen',
		children: [
			{
				path: '/prevention/piglet',
				name: '仔猪防疫计划'
			}
		]
	},
	{
		key: '4',
		path: '/drug',
		name: '药品管理',
		icon: 'medicine-box'
	}
];
