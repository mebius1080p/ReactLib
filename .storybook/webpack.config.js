const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (baseConfig, env, config) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{ loader: "cache-loader" },
			{
				loader: "thread-loader",
				options: {
					// there should be 1 cpu for the fork-ts-checker-webpack-plugin
					workers: require("os").cpus().length - 1
				}
			},
			{
				loader: "ts-loader",
				options: {
					happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
				}
			},
			{
				loader: "react-docgen-typescript-loader"
			}
		]
	});
	config.resolve.extensions.push(".ts", ".tsx");
	config.plugins.push(
		new ForkTsCheckerWebpackPlugin({
			checkSyntacticErrors: true,
			workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE
		})
	);
	config.optimization.minimizer.push(
		new TerserPlugin({ cache: true, parallel: true })
	);
	return config;
};