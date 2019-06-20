var merge = require("webpack-merge");
var common = require("./webpack.common.js");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var PurgecssPlugin = require("purgecss-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var TerserJSPlugin = require("terser-webpack-plugin");
var glob = require("glob-all");
var path = require("path");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		splitChunks: {
			chunks: "all"
		},
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [
						"default",
						{ discardComments: { removeAll: true } }
					]
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [require("autoprefixer")()]
						}
					},
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
	plugins: [
		new MiniCssExtractPlugin(),
		new PurgecssPlugin({
			paths: glob.sync([
				path.join(__dirname, "/src/**/*.vue"),
				path.join(__dirname, "/src/**/*.js"),
				path.join(__dirname, "/src/**/*.pug")
			])
		}),
		new CleanWebpackPlugin()
	]
});
