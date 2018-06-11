const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const clientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
	entry: {
		app: './src/main.js'
	},
	plugins: [
		new clientPlugin()
	]
})