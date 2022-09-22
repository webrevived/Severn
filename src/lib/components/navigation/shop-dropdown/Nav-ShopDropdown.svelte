<script lang="ts" context="module">
	export interface Block {
		title: string;
		items: { name: string; href: string }[];
	}
</script>

<script lang="ts">
	import ShopDropdownBlock from './ShopDropdown-Block.svelte';
	import ShopDropdownBottomBar from './ShopDropdown-BottomBar.svelte';
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
					name: 'Thank you',
					href: '/'
				},
				{
					name: 'Everyday',
					href: '/'
				},
				{
					name: 'Baby',
					href: '/'
				},
				{
					name: 'Religious',
					href: '/'
				},
				{
					name: 'National Parks',
					href: '/'
				},
				{
					name: 'Blank Card',
					href: '/'
				},
				{
					name: 'Sale',
					href: '/'
				}
			]
		},
		{
			title: 'Shop by scent',
			items: [
				{
					name: 'Birthday',
					href: '/'
				},
				{
					name: 'Congratulations',
					href: '/'
				},
				{
					name: 'Wedding',
					href: '/'
				},
				{
					name: 'Love & Friendship',
					href: '/'
				},
				{
					name: 'Sympathy & Encourgement',
					href: '/'
				}
			]
		},
		{
			title: 'Holiday cards',
			items: [
				{
					name: 'Independence Day',
					href: '/'
				},
				{
					name: 'Chrismas',
					href: '/'
				},
				{
					name: 'Easter',
					href: '/'
				}
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
</style>
