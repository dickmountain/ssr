import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

import title from './mixins/title'

Vue.mixin(title)

export function createApp ()
{
	const router = createRouter()

	const app = new Vue({
		router,
		render: h => h(App)
	})

	return { app, router }
}