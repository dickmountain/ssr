const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const clientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
	entry: {
		app: './src/main.js'
	},
	plugins: [
		new clientPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.VUE_ENV': "'client'"
		})
	]
})