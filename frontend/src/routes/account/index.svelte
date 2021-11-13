<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";

	// For now the index page for accounts, just redirects you to the orders
	// in the future we will do checks if you're logged in or not and redirect you accordingly
	export const load: Load = () => {
		return {
			status: 300,
			redirect: '/account/orders'
		}
	}
</script>