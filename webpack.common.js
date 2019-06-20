var path = require("path");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/main.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
		//publicPath: path.resolve(__dirname, "dist")
	},

	// resolve: {
	// 	modules: ["node_modules", process.env.NODE_PATH]
	// },
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.pug$/,
				oneOf: [
					{
						include: [path.resolve(__dirname, "src/pug")],
						use: ["pug-loader"]
					},
					{
						exclude: [path.resolve(__dirname, "src/pug")],
						use: ["pug-plain-loader"]
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images"
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "fonts"
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/pug/index.pug"
		})
	]
};
