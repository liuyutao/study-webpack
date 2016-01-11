/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/8.
 */

module.exports = {
	entry:"./main.jsx",
	output:{
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.js[x]?/,
			loader:"babel-loader",
			query:{
				presets:['es2015','react']
			}
		}]
	},
	externals:{
		data:'data'
	}
};