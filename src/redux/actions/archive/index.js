/**
 * @author: Michael
 * @date: 2017-07-27 10:49:22
 * @last modified by: Michael
 * @last modified time: 2017-07-27 10:49:22
 * @gitHub: https://github.com/maxsmu
*/
import { createActions } from 'redux-actions';
import { CREATE, BATCH_IMPORT } from './action-types';

const archiveAction = createActions({
	// 创建 状态
	[CREATE]: isCreate => Promise.resolve(isCreate),
	// 批量导入 状态
	[BATCH_IMPORT]: isBatchImport => Promise.resolve(isBatchImport)
});

const { create, batchImport } = archiveAction;

export default { create, batchImport };
