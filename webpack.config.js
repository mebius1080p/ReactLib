const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
	entry: {
		"sample/index": "./src/ts/sample/index.tsx",
		"sample/detail": "./src/ts/sample/detail.tsx",
	},
	output: {
		path: path.resolve(__dirname, "www"),
		filename: "[name].js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "esbuild-loader",
						options: {
							loader: "tsx",
							target: "es2016",
						},
					},
				],
			},
			{
				test: /\.(js)$/,
				loader: "babel-loader",
				exclude: "/node_modules",
				options: {
					cacheDirectory: true,
				},
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticsOptions: {
					syntactic: true,
				},
			},
		}),
		new ESBuildPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new ESBuildMinifyPlugin({ target: "es2016" })],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: "js/react",
					chunks: "all",
				},
			},
		},
	},
	devServer: {
		contentBase: path.join(__dirname, "www"),
		progress: true,
		historyApiFallback: true,
	},
	// mode: "development",
	mode: "production",
};
