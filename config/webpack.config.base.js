/**
 * @author: Michael
 * @date: 2017-07-17 16:59:14
 * @last modified by: Michael
 * @last modified time: 2017-07-17 16:59:14
 * @gitHub: https://github.com/maxsmu
*/
'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const sourcePath = path.join(__dirname, '../src');
const distPath = path.join(__dirname, '../dist');

module.exports = {
	devtool: 'eval',
	entry: {
		chunk: [
			'react',
			'redux',
			'react-dom',
			'react-redux',
			'react-router',
			'redux-logger',
			'redux-promise',
			'redux-actions',
			'react-router-redux',
			'react-router-dom'
		],
		app: [sourcePath + '/index.jsx']
	},
	output: {
		path: distPath,
		filename: '[name].[hash:8].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@view': `${sourcePath}/containers/`,
			'@components': `${sourcePath}/components/`,
			'@actions': `${sourcePath}/redux/actions/`
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}
				// include: sourcePath
			},
			{
				test: /\.(sc|c)ss$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => [autoprefixer({ browsers: ['last 2 versions'] })]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							hash: 'sha512',
							digest: 'hex',
							name: '[path][name]-[hash:8].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							optimizationLevel: 7,
							interlaced: false
						}
					}]
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				query: {
					limit: 8192,
					mimetype: 'application/font-woff',
					prefix: 'fonts'
				}
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				query: {
					limit: 8192,
					mimetype: 'application/octet-stream',
					prefix: 'fonts'
				}
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				query: {
					limit: 8192,
					mimetype: 'application/vnd.ms-fontobject',
					prefix: 'fonts'
				}
			},
			{
				test: /\.(mp4|ogg)$/,
				loader: 'file-loader',
				query: {
					hash: 'sha512',
					digest: 'hex',
					name: '[path][name]-[hash:8].[ext]'
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'chunk',
			filename: 'chunk.[hash:8].js'
		}),
		new HtmlWebpackPlugin({
			template: sourcePath + '/index.html'
		}),
		new webpack.NoEmitOnErrorsPlugin()
	]
};
