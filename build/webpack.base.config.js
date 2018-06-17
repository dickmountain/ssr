const path = require('path')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

let plugins
if (isProduction) {
	plugins = [
		new webpack.optimize.UglifyJsPlugin(),
		new extractTextPlugin({
			filename: '[name].css'
		})
	]
}

let moduleRulesScssUse;
let use = [ 'css-loader', 'sass-loader' ];
if (isProduction) {
	moduleRulesScssUse = extractTextPlugin.extract({
		fallback: 'vue-style-loader',
		use: use
	})
}else{
	moduleRulesScssUse = use
}

module.exports = {
  output: {
	path: path.resolve(__dirname, '../dist'),
	publicPath: '/dist/',
	filename: 'build.js'
  },
  module: {
	rules: [
	  {
		test: /\.scss$/,
		use: moduleRulesScssUse
	  },
	  {
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
		  extractCSS: isProduction,
		  loaders: {
			'scss': [
			  'vue-style-loader',
			  'css-loader',
			  'sass-loader'
			]
		  }
		}
	  },
	  {
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	  },
	  {
		test: /\.(png|jpg|gif|svg)$/,
		loader: 'url-loader',
		options: {
		  name: '[name].[ext]?[hash]'
		}
	  }
	]
  },
  resolve: {
	alias: {
	  'vue$': 'vue/dist/vue.esm.js'
	},
	extensions: ['*', '.js', '.vue', '.json']
  },
  plugins:plugins
}
