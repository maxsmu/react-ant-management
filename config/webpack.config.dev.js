/**
 * @author: Michael
 * @date: 2017-07-17 17:14:09
 * @last modified by: Michael
 * @last modified time: 2017-07-17 17:14:09
 * @gitHub: https://github.com/maxsmu
*/
'use strict';

const webpack = require('webpack');

const baseConfig = require('./webpack.config.base');

module.exports = {
	entry: {
		chunk: baseConfig.entry.chunk,
		app: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&timeout=20000r'
		].concat(baseConfig.entry.app)
	},
	cache: true,
	devtool: 'inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"dev"'
		})
	].concat(baseConfig.plugins),
	module: baseConfig.module
}
