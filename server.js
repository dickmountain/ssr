const fs = require('fs')
const express = require('express')
const app = express()

const { createBundleRenderer } = require('vue-server-renderer')

let renderer
let devServerReady
const isProduction = process.env.NODE_ENV === 'production'
const templatePath = fs.readFileSync('./index.html', 'utf-8')

if (isProduction) {
	const bundle = require('./dist/vue-ssr-server-bundle.json')

	renderer = createBundleRenderer(bundle, {
		basedir: './dist',
		template: templatePath,
		clientManifest: require('./dist/vue-ssr-client-manifest.json')
	})
} else {
	const devServer = require('./build/server.dev')

	devServerReady = devServer(app, templatePath, (bundle, options) => {
		renderer = createBundleRenderer(bundle, options)
	})
}

app.use('/dist', express.static('./dist'))

function render (request, response) {
	const context = {
		title: 'Test',
		url: request.url
	}

	return renderer.renderToString(context, (err, html) => {
		response.send(html)
	})
}

app.get('*', (request, response) => {
	if (isProduction) {
		render(request, response)
	} else {
		devServerReady.then(() => {
			render(request, response)
		})
	}
})

app.listen(8080)
