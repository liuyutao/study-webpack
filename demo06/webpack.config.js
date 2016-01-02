/**
 * Created by user on 16/1/2.
 */
module.exports = {
    entry: "./main.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "babel-loader?presets[]=es2015&presets[]=react"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader?modules"
            }
        ]
    }
}