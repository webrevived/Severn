<script lang="ts" context="module">
	export interface Block {
		title: string;
		items: { name: string; href: string }[];
	}
</script>

<!-- <script lang="ts">
	let name: string = undefined;

	name= 10
</script> -->
<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import ShopDropdownBlock from './ShopDropdown-Block.svelte';
	import ShopDropdownBottomBar from './ShopDropdown-BottomBar.svelte';
	import ShopDropdownHighlight from './ShopDropdown-Highlight.svelte';

	export let blocks: Block[] = [
		{
			title: 'shop candels',
			items: [
				{
					name: 'Shop all',
					href: '/category/candels'
				},
				{
					name: 'Best Selling',
					href: '/category/candels'
				},
				{
					name: 'Recommended',
					href: '/category/candels?sort_by=created'
				}
			]
		},
		{
			title: 'Shop self care',
			items: [
				{
					name: 'Shop all',
					href: '/category/self-care'
				},
				{
					name: 'Best Selling',
					href: '/category/self-care'
				},
				{
					name: 'Face Wash',
					href: '/category/self-care?subcategory=face-wash'
				},
				{
					name: 'Moisturizer',
					href: '/category/self-care?subcategory=moisturizer'
				}
			]
		},
		{
			title: 'Shop By Type',
			items: [
				{
					name: 'Self care',
					href: '/'
				},
				{
					name: 'Candels',
					href: '/'
				},
			]
		}
	];
</script>

<div class="dropdown-container">
	<div class="dropdown">
		<div class="blocks">
			{#each blocks as block}
				<ShopDropdownBlock {block} />
			{/each}
		</div>

		<div class="highlight">
			<ShopDropdownHighlight
				imgSrc="/images/Gallary/2.png"
				title="get inspired"
				desc="The Ultimate Guide: What to get a loved one"
				href="/"
				imAlt="Highlight"
			/>
			<ShopDropdownHighlight
				imgSrc="/images/Gallary/2.png"
				title="best sellers"
				desc="Our BestSellers, Perfect for sending your best wishes."
				href="/"
				imAlt="Highlight"
			/>
		</div>
	</div>

	<ShopDropdownBottomBar />
</div>

<style lang="scss">
	.dropdown-container {
		background-color: var(--color-white-300);
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		transform: translateY(100%);
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
		z-index: 50;
	}
	.dropdown {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--space-lg);
		width: 100%;
		padding: var(--space-sm) var(--space-sm);
	}

	.blocks {
		display: flex;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.highlight {
		position: relative;
		top: -1.5px;
		gap: var(--space-xs);
		display: flex;
		flex: 1 0 auto;
	}

	@media only screen and (min-width: 1440px) {
		.dropdown {
			gap: var(--space-6xl);
		}
	}
</style>
