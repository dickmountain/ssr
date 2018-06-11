const fs = require('fs')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const app = express()

const bundle = require('./dist/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, {
	basedir: './dist',
	template: fs.readFileSync('./index.html', 'utf-8'),
	clientManifest: require('./dist/vue-ssr-client-manifest.json')
})

app.use('/dist', express.static('./dist'))

app.get('*', (request, response) => {
	renderer.renderToString({
		url: request.url
	}, (err, html) => {
		response.send(html)
	})
})

app.listen(8080)
