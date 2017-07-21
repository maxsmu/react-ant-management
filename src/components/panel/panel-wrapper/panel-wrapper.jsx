import React, { Component } from 'react';
import cssStyles from './panel-wrapper.scss';

export default class PanelWrapper extends Component {
	render() {
		return (
			<div className={cssStyles.wrapper}>
				{this.props.children}
			</div>
		);
	}
}
