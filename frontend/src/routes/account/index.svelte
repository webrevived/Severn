<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";

	// For now the index page for accounts, just redirects you to the orders
	// in the future we will do checks if you're logged in or not and redirect you accordingly
	export const load: Load = ({ session }) => {

		console.log(session.user);
		
		if (session.user) {
			return {
				status: 300,
				redirect: '/account/orders'
			}
		} else {
			return {
				status: 300,
				redirect: '/login'
			}
		}
	}
</script>

<script lang="ts">
	import { invalidate } from "$app/navigation"
	invalidate("/account/")
</script>