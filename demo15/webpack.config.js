/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/8.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry:[
		'webpack/hot/dev_server',
		'webpack-dev-server/client?http://localhost:8080',
		'./index.js'
	],
	output:{
		filename:'bundle.js',
		publicPath:'/static/'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		loaders:[{
			test:/\.jsx?$/,
			loader:'babel-loader',
			query:{
				presets:['es2015','react']
			},
			include:path.join(__dirname,'.')
		}]
	}
}