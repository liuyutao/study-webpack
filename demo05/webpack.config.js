/**
 * Created by user on 16/1/2.
 */
module.exports = {
    entry: "./main.js",
    output: {
        filename: "./bundle.js"
    }
    ,
    module: {
        loaders: [
            {
                test: /\.png$/,
                loader: "url-loader"
            }
        ]
    }
};