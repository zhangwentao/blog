const path = require('path');
const src = path.resolve('src/js/index.js');
const distDir = path.resolve('../static/js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: src,
    output: {
        path: distDir,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};