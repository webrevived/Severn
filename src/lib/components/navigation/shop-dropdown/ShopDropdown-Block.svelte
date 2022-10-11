<script lang="ts">
	import type { Block } from './Nav-ShopDropdown.svelte';

	export let block: Block;
</script>

<div class="block">
	<h4 class="block__title">{block.title}</h4>

	<div class="links">
		{#each block.items as item}
			<a class="links__link" href={item.href}>{item.name}</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.block {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		color: var(--color-black-600);

		&__title {
			text-transform: uppercase;
			font-family: var(--font-lato);
			font-size: 14px;
			line-height: 1em;
		}
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);

		&__link {
			text-transform: capitalize;
            font-weight: 400;
            font-family: var(--font-lato);
		}

		&__link:hover {
			font-style: italic;
		}
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (min-width: 1440px) {
		.links {
			&__link {
				font-size: 23px;
			}
		}
	}
</style>
