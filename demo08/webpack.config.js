/**
 * Created by user on 16/1/2.
 */
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


module .exports = {
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                title:"Webpack-demo"
            }
        ),
        new OpenBrowserPlugin({
            url:"http://localhost:8080"
        })
    ]
}