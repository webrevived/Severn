<script lang="ts">
	import Features from '$lib/products/Features.svelte';

	interface Feature {
		icon: string;
		name: string;
	}

	export let footnote: string = 'The eco-friendly way to give the best wishes to your loved ones.';
	export let features: Feature[] = [
		{
			name: 'High-quality materials',
			icon: ''
		},
		{
			name: '100% sustainable',
			icon: ''
		},
		{
			name: 'made locally in usa',
			icon: ''
		},
		{
			name: 'fast shipping',
			icon: ''
		}
	];
</script>

<footer class="bar">
	<span class="bar__footnote">{footnote}</span>

	<div class="features">
		{#each features as feature}
			<span class="features__feature">{feature.name}</span>
		{/each}
	</div>
</footer>

<style lang="scss">
	.bar {
		display: flex;
		color: var(--color-black-600);
		justify-content: space-between;
		font-size: var(--text-sm);
		align-items: center;
		background-color: #fcf8f3;
		padding: var(--space-xs) var(--space-2xs);
        
		&__footnote {
            font-size: var(--text-sm);
		}
	}

	.features {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		text-transform: uppercase;

        &__feature {
            font-size: 11px;
        }
}
</style>
