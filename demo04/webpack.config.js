/**
 * Created by user on 16/1/2.
 */
module.exports = {
    entry:"./main",
    output:{
        filename:"bundle.js"
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        }]
    }
}