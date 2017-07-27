/**
 * @author: Michael
 * @date: 2017-07-27 17:25:49
 * @last modified by: Michael
 * @last modified time: 2017-07-27 17:25:49
 * @gitHub: https://github.com/maxsmu
*/
const browser = {
	/**
	 * 初始化页面
	 * @param {string} title title 名称
	 */
	init(title) {
		return target => {
			// 获取已经配置的componentDidMount
			const oldDidMount = target.prototype.componentDidMount;
			target.prototype.componentDidMount = function() {
				browser.setTitle(title)
				oldDidMount && oldDidMount.call(this);
			}
		};
	},
	/**
	 * 设置页面title
	 * @param {string} title
	 */
	setTitle(title) {
		document.title = title;
	}
}

export default browser;
