const path = require("path");
module.exports = {
	entry: {
		"sample/index": "./src/ts/sample/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "www"),
		filename: "[name].js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader"
			},
			{
				test: /\.(js)$/,
				loader: "babel-loader",
				exclude: "/node_modules"
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: "js/react",
					chunks: "all"
				}
			}
		}
	},
	mode: "production"
};
