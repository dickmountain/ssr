<template>
	<div class="number">
		{{ number }}

		<a href="#" @click.prevent="increment">Increment</a>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				number: 1
			}
		},
		methods: {
			increment () {
				this.number++
			}
		},
		title () {
			return 'Counter'
		}
	}
</script>

<style scoped>

</style>