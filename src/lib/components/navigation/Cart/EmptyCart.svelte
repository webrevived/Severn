<script lang="ts">
	import Button from '$lib/global/Button.svelte';
</script>

<div class="grid place-content-center">
	<div class="flex flex-col items-center text-center gap-5">
		<img src="/images/EmptyCart.png" alt="" />
		<h1 class="heading-3 text-black-600 mt-5">Oppss! Your shopping list is empty</h1>
		<p class="text-1 text-brown-1200 mb-5">
			Search for our products and start adding them to your list
		</p>
		<Button href="/shop">Shop all products</Button>
	</div>
</div>
