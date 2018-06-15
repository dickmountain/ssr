export default {
	beforeMount () {
		const { asyncData } = this.$options

		if (asyncData) {
			asyncData({
				store: this.$store,
				route: this.$route
			})
		}
	}
}