/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/5.
 */
var load = require('bundle-loader!./a.js');
load(function (file) {
	document.open();
	document.write('<h1>' + file +'</h1>');
	document.close();
})