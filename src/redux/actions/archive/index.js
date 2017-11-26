/**
 * @author: Michael
 * @date: 2017-07-27 10:49:22
 * @last modified by: Michael
 * @last modified time: 2017-07-27 10:49:22
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { CREATE, BATCH_IMPORT, GET_ARCHIVES_LIST } from './action-types';
import { fetchArchives } from '@services/archive';
const action = createActions({}, CREATE, BATCH_IMPORT, GET_ARCHIVES_LIST);
const { create, batchImport, getArchivesList } = action;

/**
 * 创建档案
 * @param {Bool} isCreate 是否为创建状态
 */
export function createArchive(isCreate) {
	return dispacth => {
		dispacth(create({
			isCreate
		}));
	}
}
/**
 * 批量导入
 * @param {Bool} {isBatchImport} 批量导入状态
 */
export function batchImportArchives(isBatchImport) {
	return dispacth => {
		dispacth(batchImport({ isBatchImport }));
	};
}

/**
 * 获取档案列表
 */
export function getAllArchivesList() {
	return dispatch => {
		dispatch(getArchivesList({
			isFetching: true
		}));
		fetchArchives()
			.then(archiveList => {
				dispatch(getArchivesList({
					isFetching: false,
					data: archiveList.data,
					pagination: archiveList.pagination
				}));
			});
	};
}
