/**
 * Created by user on 16/1/2.
 */
var webpack = require('webpack');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry:"./main.js",
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new uglifyPlugin({
            compress:{
                warnings:false
            }
        })
    ]
}