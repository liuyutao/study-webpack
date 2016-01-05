/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/5.
 */
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
	entry:{
		bundle1:'./main1.jsx',
		bundle2:'./main2.jsx'
	},
	output:{
	  	filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel-loader?presets[]=es2015&presets[]=react'
			}
		]
	},
	plugins:[
		new CommonsChunkPlugin('init.js')
	]
}