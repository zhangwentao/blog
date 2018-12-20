const path = require('path');
const src = path.resolve('src/js/index.js');
const distPath = path.resolve(__dirname,'../static');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: 'production',
    entry: src,
    output: {
        path: distPath,
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(jpeg|jpg|gif|png|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
							emitFile: true
						}
					}
				]
			}
        ]
    },
    plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].min.css"
		})
    ]
};
