<script lang="ts" context="module">
	export interface Block {
		title: string;
		items: { name: string; href: string }[];
	}
</script>

<script lang="ts">
	import ShopDropdownBlock from './ShopDropdown-Block.svelte';
	import ShopDropdownHighlight from './ShopDropdown-Highlight.svelte';

	export let blocks: Block[] = [
		{
			title: 'shop by type',
			items: [
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop All',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				}
			]
		},
		{
			title: 'Shop by scent',
			items: [
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop All',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				}
			]
		},
		{
			title: 'Holiday cards',
			items: [
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop All',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				},
				{
					name: 'Shop all',
					href: '/'
				}
			]
		}
	];
</script>

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

<style lang="scss">
	.dropdown {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: var(--space-md);
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY(100%);
		background-color: var(--color-white-300);
		width: 100%;
		padding: var(--space-xs);
	}

	.blocks {
		display: flex;
		justify-content: space-between;
		flex-basis: 100%;
		gap: var(--space-md);
	}
	
	.highlight {
		flex-basis: 50%;
		gap: var(--space-2xs);
		display: flex;
		flex: 1 0 auto;
	}
</style>
