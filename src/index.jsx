/**
 * @author: Michael
 * @date: 2017-07-17 16:20:46
 * @last modified by: Michael
 * @last modified time: 2017-07-17 16:20:46
 * @gitHub: https://github.com/maxsmu
*/
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '@view/app';
import initConfigStore from './redux/stores';

const store = initConfigStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

// 利用立即执行函数
(function renderApp() {
	render(
		<App store={store} history={history} />,
		document.getElementById('root')
	);
})();
