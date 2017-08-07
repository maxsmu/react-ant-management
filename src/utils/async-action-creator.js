/**
 * @author: Michael
 * @date: 2017-08-06 11:41:39
 * @last modified by: Michael
 * @last modified time: 2017-08-06 11:41:39
 * @gitHub: https://github.com/maxsmu
*/
// import { createAction } from 'redux-actions';


// export default function asyncActionCreator({ actionName = '', url = '', method = 'get', cache = false }) {

// 	return ({ query, body, ...args } = {}) => {

// 		function start() {
// 			return {
// 				type: actionName,
// 				data: {
// 					query,
// 					body,
// 					isFetching: true
// 				}
// 			};
// 		}

// 		function fail() {
// 			return {
// 				type: `${actionName}-fail`,
// 				data: {
// 					isFetching: false
// 				}
// 			};
// 		}

// 		function success(data) {
// 			let result;

// 			if (Array.isArray(data)) {
// 				result = {
// 					data,
// 					isFetching: false
// 				};
// 			} else {
// 				result = {
// 					...data,
// 					isFetching: false
// 				};
// 			}

// 			return {
// 				type: `${actionName}-success`,
// 				data: result
// 			};
// 		}
// 		return dispatch => {
// 			let realUrl = url;

// 			dispatch(start());

// 			Object.keys(args).forEach(key => {
// 				realUrl = url.replace(new RegExp(':' + key + '\\b'), args[key]);
// 			});

// 			const f = fetchie[method](realUrl);

// 			if (query || defaultQuery) {
// 				f.query({
// 					...query,
// 					...defaultQuery
// 				});
// 			}

// 			if (send || defaultSend) {
// 				f.send({
// 					...send,
// 					...defaultSend
// 				});
// 			}

// 			if (cache) f.cache();

// 			return f.handleError(() => {
// 				dispatch(fail());
// 			}).then(res => {
// 				dispatch(success(res));
// 			});
// 		};
// 	}

// }
