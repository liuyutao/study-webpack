/**
 * Created by user on 16/1/1.
 */
module.exports = {
    entry:"./main.jsx",
    output:{
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node-modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    }
}