var merge = require("webpack-merge");
var common = require("./webpack.common.js");
var path = require("path");

module.exports = merge(common, {
	mode: "development",
	//devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							data: `@import "~bootstrap/scss/bootstrap-grid.scss";`
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false
	}
});
