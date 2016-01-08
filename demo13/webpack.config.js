/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/5.
 */

var webpack = require('webpack');

module.exports = {
	entry:{
		app:'./main.js',
		vendor:['jquery'],
	},
	output:{
		filename:'bundle.js'
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
	]
}