import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

import title from './mixins/title'

Vue.mixin(title)

export function createApp ()
{
	const router = createRouter()
	const store = createStore()

	const app = new Vue({
		router,
		store,
		render: h => h(App)
	})

	return { app, router, store }
}