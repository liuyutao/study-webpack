/**
 * Created by user on 16/1/2.
 */
    var webpack = require('webpack');
var flagPlugin = new  webpack.DefinePlugin({
    __DEV__:JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module .exports = {
    entry:"./main.js",
    output:{
        filename:"bundle.js"
    },
    plugins:[flagPlugin]
}