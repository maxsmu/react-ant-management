/**
 * @author: Michael
 * @date: 2017-07-27 15:51:16
 * @last modified by: Michael
 * @last modified time: 2017-07-27 15:51:16
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import archiveAction from '@actions/archive';

@connect(
	state => {
		const { archiveReducer } = state;
		return {
			...archiveReducer,
			isBatchImport: archiveReducer.isBatchImport
		}
	}
)
export default class BatchImportor extends Component {
	onCancel = () => {
		this.props.dispatch(archiveAction.batchImport(false));
	}
	render() {
		const { isBatchImport } = this.props;
		return (
			<Modal
				title="批量导入"
				visible={isBatchImport}
				onCancel={this.onCancel}
			>
				模板<Button type="primary" shape="circle" icon="download" />
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		);
	}
}
