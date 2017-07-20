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
