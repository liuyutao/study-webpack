/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2016/1/5.
 */

require.ensure(['./a'], function (require) {
	var content = require('./a');
	document.open();
	document.write('<h1>' + content +'</h1>');
	document.close();
})