<template>
	<div class="posts">
		<div class="post">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
		<a href="#" @click.prevent="nextPost">Next post</a>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'post'
			])
		},
		methods:{
			...mapActions([
				'getPost'
			]),
			nextPost () {
				this.$router.push({ params: { id: parseInt(this.$route.params.id) + 1} })
			}
		},
		title () {
			return 'Post'
		},
		asyncData ({ store, route }) {
			return store.dispatch('getPost', route.params.id)
		}
	}
</script>
