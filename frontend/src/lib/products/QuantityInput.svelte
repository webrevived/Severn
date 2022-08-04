<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let quantity: number = 1;

	const dispatch = createEventDispatcher();
	
	const handleQuanityIncrease = () => {
		quantity++;
		dispatch('quantityInc')
	}
	
	const handleQuanityDecrease = () => {
		quantity--;
		dispatch('quantityDec')
	}
	
</script>

<div class="w-max flex gap-6 h-min" p="x-3 y-2.5" border="1px rounded-30px">
	<button on:click={handleQuanityIncrease}>
		<img src="/images/IncreaseIcon.svg" alt="" />
	</button>
	<p class="text-2">{quantity}</p>
	<button on:click={handleQuanityDecrease}>
		<img src="/images/DecreaseIcon.svg" alt="" />
	</button>
</div>

<style>
	button img {
		min-width: 10px;
	}
</style>
