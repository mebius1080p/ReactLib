const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		"sample/index": "./src/ts/sample/index.tsx",
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
					{ loader: "cache-loader" },
					{
						loader: "thread-loader",
						options: {
							// there should be 1 cpu for the fork-ts-checker-webpack-plugin
							workers: require("os").cpus().length - 1,
						},
					},
					{
						loader: "ts-loader",
						options: {
							happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
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
	],
	optimization: {
		minimizer: [new TerserPlugin({ cache: true, parallel: true })],
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
