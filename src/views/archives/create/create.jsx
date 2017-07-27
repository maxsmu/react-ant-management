/**
 * @author: Michael
 * @date: 2017-07-27 10:26:59
 * @last modified by: Michael
 * @last modified time: 2017-07-27 10:26:59
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import archiveAction from '@actions/archive';

@connect(
	state => {
		const { archiveReducer } = state;
		return {
			...archiveReducer,
			isCreate: archiveReducer.isCreate
		}
	}
)
export default class ArhiveCreator extends Component {
	onCancel = () => {
		this.props.dispatch(archiveAction.create(false));
	}
	render() {
		const { isCreate } = this.props
		return (
			<Modal
				title="创建档案"
				visible={isCreate}
				onCancel={this.onCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		);
	}
}
