/**
 * Created by user on 15/12/31.
 */
module.exports = {
    entry:[
        './js/entry.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony']}
        ]
    }
    /*module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }*/
};