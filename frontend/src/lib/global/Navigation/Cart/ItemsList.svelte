<script lang="ts">
	import Item from '$lib/global/Navigation/Cart/Item.svelte';
	import type { LineItem } from '@chec/commerce.js/types/line-item';
	import { flip } from 'svelte/animate';

	export let items: LineItem[];
</script>

<div class="item-wrap flex flex-col w-full px-10 pt-10 gap-y-7.5">
	{#each items as item (item.id)}
		<div animate:flip={{ duration: 200 }}>
			<Item on:cartAction {item} />
		</div>
	{/each}
</div>

<style>
	@media only screen and (max-width: 425px) {
		.item-wrap {
			padding: 1em;
		}
	}
</style>
