/**
 * @author: Michael
 * @date: 2017-07-18 10:21:54
 * @last modified by: Michael
 * @last modified time: 2017-07-18 10:21:54
 * @gitHub: https://github.com/maxsmu
*/
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const browserHistory = createBrowserHistory()

const middleware = [routerMiddleware(browserHistory), thunkMiddleware, promiseMiddleware];

// 如果是开发环境添加 logger插件
process.env.NODE_ENV === 'development' && middleware.push(createLogger());

export default middleware;
