const merge = require('webpack-merge')
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
		new serverPlugin()
	]
})