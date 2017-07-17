/**
 * @author: Michael
 * @date: 2017-07-17 18:05:22
 * @last modified by: Michael
 * @last modified time: 2017-07-17 18:05:22
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<Router history={history} />
			</Provider>
		);
	}
}
