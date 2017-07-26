/**
 * @author: Michael
 * @date: 2017-07-26 12:56:55
 * @last modified by: Michael
 * @last modified time: 2017-07-26 12:56:55
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import cssStyle from './container.scss';

export default class Container extends Component {
	render() {
		return (
			<div className={cssStyle.container}>
				{this.props.children}
			</div>
		);
	}
}
