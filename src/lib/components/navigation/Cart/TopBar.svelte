<script lang="ts">
	import { navToggles } from '$lib/stores';
	import CloseIcon from '$lib/components/navigation/CloseIcon.svelte';
	const closeCart = () => ($navToggles.cart = false);
</script>

<div class="flex justify-between w-full h-20 bg-white-300 px-10">
	<h1 class="heading-2 text-black-600 font-medium self-center">Cart</h1>
	<button class="h-min self-center" on:click={closeCart}>
		<CloseIcon --w="25px" --h="25px" />
	</button>
</div>
