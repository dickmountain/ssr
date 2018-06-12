const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const serverPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
	target: 'node',
	entry: {
		app: './src/main.server.js'
	},
	output: {
		libraryTarget: 'commonjs2',
	},
	externals: nodeExternals(),
	plugins: [
		new serverPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.VUE_ENV': "'server'"
		})
	]
})