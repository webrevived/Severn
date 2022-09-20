<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Dropdown from '$lib/global/Navigation/Dropdown.svelte';
	import ShopSeperator from '$lib/global/Navigation/ShopSeperator.svelte';
	import { navToggles } from '$lib/stores';
	import { categoriesStore } from '$lib/stores/collection.store';

	afterNavigate(() => {
		$navToggles.shop = false;
	});

</script>

<Dropdown show={navToggles} key="shop" hoverMode on:mouseenter on:mouseleave >
	<div class="x-container w-full">
		<div class="max-w-208 mt-32 flex gap-2.5 text-brown-1200 items-center">
			{#if $categoriesStore.status === 'sucess'}
				{#each $categoriesStore.data as item, index}
					{#if index != 0}
						<ShopSeperator />
					{/if}
					<a class="heading-2 font-semibold" href="/category/{item.slug}">{item.name}</a>
				{/each}
			{/if}
		</div>
	</div>
</Dropdown>
