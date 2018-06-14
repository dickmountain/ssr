<template>
	<div>
		<div class="counter">
			{{ number }}
		</div>

		<a href="#" @click.prevent="increment">Increment</a>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'number'
			])
		},
		methods:{
			...mapMutations([
				'increment'
			])
		},
		title () {
			return 'Home'
		}
	}
</script>
