<script lang="ts">
	import type { CategoryProps } from '$lib/api/categorys';
	import ItemCarosel from '$lib/global/ItemCarosel.svelte';
	import type { Product } from '@chec/commerce.js/types/product';

	interface Category {
		category: string;
		description: string;
		button: { text: string; href: string };
		products: Product[];
	}

	export let category: Category[];
</script>

<section class="w-full x-container flex flex-col pb-22">
	{#each category as category}
		<ItemCarosel
			button={category.button.text}
			href={category.button.href}
			category={category.category}
			description={category.description}
			items={category.products}
		/>
	{/each}
</section>
