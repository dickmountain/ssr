<template>
	<div class="posts">
		<template v-if="posts.length">
			<div class="post" v-for="post in posts">
				<h3>{{ post.title }}</h3>
				<p>{{ post.body }}</p>
			</div>
		</template>
		<p v-else>Sorry, no posts</p>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'posts'
			])
		},
		methods:{
			...mapActions([
				'getPosts'
			])
		},
		title () {
			return 'Home'
		},
		asyncData ({ store, route }) {
			return store.dispatch('getPosts')
		}
	}
</script>
