<script lang="ts">
	import dataAccess from '$lib/data-access';
	import FocusItemCard from '$lib/global/FocusItemCard.svelte';
	import { useQuery } from '@sveltestack/svelte-query';

	const bestSellers = useQuery('best-seller', async () => {
		return (await dataAccess.products.getAllProducts({ limit: 4, sortBy: 'sort_order' })).data;
	});
</script>

<section class="container section">
	<h1 class="heading-1">Shop our best sellers</h1>

	<div class="grid">
		<div class="grid__products">
			{#if $bestSellers.isSuccess}
				{#each $bestSellers.data as product, i}
					<FocusItemCard
						imgSrc="images/products/mock_product_image-0{i + 1}.png"
						category="Candel"
						price={20}
						href="/products/{product.permalink}"
						title="White Gardina"
					/>
				{/each}
			{/if}
		</div>

		<div class="grid__highlight">
			<img src="/images/Why_Thumbnail_1.png" alt="" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		&__products {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(2, 1fr);
			gap: 1rem;
		}

		&__highlight {
			height: 100%;
			overflow: hidden;

			img {
				display: block;
				object-fit: cover;
				height: 100%;
				@include imageZoom;
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
			&__highlight {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 425px) {
		h1 {
			font-size: 30px;
		}
	}
</style>
