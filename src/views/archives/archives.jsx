/**
 * @author: Michael
 * @date: 2017-07-26 11:13:13
 * @last modified by: Michael
 * @last modified time: 2017-07-26 11:13:13
 * @gitHub: https://github.com/maxsmu
*/
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import browser from '@utils/browser.util';
import cssStyle from './archives.scss';
import { SearchFrom } from '@components/search-from';
import ArhiveCreator from './create/create';
import BatchImportor from './batch-import/batch-import';
import ArchiveTable from './table/table';
import { createArchive, batchImportArchives, getAllArchivesList } from '@actions/archive';

@connect(
	state => {
		const { archives } = state;
		return {
			...archives,
			archivesList: archives.archivesList
		}
	}
)
@browser.init('档案管理')
export default class ArchivesForm extends Component {
	static defaultProps = {
		archivesList: { data: [], pagination: { pageSize: 20, current: 1 }, isFetching: false }
	}
	componentDidMount() {
		this.props.dispatch(getAllArchivesList());
	}
	onCreateArchive = () => {
		this.props.dispatch(createArchive(true));
	}
	onBatchImport = () => {
		this.props.dispatch(batchImportArchives(true));
	}
	onSearchSubmit = () => {
		// error, value
		// console.log(error, value);
	}
	render() {
		const { archivesList } = this.props;
		const { pagination = {}, data, isFetching } = archivesList;
		const layout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 19 }
		};

		// search config
		const fields = [
			{
				name: '耳号', value: 'earmark', type: 'Input', placeholder: '请输入耳号', rules: [], layout, config: {
					initialValue: 'seg00000'
				}
			},
			{ name: '种类', value: 'variety', type: 'InputNumber', layout },
			{
				name: '类型', value: 'type', type: 'Select',
				options: [
					{ name: '男', value: 'nan' },
					{ name: '女', value: 'nv' }
				],
				layout,
				config: {
					initialValue: 'nan'
				}
			},
			{ name: '创建时间', value: 'creatDate', type: 'DatePicker', layout },
			{ name: '分娩区间', value: 'RangeDate', type: 'RangePicker', layout }
		];

		// pagination config
		const tablePagination = {
			pageSize: +pagination.pageSize,
			showSizeChanger: true,
			current: +pagination.current,
			total: +pagination.total,
			onShowSizeChange: this.onShowSizeChange,
			onChange: this.onChange
		};


		return (
			<section className={cssStyle.archiveContainer}>
				<SearchFrom fields={fields} onSearch={this.onSearchSubmit} />
				<Row className={cssStyle.handleBox}>
					<Col span={24}>
						<Button type="primary" icon="plus-circle-o" onClick={this.onCreateArchive}>创建档案</Button>
						<Button type="primary" onClick={this.onBatchImport}><i className="iconfont icon-batchimport mr8" />批量导入</Button>
					</Col>
				</Row>
				<ArchiveTable
					dataList={data}
					loading={isFetching}
					pagination={tablePagination}
				/>
				<ArhiveCreator />
				<BatchImportor />
			</section>
		);
	}
}


