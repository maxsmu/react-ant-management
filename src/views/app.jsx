/**
 * @author: Michael
 * @date: 2017-07-17 18:05:22
 * @last modified by: Michael
 * @last modified time: 2017-07-17 18:05:22
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from '@layout/main-layout';
import 'normalize.css';
import '!style-loader!css-loader!antd/dist/antd.css';


export default class App extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<BrowserRouter history={history}>
					<Switch>
						<Redirect exact from="/" to="/dashboard" />
						<Route path="/" component={MainLayout} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}
